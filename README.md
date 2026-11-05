# Margin

The home of [Margin](https://directorsolomon.github.io/margin-home/), a screenwriting app for Windows and Mac.

- **Website:** this repository's root is published with GitHub Pages. It is plain HTML and CSS with no build step.
- **Downloads and updates:** each version is a [release](https://github.com/Directorsolomon/margin-home/releases). Releases carry the installers, the signed update bundles and `latest.json`, which Margin reads to update itself. They are published by the release workflow in Margin's source repository, which is private.
- **Questions and problems:** [open an issue](https://github.com/Directorsolomon/margin-home/issues).

## Going on sale

Price, checkout link and whether downloads are live are set in one place, at the top of [`assets/site.js`](assets/site.js):

- `price`: the price as buyers see it, for example `US$49`.
- `checkoutUrl`: Margin's Lemon Squeezy checkout link.
- `downloadsReady`: `true` once the first release is published.

The privacy policy, terms and refund policy are drafts and say so on the page. Review them before Margin goes on sale.

Courier Prime is used under the SIL Open Font License (`assets/fonts/OFL.txt`).
