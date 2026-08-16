import { existsSync, statSync } from 'node:fs';
import { resolve } from 'node:path';
import { spawnSync } from 'node:child_process';

const usage = `
Usage:
  npm run module -- /path/to/completed-godot-project

Starts OpenCode with the Godot Knowledge Base update workflow.
The source project is inspected but never modified unless you explicitly ask for that.
`;

const [sourceArgument] = process.argv.slice(2);

if (!sourceArgument || sourceArgument === '--help' || sourceArgument === '-h') {
	console.log(usage.trim());
	process.exit(sourceArgument ? 0 : 1);
}

const sourceProject = resolve(sourceArgument);

if (!existsSync(sourceProject) || !statSync(sourceProject).isDirectory()) {
	console.error(`\nError: no directory exists at "${sourceProject}".\n`);
	console.error(usage.trim());
	process.exit(1);
}

const prompt = `
Update this Godot Knowledge Base from the completed source project at:

${sourceProject}

Follow AGENTS.md exactly. Inspect the source project before writing. Keep the published knowledge base self-contained: do not link to source-project files, local paths, repositories, or proprietary course text.

Search existing documentation before creating pages. Update a canonical page when the concept already exists. Keep shared concepts in Foundations; create 2D- or 3D-specific pages only when their APIs, node types, or workflows differ. Every new pattern needs explicit prerequisite links and a focused Related section. Add or update one self-contained evidence page.

Run npm run build, fix all failures, and report the pages created or updated, any merged duplicates, and the verification result. Do not modify the source project.
`.trim();

console.log(`\nStarting the documentation workflow for:\n  ${sourceProject}\n`);

const result = spawnSync('opencode', ['run', prompt], {
	cwd: process.cwd(),
	stdio: 'inherit',
});

if (result.error?.code === 'ENOENT') {
	console.error('\nOpenCode was not found on PATH. Install or configure OpenCode, then run this command again.');
	process.exit(1);
}

process.exit(result.status ?? 1);
