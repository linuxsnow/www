// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.linuxsnow.org',
	integrations: [
		starlight({
			title: 'SNOW Linux',
			logo: {
				src: './src/assets/snow.svg',
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/linuxsnow/snowdesktop' }],
			sidebar: [
								{
					label: 'Editions',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Desktop', slug: 'editions/desktop' },
						{ label: 'Server', slug: 'editions/server' },
					],
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
