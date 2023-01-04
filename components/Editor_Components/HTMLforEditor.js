import React from "react"
import { ListOfElements } from "./ListOfElements"

export default function Html(data, name) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, user-scalable=no" />
    <title>Just Put</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Cuprum:wght@700&display=swap"
      rel="stylesheet"
    />
    <style>
      * {
        margin: 0%;
        padding: 0%;
        font-family: "Cuprum", sans-serif;
        box-sizing: border-box;
        user-select: none;
      }

      body {
        height: 100%;
        width: 100%;
      }

      /* ===============================================   Editor */
      #listEditor {
				margin-top: 5px;
        max-width: 100%;
        padding-bottom: 70px;
      }

      .ElementsInEditor {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 40px;
        padding: 10px 10px 13px 5px;
				max-width: 100vw;
				white-space: nowrap;
				overflow: hidden;
      }

      .EditParameterBtn {
        height: 25px;
        min-width: 24px;
				width: 25px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

			.sortable-fallback{/* where to put */
				background-color: #5c5c5cc7;
				border-radius: 8px;
			}

      .innerOfElement {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 3px;
				max-width: 89%;
      }

      .my-handle {
        width: 30px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .my-handle > span {
        margin: auto;
        position: relative;
        height: 8px;
        width: 8px;
        border-radius: 100%;
        background-color: black;
        display: inline-block;
      }

      .my-handle > span::before,
      .my-handle > span::after {
        content: "";
        position: absolute;
        height: 100%;
        width: 100%;
        border-radius: 100%;
        background-color: black;
        display: inline-block;
      }

      .my-handle > span::before {
        top: -10px;
      }

      .my-handle > span::after {
        bottom: -10px;
      }

      .btn-in-element {
        transform-origin: left;
        transform: scaleX(0);
        transition: all 0.2s;
      }

      .btn-in-element.active {
        transform: scaleX(1);
      }

      .btn-delete {
        width: 25px;
        height: 25px;
        background-color: red;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
      }

      .mainLi .btn-delete {
        display: none;
      }

      .mainLi.LiAfterTap .btn-delete {
        display: flex;
      }

      .icon-delete-editor {
        max-width: 87%;
        max-height: 87%;
      }

      .elementText {
        position: relative;
        left: -25px;
        transition: all 0.2s;
				white-space: nowrap;
				overflow: hidden;
      }

      .btn-in-element.active ~ .elementText {
        left: 0;
      }

      .icon-fab > svg {
        height: 100%;
      }

      /* ====== Fab */

      .fab-container {
        position: fixed;
        bottom: 10px;
        right: 10px;
      }

      .iconbutton {
        border-radius: 100%;
        background: #3db05a;
        box-shadow: 3px 3px 4px #888;
      }

      .iconbutton span {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        color: white;
        font-size: 24px;
        transition: all 0.4s;
      }

      .iconbutton:active {
        filter: brightness(1.1);
      }

      #main-btn-label {
        width: 56px;
        height: 56px;
        z-index: 1;
        position: relative;
      }

      #main-btn-label > span {
        transition: transform 0.4s;
      }

      #main-btn-label.active > span {
        transform: rotate(45deg);
      }

      .options {
        display: flex;
        flex-direction: column;
        gap: 6px;
        list-style-type: none;
        position: absolute;
        bottom: 30px;
        right: 10px;
        opacity: 0;
        transition: all 0.3s;
        width: fit-content;
        align-items: flex-end;
        z-index: -10;
        pointer-events: none;
      }

      .options li {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 5px;
        width: max-content;
      }

			.options li>span{
				background-color: white;
				border-radius: 6px;
				padding: 2px;
			}

      .options .iconbutton {
        width: 36px;
        height: 36px;
        box-shadow: 1px 1px 3px #888;
      }

      .options .iconbutton span {
        font-size: 17px;
      }

      #btn-label1 .iconbutton {
        background-color: #96b38e;
      }

      #btn-label2 .iconbutton {
        background-color: #f59073;
      }

      #btn-label3 .iconbutton {
        background-color: #913e5f;
      }

      #btn-label4 .iconbutton {
        background-color: #eb4464;
      }

      #btn-label5 .iconbutton {
        background-color: #3db05a;
      }

      #main-btn-label.active ~ .options {
        bottom: 65px;
        opacity: 1;
        z-index: 10;
        pointer-events: auto;
      }

      .no-scroll {
				overflow: hidden;
      }

      .icon-fab {
        padding: 8px;
      }

      /*  ===============================================  Add Block Edit Params*/
      #editparams,
      #addblocks {
        z-index: 100;
        position: fixed;
        background-color: white;
        top: 100%;
        width: 100vw;
        transition: all 0.4s;
        height: 100vh;
      }

      #editparams.active,
      #addblocks.active {
        top: 0;
      }

      #listAddBlock {
        padding: 5px 15px;
      }

      #listAddBlock > li {
        font-size: 20px;
				height: 40px;
      }

      #btns {
        padding: 0 10px;
        display: flex;
        gap: 5px;
        width: 100vw;
        height: 60vh;
      }

      .mainBtn {
        padding: 5px 0;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        justify-items: center;
        gap: 5px;
        height: fit-content;
        height: 60vh;
      }

      .mainBtn > button {
        min-width: 50px;
        height: 100%;
        max-width: 100%;
        padding: 4px 7px;
        font-size: 16px;
        border-radius: 17px;
        border: none;
        background-color: #191919;
        color: white;
        text-align: center;
        overflow: hidden;
        aspect-ratio: 1 / 1;
        transition: all 0.3s;
      }

      .mainBtn > button:active {
        background-color: #888;
      }

      #result {
        overflow-y: scroll;
        width: 100%;
        height: 28vh;
        overflow-wrap: break-word;
        background-color: #191919;
        padding: 15px 10px;
        color: white;
        font-size: 18px;
      }

      #where {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      #inner-where {
        height: fit-content;
        padding: 15px;
        display: flex;
        justify-content: flex-start;
        gap: 5px;
        align-items: center;
				width: calc(100% - 50px);
				white-space: nowrap;
				overflow-x: scroll;
      }

      #where-addblock {
        height: fit-content;
        padding: 15px;
        display: flex;
        justify-content: flex-start;
        gap: 5px;
        align-items: center;
				width: 100%;
      }

      #where button,
      #where-addblock > button {
        padding: 3px;
        border: none;
        outline: none;
        border-radius: 5px;
        max-width: 60px;
        min-width: 27px;
        background-color: #e3e3e3;
        overflow-x: scroll;
        scroll-behavior: smooth;
        white-space: pre;
        height: fit-content;
      }

      #where-addblock > span {
        font-size: 20px;
      }

      #where > button,
      #where-addblock > button {
        position: absolute;
        right: 0;
        padding: 3px 20px;
        background-color: inherit;
        font-size: 30px;
        overflow: hidden;
      }

      .formuls {
        padding: 5px 0;
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 60%;
        gap: 5px;
        max-height: 69vh;
				overflow-x: hidden;
        overflow-y: scroll;
      }

      .mainLi {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        width: 100%;
        font-size: 16px;
        border-radius: 17px;
        border: none;
        background-color: #191919;
        color: white;
        height: 100%;
        list-style: none;
        text-align: center;
        padding: 7px 0 3px;
      }

      .LiAfterTap {
        height: fit-content;
      }

      .mainLi > ul {
        pointer-events: none;
        background-color: #e3e3e3;
        border-bottom-left-radius: 17px;
        border-bottom-right-radius: 17px;
        margin-top: 15px;
        padding: 0;
        transition: all 0.4s;
        width: 100%;
        opacity: 0;
        height: 0;
      }

      .mainLi.LiAfterTap > ul {
        pointer-events: auto;
        padding: 6px;
        opacity: 1;
        height: 100%;
        transition: all 0.4s;
      }

      .mainLi > ul > li {
        font-size: 0px;
      }

      .mainLi.LiAfterTap > ul > li {
        min-height: 17px;
        margin-bottom: 4px;
        width: 100%;
        list-style: none;
        color: black;
        font-size: 15px;
        text-align: center;
      }

      .mainLi > #dataList > li,
      .mainLi > #functList > li {
        display: block;
      }

      .mainLi.LiAfterTap > #dataList > li,
      .mainLi.LiAfterTap > #functList > li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 4px;
      }

      .nameOfvarieble {
        padding-left: 4px;
        text-align: start;
        width: 100%;
      }

      @media (max-width: 500px) {
        .mainBtn {
          height: fit-content;
        }

        .mainBtn > button {
          height: auto;
          width: 100%;
        }
      }

      @media (min-width: 850px) {
        .mainBtn {
          width: 70%;
        }
      }
    </style>
  </head>

  <body>
    <!-- ASSETS -->

    <svg display="none">
      <symbol viewBox="0 0 266 338" id="icon-copy">
        <path
          class="ct0"
          d="M229.1,75H189V35.7c0-10.9-8.8-19.7-19.7-19.7H35.7C24.8,16,16,24.8,16,35.7v212.5c0,10.9,8.8,19.7,19.7,19.7
		h40.1v34.8c0,10.9,8.8,19.7,19.7,19.7h133.5c10.9,0,19.7-8.8,19.7-19.7V94.7C248.9,83.8,240,75,229.1,75z"
        />
        <path
          class="ct0"
          d="M229.1,322.5H95.6c-10.9,0-19.7-8.8-19.7-19.7V94.7c0-10.9,8.8-19.7,19.7-19.7h133.5
		c10.9,0,19.7,8.8,19.7,19.7v208.1C248.9,313.7,240,322.5,229.1,322.5z"
        />
      </symbol>
      <symbol viewBox="0 0 197 245" id="icon-paste">
        <style type="text/css">
          .ct0 {
            fill: none;
            stroke: #ffffff;
            stroke-width: 21;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          }

          .ct1 {
            fill: white;
          }
        </style>
        <path
          class="ct0"
          d="M151.6,33.7h-18.1v-2.2c0-10.8-8.7-19.5-19.5-19.5H81.7C71,12,62.3,20.7,62.3,31.4v2.2H45.9
				C27.8,33.7,13,48.4,13,66.5v133.2c0,18.2,14.7,32.9,32.9,32.9h105.7c18.2,0,32.9-14.7,32.9-32.9V66.5
				C184.5,48.4,169.8,33.7,151.6,33.7z"
        />
        <path
          class="ct0"
          d="M114.1,55.3H81.7c-10.8,0-19.5-8.7-19.5-19.5v-4.4C62.3,20.7,71,12,81.7,12h32.3c10.8,0,19.5,8.7,19.5,19.5
				v4.4C133.5,46.6,124.8,55.3,114.1,55.3z"
        />
        <circle class="ct1" cx="54.5" cy="117.7" r="14.1" />
        <path
          class="ct1"
          d="M152.4,131.8h-60c-6.8,0-12.4-5.6-12.4-12.4v-3.3c0-6.8,5.6-12.4,12.4-12.4h60c6.8,0,12.4,5.6,12.4,12.4v3.3
				C164.8,126.2,159.3,131.8,152.4,131.8z"
        />
        <circle class="ct1" cx="54.5" cy="168.7" r="14.1" />
        <path
          class="ct1"
          d="M152.4,182.8h-60c-6.8,0-12.4-5.6-12.4-12.4v-3.3c0-6.8,5.6-12.4,12.4-12.4h60c6.8,0,12.4,5.6,12.4,12.4v3.3
				C164.8,177.2,159.3,182.8,152.4,182.8z"
        />
      </symbol>
      <symbol viewBox="0 0 595 756" id="icon-delete">
        <style type="text/css">
          .dt0 {
            fill: none;
            stroke: #ffffff;
            stroke-width: 46;
            stroke-miterlimit: 10;
          }

          .dt1 {
            fill: none;
            stroke: #ffffff;
            stroke-width: 46;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          }
        </style>
        <path
          class="dt0"
          d="M521.7,119.5H74.2c-28.5,0-51.6,24.6-51.6,54.9v0c0,30.3,23.1,54.9,51.6,54.9h6.6c3.1,0,5.6,2.7,5.6,5.9v436.5
				c0,32.8,25,59.3,55.7,59.3h311.8c30.8,0,55.7-26.6,55.7-59.3V235.3c0-3.3,2.5-5.9,5.6-5.9h6.6c28.5,0,51.6-24.6,51.6-54.9v0
				C573.3,144.1,550.2,119.5,521.7,119.5z"
        />
        <path
          class="dt0"
          d="M530.2,229.4H65.7c-23.8,0-43.1-19.3-43.1-43.1v-23.7c0-23.8,19.3-43.1,43.1-43.1h464.5
				c23.8,0,43.1,19.3,43.1,43.1v23.7C573.3,210.1,554,229.4,530.2,229.4z"
        />
        <path
          class="dt0"
          d="M367.5,119.5H230.9c-8.7,0-15.8-7.1-15.8-15.8V40.5c0-8.7,7.1-15.8,15.8-15.8h136.6c8.7,0,15.8,7.1,15.8,15.8
				v63.2C383.3,112.4,376.2,119.5,367.5,119.5z"
        />
        <line class="dt1" x1="297.9" y1="358.1" x2="297.9" y2="642.8" />
        <line class="dt1" x1="402.7" y1="358.1" x2="402.7" y2="642.8" />
        <line class="dt1" x1="190.6" y1="358.1" x2="190.6" y2="642.8" />
      </symbol>
      <symbol viewBox="0 0 582 565" id="icon-edit">
        <style type="text/css">
          .et0 {
            fill: none;
            stroke: #000000;
            stroke-width: 60;
            stroke-linecap: round;
            stroke-miterlimit: 10;
          }

          .et1 {
            fill: none;
            stroke: #000000;
            stroke-width: 50;
            stroke-linecap: round;
            stroke-miterlimit: 10;
          }
        </style>
        <path
          class="et0"
          d="M300.7,36.8H147.1C86,36.8,36.4,86.5,36.4,147.6v269.7c0,61.5,49.9,111.4,111.4,111.4h269
							c61.5,0,111.4-49.9,111.4-111.4V306"
        />
        <path
          class="et1"
          d="M537.2,66.5l-22-22c-16.6-16.6-43.5-16.6-60.1,0L267.8,231.8c-4.6,4.6-7.9,10-10,15.7
							c-2.2,2.8-5.3,11.5-6.3,15.3l-12.8,47.9c-5.4,20.3,13.1,38.8,33.4,33.4l53.1-14.2c4.8-1.3,8.9-3.7,12.2-6.8c0.6-0.5,1.2-1,1.9-1.3
							c3.8-2,7.4-4.5,10.6-7.8l187.3-187.3C553.8,110,553.8,83.1,537.2,66.5z"
        />
      </symbol>
      <symbol viewBox="0 0 150 163" id="icon-start">
        <style type="text/css">
          .st0 {
            fill: #ffffff;
          }
        </style>
        <path
          class="st0"
          d="M34.857,3.613C20.084-4.861,8.107,2.081,8.107,19.106v125.637c0,17.042,11.977,23.975,26.75,15.509L144.67,97.275
				c14.778-8.477,14.778-22.211,0-30.686L34.857,3.613z"
        />
      </symbol>
      <symbol viewBox="0 0 587 592" id="icon-object">
        <path
          class="st0"
          d="M204.9,415.9h-83.8c-32.7,0-53.5-34.9-38-63.7l50.2-93.3c5.3-9.9-1.8-21.9-13.1-21.9H67.6c-31.6,0-57.4,25.8-57.4,57.4
	v210.9c0,31.6,25.8,57.4,57.4,57.4h209l15,0C243.2,530.3,210,477.1,204.9,415.9z"
        />
        <path
          class="st0"
          d="M204.2,399.5c0-108.3,87.8-196,196-196c7.6,0,15.1,0.4,22.5,1.3c1.6,0.2,2.7-1.5,1.9-2.9L328.8,23.6
	c-11.4-21.3-42-21.3-53.4,0L96.2,356.8c-10.9,20.2,3.8,44.7,26.7,44.7h79.4C203.3,401.5,204.2,400.6,204.2,399.5L204.2,399.5z"
        />
        <circle class="st0" cx="400.2" cy="399.5" r="182.2" />
      </symbol>
      <symbol viewBox="0 0 564 718" id="icon-properties">
        <style type="text/css">
          .prt1 {
            fill: #ffffff;
          }
        </style>
        <path
          class="prt1"
          d="M544.9,575.8L374.4,280.5c-2.5-4.3-3.8-9.2-3.8-14.2V160.8c0-1.2-1-2.1-2.1-2.1H197.9c-1.2,0-2.1,1-2.1,2.1
			v102.3c0,5-1.3,9.9-3.8,14.2L19.6,575.8C-14,633.9,28,706.6,95.1,706.6h374.4C536.5,706.6,578.5,633.9,544.9,575.8z M136,458.4
			l97.9-170c2.5-4.3,3.8-9.2,3.8-14.1V213h90.2l0,63.2c0,4.8,1.2,9.5,3.5,13.7l92.8,168.5H136z"
        />
        <path
          class="prt1"
          d="M406.5,213h-251c-9.4,0-17-7.6-17-17v-32.1c0-9.4,7.6-17,17-17h251c9.4,0,17,7.6,17,17V196
			C423.5,205.4,415.9,213,406.5,213z"
        />
        <circle class="prt1" cx="322.1" cy="81.8" r="36.8" />
        <circle class="prt1" cx="408.2" cy="31" r="25.5" />
      </symbol>
      <symbol viewBox="0 0 525 554" id="icon-control">
        <style type="text/css">
          .crt0 {
            fill: none;
            stroke: #ffffff;
            stroke-width: 28;
            stroke-miterlimit: 10;
          }

          .crt1 {
            fill: none;
            stroke: #ffffff;
            stroke-width: 28;
            stroke-linecap: round;
            stroke-miterlimit: 10;
          }

          .crt2 {
            fill: none;
            stroke: #ffffff;
            stroke-width: 45;
            stroke-linecap: round;
            stroke-miterlimit: 10;
          }

          .crt3 {
            fill: none;
            stroke: #ffffff;
            stroke-width: 38;
            stroke-linecap: round;
            stroke-miterlimit: 10;
          }
        </style>
        <path
          class="crt0"
          d="M281.6,261l57,31l-57,31c-13.1,7.1-28.9,6.9-41.8-0.7L187.9,292l51.9-30.4C252.7,254.1,268.5,253.9,281.6,261z
		"
        />
        <path class="crt1" d="M328.2,289.8h99.7c4.7,0,8.5,3.8,8.5,8.5v39.4" />
        <path class="crt1" d="M198.6,290.8H98.5c-4.7,0-8.5,3.8-8.5,8.5v39.4" />
        <line class="crt1" x1="263.3" y1="252.3" x2="263.3" y2="159.6" />
        <path class="crt1" d="M743.1,332" />
        <circle class="prt1" cx="263.3" cy="68.5" r="59.1" />
        <line class="crt2" x1="33.3" y1="403.2" x2="146.7" y2="525.2" />
        <line class="crt2" x1="146.7" y1="403.2" x2="33.3" y2="525.2" />
        <line class="crt3" x1="436.5" y1="525.5" x2="499.6" y2="402.9" />
        <line class="crt3" x1="436.5" y1="525.5" x2="373.2" y2="459.8" />
      </symbol>
      <svg viewBox="0 0 512 512" id="icon-data">
        <style>
          .dat0 {
            fill: #ffffff;
          }
        </style>
        <path
          class="dat0"
          d="M460.8,102.4C460.8,46.9,367.02,0,256,0C144.95,0,51.2,46.9,51.2,102.4v51.2C51.2,209.1,144.95,256,256,256
				c111.02,0,204.8-46.9,204.8-102.4V102.4z M256,435.2c-111.05,0-204.8-46.9-204.8-102.4v76.8C51.2,465.1,144.95,512,256,512
				c111.02,0,204.8-46.9,204.8-102.4v-76.8C460.8,388.3,367.02,435.2,256,435.2z"
        />
        <path
          class="dat0"
          d="M460.8,204.8c0,55.5-93.77,102.4-204.8,102.4c-111.05,0-204.8-46.9-204.8-102.4v76.8C51.2,337.1,144.95,384,256,384
				c111.02,0,204.8-46.9,204.8-102.4V204.8z"
        />
      </svg>
    </svg>

    <ul id="listEditor">
      <!-- content -->
    </ul>

    <div class="fab-container">
      <div class="iconbutton" id="main-btn-label">
        <span>+</span>
      </div>
      <ul class="options">
        <li class="btn-label" id="btn-label1" data-mycolor="#96b38e">
          <span>Propertie</span>
          <div class="iconbutton">
            <span class="icon-fab">
              <svg>
                <use xlink:href="#icon-properties"></use>
              </svg>
            </span>
          </div>
        </li>
        <li class="btn-label" id="btn-label2" data-mycolor="#f59073">
          <span>Control</span>
          <div class="iconbutton">
            <span class="icon-fab">
              <svg>
                <use xlink:href="#icon-control"></use>
              </svg>
            </span>
          </div>
        </li>
        <li class="btn-label" id="btn-label3" data-mycolor="#913e5f">
          <span>Object</span>
          <div class="iconbutton">
            <span class="icon-fab">
              <svg>
                <use xlink:href="#icon-object"></use>
              </svg>
            </span>
          </div>
        </li>
        <li class="btn-label" id="btn-label4" data-mycolor="#eb4464">
          <span>Data</span>
          <div class="iconbutton">
            <span class="icon-fab">
              <svg>
                <use xlink:href="#icon-data"></use>
              </svg>
            </span>
          </div>
        </li>
        <li class="btn-label" id="btn-label5" onclick="codeCreator();">
          <span>Start</span>
          <div class="iconbutton">
            <span class="icon-fab">
              <svg style="max-height: 100%">
                <use xlink:href="#icon-start"></use>
              </svg>
            </span>
          </div>
        </li>
      </ul>
    </div>

    <!-- ADD BLOCK -->
    <div id="addblocks">
      <div id="where-addblock">
        <span>Add block </span
        ><button onclick="closeAddBlockParams();">x</button>
      </div>
      <ul id="listAddBlock">
        <!-- content -->
      </ul>
    </div>

    <!-- EDIT PARAMS -->
    <div id="editparams">
      <div id="where">
        <div id="inner-where"></div>
        <button onclick="closeEditParams();">x</button>
      </div>
      <div id="result"></div>
      <div id="btns">
        <div class="mainBtn">
          <button onclick="tapofbtn('@0Code**');">Code</button>
          <button onclick="tapofbtn('(');">(</button>
          <button onclick="tapofbtn(')');">)</button>
          <button onclick="tapofbtn('@0delete**');">⌫</button>
          <button onclick="tapofbtn('1');">1</button>
          <button onclick="tapofbtn('2');">2</button>
          <button onclick="tapofbtn('3');">3</button>
          <button onclick="tapofbtn('+');">+</button>
          <button onclick="tapofbtn('4');">4</button>
          <button onclick="tapofbtn('5');">5</button>
          <button onclick="tapofbtn('6');">6</button>
          <button onclick="tapofbtn('-');">-</button>
          <button onclick="tapofbtn('7');">7</button>
          <button onclick="tapofbtn('8');">8</button>
          <button onclick="tapofbtn('9');">9</button>
          <button onclick="tapofbtn('*');">*</button>
          <button onclick="tapofbtn('.');">.</button>
          <button onclick="tapofbtn('0');">0</button>
          <button onclick="tapofbtn(',');">,</button>
          <button onclick="tapofbtn('/');">/</button>
          <button onclick="tapofbtn('@0Text**');">Text</button>
          <button onclick="tapofbtn('@0left**');"><-</button>
          <button onclick="tapofbtn('@0right**');">-></button>
          <button onclick="tapofbtn('@0Ok**');">Ok</button>
        </div>
        <ul class="formuls" id="tree">
          <li class="mainLi">
            Data
            <ul id="dataList">
              <li style="color: #777" onclick="createVarieble(true)">
                +Create
              </li>
            </ul>
          </li>
          <li class="mainLi">
            Math
            <ul>
              <li onclick="tapOfFunctionBtn(2, 'Math.pow', '(', ',', ')');">
                pow
              </li>
              <li onclick="tapOfFunctionBtn(0,'Math.random()');">random</li>
              <li onclick="tapOfFunctionBtn(1,'Math.sqrt', '(', ')');">sqrt</li>
              <li onclick="tapOfFunctionBtn(1, 'Math.sin', '(', ')');">sin</li>
              <li onclick="tapOfFunctionBtn(1, 'Math.cos', '(', ')');">cos</li>
              <li onclick="tapOfFunctionBtn(1, 'Math.tan', '(', ')');">tan</li>
              <li onclick="tapOfFunctionBtn(1, 'Math.asin', '(', ')');">
                asin
              </li>
              <li onclick="tapOfFunctionBtn(1, 'Math.acos', '(', ')');">
                acos
              </li>
              <li onclick="tapOfFunctionBtn(1, 'Math.atan', '(', ')');">
                atan
              </li>
              <li onclick="tapOfFunctionBtn(2, 'Math.atan2', '(', ',' ,')');">
                atan2
              </li>
              <li onclick="tapOfFunctionBtn(1, 'Math.max', '(', ')');">max</li>
              <li onclick="tapOfFunctionBtn(1, 'Math.min', '(', ')');">min</li>
              <li onclick="tapOfFunctionBtn(1, 'Math.abs', '(', ')');">abs</li>
              <li onclick="tapOfFunctionBtn(1, 'Math.sign', '(', ')');">
                sign
              </li>
              <li onclick="tapOfFunctionBtn(1, 'Math.ceil', '(', ')');">
                ceil
              </li>
              <li onclick="tapOfFunctionBtn(1, 'Math.floor', '(', ')');">
                floor
              </li>
              <li onclick="tapOfFunctionBtn(1, 'Math.round', '(', ')');">
                round
              </li>
              <li onclick="tapOfFunctionBtn(1, 'Math.trunc', '(', ')');">
                trunc
              </li>
              <li onclick="tapOfFunctionBtn(1, 'Math.log', '(', ')');">
                log
              </li>
              <li onclick="tapOfFunctionBtn(1, 'Math.log10', '(', ')');">
                log10
              </li>
              <li onclick="tapOfFunctionBtn(0, 'Math.PI');">PI</li>
            </ul>
          </li>
          <li style="font-size: 14px" class="mainLi">
            Properties
            <ul>
							<li onclick="tapofbtn('.x');">x</li>
							<li onclick="tapofbtn('.y');">y</li>
							<li onclick="tapofbtn('.width');">width</li>
							<li onclick="tapofbtn('.height');">height</li>
							<li onclick="tapofbtn('.color');">color</li>
							<li onclick="tapofbtn('.radius');">radius</li>
							<li onclick="tapofbtn('.startAngle');">startAngle</li>
							<li onclick="tapofbtn('.endAngle');">endAngle</li>
            </ul>
          </li>
          <li class="mainLi">
            Logic
            <ul>
              <li onclick="tapofbtn('=');">SET</li>
              <li onclick="tapofbtn('==');">==</li>
              <li onclick="tapofbtn('!==');">!==</li>
              <li onclick="tapofbtn('===');">===</li>
              <li onclick="tapofbtn('>');">></li>
              <li onclick="tapofbtn('<');"><</li>
              <li onclick="tapofbtn('>=');">>=</li>
              <li onclick="tapofbtn('<=');"><=</li>
              <li onclick="tapofbtn('&&');">and</li>
              <li onclick="tapofbtn('||');">or</li>
              <li onclick="tapofbtn('!');">no</li>
              <li onclick="tapofbtn('true');">true</li>
              <li onclick="tapofbtn('false');">false</li>
            </ul>
          </li>
          <li class="mainLi">Function
						<ul>
							<li onclick="tapOfFunctionBtn(1,'prompt(',')');">prompt</li>
							<li onclick="tapOfFunctionBtn(1,'confirm(',')');">confirm</li>
							<li onclick="tapOfFunctionBtn(2,'joinStrings(',',',')');">joinStrings</li>
							<li onclick="tapOfFunctionBtn(1,'degToRadian(',')');">degToRadian</li>
							<li onclick="tapOfFunctionBtn(2,'randomInteger(',',',')');">randomInteger</li>
							<li onclick="tapOfFunctionBtn(2,'colisionBetween(',',',')');">colisionBetween</li>
							<li onclick="tapOfFunctionBtn(2,'distanceBetween(',',',')');">distanceBetween</li>
						</ul>
					</li>
          <li class="mainLi">
            My func
            <ul id="functList">
              <li style="color: #777" onclick="createVarieble(false)">
                +Create
              </li>
            </ul>
          </li>
          <li class="mainLi">
            ...
            <ul>
              <li onclick="tapOfFunctionBtn(1,'\${','}');">CodeInHTML</li>
              <li onclick="tapOfFunctionBtn(1,' ? ',' : ');">ternary</li>
              <li onclick="tapOfFunctionBtn(0, '%');">module</li>
              <li onclick="tapofbtn('[');">[</li>
              <li onclick="tapofbtn(']');">]</li>
              <li onclick="tapofbtn('{');">{</li>
              <li onclick="tapofbtn('}');">}</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>

    <script>
      /* ====== Data */
			const objectColor = "#913e5f"
			const controlColor = "#f59073"
			const propertiesColor = "#96b38e"
			const dataColor = "#eb4464"
      const ListOfElements = ${JSON.stringify(ListOfElements)}
      let listOfData = []
      let listOfFunct = []
			let listOfTaps = []
    </script>









    <script>
      /**!
       * Sortable 1.15.0
       * @author	RubaXa   <trash@rubaxa.org>
       * @author	owenm    <owen23355@gmail.com>
       * @license MIT
       */
      /*! Sortable 1.15.0 - MIT | git://github.com/SortableJS/Sortable.git */
      !(function (t, e) {
        "object" == typeof exports && "undefined" != typeof module
          ? (module.exports = e())
          : "function" == typeof define && define.amd
          ? define(e)
          : ((t = t || self).Sortable = e())
      })(this, function () {
        "use strict"
        function e(e, t) {
          var n,
            o = Object.keys(e)
          return (
            Object.getOwnPropertySymbols &&
              ((n = Object.getOwnPropertySymbols(e)),
              t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
              o.push.apply(o, n)),
            o
          )
        }
        function M(o) {
          for (var t = 1; t < arguments.length; t++) {
            var i = null != arguments[t] ? arguments[t] : {}
            t % 2
              ? e(Object(i), !0).forEach(function (t) {
                  var e, n
                  ;(e = o),
                    (t = i[(n = t)]),
                    n in e
                      ? Object.defineProperty(e, n, {
                          value: t,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0
                        })
                      : (e[n] = t)
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(i))
              : e(Object(i)).forEach(function (t) {
                  Object.defineProperty(
                    o,
                    t,
                    Object.getOwnPropertyDescriptor(i, t)
                  )
                })
          }
          return o
        }
        function o(t) {
          return (o =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t
                })(t)
        }
        function a() {
          return (a =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n,
                  o = arguments[e]
                for (n in o)
                  Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n])
              }
              return t
            }).apply(this, arguments)
        }
        function i(t, e) {
          if (null == t) return {}
          var n,
            o = (function (t, e) {
              if (null == t) return {}
              for (var n, o = {}, i = Object.keys(t), r = 0; r < i.length; r++)
                (n = i[r]), 0 <= e.indexOf(n) || (o[n] = t[n])
              return o
            })(t, e)
          if (Object.getOwnPropertySymbols)
            for (
              var i = Object.getOwnPropertySymbols(t), r = 0;
              r < i.length;
              r++
            )
              (n = i[r]),
                0 <= e.indexOf(n) ||
                  (Object.prototype.propertyIsEnumerable.call(t, n) &&
                    (o[n] = t[n]))
          return o
        }
        function r(t) {
          return (
            (function (t) {
              if (Array.isArray(t)) return l(t)
            })(t) ||
            (function (t) {
              if (
                ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
                null != t["@@iterator"]
              )
                return Array.from(t)
            })(t) ||
            (function (t, e) {
              if (t) {
                if ("string" == typeof t) return l(t, e)
                var n = Object.prototype.toString.call(t).slice(8, -1)
                return "Map" ===
                  (n =
                    "Object" === n && t.constructor ? t.constructor.name : n) ||
                  "Set" === n
                  ? Array.from(t)
                  : "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? l(t, e)
                  : void 0
              }
            })(t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.In order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              )
            })()
          )
        }
        function l(t, e) {
          ;(null == e || e > t.length) && (e = t.length)
          for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n]
          return o
        }
        function t(t) {
          if ("undefined" != typeof window && window.navigator)
            return !!navigator.userAgent.match(t)
        }
        var y = t(/(?:Trident.*rv[ :]?11\\.|msie|iemobile|Windows Phone)/i),
          w = t(/Edge/i),
          s = t(/firefox/i),
          u = t(/safari/i) && !t(/chrome/i) && !t(/android/i),
          n = t(/iP(ad|od|hone)/i),
          c = t(/chrome/i) && t(/android/i),
          d = { capture: !1, passive: !1 }
        function h(t, e, n) {
          t.addEventListener(e, n, !y && d)
        }
        function f(t, e, n) {
          t.removeEventListener(e, n, !y && d)
        }
        function p(t, e) {
          if (e && (">" === e[0] && (e = e.substring(1)), t))
            try {
              if (t.matches) return t.matches(e)
              if (t.msMatchesSelector) return t.msMatchesSelector(e)
              if (t.webkitMatchesSelector) return t.webkitMatchesSelector(e)
            } catch (t) {
              return
            }
        }
        function N(t, e, n, o) {
          if (t) {
            n = n || document
            do {
              if (
                (null != e &&
                  (">" !== e[0] || t.parentNode === n) &&
                  p(t, e)) ||
                (o && t === n)
              )
                return t
            } while (
              t !== n &&
              (t =
                (i = t).host && i !== document && i.host.nodeType
                  ? i.host
                  : i.parentNode)
            )
          }
          var i
          return null
        }
        var g,
          m = /\\s+/g
        function I(t, e, n) {
          var o
          t &&
            e &&
            (t.classList
              ? t.classList[n ? "add" : "remove"](e)
              : ((o = (" " + t.className + " ")
                  .replace(m, " ")
                  .replace(" " + e + " ", " ")),
                (t.className = (o + (n ? " " + e : "")).replace(m, " "))))
        }
        function P(t, e, n) {
          var o = t && t.style
          if (o) {
            if (void 0 === n)
              return (
                document.defaultView && document.defaultView.getComputedStyle
                  ? (n = document.defaultView.getComputedStyle(t, ""))
                  : t.currentStyle && (n = t.currentStyle),
                void 0 === e ? n : n[e]
              )
            o[
              (e = !(e in o || -1 !== e.indexOf("webkit")) ? "-webkit-" + e : e)
            ] = n + ("string" == typeof n ? "" : "px")
          }
        }
        function v(t, e) {
          var n = ""
          if ("string" == typeof t) n = t
          else
            do {
              var o = P(t, "transform")
            } while (
              (o && "none" !== o && (n = o + " " + n), !e && (t = t.parentNode))
            )
          var i =
            window.DOMMatrix ||
            window.WebKitCSSMatrix ||
            window.CSSMatrix ||
            window.MSCSSMatrix
          return i && new i(n)
        }
        function b(t, e, n) {
          if (t) {
            var o = t.getElementsByTagName(e),
              i = 0,
              r = o.length
            if (n) for (; i < r; i++) n(o[i], i)
            return o
          }
          return []
        }
        function O() {
          var t = document.scrollingElement
          return t || document.documentElement
        }
        function k(t, e, n, o, i) {
          if (t.getBoundingClientRect || t === window) {
            var r,
              a,
              l,
              s,
              c,
              u,
              d =
                t !== window && t.parentNode && t !== O()
                  ? ((a = (r = t.getBoundingClientRect()).top),
                    (l = r.left),
                    (s = r.bottom),
                    (c = r.right),
                    (u = r.height),
                    r.width)
                  : ((l = a = 0),
                    (s = window.innerHeight),
                    (c = window.innerWidth),
                    (u = window.innerHeight),
                    window.innerWidth)
            if ((e || n) && t !== window && ((i = i || t.parentNode), !y))
              do {
                if (
                  i &&
                  i.getBoundingClientRect &&
                  ("none" !== P(i, "transform") ||
                    (n && "static" !== P(i, "position")))
                ) {
                  var h = i.getBoundingClientRect()
                  ;(a -= h.top + parseInt(P(i, "border-top-width"))),
                    (l -= h.left + parseInt(P(i, "border-left-width"))),
                    (s = a + r.height),
                    (c = l + r.width)
                  break
                }
              } while ((i = i.parentNode))
            return (
              o &&
                t !== window &&
                ((o = (e = v(i || t)) && e.a),
                (t = e && e.d),
                e && ((s = (a /= t) + (u /= t)), (c = (l /= o) + (d /= o)))),
              { top: a, left: l, bottom: s, right: c, width: d, height: u }
            )
          }
        }
        function R(t, e, n) {
          for (var o = A(t, !0), i = k(t)[e]; o; ) {
            var r = k(o)[n]
            if (!("top" === n || "left" === n ? r <= i : i <= r)) return o
            if (o === O()) break
            o = A(o, !1)
          }
          return !1
        }
        function X(t, e, n, o) {
          for (var i = 0, r = 0, a = t.children; r < a.length; ) {
            if (
              "none" !== a[r].style.display &&
              a[r] !== Bt.ghost &&
              (o || a[r] !== Bt.dragged) &&
              N(a[r], n.draggable, t, !1)
            ) {
              if (i === e) return a[r]
              i++
            }
            r++
          }
          return null
        }
        function Y(t, e) {
          for (
            var n = t.lastElementChild;
            n &&
            (n === Bt.ghost || "none" === P(n, "display") || (e && !p(n, e)));

          )
            n = n.previousElementSibling
          return n || null
        }
        function B(t, e) {
          var n = 0
          if (!t || !t.parentNode) return -1
          for (; (t = t.previousElementSibling); )
            "TEMPLATE" === t.nodeName.toUpperCase() ||
              t === Bt.clone ||
              (e && !p(t, e)) ||
              n++
          return n
        }
        function E(t) {
          var e = 0,
            n = 0,
            o = O()
          if (t)
            do {
              var i = v(t),
                r = i.a,
                i = i.d
            } while (
              ((e += t.scrollLeft * r),
              (n += t.scrollTop * i),
              t !== o && (t = t.parentNode))
            )
          return [e, n]
        }
        function A(t, e) {
          if (!t || !t.getBoundingClientRect) return O()
          var n = t,
            o = !1
          do {
            if (
              n.clientWidth < n.scrollWidth ||
              n.clientHeight < n.scrollHeight
            ) {
              var i = P(n)
              if (
                (n.clientWidth < n.scrollWidth &&
                  ("auto" == i.overflowX || "scroll" == i.overflowX)) ||
                (n.clientHeight < n.scrollHeight &&
                  ("auto" == i.overflowY || "scroll" == i.overflowY))
              ) {
                if (!n.getBoundingClientRect || n === document.body) return O()
                if (o || e) return n
                o = !0
              }
            }
          } while ((n = n.parentNode))
          return O()
        }
        function D(t, e) {
          return (
            Math.round(t.top) === Math.round(e.top) &&
            Math.round(t.left) === Math.round(e.left) &&
            Math.round(t.height) === Math.round(e.height) &&
            Math.round(t.width) === Math.round(e.width)
          )
        }
        function S(e, n) {
          return function () {
            var t
            g ||
              (1 === (t = arguments).length
                ? e.call(this, t[0])
                : e.apply(this, t),
              (g = setTimeout(function () {
                g = void 0
              }, n)))
          }
        }
        function F(t, e, n) {
          ;(t.scrollLeft += e), (t.scrollTop += n)
        }
        function _(t) {
          var e = window.Polymer,
            n = window.jQuery || window.Zepto
          return e && e.dom
            ? e.dom(t).cloneNode(!0)
            : n
            ? n(t).clone(!0)[0]
            : t.cloneNode(!0)
        }
        function C(t, e) {
          P(t, "position", "absolute"),
            P(t, "top", e.top),
            P(t, "left", e.left),
            P(t, "width", e.width),
            P(t, "height", e.height)
        }
        function T(t) {
          P(t, "position", ""),
            P(t, "top", ""),
            P(t, "left", ""),
            P(t, "width", ""),
            P(t, "height", "")
        }
        var j = "Sortable" + new Date().getTime()
        function x() {
          var e,
            o = []
          return {
            captureAnimationState: function () {
              ;(o = []),
                this.options.animation &&
                  [].slice.call(this.el.children).forEach(function (t) {
                    var e, n
                    "none" !== P(t, "display") &&
                      t !== Bt.ghost &&
                      (o.push({ target: t, rect: k(t) }),
                      (e = M({}, o[o.length - 1].rect)),
                      !t.thisAnimationDuration ||
                        ((n = v(t, !0)) && ((e.top -= n.f), (e.left -= n.e))),
                      (t.fromRect = e))
                  })
            },
            addAnimationState: function (t) {
              o.push(t)
            },
            removeAnimationState: function (t) {
              o.splice(
                (function (t, e) {
                  for (var n in t)
                    if (t.hasOwnProperty(n))
                      for (var o in e)
                        if (e.hasOwnProperty(o) && e[o] === t[n][o])
                          return Number(n)
                  return -1
                })(o, { target: t }),
                1
              )
            },
            animateAll: function (t) {
              var c = this
              if (!this.options.animation)
                return clearTimeout(e), void ("function" == typeof t && t())
              var u = !1,
                d = 0
              o.forEach(function (t) {
                var e = 0,
                  n = t.target,
                  o = n.fromRect,
                  i = k(n),
                  r = n.prevFromRect,
                  a = n.prevToRect,
                  l = t.rect,
                  s = v(n, !0)
                s && ((i.top -= s.f), (i.left -= s.e)),
                  (n.toRect = i),
                  n.thisAnimationDuration &&
                    D(r, i) &&
                    !D(o, i) &&
                    (l.top - i.top) / (l.left - i.left) ==
                      (o.top - i.top) / (o.left - i.left) &&
                    ((t = l),
                    (s = r),
                    (r = a),
                    (a = c.options),
                    (e =
                      (Math.sqrt(
                        Math.pow(s.top - t.top, 2) +
                          Math.pow(s.left - t.left, 2)
                      ) /
                        Math.sqrt(
                          Math.pow(s.top - r.top, 2) +
                            Math.pow(s.left - r.left, 2)
                        )) *
                      a.animation)),
                  D(i, o) ||
                    ((n.prevFromRect = o),
                    (n.prevToRect = i),
                    (e = e || c.options.animation),
                    c.animate(n, l, i, e)),
                  e &&
                    ((u = !0),
                    (d = Math.max(d, e)),
                    clearTimeout(n.animationResetTimer),
                    (n.animationResetTimer = setTimeout(function () {
                      ;(n.animationTime = 0),
                        (n.prevFromRect = null),
                        (n.fromRect = null),
                        (n.prevToRect = null),
                        (n.thisAnimationDuration = null)
                    }, e)),
                    (n.thisAnimationDuration = e))
              }),
                clearTimeout(e),
                u
                  ? (e = setTimeout(function () {
                      "function" == typeof t && t()
                    }, d))
                  : "function" == typeof t && t(),
                (o = [])
            },
            animate: function (t, e, n, o) {
              var i, r
              o &&
                (P(t, "transition", ""),
                P(t, "transform", ""),
                (i = (r = v(this.el)) && r.a),
                (r = r && r.d),
                (i = (e.left - n.left) / (i || 1)),
                (r = (e.top - n.top) / (r || 1)),
                (t.animatingX = !!i),
                (t.animatingY = !!r),
                P(t, "transform", "translate3d(" + i + "px," + r + "px,0)"),
                (this.forRepaintDummy = t.offsetWidth),
                P(
                  t,
                  "transition",
                  "transform " +
                    o +
                    "ms" +
                    (this.options.easing ? " " + this.options.easing : "")
                ),
                P(t, "transform", "translate3d(0,0,0)"),
                "number" == typeof t.animated && clearTimeout(t.animated),
                (t.animated = setTimeout(function () {
                  P(t, "transition", ""),
                    P(t, "transform", ""),
                    (t.animated = !1),
                    (t.animatingX = !1),
                    (t.animatingY = !1)
                }, o)))
            }
          }
        }
        var H = [],
          L = { initializeByDefault: !0 },
          K = {
            mount: function (e) {
              for (var t in L) !L.hasOwnProperty(t) || t in e || (e[t] = L[t])
              H.forEach(function (t) {
                if (t.pluginName === e.pluginName)
                  throw "Sortable: Cannot mount plugin ".concat(
                    e.pluginName,
                    " more than once"
                  )
              }),
                H.push(e)
            },
            pluginEvent: function (e, n, o) {
              var t = this
              ;(this.eventCanceled = !1),
                (o.cancel = function () {
                  t.eventCanceled = !0
                })
              var i = e + "Global"
              H.forEach(function (t) {
                n[t.pluginName] &&
                  (n[t.pluginName][i] &&
                    n[t.pluginName][i](M({ sortable: n }, o)),
                  n.options[t.pluginName] &&
                    n[t.pluginName][e] &&
                    n[t.pluginName][e](M({ sortable: n }, o)))
              })
            },
            initializePlugins: function (n, o, i, t) {
              for (var e in (H.forEach(function (t) {
                var e = t.pluginName
                ;(n.options[e] || t.initializeByDefault) &&
                  (((t = new t(n, o, n.options)).sortable = n),
                  (t.options = n.options),
                  (n[e] = t),
                  a(i, t.defaults))
              }),
              n.options)) {
                var r
                n.options.hasOwnProperty(e) &&
                  void 0 !== (r = this.modifyOption(n, e, n.options[e])) &&
                  (n.options[e] = r)
              }
            },
            getEventProperties: function (e, n) {
              var o = {}
              return (
                H.forEach(function (t) {
                  "function" == typeof t.eventProperties &&
                    a(o, t.eventProperties.call(n[t.pluginName], e))
                }),
                o
              )
            },
            modifyOption: function (e, n, o) {
              var i
              return (
                H.forEach(function (t) {
                  e[t.pluginName] &&
                    t.optionListeners &&
                    "function" == typeof t.optionListeners[n] &&
                    (i = t.optionListeners[n].call(e[t.pluginName], o))
                }),
                i
              )
            }
          }
        function W(t) {
          var e = t.sortable,
            n = t.rootEl,
            o = t.name,
            i = t.targetEl,
            r = t.cloneEl,
            a = t.toEl,
            l = t.fromEl,
            s = t.oldIndex,
            c = t.newIndex,
            u = t.oldDraggableIndex,
            d = t.newDraggableIndex,
            h = t.originalEvent,
            f = t.putSortable,
            p = t.extraEventProperties
          if ((e = e || (n && n[j]))) {
            var g,
              m = e.options,
              t = "on" + o.charAt(0).toUpperCase() + o.substr(1)
            !window.CustomEvent || y || w
              ? (g = document.createEvent("Event")).initEvent(o, !0, !0)
              : (g = new CustomEvent(o, { bubbles: !0, cancelable: !0 })),
              (g.to = a || n),
              (g.from = l || n),
              (g.item = i || n),
              (g.clone = r),
              (g.oldIndex = s),
              (g.newIndex = c),
              (g.oldDraggableIndex = u),
              (g.newDraggableIndex = d),
              (g.originalEvent = h),
              (g.pullMode = f ? f.lastPutMode : void 0)
            var v,
              b = M(M({}, p), K.getEventProperties(o, e))
            for (v in b) g[v] = b[v]
            n && n.dispatchEvent(g), m[t] && m[t].call(e, g)
          }
        }
        function z(t, e) {
          var n = (o =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : {}).evt,
            o = i(o, G)
          K.pluginEvent.bind(Bt)(
            t,
            e,
            M(
              {
                dragEl: q,
                parentEl: V,
                ghostEl: Z,
                rootEl: $,
                nextEl: Q,
                lastDownEl: J,
                cloneEl: tt,
                cloneHidden: et,
                dragStarted: pt,
                putSortable: lt,
                activeSortable: Bt.active,
                originalEvent: n,
                oldIndex: nt,
                oldDraggableIndex: it,
                newIndex: ot,
                newDraggableIndex: rt,
                hideGhostForTarget: kt,
                unhideGhostForTarget: Rt,
                cloneNowHidden: function () {
                  et = !0
                },
                cloneNowShown: function () {
                  et = !1
                },
                dispatchSortableEvent: function (t) {
                  U({ sortable: e, name: t, originalEvent: n })
                }
              },
              o
            )
          )
        }
        var G = ["evt"]
        function U(t) {
          W(
            M(
              {
                putSortable: lt,
                cloneEl: tt,
                targetEl: q,
                rootEl: $,
                oldIndex: nt,
                oldDraggableIndex: it,
                newIndex: ot,
                newDraggableIndex: rt
              },
              t
            )
          )
        }
        var q,
          V,
          Z,
          $,
          Q,
          J,
          tt,
          et,
          nt,
          ot,
          it,
          rt,
          at,
          lt,
          st,
          ct,
          ut,
          dt,
          ht,
          ft,
          pt,
          gt,
          mt,
          vt,
          bt,
          yt = !1,
          wt = !1,
          Et = [],
          Dt = !1,
          St = !1,
          _t = [],
          Ct = !1,
          Tt = [],
          xt = "undefined" != typeof document,
          Ot = n,
          At = w || y ? "cssFloat" : "float",
          Mt = xt && !c && !n && "draggable" in document.createElement("div"),
          Nt = (function () {
            if (xt) {
              if (y) return !1
              var t = document.createElement("x")
              return (
                (t.style.cssText = "pointer-events:auto"),
                "auto" === t.style.pointerEvents
              )
            }
          })(),
          It = function (t, e) {
            var n = P(t),
              o =
                parseInt(n.width) -
                parseInt(n.paddingLeft) -
                parseInt(n.paddingRight) -
                parseInt(n.borderLeftWidth) -
                parseInt(n.borderRightWidth),
              i = X(t, 0, e),
              r = X(t, 1, e),
              a = i && P(i),
              l = r && P(r),
              s =
                a &&
                parseInt(a.marginLeft) + parseInt(a.marginRight) + k(i).width,
              t =
                l &&
                parseInt(l.marginLeft) + parseInt(l.marginRight) + k(r).width
            if ("flex" === n.display)
              return "column" === n.flexDirection ||
                "column-reverse" === n.flexDirection
                ? "vertical"
                : "horizontal"
            if ("grid" === n.display)
              return n.gridTemplateColumns.split(" ").length <= 1
                ? "vertical"
                : "horizontal"
            if (i && a.float && "none" !== a.float) {
              e = "left" === a.float ? "left" : "right"
              return !r || ("both" !== l.clear && l.clear !== e)
                ? "horizontal"
                : "vertical"
            }
            return i &&
              ("block" === a.display ||
                "flex" === a.display ||
                "table" === a.display ||
                "grid" === a.display ||
                (o <= s && "none" === n[At]) ||
                (r && "none" === n[At] && o < s + t))
              ? "vertical"
              : "horizontal"
          },
          Pt = function (t) {
            function l(r, a) {
              return function (t, e, n, o) {
                var i =
                  t.options.group.name &&
                  e.options.group.name &&
                  t.options.group.name === e.options.group.name
                if (null == r && (a || i)) return !0
                if (null == r || !1 === r) return !1
                if (a && "clone" === r) return r
                if ("function" == typeof r)
                  return l(r(t, e, n, o), a)(t, e, n, o)
                e = (a ? t : e).options.group.name
                return (
                  !0 === r ||
                  ("string" == typeof r && r === e) ||
                  (r.join && -1 < r.indexOf(e))
                )
              }
            }
            var e = {},
              n = t.group
            ;(n && "object" == o(n)) || (n = { name: n }),
              (e.name = n.name),
              (e.checkPull = l(n.pull, !0)),
              (e.checkPut = l(n.put)),
              (e.revertClone = n.revertClone),
              (t.group = e)
          },
          kt = function () {
            !Nt && Z && P(Z, "display", "none")
          },
          Rt = function () {
            !Nt && Z && P(Z, "display", "")
          }
        xt &&
          !c &&
          document.addEventListener(
            "click",
            function (t) {
              if (wt)
                return (
                  t.preventDefault(),
                  t.stopPropagation && t.stopPropagation(),
                  t.stopImmediatePropagation && t.stopImmediatePropagation(),
                  (wt = !1)
                )
            },
            !0
          )
        function Xt(t) {
          if (q) {
            t = t.touches ? t.touches[0] : t
            var e =
              ((i = t.clientX),
              (r = t.clientY),
              Et.some(function (t) {
                var e = t[j].options.emptyInsertThreshold
                if (e && !Y(t)) {
                  var n = k(t),
                    o = i >= n.left - e && i <= n.right + e,
                    e = r >= n.top - e && r <= n.bottom + e
                  return o && e ? (a = t) : void 0
                }
              }),
              a)
            if (e) {
              var n,
                o = {}
              for (n in t) t.hasOwnProperty(n) && (o[n] = t[n])
              ;(o.target = o.rootEl = e),
                (o.preventDefault = void 0),
                (o.stopPropagation = void 0),
                e[j]._onDragOver(o)
            }
          }
          var i, r, a
        }
        function Yt(t) {
          q && q.parentNode[j]._isOutsideThisEl(t.target)
        }
        function Bt(t, e) {
          if (!t || !t.nodeType || 1 !== t.nodeType)
            throw "Sortable: \`el\` must be an HTMLElement, not ".concat(
              {}.toString.call(t)
            )
          ;(this.el = t), (this.options = e = a({}, e)), (t[j] = this)
          var n,
            o,
            i = {
              group: null,
              sort: !0,
              disabled: !1,
              store: null,
              handle: null,
              draggable: /^[uo]l$/i.test(t.nodeName) ? ">li" : ">*",
              swapThreshold: 1,
              invertSwap: !1,
              invertedSwapThreshold: null,
              removeCloneOnHide: !0,
              direction: function () {
                return It(t, this.options)
              },
              ghostClass: "sortable-ghost",
              chosenClass: "sortable-chosen",
              dragClass: "sortable-drag",
              ignore: "a, img",
              filter: null,
              preventOnFilter: !0,
              animation: 0,
              easing: null,
              setData: function (t, e) {
                t.setData("Text", e.textContent)
              },
              dropBubble: !1,
              dragoverBubble: !1,
              dataIdAttr: "data-id",
              delay: 0,
              delayOnTouchOnly: !1,
              touchStartThreshold:
                (Number.parseInt ? Number : window).parseInt(
                  window.devicePixelRatio,
                  10
                ) || 1,
              forceFallback: !1,
              fallbackClass: "sortable-fallback",
              fallbackOnBody: !1,
              fallbackTolerance: 0,
              fallbackOffset: { x: 0, y: 0 },
              supportPointer:
                !1 !== Bt.supportPointer && "PointerEvent" in window && !u,
              emptyInsertThreshold: 5
            }
          for (n in (K.initializePlugins(this, t, i), i))
            n in e || (e[n] = i[n])
          for (o in (Pt(e), this))
            "_" === o.charAt(0) &&
              "function" == typeof this[o] &&
              (this[o] = this[o].bind(this))
          ;(this.nativeDraggable = !e.forceFallback && Mt),
            this.nativeDraggable && (this.options.touchStartThreshold = 1),
            e.supportPointer
              ? h(t, "pointerdown", this._onTapStart)
              : (h(t, "mousedown", this._onTapStart),
                h(t, "touchstart", this._onTapStart)),
            this.nativeDraggable &&
              (h(t, "dragover", this), h(t, "dragenter", this)),
            Et.push(this.el),
            e.store && e.store.get && this.sort(e.store.get(this) || []),
            a(this, x())
        }
        function Ft(t, e, n, o, i, r, a, l) {
          var s,
            c,
            u = t[j],
            d = u.options.onMove
          return (
            !window.CustomEvent || y || w
              ? (s = document.createEvent("Event")).initEvent("move", !0, !0)
              : (s = new CustomEvent("move", { bubbles: !0, cancelable: !0 })),
            (s.to = e),
            (s.from = t),
            (s.dragged = n),
            (s.draggedRect = o),
            (s.related = i || e),
            (s.relatedRect = r || k(e)),
            (s.willInsertAfter = l),
            (s.originalEvent = a),
            t.dispatchEvent(s),
            (c = d ? d.call(u, s, a) : c)
          )
        }
        function jt(t) {
          t.draggable = !1
        }
        function Ht() {
          Ct = !1
        }
        function Lt(t) {
          return setTimeout(t, 0)
        }
        function Kt(t) {
          return clearTimeout(t)
        }
        ;(Bt.prototype = {
          constructor: Bt,
          _isOutsideThisEl: function (t) {
            this.el.contains(t) || t === this.el || (gt = null)
          },
          _getDirection: function (t, e) {
            return "function" == typeof this.options.direction
              ? this.options.direction.call(this, t, e, q)
              : this.options.direction
          },
          _onTapStart: function (e) {
            if (e.cancelable) {
              var n = this,
                o = this.el,
                t = this.options,
                i = t.preventOnFilter,
                r = e.type,
                a =
                  (e.touches && e.touches[0]) ||
                  (e.pointerType && "touch" === e.pointerType && e),
                l = (a || e).target,
                s =
                  (e.target.shadowRoot &&
                    ((e.path && e.path[0]) ||
                      (e.composedPath && e.composedPath()[0]))) ||
                  l,
                c = t.filter
              if (
                (!(function (t) {
                  Tt.length = 0
                  var e = t.getElementsByTagName("input"),
                    n = e.length
                  for (; n--; ) {
                    var o = e[n]
                    o.checked && Tt.push(o)
                  }
                })(o),
                !q &&
                  !(
                    (/mousedown|pointerdown/.test(r) && 0 !== e.button) ||
                    t.disabled
                  ) &&
                  !s.isContentEditable &&
                  (this.nativeDraggable ||
                    !u ||
                    !l ||
                    "SELECT" !== l.tagName.toUpperCase()) &&
                  !(((l = N(l, t.draggable, o, !1)) && l.animated) || J === l))
              ) {
                if (
                  ((nt = B(l)),
                  (it = B(l, t.draggable)),
                  "function" == typeof c)
                ) {
                  if (c.call(this, e, l, this))
                    return (
                      U({
                        sortable: n,
                        rootEl: s,
                        name: "filter",
                        targetEl: l,
                        toEl: o,
                        fromEl: o
                      }),
                      z("filter", n, { evt: e }),
                      void (i && e.cancelable && e.preventDefault())
                    )
                } else if (
                  (c =
                    c &&
                    c.split(",").some(function (t) {
                      if ((t = N(s, t.trim(), o, !1)))
                        return (
                          U({
                            sortable: n,
                            rootEl: t,
                            name: "filter",
                            targetEl: l,
                            fromEl: o,
                            toEl: o
                          }),
                          z("filter", n, { evt: e }),
                          !0
                        )
                    }))
                )
                  return void (i && e.cancelable && e.preventDefault())
                ;(t.handle && !N(s, t.handle, o, !1)) ||
                  this._prepareDragStart(e, a, l)
              }
            }
          },
          _prepareDragStart: function (t, e, n) {
            var o,
              i = this,
              r = i.el,
              a = i.options,
              l = r.ownerDocument
            n &&
              !q &&
              n.parentNode === r &&
              ((o = k(n)),
              ($ = r),
              (V = (q = n).parentNode),
              (Q = q.nextSibling),
              (J = n),
              (at = a.group),
              (st = {
                target: (Bt.dragged = q),
                clientX: (e || t).clientX,
                clientY: (e || t).clientY
              }),
              (ht = st.clientX - o.left),
              (ft = st.clientY - o.top),
              (this._lastX = (e || t).clientX),
              (this._lastY = (e || t).clientY),
              (q.style["will-change"] = "all"),
              (o = function () {
                z("delayEnded", i, { evt: t }),
                  Bt.eventCanceled
                    ? i._onDrop()
                    : (i._disableDelayedDragEvents(),
                      !s && i.nativeDraggable && (q.draggable = !0),
                      i._triggerDragStart(t, e),
                      U({ sortable: i, name: "choose", originalEvent: t }),
                      I(q, a.chosenClass, !0))
              }),
              a.ignore.split(",").forEach(function (t) {
                b(q, t.trim(), jt)
              }),
              h(l, "dragover", Xt),
              h(l, "mousemove", Xt),
              h(l, "touchmove", Xt),
              h(l, "mouseup", i._onDrop),
              h(l, "touchend", i._onDrop),
              h(l, "touchcancel", i._onDrop),
              s &&
                this.nativeDraggable &&
                ((this.options.touchStartThreshold = 4), (q.draggable = !0)),
              z("delayStart", this, { evt: t }),
              !a.delay ||
              (a.delayOnTouchOnly && !e) ||
              (this.nativeDraggable && (w || y))
                ? o()
                : Bt.eventCanceled
                ? this._onDrop()
                : (h(l, "mouseup", i._disableDelayedDrag),
                  h(l, "touchend", i._disableDelayedDrag),
                  h(l, "touchcancel", i._disableDelayedDrag),
                  h(l, "mousemove", i._delayedDragTouchMoveHandler),
                  h(l, "touchmove", i._delayedDragTouchMoveHandler),
                  a.supportPointer &&
                    h(l, "pointermove", i._delayedDragTouchMoveHandler),
                  (i._dragStartTimer = setTimeout(o, a.delay))))
          },
          _delayedDragTouchMoveHandler: function (t) {
            t = t.touches ? t.touches[0] : t
            Math.max(
              Math.abs(t.clientX - this._lastX),
              Math.abs(t.clientY - this._lastY)
            ) >=
              Math.floor(
                this.options.touchStartThreshold /
                  ((this.nativeDraggable && window.devicePixelRatio) || 1)
              ) && this._disableDelayedDrag()
          },
          _disableDelayedDrag: function () {
            q && jt(q),
              clearTimeout(this._dragStartTimer),
              this._disableDelayedDragEvents()
          },
          _disableDelayedDragEvents: function () {
            var t = this.el.ownerDocument
            f(t, "mouseup", this._disableDelayedDrag),
              f(t, "touchend", this._disableDelayedDrag),
              f(t, "touchcancel", this._disableDelayedDrag),
              f(t, "mousemove", this._delayedDragTouchMoveHandler),
              f(t, "touchmove", this._delayedDragTouchMoveHandler),
              f(t, "pointermove", this._delayedDragTouchMoveHandler)
          },
          _triggerDragStart: function (t, e) {
            ;(e = e || ("touch" == t.pointerType && t)),
              !this.nativeDraggable || e
                ? this.options.supportPointer
                  ? h(document, "pointermove", this._onTouchMove)
                  : h(
                      document,
                      e ? "touchmove" : "mousemove",
                      this._onTouchMove
                    )
                : (h(q, "dragend", this), h($, "dragstart", this._onDragStart))
            try {
              document.selection
                ? Lt(function () {
                    document.selection.empty()
                  })
                : window.getSelection().removeAllRanges()
            } catch (t) {}
          },
          _dragStarted: function (t, e) {
            var n
            ;(yt = !1),
              $ && q
                ? (z("dragStarted", this, { evt: e }),
                  this.nativeDraggable && h(document, "dragover", Yt),
                  (n = this.options),
                  t || I(q, n.dragClass, !1),
                  I(q, n.ghostClass, !0),
                  (Bt.active = this),
                  t && this._appendGhost(),
                  U({ sortable: this, name: "start", originalEvent: e }))
                : this._nulling()
          },
          _emulateDragOver: function () {
            if (ct) {
              ;(this._lastX = ct.clientX), (this._lastY = ct.clientY), kt()
              for (
                var t = document.elementFromPoint(ct.clientX, ct.clientY),
                  e = t;
                t &&
                t.shadowRoot &&
                (t = t.shadowRoot.elementFromPoint(ct.clientX, ct.clientY)) !==
                  e;

              )
                e = t
              if ((q.parentNode[j]._isOutsideThisEl(t), e))
                do {
                  if (e[j])
                    if (
                      e[j]._onDragOver({
                        clientX: ct.clientX,
                        clientY: ct.clientY,
                        target: t,
                        rootEl: e
                      }) &&
                      !this.options.dragoverBubble
                    )
                      break
                } while ((e = (t = e).parentNode))
              Rt()
            }
          },
          _onTouchMove: function (t) {
            if (st) {
              var e = this.options,
                n = e.fallbackTolerance,
                o = e.fallbackOffset,
                i = t.touches ? t.touches[0] : t,
                r = Z && v(Z, !0),
                a = Z && r && r.a,
                l = Z && r && r.d,
                e = Ot && bt && E(bt),
                a =
                  (i.clientX - st.clientX + o.x) / (a || 1) +
                  (e ? e[0] - _t[0] : 0) / (a || 1),
                l =
                  (i.clientY - st.clientY + o.y) / (l || 1) +
                  (e ? e[1] - _t[1] : 0) / (l || 1)
              if (!Bt.active && !yt) {
                if (
                  n &&
                  Math.max(
                    Math.abs(i.clientX - this._lastX),
                    Math.abs(i.clientY - this._lastY)
                  ) < n
                )
                  return
                this._onDragStart(t, !0)
              }
              Z &&
                (r
                  ? ((r.e += a - (ut || 0)), (r.f += l - (dt || 0)))
                  : (r = { a: 1, b: 0, c: 0, d: 1, e: a, f: l }),
                (r = "matrix("
                  .concat(r.a, ",")
                  .concat(r.b, ",")
                  .concat(r.c, ",")
                  .concat(r.d, ",")
                  .concat(r.e, ",")
                  .concat(r.f, ")")),
                P(Z, "webkitTransform", r),
                P(Z, "mozTransform", r),
                P(Z, "msTransform", r),
                P(Z, "transform", r),
                (ut = a),
                (dt = l),
                (ct = i)),
                t.cancelable && t.preventDefault()
            }
          },
          _appendGhost: function () {
            if (!Z) {
              var t = this.options.fallbackOnBody ? document.body : $,
                e = k(q, !0, Ot, !0, t),
                n = this.options
              if (Ot) {
                for (
                  bt = t;
                  "static" === P(bt, "position") &&
                  "none" === P(bt, "transform") &&
                  bt !== document;

                )
                  bt = bt.parentNode
                bt !== document.body && bt !== document.documentElement
                  ? (bt === document && (bt = O()),
                    (e.top += bt.scrollTop),
                    (e.left += bt.scrollLeft))
                  : (bt = O()),
                  (_t = E(bt))
              }
              I((Z = q.cloneNode(!0)), n.ghostClass, !1),
                I(Z, n.fallbackClass, !0),
                I(Z, n.dragClass, !0),
                P(Z, "transition", ""),
                P(Z, "transform", ""),
                P(Z, "box-sizing", "border-box"),
                P(Z, "margin", 0),
                P(Z, "top", e.top),
                P(Z, "left", e.left),
                P(Z, "width", e.width),
                P(Z, "height", e.height),
                P(Z, "opacity", "0.8"),
                P(Z, "position", Ot ? "fixed" : "fixed"),
                P(Z, "zIndex", "0"),
                P(Z, "pointerEvents", "none"),
                (Bt.ghost = Z),
                t.appendChild(Z),
                P(
                  Z,
                  "transform-origin",
                  (ht / parseInt(Z.style.width)) * 100 +
                    "% " +
                    (ft / parseInt(Z.style.height)) * 100 +
                    "%"
                )
            }
          },
          _onDragStart: function (t, e) {
            var n = this,
              o = t.dataTransfer,
              i = n.options
            z("dragStart", this, { evt: t }),
              Bt.eventCanceled
                ? this._onDrop()
                : (z("setupClone", this),
                  Bt.eventCanceled ||
                    ((tt = _(q)).removeAttribute("id"),
                    (tt.draggable = !1),
                    (tt.style["will-change"] = ""),
                    this._hideClone(),
                    I(tt, this.options.chosenClass, !1),
                    (Bt.clone = tt)),
                  (n.cloneId = Lt(function () {
                    z("clone", n),
                      Bt.eventCanceled ||
                        (n.options.removeCloneOnHide || $.insertBefore(tt, q),
                        n._hideClone(),
                        U({ sortable: n, name: "clone" }))
                  })),
                  e || I(q, i.dragClass, !0),
                  e
                    ? ((wt = !0),
                      (n._loopId = setInterval(n._emulateDragOver, 50)))
                    : (f(document, "mouseup", n._onDrop),
                      f(document, "touchend", n._onDrop),
                      f(document, "touchcancel", n._onDrop),
                      o &&
                        ((o.effectAllowed = "move"),
                        i.setData && i.setData.call(n, o, q)),
                      h(document, "drop", n),
                      P(q, "transform", "translateZ(0)")),
                  (yt = !0),
                  (n._dragStartId = Lt(n._dragStarted.bind(n, e, t))),
                  h(document, "selectstart", n),
                  (pt = !0),
                  u && P(document.body, "user-select", "none"))
          },
          _onDragOver: function (n) {
            var o,
              i,
              r,
              t,
              a = this.el,
              l = n.target,
              e = this.options,
              s = e.group,
              c = Bt.active,
              u = at === s,
              d = e.sort,
              h = lt || c,
              f = this,
              p = !1
            if (!Ct) {
              if (
                (void 0 !== n.preventDefault &&
                  n.cancelable &&
                  n.preventDefault(),
                (l = N(l, e.draggable, a, !0)),
                T("dragOver"),
                Bt.eventCanceled)
              )
                return p
              if (
                q.contains(n.target) ||
                (l.animated && l.animatingX && l.animatingY) ||
                f._ignoreWhileAnimating === l
              )
                return O(!1)
              if (
                ((wt = !1),
                c &&
                  !e.disabled &&
                  (u
                    ? d || (i = V !== $)
                    : lt === this ||
                      ((this.lastPutMode = at.checkPull(this, c, q, n)) &&
                        s.checkPut(this, c, q, n))))
              ) {
                if (
                  ((r = "vertical" === this._getDirection(n, l)),
                  (o = k(q)),
                  T("dragOverValid"),
                  Bt.eventCanceled)
                )
                  return p
                if (i)
                  return (
                    (V = $),
                    x(),
                    this._hideClone(),
                    T("revert"),
                    Bt.eventCanceled ||
                      (Q ? $.insertBefore(q, Q) : $.appendChild(q)),
                    O(!0)
                  )
                var g = Y(a, e.draggable)
                if (
                  !g ||
                  ((function (t, e, n) {
                    n = k(Y(n.el, n.options.draggable))
                    return e
                      ? t.clientX > n.right + 10 ||
                          (t.clientX <= n.right &&
                            t.clientY > n.bottom &&
                            t.clientX >= n.left)
                      : (t.clientX > n.right && t.clientY > n.top) ||
                          (t.clientX <= n.right && t.clientY > n.bottom + 10)
                  })(n, r, this) &&
                    !g.animated)
                ) {
                  if (g === q) return O(!1)
                  if (
                    ((l = g && a === n.target ? g : l) && (w = k(l)),
                    !1 !== Ft($, a, q, o, l, w, n, !!l))
                  )
                    return (
                      x(),
                      g && g.nextSibling
                        ? a.insertBefore(q, g.nextSibling)
                        : a.appendChild(q),
                      (V = a),
                      A(),
                      O(!0)
                    )
                } else if (
                  g &&
                  (function (t, e, n) {
                    n = k(X(n.el, 0, n.options, !0))
                    return e
                      ? t.clientX < n.left - 10 ||
                          (t.clientY < n.top && t.clientX < n.right)
                      : t.clientY < n.top - 10 ||
                          (t.clientY < n.bottom && t.clientX < n.left)
                  })(n, r, this)
                ) {
                  var m = X(a, 0, e, !0)
                  if (m === q) return O(!1)
                  if (((w = k((l = m))), !1 !== Ft($, a, q, o, l, w, n, !1)))
                    return x(), a.insertBefore(q, m), (V = a), A(), O(!0)
                } else if (l.parentNode === a) {
                  var v,
                    b,
                    y,
                    w = k(l),
                    E = q.parentNode !== a,
                    D =
                      ((D = (q.animated && q.toRect) || o),
                      (C = (l.animated && l.toRect) || w),
                      (S = (t = r) ? D.left : D.top),
                      (s = t ? D.right : D.bottom),
                      (g = t ? D.width : D.height),
                      (m = t ? C.left : C.top),
                      (D = t ? C.right : C.bottom),
                      (C = t ? C.width : C.height),
                      !(S === m || s === D || S + g / 2 === m + C / 2)),
                    S = r ? "top" : "left",
                    g = R(l, "top", "top") || R(q, "top", "top"),
                    m = g ? g.scrollTop : void 0
                  if (
                    (gt !== l &&
                      ((b = w[S]), (Dt = !1), (St = (!D && e.invertSwap) || E)),
                    0 !==
                      (v = (function (t, e, n, o, i, r, a, l) {
                        var s = o ? t.clientY : t.clientX,
                          c = o ? n.height : n.width,
                          t = o ? n.top : n.left,
                          o = o ? n.bottom : n.right,
                          n = !1
                        if (!a)
                          if (l && vt < c * i) {
                            if (
                              (Dt =
                                !Dt &&
                                (1 === mt
                                  ? t + (c * r) / 2 < s
                                  : s < o - (c * r) / 2)
                                  ? !0
                                  : Dt)
                            )
                              n = !0
                            else if (1 === mt ? s < t + vt : o - vt < s)
                              return -mt
                          } else if (
                            t + (c * (1 - i)) / 2 < s &&
                            s < o - (c * (1 - i)) / 2
                          )
                            return (function (t) {
                              return B(q) < B(t) ? 1 : -1
                            })(e)
                        if (
                          (n = n || a) &&
                          (s < t + (c * r) / 2 || o - (c * r) / 2 < s)
                        )
                          return t + c / 2 < s ? 1 : -1
                        return 0
                      })(
                        n,
                        l,
                        w,
                        r,
                        D ? 1 : e.swapThreshold,
                        null == e.invertedSwapThreshold
                          ? e.swapThreshold
                          : e.invertedSwapThreshold,
                        St,
                        gt === l
                      )))
                  )
                    for (
                      var _ = B(q);
                      (y = V.children[(_ -= v)]) &&
                      ("none" === P(y, "display") || y === Z);

                    );
                  if (0 === v || y === l) return O(!1)
                  mt = v
                  var C = (gt = l).nextElementSibling,
                    E = !1,
                    D = Ft($, a, q, o, l, w, n, (E = 1 === v))
                  if (!1 !== D)
                    return (
                      (1 !== D && -1 !== D) || (E = 1 === D),
                      (Ct = !0),
                      setTimeout(Ht, 30),
                      x(),
                      E && !C
                        ? a.appendChild(q)
                        : l.parentNode.insertBefore(q, E ? C : l),
                      g && F(g, 0, m - g.scrollTop),
                      (V = q.parentNode),
                      void 0 === b || St || (vt = Math.abs(b - k(l)[S])),
                      A(),
                      O(!0)
                    )
                }
                if (a.contains(q)) return O(!1)
              }
              return !1
            }
            function T(t, e) {
              z(
                t,
                f,
                M(
                  {
                    evt: n,
                    isOwner: u,
                    axis: r ? "vertical" : "horizontal",
                    revert: i,
                    dragRect: o,
                    targetRect: w,
                    canSort: d,
                    fromSortable: h,
                    target: l,
                    completed: O,
                    onMove: function (t, e) {
                      return Ft($, a, q, o, t, k(t), n, e)
                    },
                    changed: A
                  },
                  e
                )
              )
            }
            function x() {
              T("dragOverAnimationCapture"),
                f.captureAnimationState(),
                f !== h && h.captureAnimationState()
            }
            function O(t) {
              return (
                T("dragOverCompleted", { insertion: t }),
                t &&
                  (u ? c._hideClone() : c._showClone(f),
                  f !== h &&
                    (I(q, (lt || c).options.ghostClass, !1),
                    I(q, e.ghostClass, !0)),
                  lt !== f && f !== Bt.active
                    ? (lt = f)
                    : f === Bt.active && lt && (lt = null),
                  h === f && (f._ignoreWhileAnimating = l),
                  f.animateAll(function () {
                    T("dragOverAnimationComplete"),
                      (f._ignoreWhileAnimating = null)
                  }),
                  f !== h &&
                    (h.animateAll(), (h._ignoreWhileAnimating = null))),
                ((l === q && !q.animated) || (l === a && !l.animated)) &&
                  (gt = null),
                e.dragoverBubble ||
                  n.rootEl ||
                  l === document ||
                  (q.parentNode[j]._isOutsideThisEl(n.target), t || Xt(n)),
                !e.dragoverBubble && n.stopPropagation && n.stopPropagation(),
                (p = !0)
              )
            }
            function A() {
              ;(ot = B(q)),
                (rt = B(q, e.draggable)),
                U({
                  sortable: f,
                  name: "change",
                  toEl: a,
                  newIndex: ot,
                  newDraggableIndex: rt,
                  originalEvent: n
                })
            }
          },
          _ignoreWhileAnimating: null,
          _offMoveEvents: function () {
            f(document, "mousemove", this._onTouchMove),
              f(document, "touchmove", this._onTouchMove),
              f(document, "pointermove", this._onTouchMove),
              f(document, "dragover", Xt),
              f(document, "mousemove", Xt),
              f(document, "touchmove", Xt)
          },
          _offUpEvents: function () {
            var t = this.el.ownerDocument
            f(t, "mouseup", this._onDrop),
              f(t, "touchend", this._onDrop),
              f(t, "pointerup", this._onDrop),
              f(t, "touchcancel", this._onDrop),
              f(document, "selectstart", this)
          },
          _onDrop: function (t) {
            var e = this.el,
              n = this.options
            ;(ot = B(q)),
              (rt = B(q, n.draggable)),
              z("drop", this, { evt: t }),
              (V = q && q.parentNode),
              (ot = B(q)),
              (rt = B(q, n.draggable)),
              Bt.eventCanceled ||
                ((Dt = St = yt = !1),
                clearInterval(this._loopId),
                clearTimeout(this._dragStartTimer),
                Kt(this.cloneId),
                Kt(this._dragStartId),
                this.nativeDraggable &&
                  (f(document, "drop", this),
                  f(e, "dragstart", this._onDragStart)),
                this._offMoveEvents(),
                this._offUpEvents(),
                u && P(document.body, "user-select", ""),
                P(q, "transform", ""),
                t &&
                  (pt &&
                    (t.cancelable && t.preventDefault(),
                    n.dropBubble || t.stopPropagation()),
                  Z && Z.parentNode && Z.parentNode.removeChild(Z),
                  ($ === V || (lt && "clone" !== lt.lastPutMode)) &&
                    tt &&
                    tt.parentNode &&
                    tt.parentNode.removeChild(tt),
                  q &&
                    (this.nativeDraggable && f(q, "dragend", this),
                    jt(q),
                    (q.style["will-change"] = ""),
                    pt && !yt && I(q, (lt || this).options.ghostClass, !1),
                    I(q, this.options.chosenClass, !1),
                    U({
                      sortable: this,
                      name: "unchoose",
                      toEl: V,
                      newIndex: null,
                      newDraggableIndex: null,
                      originalEvent: t
                    }),
                    $ !== V
                      ? (0 <= ot &&
                          (U({
                            rootEl: V,
                            name: "add",
                            toEl: V,
                            fromEl: $,
                            originalEvent: t
                          }),
                          U({
                            sortable: this,
                            name: "remove",
                            toEl: V,
                            originalEvent: t
                          }),
                          U({
                            rootEl: V,
                            name: "sort",
                            toEl: V,
                            fromEl: $,
                            originalEvent: t
                          }),
                          U({
                            sortable: this,
                            name: "sort",
                            toEl: V,
                            originalEvent: t
                          })),
                        lt && lt.save())
                      : ot !== nt &&
                        0 <= ot &&
                        (U({
                          sortable: this,
                          name: "update",
                          toEl: V,
                          originalEvent: t
                        }),
                        U({
                          sortable: this,
                          name: "sort",
                          toEl: V,
                          originalEvent: t
                        })),
                    Bt.active &&
                      ((null != ot && -1 !== ot) || ((ot = nt), (rt = it)),
                      U({
                        sortable: this,
                        name: "end",
                        toEl: V,
                        originalEvent: t
                      }),
                      this.save())))),
              this._nulling()
          },
          _nulling: function () {
            z("nulling", this),
              ($ =
                q =
                V =
                Z =
                Q =
                tt =
                J =
                et =
                st =
                ct =
                pt =
                ot =
                rt =
                nt =
                it =
                gt =
                mt =
                lt =
                at =
                Bt.dragged =
                Bt.ghost =
                Bt.clone =
                Bt.active =
                  null),
              Tt.forEach(function (t) {
                t.checked = !0
              }),
              (Tt.length = ut = dt = 0)
          },
          handleEvent: function (t) {
            switch (t.type) {
              case "drop":
              case "dragend":
                this._onDrop(t)
                break
              case "dragenter":
              case "dragover":
                q &&
                  (this._onDragOver(t),
                  (function (t) {
                    t.dataTransfer && (t.dataTransfer.dropEffect = "move")
                    t.cancelable && t.preventDefault()
                  })(t))
                break
              case "selectstart":
                t.preventDefault()
            }
          },
          toArray: function () {
            for (
              var t,
                e = [],
                n = this.el.children,
                o = 0,
                i = n.length,
                r = this.options;
              o < i;
              o++
            )
              N((t = n[o]), r.draggable, this.el, !1) &&
                e.push(
                  t.getAttribute(r.dataIdAttr) ||
                    (function (t) {
                      var e =
                          t.tagName +
                          t.className +
                          t.src +
                          t.href +
                          t.textContent,
                        n = e.length,
                        o = 0
                      for (; n--; ) o += e.charCodeAt(n)
                      return o.toString(36)
                    })(t)
                )
            return e
          },
          sort: function (t, e) {
            var n = {},
              o = this.el
            this.toArray().forEach(function (t, e) {
              e = o.children[e]
              N(e, this.options.draggable, o, !1) && (n[t] = e)
            }, this),
              e && this.captureAnimationState(),
              t.forEach(function (t) {
                n[t] && (o.removeChild(n[t]), o.appendChild(n[t]))
              }),
              e && this.animateAll()
          },
          save: function () {
            var t = this.options.store
            t && t.set && t.set(this)
          },
          closest: function (t, e) {
            return N(t, e || this.options.draggable, this.el, !1)
          },
          option: function (t, e) {
            var n = this.options
            if (void 0 === e) return n[t]
            var o = K.modifyOption(this, t, e)
            ;(n[t] = void 0 !== o ? o : e), "group" === t && Pt(n)
          },
          destroy: function () {
            z("destroy", this)
            var t = this.el
            ;(t[j] = null),
              f(t, "mousedown", this._onTapStart),
              f(t, "touchstart", this._onTapStart),
              f(t, "pointerdown", this._onTapStart),
              this.nativeDraggable &&
                (f(t, "dragover", this), f(t, "dragenter", this)),
              Array.prototype.forEach.call(
                t.querySelectorAll("[draggable]"),
                function (t) {
                  t.removeAttribute("draggable")
                }
              ),
              this._onDrop(),
              this._disableDelayedDragEvents(),
              Et.splice(Et.indexOf(this.el), 1),
              (this.el = t = null)
          },
          _hideClone: function () {
            et ||
              (z("hideClone", this),
              Bt.eventCanceled ||
                (P(tt, "display", "none"),
                this.options.removeCloneOnHide &&
                  tt.parentNode &&
                  tt.parentNode.removeChild(tt),
                (et = !0)))
          },
          _showClone: function (t) {
            "clone" === t.lastPutMode
              ? et &&
                (z("showClone", this),
                Bt.eventCanceled ||
                  (q.parentNode != $ || this.options.group.revertClone
                    ? Q
                      ? $.insertBefore(tt, Q)
                      : $.appendChild(tt)
                    : $.insertBefore(tt, q),
                  this.options.group.revertClone && this.animate(q, tt),
                  P(tt, "display", ""),
                  (et = !1)))
              : this._hideClone()
          }
        }),
          xt &&
            h(document, "touchmove", function (t) {
              ;(Bt.active || yt) && t.cancelable && t.preventDefault()
            }),
          (Bt.utils = {
            on: h,
            off: f,
            css: P,
            find: b,
            is: function (t, e) {
              return !!N(t, e, t, !1)
            },
            extend: function (t, e) {
              if (t && e) for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
              return t
            },
            throttle: S,
            closest: N,
            toggleClass: I,
            clone: _,
            index: B,
            nextTick: Lt,
            cancelNextTick: Kt,
            detectDirection: It,
            getChild: X
          }),
          (Bt.get = function (t) {
            return t[j]
          }),
          (Bt.mount = function () {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
              e[n] = arguments[n]
            ;(e = e[0].constructor === Array ? e[0] : e).forEach(function (t) {
              if (!t.prototype || !t.prototype.constructor)
                throw "Sortable: Mounted plugin must be a constructor function, not ".concat(
                  {}.toString.call(t)
                )
              t.utils && (Bt.utils = M(M({}, Bt.utils), t.utils)), K.mount(t)
            })
          }),
          (Bt.create = function (t, e) {
            return new Bt(t, e)
          })
        var Wt,
          zt,
          Gt,
          Ut,
          qt,
          Vt,
          Zt = [],
          $t = !(Bt.version = "1.15.0")
        function Qt() {
          Zt.forEach(function (t) {
            clearInterval(t.pid)
          }),
            (Zt = [])
        }
        function Jt() {
          clearInterval(Vt)
        }
        var te,
          ee = S(function (n, t, e, o) {
            if (t.scroll) {
              var i,
                r = (n.touches ? n.touches[0] : n).clientX,
                a = (n.touches ? n.touches[0] : n).clientY,
                l = t.scrollSensitivity,
                s = t.scrollSpeed,
                c = O(),
                u = !1
              zt !== e &&
                ((zt = e),
                Qt(),
                (Wt = t.scroll),
                (i = t.scrollFn),
                !0 === Wt && (Wt = A(e, !0)))
              var d = 0,
                h = Wt
              do {
                var f = h,
                  p = k(f),
                  g = p.top,
                  m = p.bottom,
                  v = p.left,
                  b = p.right,
                  y = p.width,
                  w = p.height,
                  E = void 0,
                  D = void 0,
                  S = f.scrollWidth,
                  _ = f.scrollHeight,
                  C = P(f),
                  T = f.scrollLeft,
                  p = f.scrollTop,
                  D =
                    f === c
                      ? ((E =
                          y < S &&
                          ("auto" === C.overflowX ||
                            "scroll" === C.overflowX ||
                            "visible" === C.overflowX)),
                        w < _ &&
                          ("auto" === C.overflowY ||
                            "scroll" === C.overflowY ||
                            "visible" === C.overflowY))
                      : ((E =
                          y < S &&
                          ("auto" === C.overflowX || "scroll" === C.overflowX)),
                        w < _ &&
                          ("auto" === C.overflowY || "scroll" === C.overflowY)),
                  T =
                    E &&
                    (Math.abs(b - r) <= l && T + y < S) -
                      (Math.abs(v - r) <= l && !!T),
                  p =
                    D &&
                    (Math.abs(m - a) <= l && p + w < _) -
                      (Math.abs(g - a) <= l && !!p)
                if (!Zt[d]) for (var x = 0; x <= d; x++) Zt[x] || (Zt[x] = {})
                ;(Zt[d].vx == T && Zt[d].vy == p && Zt[d].el === f) ||
                  ((Zt[d].el = f),
                  (Zt[d].vx = T),
                  (Zt[d].vy = p),
                  clearInterval(Zt[d].pid),
                  (0 == T && 0 == p) ||
                    ((u = !0),
                    (Zt[d].pid = setInterval(
                      function () {
                        o && 0 === this.layer && Bt.active._onTouchMove(qt)
                        var t = Zt[this.layer].vy ? Zt[this.layer].vy * s : 0,
                          e = Zt[this.layer].vx ? Zt[this.layer].vx * s : 0
                        ;("function" == typeof i &&
                          "continue" !==
                            i.call(
                              Bt.dragged.parentNode[j],
                              e,
                              t,
                              n,
                              qt,
                              Zt[this.layer].el
                            )) ||
                          F(Zt[this.layer].el, e, t)
                      }.bind({ layer: d }),
                      24
                    )))),
                  d++
              } while (t.bubbleScroll && h !== c && (h = A(h, !1)))
              $t = u
            }
          }, 30),
          c = function (t) {
            var e = t.originalEvent,
              n = t.putSortable,
              o = t.dragEl,
              i = t.activeSortable,
              r = t.dispatchSortableEvent,
              a = t.hideGhostForTarget,
              t = t.unhideGhostForTarget
            e &&
              ((i = n || i),
              a(),
              (e =
                e.changedTouches && e.changedTouches.length
                  ? e.changedTouches[0]
                  : e),
              (e = document.elementFromPoint(e.clientX, e.clientY)),
              t(),
              i &&
                !i.el.contains(e) &&
                (r("spill"), this.onSpill({ dragEl: o, putSortable: n })))
          }
        function ne() {}
        function oe() {}
        ;(ne.prototype = {
          startIndex: null,
          dragStart: function (t) {
            t = t.oldDraggableIndex
            this.startIndex = t
          },
          onSpill: function (t) {
            var e = t.dragEl,
              n = t.putSortable
            this.sortable.captureAnimationState(),
              n && n.captureAnimationState()
            t = X(this.sortable.el, this.startIndex, this.options)
            t
              ? this.sortable.el.insertBefore(e, t)
              : this.sortable.el.appendChild(e),
              this.sortable.animateAll(),
              n && n.animateAll()
          },
          drop: c
        }),
          a(ne, { pluginName: "revertOnSpill" }),
          (oe.prototype = {
            onSpill: function (t) {
              var e = t.dragEl,
                t = t.putSortable || this.sortable
              t.captureAnimationState(),
                e.parentNode && e.parentNode.removeChild(e),
                t.animateAll()
            },
            drop: c
          }),
          a(oe, { pluginName: "removeOnSpill" })
        var ie,
          re,
          ae,
          le,
          se,
          ce = [],
          ue = [],
          de = !1,
          he = !1,
          fe = !1
        function pe(n, o) {
          ue.forEach(function (t, e) {
            e = o.children[t.sortableIndex + (n ? Number(e) : 0)]
            e ? o.insertBefore(t, e) : o.appendChild(t)
          })
        }
        function ge() {
          ce.forEach(function (t) {
            t !== ae && t.parentNode && t.parentNode.removeChild(t)
          })
        }
        return (
          Bt.mount(
            new (function () {
              function t() {
                for (var t in ((this.defaults = {
                  scroll: !0,
                  forceAutoScrollFallback: !1,
                  scrollSensitivity: 30,
                  scrollSpeed: 10,
                  bubbleScroll: !0
                }),
                this))
                  "_" === t.charAt(0) &&
                    "function" == typeof this[t] &&
                    (this[t] = this[t].bind(this))
              }
              return (
                (t.prototype = {
                  dragStarted: function (t) {
                    t = t.originalEvent
                    this.sortable.nativeDraggable
                      ? h(document, "dragover", this._handleAutoScroll)
                      : this.options.supportPointer
                      ? h(
                          document,
                          "pointermove",
                          this._handleFallbackAutoScroll
                        )
                      : t.touches
                      ? h(document, "touchmove", this._handleFallbackAutoScroll)
                      : h(document, "mousemove", this._handleFallbackAutoScroll)
                  },
                  dragOverCompleted: function (t) {
                    t = t.originalEvent
                    this.options.dragOverBubble ||
                      t.rootEl ||
                      this._handleAutoScroll(t)
                  },
                  drop: function () {
                    this.sortable.nativeDraggable
                      ? f(document, "dragover", this._handleAutoScroll)
                      : (f(
                          document,
                          "pointermove",
                          this._handleFallbackAutoScroll
                        ),
                        f(
                          document,
                          "touchmove",
                          this._handleFallbackAutoScroll
                        ),
                        f(
                          document,
                          "mousemove",
                          this._handleFallbackAutoScroll
                        )),
                      Jt(),
                      Qt(),
                      clearTimeout(g),
                      (g = void 0)
                  },
                  nulling: function () {
                    ;(qt = zt = Wt = $t = Vt = Gt = Ut = null), (Zt.length = 0)
                  },
                  _handleFallbackAutoScroll: function (t) {
                    this._handleAutoScroll(t, !0)
                  },
                  _handleAutoScroll: function (e, n) {
                    var o,
                      i = this,
                      r = (e.touches ? e.touches[0] : e).clientX,
                      a = (e.touches ? e.touches[0] : e).clientY,
                      t = document.elementFromPoint(r, a)
                    ;(qt = e),
                      n || this.options.forceAutoScrollFallback || w || y || u
                        ? (ee(e, this.options, t, n),
                          (o = A(t, !0)),
                          !$t ||
                            (Vt && r === Gt && a === Ut) ||
                            (Vt && Jt(),
                            (Vt = setInterval(function () {
                              var t = A(document.elementFromPoint(r, a), !0)
                              t !== o && ((o = t), Qt()), ee(e, i.options, t, n)
                            }, 10)),
                            (Gt = r),
                            (Ut = a)))
                        : this.options.bubbleScroll && A(t, !0) !== O()
                        ? ee(e, this.options, A(t, !1), !1)
                        : Qt()
                  }
                }),
                a(t, { pluginName: "scroll", initializeByDefault: !0 })
              )
            })()
          ),
          Bt.mount(oe, ne),
          Bt.mount(
            new (function () {
              function t() {
                this.defaults = { swapClass: "sortable-swap-highlight" }
              }
              return (
                (t.prototype = {
                  dragStart: function (t) {
                    t = t.dragEl
                    te = t
                  },
                  dragOverValid: function (t) {
                    var e = t.completed,
                      n = t.target,
                      o = t.onMove,
                      i = t.activeSortable,
                      r = t.changed,
                      a = t.cancel
                    i.options.swap &&
                      ((t = this.sortable.el),
                      (i = this.options),
                      n &&
                        n !== t &&
                        ((t = te),
                        (te = !1 !== o(n) ? (I(n, i.swapClass, !0), n) : null),
                        t && t !== te && I(t, i.swapClass, !1)),
                      r(),
                      e(!0),
                      a())
                  },
                  drop: function (t) {
                    var e,
                      n,
                      o = t.activeSortable,
                      i = t.putSortable,
                      r = t.dragEl,
                      a = i || this.sortable,
                      l = this.options
                    te && I(te, l.swapClass, !1),
                      te &&
                        (l.swap || (i && i.options.swap)) &&
                        r !== te &&
                        (a.captureAnimationState(),
                        a !== o && o.captureAnimationState(),
                        (n = te),
                        (t = (e = r).parentNode),
                        (l = n.parentNode),
                        t &&
                          l &&
                          !t.isEqualNode(n) &&
                          !l.isEqualNode(e) &&
                          ((i = B(e)),
                          (r = B(n)),
                          t.isEqualNode(l) && i < r && r++,
                          t.insertBefore(n, t.children[i]),
                          l.insertBefore(e, l.children[r])),
                        a.animateAll(),
                        a !== o && o.animateAll())
                  },
                  nulling: function () {
                    te = null
                  }
                }),
                a(t, {
                  pluginName: "swap",
                  eventProperties: function () {
                    return { swapItem: te }
                  }
                })
              )
            })()
          ),
          Bt.mount(
            new (function () {
              function t(o) {
                for (var t in this)
                  "_" === t.charAt(0) &&
                    "function" == typeof this[t] &&
                    (this[t] = this[t].bind(this))
                o.options.avoidImplicitDeselect ||
                  (o.options.supportPointer
                    ? h(document, "pointerup", this._deselectMultiDrag)
                    : (h(document, "mouseup", this._deselectMultiDrag),
                      h(document, "touchend", this._deselectMultiDrag))),
                  h(document, "keydown", this._checkKeyDown),
                  h(document, "keyup", this._checkKeyUp),
                  (this.defaults = {
                    selectedClass: "sortable-selected",
                    multiDragKey: null,
                    avoidImplicitDeselect: !1,
                    setData: function (t, e) {
                      var n = ""
                      ce.length && re === o
                        ? ce.forEach(function (t, e) {
                            n += (e ? ", " : "") + t.textContent
                          })
                        : (n = e.textContent),
                        t.setData("Text", n)
                    }
                  })
              }
              return (
                (t.prototype = {
                  multiDragKeyDown: !1,
                  isMultiDrag: !1,
                  delayStartGlobal: function (t) {
                    t = t.dragEl
                    ae = t
                  },
                  delayEnded: function () {
                    this.isMultiDrag = ~ce.indexOf(ae)
                  },
                  setupClone: function (t) {
                    var e = t.sortable,
                      t = t.cancel
                    if (this.isMultiDrag) {
                      for (var n = 0; n < ce.length; n++)
                        ue.push(_(ce[n])),
                          (ue[n].sortableIndex = ce[n].sortableIndex),
                          (ue[n].draggable = !1),
                          (ue[n].style["will-change"] = ""),
                          I(ue[n], this.options.selectedClass, !1),
                          ce[n] === ae && I(ue[n], this.options.chosenClass, !1)
                      e._hideClone(), t()
                    }
                  },
                  clone: function (t) {
                    var e = t.sortable,
                      n = t.rootEl,
                      o = t.dispatchSortableEvent,
                      t = t.cancel
                    this.isMultiDrag &&
                      (this.options.removeCloneOnHide ||
                        (ce.length && re === e && (pe(!0, n), o("clone"), t())))
                  },
                  showClone: function (t) {
                    var e = t.cloneNowShown,
                      n = t.rootEl,
                      t = t.cancel
                    this.isMultiDrag &&
                      (pe(!1, n),
                      ue.forEach(function (t) {
                        P(t, "display", "")
                      }),
                      e(),
                      (se = !1),
                      t())
                  },
                  hideClone: function (t) {
                    var e = this,
                      n = (t.sortable, t.cloneNowHidden),
                      t = t.cancel
                    this.isMultiDrag &&
                      (ue.forEach(function (t) {
                        P(t, "display", "none"),
                          e.options.removeCloneOnHide &&
                            t.parentNode &&
                            t.parentNode.removeChild(t)
                      }),
                      n(),
                      (se = !0),
                      t())
                  },
                  dragStartGlobal: function (t) {
                    t.sortable
                    !this.isMultiDrag &&
                      re &&
                      re.multiDrag._deselectMultiDrag(),
                      ce.forEach(function (t) {
                        t.sortableIndex = B(t)
                      }),
                      (ce = ce.sort(function (t, e) {
                        return t.sortableIndex - e.sortableIndex
                      })),
                      (fe = !0)
                  },
                  dragStarted: function (t) {
                    var e,
                      n = this,
                      t = t.sortable
                    this.isMultiDrag &&
                      (this.options.sort &&
                        (t.captureAnimationState(),
                        this.options.animation &&
                          (ce.forEach(function (t) {
                            t !== ae && P(t, "position", "absolute")
                          }),
                          (e = k(ae, !1, !0, !0)),
                          ce.forEach(function (t) {
                            t !== ae && C(t, e)
                          }),
                          (de = he = !0))),
                      t.animateAll(function () {
                        ;(de = he = !1),
                          n.options.animation &&
                            ce.forEach(function (t) {
                              T(t)
                            }),
                          n.options.sort && ge()
                      }))
                  },
                  dragOver: function (t) {
                    var e = t.target,
                      n = t.completed,
                      t = t.cancel
                    he && ~ce.indexOf(e) && (n(!1), t())
                  },
                  revert: function (t) {
                    var n,
                      o,
                      e = t.fromSortable,
                      i = t.rootEl,
                      r = t.sortable,
                      a = t.dragRect
                    1 < ce.length &&
                      (ce.forEach(function (t) {
                        r.addAnimationState({ target: t, rect: he ? k(t) : a }),
                          T(t),
                          (t.fromRect = a),
                          e.removeAnimationState(t)
                      }),
                      (he = !1),
                      (n = !this.options.removeCloneOnHide),
                      (o = i),
                      ce.forEach(function (t, e) {
                        e = o.children[t.sortableIndex + (n ? Number(e) : 0)]
                        e ? o.insertBefore(t, e) : o.appendChild(t)
                      }))
                  },
                  dragOverCompleted: function (t) {
                    var e,
                      n = t.sortable,
                      o = t.isOwner,
                      i = t.insertion,
                      r = t.activeSortable,
                      a = t.parentEl,
                      l = t.putSortable,
                      t = this.options
                    i &&
                      (o && r._hideClone(),
                      (de = !1),
                      t.animation &&
                        1 < ce.length &&
                        (he || (!o && !r.options.sort && !l)) &&
                        ((e = k(ae, !1, !0, !0)),
                        ce.forEach(function (t) {
                          t !== ae && (C(t, e), a.appendChild(t))
                        }),
                        (he = !0)),
                      o ||
                        (he || ge(),
                        1 < ce.length
                          ? ((o = se),
                            r._showClone(n),
                            r.options.animation &&
                              !se &&
                              o &&
                              ue.forEach(function (t) {
                                r.addAnimationState({ target: t, rect: le }),
                                  (t.fromRect = le),
                                  (t.thisAnimationDuration = null)
                              }))
                          : r._showClone(n)))
                  },
                  dragOverAnimationCapture: function (t) {
                    var e = t.dragRect,
                      n = t.isOwner,
                      t = t.activeSortable
                    ce.forEach(function (t) {
                      t.thisAnimationDuration = null
                    }),
                      t.options.animation &&
                        !n &&
                        t.multiDrag.isMultiDrag &&
                        ((le = a({}, e)),
                        (e = v(ae, !0)),
                        (le.top -= e.f),
                        (le.left -= e.e))
                  },
                  dragOverAnimationComplete: function () {
                    he && ((he = !1), ge())
                  },
                  drop: function (t) {
                    var e = t.originalEvent,
                      n = t.rootEl,
                      o = t.parentEl,
                      i = t.sortable,
                      r = t.dispatchSortableEvent,
                      a = t.oldIndex,
                      l = t.putSortable,
                      s = l || this.sortable
                    if (e) {
                      var c,
                        u,
                        d,
                        h = this.options,
                        f = o.children
                      if (!fe)
                        if (
                          (h.multiDragKey &&
                            !this.multiDragKeyDown &&
                            this._deselectMultiDrag(),
                          I(ae, h.selectedClass, !~ce.indexOf(ae)),
                          ~ce.indexOf(ae))
                        )
                          ce.splice(ce.indexOf(ae), 1),
                            (ie = null),
                            W({
                              sortable: i,
                              rootEl: n,
                              name: "deselect",
                              targetEl: ae,
                              originalEvent: e
                            })
                        else {
                          if (
                            (ce.push(ae),
                            W({
                              sortable: i,
                              rootEl: n,
                              name: "select",
                              targetEl: ae,
                              originalEvent: e
                            }),
                            e.shiftKey && ie && i.el.contains(ie))
                          ) {
                            var p = B(ie),
                              t = B(ae)
                            if (~p && ~t && p !== t)
                              for (
                                var g,
                                  m = p < t ? ((g = p), t) : ((g = t), p + 1);
                                g < m;
                                g++
                              )
                                ~ce.indexOf(f[g]) ||
                                  (I(f[g], h.selectedClass, !0),
                                  ce.push(f[g]),
                                  W({
                                    sortable: i,
                                    rootEl: n,
                                    name: "select",
                                    targetEl: f[g],
                                    originalEvent: e
                                  }))
                          } else ie = ae
                          re = s
                        }
                      fe &&
                        this.isMultiDrag &&
                        ((he = !1),
                        (o[j].options.sort || o !== n) &&
                          1 < ce.length &&
                          ((c = k(ae)),
                          (u = B(
                            ae,
                            ":not(." + this.options.selectedClass + ")"
                          )),
                          !de &&
                            h.animation &&
                            (ae.thisAnimationDuration = null),
                          s.captureAnimationState(),
                          de ||
                            (h.animation &&
                              ((ae.fromRect = c),
                              ce.forEach(function (t) {
                                var e
                                ;(t.thisAnimationDuration = null),
                                  t !== ae &&
                                    ((e = he ? k(t) : c),
                                    (t.fromRect = e),
                                    s.addAnimationState({ target: t, rect: e }))
                              })),
                            ge(),
                            ce.forEach(function (t) {
                              f[u] ? o.insertBefore(t, f[u]) : o.appendChild(t),
                                u++
                            }),
                            a === B(ae) &&
                              ((d = !1),
                              ce.forEach(function (t) {
                                t.sortableIndex !== B(t) && (d = !0)
                              }),
                              d && r("update"))),
                          ce.forEach(function (t) {
                            T(t)
                          }),
                          s.animateAll()),
                        (re = s)),
                        (n === o || (l && "clone" !== l.lastPutMode)) &&
                          ue.forEach(function (t) {
                            t.parentNode && t.parentNode.removeChild(t)
                          })
                    }
                  },
                  nullingGlobal: function () {
                    ;(this.isMultiDrag = fe = !1), (ue.length = 0)
                  },
                  destroyGlobal: function () {
                    this._deselectMultiDrag(),
                      f(document, "pointerup", this._deselectMultiDrag),
                      f(document, "mouseup", this._deselectMultiDrag),
                      f(document, "touchend", this._deselectMultiDrag),
                      f(document, "keydown", this._checkKeyDown),
                      f(document, "keyup", this._checkKeyUp)
                  },
                  _deselectMultiDrag: function (t) {
                    if (
                      !(
                        (void 0 !== fe && fe) ||
                        re !== this.sortable ||
                        (t &&
                          N(
                            t.target,
                            this.options.draggable,
                            this.sortable.el,
                            !1
                          )) ||
                        (t && 0 !== t.button)
                      )
                    )
                      for (; ce.length; ) {
                        var e = ce[0]
                        I(e, this.options.selectedClass, !1),
                          ce.shift(),
                          W({
                            sortable: this.sortable,
                            rootEl: this.sortable.el,
                            name: "deselect",
                            targetEl: e,
                            originalEvent: t
                          })
                      }
                  },
                  _checkKeyDown: function (t) {
                    t.key === this.options.multiDragKey &&
                      (this.multiDragKeyDown = !0)
                  },
                  _checkKeyUp: function (t) {
                    t.key === this.options.multiDragKey &&
                      (this.multiDragKeyDown = !1)
                  }
                }),
                a(t, {
                  pluginName: "multiDrag",
                  utils: {
                    select: function (t) {
                      var e = t.parentNode[j]
                      e &&
                        e.options.multiDrag &&
                        !~ce.indexOf(t) &&
                        (re &&
                          re !== e &&
                          (re.multiDrag._deselectMultiDrag(), (re = e)),
                        I(t, e.options.selectedClass, !0),
                        ce.push(t))
                    },
                    deselect: function (t) {
                      var e = t.parentNode[j],
                        n = ce.indexOf(t)
                      e &&
                        e.options.multiDrag &&
                        ~n &&
                        (I(t, e.options.selectedClass, !1), ce.splice(n, 1))
                    }
                  },
                  eventProperties: function () {
                    var n = this,
                      o = [],
                      i = []
                    return (
                      ce.forEach(function (t) {
                        var e
                        o.push({ multiDragElement: t, index: t.sortableIndex }),
                          (e =
                            he && t !== ae
                              ? -1
                              : he
                              ? B(t, ":not(." + n.options.selectedClass + ")")
                              : B(t)),
                          i.push({ multiDragElement: t, index: e })
                      }),
                      {
                        items: r(ce),
                        clones: [].concat(ue),
                        oldIndicies: o,
                        newIndicies: i
                      }
                    )
                  },
                  optionListeners: {
                    multiDragKey: function (t) {
                      return (
                        "ctrl" === (t = t.toLowerCase())
                          ? (t = "Control")
                          : 1 < t.length &&
                            (t = t.charAt(0).toUpperCase() + t.substr(1)),
                        t
                      )
                    }
                  }
                })
              )
            })()
          ),
          Bt
        )
      })
    </script>




		

    <script>

      /* ============================================ Code for Editor and addblocks */
      const ListInEditor = document.querySelector("#listEditor")
      const addblocks = document.querySelector("#addblocks")
      const mainBtnLabel = document.querySelector("#main-btn-label")
      const ListAddBlock = document.querySelector("#listAddBlock")
      const btnStart = document.querySelector("#btn-label5")
      const body = document.querySelector("body")

      mainBtnLabel.onclick = () => {
				mainBtnLabel.classList.toggle("active")
      }

      document.querySelectorAll('.btn-label').forEach((i, index) => {
			if (index === document.querySelectorAll('.btn-label').length - 1) {
				return
			}
			i.onclick = () => {
				let resultList = ListOfElements.filter((element) => element.color == i.dataset.mycolor)
				ListAddBlock.innerHTML = ""
				resultList.forEach((j) => {
					ListAddBlock.innerHTML += \`
						<li class="ElementsInEditor" onclick="addBlock(\${j.id});">
							<span style="color:\${ListOfElements[j.id].color}">
							\${j.text}
							</span>
						</li>\`

				})
				addblocks.classList.add("active")
				body.classList.add("no-scroll")
				addblocks.querySelector("#where-addblock").style.backgroundColor = i.dataset.mycolor
				mainBtnLabel.classList.remove("active")
			}
      })

			function addBlock(element) {
				let nameOfElement = "A" + Date.now() + Math.random().toString(32).slice(4)
				if(element==14||element==16){
					ListOfElements[element].standartParameter[1] = [nameOfElement]
					listOfTaps.push(nameOfElement)
				}
				ListInEditor.innerHTML += \`
					<li class="ElementsInEditor \${nameOfElement} \${ListOfElements[element].secondArgument ? "start" : ""}"
					style="\${ListOfElements[element].isfunction ? "margin-top: 15px;" : ""}">
						<div class="innerOfElement">
							<div class="my-handle" onclick="showBtnElement(event);"><span></span></div>
							<div class="btn-in-element">
								<div class="btn-delete" onclick="deleteElement(event);">
									<svg class="icon-delete-editor">
										<use xlink:href="#icon-delete"></use>
									</svg>
								</div>
							</div>
						<span style="color:\${ListOfElements[element].color}" class="elementText" data-id="\${element}" data-paramaters='\${JSON.stringify(ListOfElements[element].standartParameter)}'>
							\${ListOfElements[element].text}
						</span>
						</div >
						<span class="EditParameterBtn" onclick="changeparams(event);">
							<svg class="icon-delete-editor">
								<use xlink:href="#icon-edit"></use>
							</svg>
						</span>
					</li >\`
				if (ListOfElements[element].secondArgument) {
					ListOfElements[element].secondArgument.forEach((i, index) => {
						ListInEditor.innerHTML += \`
							<li class="ElementsInEditor \${nameOfElement} \${index + 1 == ListOfElements[element].secondArgument.length ? "finish" : ""}">
								<div class="innerOfElement">
									<span style="margin-left: 38px; color:\${ListOfElements[element].color};" class="elementText" data-id="\${index + 1 == ListOfElements[element].secondArgument.length ? "AMain" : "CONTI"}\${element}" data-paramaters='"\${i.code}"'>
										\${i.text}
									</span>
								</div >
							</li >\`
					})
				}
				saveData()
				addblocks.classList.remove("active")
				body.classList.remove("no-scroll")
			}
	
			function closeAddBlockParams() {
				ListAddBlock.innerHTML = ""
				addblocks.classList.remove("active")
				body.classList.remove("no-scroll")
			}
	
			function deleteElement(event) {
				if (event.target.closest('li').classList.contains("start")) {
					let firstElement = Array.from(ListInEditor.children).findIndex((i) => i == event.target.closest('li'))
					let listDelete = []
					for (let i = firstElement + 1; i < getTheListOfChangeElem(firstElement, 0) + 1; i++) {
						listDelete.push(ListInEditor.children[i])
					}
					listDelete.forEach((i) => i.remove())
					let dataListSet = event.target.closest('li').querySelector(".elementText")
					if (dataListSet.dataset.id == 14 || dataListSet.dataset.id == 16) {
						listOfTaps.splice(listOfTaps.indexOf(event.target.closest('li').classList[1]), 1)
					}
				}
				event.target.closest('li').remove()
				saveData()
			}
	
			function showBtnElement(event) {
				let element = event.target.closest(".innerOfElement").querySelector(".btn-in-element")
				if (element) {
					element.classList.toggle("active")
				}
			}
	
			function saveData(createCode="") {
				let a = []
				a.push({
					data: [...listOfData],
					functions: [...listOfFunct],
					taps: [...listOfTaps],
					name: "${name}"
				})
				let attachment = 0
				Array.from(ListInEditor.children).forEach((i, index) => {
					if (i.classList.contains("finish")) {
						attachment--
					}
					a.push({
						text: i.querySelector(".elementText").innerText,
						id: i.querySelector(".elementText").dataset.id,
						parameter: JSON.parse(i.querySelector(".elementText").dataset.paramaters),
						nameOfElement: i.classList[1],
						padding: attachment<6?attachment * 20:120
					})
					i.style.paddingLeft = a[index + 1].padding + "px"
					if (i.classList.contains("start")) {
						attachment++
					}
				})
				if (ListInEditor.children[0] > 0 && ListOfElements[ListInEditor.children[0].querySelector(".elementText").dataset.id].isfunction) {
					ListInEditor.children[0].style.marginTop = "0px"
				}
				window.ReactNativeWebView.postMessage(JSON.stringify(a)+createCode)
			}
	

			function codeCreator() {
				saveData("createCode")
			}
	
			function getTheListOfChangeElem(index, attachment) {
				if (ListInEditor.children[index].classList.contains("finish")) {
					attachment--
					if (attachment == 0) {
						return index
					}
				}
				if (ListInEditor.children[index].classList.contains("start")) {
					attachment++
				}
				index++
				return getTheListOfChangeElem(index, attachment)
			}
			
			let listOfchangeElemnents = []
			let sortable = Sortable.create(ListInEditor, {
				handle: '.my-handle',
				animation: 150,
				filter: '.filtered',
				fallbackTolerance: 5,
				delay: 15,
				onStart: (evt) => {
					if (evt.item.classList.contains("start")) {
						listOfchangeElemnents = []
						for (let i = evt.oldIndex + 1; i < getTheListOfChangeElem(evt.oldIndex, 0) + 1; i++) {
							listOfchangeElemnents.push(ListInEditor.children[i])
							ListInEditor.children[i].style.display = "none"
						}
					}
				},
				onEnd: (evt) => {
					if(evt.newIndex==0 && ListOfElements[ListInEditor.children[1].querySelector(".elementText").dataset.id].isfunction){
						ListInEditor.children[1].style.marginTop = "15px"
					}
					if (evt.item.classList.contains("start")) {
						if (ListOfElements[evt.item.querySelector(".elementText").dataset.id].isfunction) {
							evt.item.style.marginTop = "15px"
						}
						listOfchangeElemnents.reverse()
						listOfchangeElemnents.forEach((i) => {
							evt.item.after(i)
							i.style.display = "flex"
						})
						listOfchangeElemnents = []
					}
				},
				store: {
					get: function (sortable) {
						let result = ${data}	
						if (!result) return
						if (result[0]) {
							listOfData = [...result[0].data]
							listOfFunct = [...result[0].functions]
							listOfTaps = [...result[0].taps]
						}
						result.shift()
						result.forEach((i, index) => {
							if (i.id.startsWith('AMain') || i.id.startsWith('CONTI')) {
								ListInEditor.innerHTML += \`
									<li class="ElementsInEditor \${i.nameOfElement} \${i.id.startsWith('AMain') ? 'finish' : ''}" style="padding-left: \${i.padding}px">
										<div class="innerOfElement">
											<span style="margin-left: 38px; color:\${ListOfElements[i.id.slice(5)].color};" class="elementText" data-id="\${i.id}" data-paramaters='"\${i.parameter}"'>
												\${i.text}
											</span>
										</div >
									</li >\`
								return
							}
							ListInEditor.innerHTML += \`
					<li class="ElementsInEditor \${i.nameOfElement} \${ListOfElements[i.id].secondArgument ? "start" : ""}" style="padding-left: \${i.padding}px; \${
            ListOfElements[i.id].isfunction && index != 0
              ? "margin-top: 15px;"
              : ""
          }">
									<div class="innerOfElement">
										<div class="my-handle" onclick="showBtnElement(event);"><span></span></div>
										<div class="btn-in-element">
											<div class="btn-delete" onclick="deleteElement(event);">
												<svg class="icon-delete-editor">
													<use xlink:href="#icon-delete"></use>
												</svg>
											</div>
										</div>
										<span style="color:\${ListOfElements[i.id].color}" class="elementText" data-id="\${i.id}" data-paramaters='\${JSON.stringify(i.parameter)}'>
										\${i.text}
										</span>
									</div>
									<span class="EditParameterBtn" onclick="changeparams(event);">
										<svg class="icon-delete-editor">
											<use xlink:href="#icon-edit"></use>
										</svg>
							</span>
								</li >\`
						})
					},
	
					set: function (sortable) {
						/* Save Data */
						saveData()
					}
				}
			})
    </script>





    <script>

      /* ============================================ Code for Edit Params */
      const editparams = document.querySelector('#editparams')
      const where = editparams.querySelector('#inner-where')
      const result = editparams.querySelector('#result')
      const dataList = editparams.querySelector('#dataList')
      const functList = editparams.querySelector('#functList')


      document.querySelector('#tree').onclick = (event) => {
				if(event.target.classList.contains("mainLi")){
					event.target.classList.toggle("LiAfterTap")
				}
      }

      // Create variable =============================>

      let TextInWhereOnStart = "hi"
      let listOfChageParams = []

      let List = []
      let listOfParams = []
      let position = 0
      let whichPosition = 0 //which Parameter
      let editingElement = 0 //Element that editing now
			let idOfElement = 0//Id of editing element


      function changeparams(event) {
				whichPosition = 0
				editingElement = event.target.closest(".ElementsInEditor").querySelector('.elementText')
				idOfElement = event.target.closest(".ElementsInEditor").querySelector('.elementText').dataset.id
				TextInWhereOnStart = ListOfElements[idOfElement].text
				if(ListOfElements[idOfElement].textInWhere) {
					TextInWhereOnStart = ListOfElements[idOfElement].textInWhere
				}
				listOfChageParams = ListOfElements[idOfElement].listChengers
				List = JSON.parse(event.target.closest(".ElementsInEditor").querySelector('.elementText').dataset.paramaters)
				onStart()
				history.pushState(null, null, window.location)
				document.querySelectorAll(".LiAfterTap").forEach((i) => i.classList.remove("LiAfterTap"))
				editparams.querySelector('#where').style.backgroundColor = ListOfElements[idOfElement].color
				editparams.classList.add("active")
				body.classList.add("no-scroll")
      }

      // Different Function ===================>

      function closeEditParams() {
				editparams.classList.remove("active")
				body.classList.remove("no-scroll")
				history.back()
      }

      function createVarieble(isData) {
				event.stopPropagation()
				let resultat = prompt(isData ? '⠀⠀Create Data' : '⠀⠀Create Function')
				if (!resultat) return
				resultat = resultat.replace(/\\s/g, '')
				if (!resultat) return
				if (listOfData.includes(resultat)) return
				(isData ? listOfData : listOfFunct).push(String(resultat).slice(0, 9))
				chengeDataList(isData)
      }

      function daleteVarOrFunc(isData, element) {
			if (!confirm(\`Delete \${element}\`)) return
			let listh = isData ? listOfData : listOfFunct
			listh.splice(listh.indexOf(element), 1)
			chengeDataList(isData)
			saveData()
      }

      function chengeDataList(isData) {
			let resultat = (isData ? listOfData : listOfFunct).reduce((a, b) => {
				return a + \`<li>
					<span class="nameOfvarieble" onclick="tapofbtn('\${b}'); event.stopPropagation();">\${b}</span>
					<span class="btn-delete" onclick="daleteVarOrFunc(\${isData}, '\${b}'); event.stopPropagation();">
							<svg class="icon-delete-editor">
								<use xlink:href="#icon-delete"></use>
							</svg>
					</span>
					</li>\`
			}, '')
			if (isData) {
				resultat += '<li style="color: #777; display: block;" onclick="createVarieble(true)">+Create</li>'
				dataList.innerHTML = resultat
			} else {
				resultat += '<li style="color: #777; display: block;" onclick="createVarieble(false)">+Create</li>'
				functList.innerHTML = resultat
			}
      }

      function setTextInWhere() {
			let resultat = TextInWhereOnStart
			let realChenge = []
			for (let i = 0; i < listOfChageParams.length; i++) {
				resultat = resultat.replace(listOfChageParams[i], \`<button class='whereBtn' onClick = "newParameter(\${i});"> </button >\`)
				if (List[i].length > 0) {
					realChenge.push(List[i].reduce((a, b) => a + b))
				} else {
					realChenge.push(' ')
				}
			}
			where.innerHTML = resultat
			let whereBtns = document.querySelectorAll('.whereBtn')
			whereBtns.forEach((i, index) => i.textContent = realChenge[index])
      }

      function changeText() {
			let textFromList = ""
			if (listOfParams.length > 0) {
				let textFromList = listOfParams.reduce((a, b, i) => {
					let c = ""
					if (i == 0 && position == 0) {
						return c = "|" + String(b)
					}
					c = String(a) + String(b)
					if (i + 1 == position) {
						c += "|"
					}
					return c
				}, '')
				result.textContent = textFromList
			} else {
				result.textContent = '|'
			}

			List[whichPosition] = listOfParams
			setTextInWhere()
			return textFromList
      }

      function newParameter(parameter) {
			if (parameter !== whichPosition) {
				whichPosition = parameter
				onStart()
			}
      }

      function addTextOrCode(isText) {
			let defaultParameter = ''
			if (position < listOfParams.length) {
				if (isText && listOfParams[position].startsWith('"')) {
					defaultParameter = listOfParams[position].slice(1, -1)
				} else
					if (!isText && listOfParams[position].startsWith(" ")) {
						defaultParameter = listOfParams[position].substring(1)
					}
			}
			let userAnswer = prompt(isText ? '⠀⠀Enter Text' : '⠀⠀Write Code', defaultParameter)
			if (userAnswer) {
				let numberOfDelate = 0
				if (defaultParameter.length > 0) {
					numberOfDelate = 1
				}
				listOfParams.splice(position, numberOfDelate, isText ? '"' + userAnswer + '"' : " " + userAnswer)
				position++
			}
			userAnswer = ''
      }

      function tapOfFunctionBtn() {
			event.stopPropagation()
			for (let index = 1; index < arguments.length; index++) {
				listOfParams.splice(position, 0, arguments[index])
				position++
			}
			position -= arguments[0]
			changeText()
      }

      function tapofbtn(text) {
			event.stopPropagation()
			switch (text) {
				case "@0left**":
					if (position > 0) {
						position--
					} else {
						position = 0
					}
					break
				case "@0right**":
					if (position < listOfParams.length) {
						position++
					} else {
						position = listOfParams.length
					}
					break
				case "@0Text**":
					addTextOrCode(true)
					break
				case "@0Code**":
					addTextOrCode(false)
					break
				case "@0delete**":
					if (listOfParams.length > 0) {
						if (position > 0) {
							listOfParams.splice(position - 1, 1)
							position--
						}
					} else {
						listOfParams = []
						position = 0
					}
					break
				case "@0Ok**":
					let textInEditor = ListOfElements[idOfElement].text
					let maxTextWidth = Math.floor((window.screen.availWidth - ListOfElements[idOfElement].text.length * 10) / 17)
					for (let i = 0; i < listOfChageParams.length; i++) {
						let realChenge = List[i].reduce((a, b) => a + b).slice(0, maxTextWidth)
						textInEditor = textInEditor.replace(listOfChageParams[i], realChenge)
					}
					editingElement.dataset.paramaters = JSON.stringify(List)
					editingElement.textContent = textInEditor
					saveData()
					closeEditParams()
					break
				default:
					listOfParams.splice(position, 0, text)
					position++
					break
			}
			changeText()
      }

      function onStart() {
				listOfParams = List[whichPosition]
				position = listOfParams.length
				chengeDataList(true)
				chengeDataList(false)
				changeText()
      }
    </script>
  </body>
</html>`
}
