<template>
  <div>
    <nuxt/>
  </div>
</template>

<style>
html {
	font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
		'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
	font-size: 16px;
	word-spacing: 1px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
}

*,
*:before,
*:after {
	box-sizing: border-box;
	margin: 0;
}

.button {
	display: block;
	border-radius: 4px;
	text-decoration: none;
	padding: 15px 30px;
	margin-bottom: 1.25rem;
	transition: all 0.2s ease-out;
}

.button--blue {
	border: 1px solid #1da1f2;
	color: #1da1f2;
}

.button--blue:hover {
	color: #fff;
	background-color: #1da1f2;
}

.button--green {
	border: 1px solid #3b8070;
	color: #3b8070;
}

.button--green:hover {
	color: #fff;
	background-color: #3b8070;
}

.button--grey {
	border: 1px solid #35495e;
	color: #35495e;
}

.button--grey:hover {
	color: #fff;
	background-color: #35495e;
}

@media (min-width: 768px) {
	.button {
		display: inline-block;
		margin-left: 15px;
		margin-right: 15px;
	}
}
</style>
