import { readFileSync, writeFileSync, existsSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const clientDir = join(__dirname, "..", "dist", "client");
const assetsDir = join(clientDir, "assets");

// Get built asset files
const assetFiles = existsSync(assetsDir) ? readdirSync(assetsDir) : [];

const cssFiles = assetFiles.filter((f) => f.endsWith(".css"));
// Include the main app bundles (index is the main entry)
const jsFiles = assetFiles.filter((f) => f.endsWith(".js") && f.startsWith("index-"));

const cssLinks = cssFiles
  .map((f) => `<link rel="stylesheet" href="/pixel-perfect-profile/assets/${f}" />`)
  .join("\n    ");

const jsScripts = jsFiles
  .map((f) => `<script type="module" src="/pixel-perfect-profile/assets/${f}"></script>`)
  .join("\n    ");

const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pixel Perfect Profile</title>
    <meta name="description" content="Portfolio & Profile Showcase" />
    ${cssLinks}
    <script>
      // SPA redirect support for GitHub Pages
      (function() {
        var redirect = sessionStorage.redirect;
        delete sessionStorage.redirect;
        if (redirect && redirect !== location.href) {
          history.replaceState(null, null, redirect);
        }
      })();
    </script>
  </head>
  <body>
    <div id="root"></div>
    ${jsScripts}
  </body>
</html>`;

writeFileSync(join(clientDir, "index.html"), html);
console.log("✅ Generated dist/client/index.html for GitHub Pages");

// Write 404.html for GitHub Pages SPA fallback routing
const notFoundHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Redirecting…</title>
    <script>
      sessionStorage.redirect = location.href;
      location.replace("/pixel-perfect-profile/");
    </script>
  </head>
  <body>
    <p>Redirecting…</p>
  </body>
</html>`;

writeFileSync(join(clientDir, "404.html"), notFoundHtml);
console.log("✅ Generated dist/client/404.html for SPA fallback");