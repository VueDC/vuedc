<template>
	<div class="vuedc-logo">
		<div class="triangle triangle--red"></div>
		<div class="triangle triangle--blue"></div>
		<div class="triangle triangle--yellow"></div>
		<div class="triangle triangle--white"></div>
	</div>
</template>

<style>
.vuedc-logo {
	display: inline-block;
	animation: flipLogo 1.25s linear forwards 1.9s;
	position: relative;
	overflow: hidden;
	height: 180px;
	width: 210px;
}

.triangle {
	position: absolute;
	top: 0;
	left: 0;
	width: 0;
	height: 0;
}

.triangle--red {
	border-left: 105px solid transparent;
	border-right: 105px solid transparent;
	border-bottom: 180px solid #e81b39;
}

.triangle--blue {
	top: 60px;
	left: 70px;
	animation: blueMove 0.5s linear forwards 1s;
	border-left: 70px solid transparent;
	border-right: 70px solid transparent;
	border-bottom: 120px solid #04287a;
}

.triangle--yellow {
	top: 90px;
	left: 70px;
	animation: yellowMove 0.5s linear forwards 1s;
	border-left: 50px solid transparent;
	border-right: 50px solid transparent;
	border-bottom: 90px solid #eaab00;
}

.triangle--white {
	top: 180px;
	left: 70px;
	animation: whiteAppear 0.5s linear forwards 3.4s;
	border-left: 35px solid transparent;
	border-right: 35px solid transparent;
	border-bottom: 60px solid #fff;
}

@keyframes flipLogo {
	100% {
		transform: rotateX(180deg);
	}
}

@keyframes whiteAppear {
	100% {
		top: 120px;
	}
}

@keyframes blueMove {
	100% {
		left: 35px;
	}
}

@keyframes yellowMove {
	100% {
		left: 55px;
	}
}
</style>
