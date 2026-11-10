/**
 * Next.js 16 static export writes per-segment prefetch payloads to
 * `out/<route>/__next.<route>/__PAGE__.txt`, but the client requests the
 * flattened name `out/<route>/__next.<route>.__PAGE__.txt`. Without the copy,
 * link prefetching logs 404s in the browser console.
 *
 * This runs after `next build` and mirrors each `__PAGE__.txt` to its flattened
 * filename. It is a no-op when the framework already produces the file.
 */
import { copyFile, readdir, stat } from "node:fs/promises";
import path from "node:path";

const outDir = path.resolve("out");

async function isFile(filePath) {
  try {
    return (await stat(filePath)).isFile();
  } catch {
    return false;
  }
}

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory() || entry.name === "_next") continue;

    const full = path.join(dir, entry.name);

    if (entry.name.startsWith("__next.")) {
      const payload = path.join(full, "__PAGE__.txt");
      const flattened = `${full}.__PAGE__.txt`;

      if ((await isFile(payload)) && !(await isFile(flattened))) {
        await copyFile(payload, flattened);
        console.log(`static export: copied ${path.relative(outDir, flattened)}`);
      }

      continue;
    }

    await walk(full);
  }
}

await walk(outDir);
