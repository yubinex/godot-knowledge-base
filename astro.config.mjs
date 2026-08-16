// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const [owner, repository] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const isGitHubPagesBuild = Boolean(process.env.GITHUB_ACTIONS && owner && repository);

// https://astro.build/config
export default defineConfig({
	site: isGitHubPagesBuild ? `https://${owner}.github.io` : undefined,
	base: isGitHubPagesBuild ? `/${repository}` : undefined,
	integrations: [
		starlight({
			title: 'Godot Knowledge Base',
			description: 'A practical, connected reference for building games with Godot.',
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{
					label: 'Start Here',
					items: [
						{ label: 'How to use this site', slug: 'start-here' },
						{ label: 'How pages connect', slug: 'contributing/knowledge-graph' },
					],
				},
				{
					label: 'Foundations',
					collapsed: true,
					items: [{ autogenerate: { directory: 'foundations' } }],
				},
				{
					label: '2D Development',
					collapsed: true,
					items: [{ autogenerate: { directory: '2d' } }],
				},
				{
					label: '3D Development',
					collapsed: true,
					items: [{ autogenerate: { directory: '3d' } }],
				},
				{
					label: 'Gameplay Systems',
					collapsed: true,
					items: [{ autogenerate: { directory: 'systems' } }],
				},
				{
					label: 'Reusable Patterns',
					collapsed: true,
					items: [{ autogenerate: { directory: 'patterns' } }],
				},
				{
					label: 'Evidence',
					collapsed: true,
					items: [{ autogenerate: { directory: 'evidence' } }],
				},
			],
		}),
	],
});
