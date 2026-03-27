import sharp from "sharp";
import { readFileSync } from "fs";
import { resolve } from "path";

const PUBLIC = resolve(import.meta.dirname, "../public");
const BLUE = "#326E95";
const DARK = "#18181b";
const WHITE = "#fafafa";
const LIGHT_BLUE = "#4a90b8";

const UNMSM_LOGO = readFileSync(resolve(PUBLIC, "logo-unmsm.webp"));

async function generateOG(
	width: number,
	height: number,
	filename: string,
): Promise<void> {
	const logoSize = Math.round(height * 0.28);
	const logo = await sharp(UNMSM_LOGO)
		.resize(logoSize, logoSize, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
		.png()
		.toBuffer();

	const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${DARK}"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="${BLUE}"/>
      <stop offset="100%" stop-color="${LIGHT_BLUE}"/>
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#bg)"/>
  <rect x="0" y="0" width="6" height="${height}" fill="url(#accent)"/>
  <rect x="0" y="${height - 4}" width="${width}" height="4" fill="url(#accent)" opacity="0.6"/>

  <!-- Grid pattern -->
  ${Array.from({ length: 12 }, (_, i) => `<line x1="${100 + i * 100}" y1="0" x2="${100 + i * 100}" y2="${height}" stroke="${BLUE}" stroke-width="0.5" opacity="0.08"/>`).join("\n  ")}
  ${Array.from({ length: 6 }, (_, i) => `<line x1="0" y1="${100 + i * 100}" x2="${width}" y2="${100 + i * 100}" stroke="${BLUE}" stroke-width="0.5" opacity="0.08"/>`).join("\n  ")}

  <!-- Course code badge -->
  <rect x="80" y="80" width="130" height="36" rx="4" fill="${BLUE}" opacity="0.9"/>
  <text x="145" y="104" font-family="monospace" font-size="16" fill="${WHITE}" text-anchor="middle" font-weight="bold">SW805</text>

  <!-- Title -->
  <text x="80" y="180" font-family="system-ui, -apple-system, sans-serif" font-size="48" fill="${WHITE}" font-weight="800">Programación</text>
  <text x="80" y="240" font-family="system-ui, -apple-system, sans-serif" font-size="48" fill="${WHITE}" font-weight="800">Concurrente y Paralela</text>

  <!-- Subtitle -->
  <text x="80" y="290" font-family="system-ui, -apple-system, sans-serif" font-size="20" fill="${LIGHT_BLUE}" opacity="0.9">MPI · Pthreads · OpenMP · CUDA</text>

  <!-- Semester -->
  <text x="80" y="340" font-family="monospace" font-size="16" fill="${WHITE}" opacity="0.5">2025-II · UNMSM · FISI</text>

  <!-- Code decoration -->
  <text x="80" y="${height - 50}" font-family="monospace" font-size="13" fill="${BLUE}" opacity="0.4">#pragma omp parallel for reduction(+:sum)</text>

  <!-- Parallel lines decoration -->
  ${Array.from({ length: 5 }, (_, i) => `<rect x="${width - 200 + i * 20}" y="${height - 180}" width="3" height="${80 + i * 15}" rx="1.5" fill="${BLUE}" opacity="${0.15 + i * 0.08}"/>`).join("\n  ")}
</svg>`;

	await sharp(Buffer.from(svg))
		.composite([
			{
				input: logo,
				left: width - logoSize - 60,
				top: 60,
			},
		])
		.png({ quality: 90 })
		.toFile(resolve(PUBLIC, filename));

	console.log(`Generated ${filename} (${width}x${height})`);
}

async function generateFavicon(): Promise<void> {
	const svg = `
<svg width="128" height="128" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fbg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${BLUE}"/>
      <stop offset="100%" stop-color="${LIGHT_BLUE}"/>
    </linearGradient>
  </defs>
  <rect width="128" height="128" rx="20" fill="url(#fbg)"/>
  <!-- Parallel lines symbol -->
  <rect x="28" y="30" width="8" height="68" rx="4" fill="${WHITE}" opacity="0.95"/>
  <rect x="48" y="22" width="8" height="84" rx="4" fill="${WHITE}" opacity="0.85"/>
  <rect x="68" y="30" width="8" height="68" rx="4" fill="${WHITE}" opacity="0.95"/>
  <!-- Arrow/forward -->
  <polygon points="92,64 108,44 108,52 120,52 120,76 108,76 108,84" fill="${WHITE}" opacity="0.9"/>
</svg>`;

	const sizes = [16, 32, 48];
	const buffers: Buffer[] = [];

	for (const size of sizes) {
		const buf = await sharp(Buffer.from(svg))
			.resize(size, size)
			.png()
			.toBuffer();
		buffers.push(buf);
	}

	await sharp(Buffer.from(svg))
		.resize(48, 48)
		.png()
		.toFile(resolve(PUBLIC, "favicon.png"));

	await sharp(Buffer.from(svg))
		.resize(32, 32)
		.toFormat("png")
		.toFile(resolve(PUBLIC, "favicon-32.png"));

	const svgBuffer = Buffer.from(svg);
	await sharp(svgBuffer).toFile(resolve(PUBLIC, "favicon.svg"));

	console.log("Generated favicon.svg + favicon.png + favicon-32.png");
}

async function main(): Promise<void> {
	console.log("Generating brand assets...\n");

	await generateOG(1200, 630, "og.png");
	await generateOG(1200, 600, "og-twitter.png");
	await generateFavicon();

	console.log("\nDone.");
}

main();
