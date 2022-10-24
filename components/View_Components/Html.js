import React from "react"

export default function Html(a) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, user-scalable=no">
	<title>View</title>
</head>
<body>
	<div id="main"></div>
	<canvas style="display: block;" width="10" height="10"></canvas>
	<script>
	const element = document.querySelector('#main')
		${a}
	</script>
</body>
</html>`
}
