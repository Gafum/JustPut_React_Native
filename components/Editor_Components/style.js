export default function Style(theme) {
  return `
	* {
		margin: 0%;
		padding: 0%;
		font-family: "Cuprum", sans-serif;
		box-sizing: border-box;
		user-select: none;
	}

	html, body {
		height: 100%;
		width: 100%;
		background-color: ${theme ? "#333366" : "white"};
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
		transition: background-color 5s ease;
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
		min-width: 30px;
		max-width: 32px;
		height: 30px;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
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

	.my-handle-inner {
		position: absolute;
		width: 80px;
		height: 35px;
		left: 0;
		top: 0;
		z-index: 20;
		background-color: transparent;
	}

	.my-handle-inner.active {
		width: 30px;
	}

	.my-handle > span::before,
	.my-handle > span::after {
		content: "";
		position: absolute;
		height: 100%;
		width: 100%;
		border-radius: 100%;
		display: inline-block;
		background-color: black;
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
		transition: transform 0.2s;
		display: flex;
		width: 30px;
		gap: 3px;
	}

	.btn-in-element.active {
		transform: scaleX(1);
		width: max-content;
	}

	.btn-delete {
		width: 25px;
		height: 25px;
		background-color: red;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 5px;
		transition: filter .4s;
	}

	.btn-delete:hover{
		filter: brightness(175%);
	}

	.btn-delete:active{
		filter: brightness(175%);
		box-shadow: 2px 2px 5px #888;
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
		transition: color 5s ease;
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
		background-color: ${theme ? "#333366" : "white"};
		top: 100%;
		width: 100vw;
		transition: all 0.4s;
		height: 100vh;
	}
	
	#addblocks{
		overflow-y: scroll;
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

	.where-addblock {
		height: fit-content;
		padding: 15px;
		display: flex;
		justify-content: flex-start;
		gap: 5px;
		align-items: center;
		width: 100%;
	}
	
	.where-addblock.fix{
		position: fixed;
	}

	#where button,
	.where-addblock > button {
		padding: 3px;
		border: none;
		outline: none;
		border-radius: 5px;
		max-width: 60px;
		min-width: 40px;
		background-color: #e3e3e3;
		overflow-x: scroll;
		scroll-behavior: smooth;
		white-space: pre;
		height: fit-content;
	}

	.where-addblock > span {
		font-size: 20px;
	}

	#where > button,
	.where-addblock > button {
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
	`
}
