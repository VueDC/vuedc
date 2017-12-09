<template>
  <section class="container">
	<div>
		<logo/>
		<h1 class="title">
			VueDC
		</h1>
		<h2 class="subtitle">
			Calling all prospective and enthusiastic people about Vue.js in the DC Metro Area!
		</h2>
		<div class="links">
			<a href="https://www.meetup.com/Vue-DC/" target="_blank" class="button button--green">Meetup Events</a>
			<a href="https://github.com/vuedc" target="_blank" class="button button--grey">GitHub</a>
			<a href="https://twitter.com/vuejsdc" target="_blank" class="button button--blue">Twitter</a>
		</div>
	</div>
</section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
	components: {
		Logo
	}
}
</script>

<style>
.container {
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	margin: 0 2rem;
}

.title {
	font-size: 3rem;
	font-family: 'Quicksand', 'Source Sans Pro', -apple-system,
		BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
		sans-serif;
	display: block;
	font-weight: 300;
	color: #35495e;
	letter-spacing: 1px;
	margin-top: 1rem;
}

.subtitle {
	margin-top: 1rem;
	font-weight: 300;
	font-size: 2rem;
	color: #526488;
	word-spacing: 5px;
	padding-bottom: 15px;
	max-width: 650px;
	line-height: 1.2;
}

.links {
	padding-top: 15px;
}

@media (min-width: 768px) {
	.title {
		font-size: 100px;
	}

	.subtitle {
		font-size: 42px;
	}
}
</style>
