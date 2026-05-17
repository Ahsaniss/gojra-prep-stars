import { cp, mkdir, rm, stat } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const clientDist = path.join(root, "dist", "client");
const publicDir = path.join(root, "public");
const publicAssets = path.join(publicDir, "assets");

async function exists(p) {
  try {
    await stat(p);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  if (!(await exists(clientDist))) {
    console.error("dist/client not found. Run build before vercel:prepare.");
    process.exit(1);
  }

  await mkdir(publicDir, { recursive: true });
  await mkdir(publicAssets, { recursive: true });
  await cp(path.join(clientDist, "assets"), publicAssets, { recursive: true });

  const faviconSrc = path.join(clientDist, "favicon.ico");
  const faviconDest = path.join(publicDir, "favicon.ico");
  if (await exists(faviconSrc)) {
    await cp(faviconSrc, faviconDest, { recursive: false });
  }

  console.log("Prepared Vercel static assets in public/.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
