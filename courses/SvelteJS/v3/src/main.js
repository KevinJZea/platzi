import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Kevs',
		lastName: 'Zea',
	}
});

export default app;