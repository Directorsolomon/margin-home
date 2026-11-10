// Everything that changes when Margin goes on sale lives in MARGIN.
const MARGIN = {
  // The price as buyers see it, e.g. 'US$49'. Empty until the Lemon Squeezy product exists.
  price: '₦30,000',
  // The Lemon Squeezy checkout link for Margin. Empty until the store is approved.
  checkoutUrl: 'https://getmargin.lemonsqueezy.com/checkout/buy/0c01ee6f-e332-4d29-9586-7e9dd325a891',
  // True once the first release is published on GitHub.
  downloadsReady: true,
};

const RELEASES = 'https://github.com/Directorsolomon/margin-home/releases/latest/download/';
const FILES = { windows: 'Margin-Windows-setup.exe', mac: 'Margin-macOS.dmg' };
const PLATFORM = /Mac/.test(navigator.platform || navigator.userAgent) ? 'mac' : 'windows';

function disable(link, text) {
  link.removeAttribute('href');
  link.setAttribute('aria-disabled', 'true');
  link.textContent = text;
}

for (const node of document.querySelectorAll('[data-price]')) {
  node.textContent = MARGIN.price || 'Price coming soon';
  node.classList.toggle('pending', !MARGIN.price);
}

for (const link of document.querySelectorAll('[data-buy]')) {
  if (MARGIN.checkoutUrl) link.href = MARGIN.checkoutUrl;
  else disable(link, 'On sale soon');
}

for (const link of document.querySelectorAll('[data-download]')) {
  const platform = link.dataset.download === 'auto' ? PLATFORM : link.dataset.download;
  const label = platform === 'mac' ? 'Mac' : 'Windows';
  if (!MARGIN.downloadsReady) {
    disable(link, `${label}: coming soon`);
    continue;
  }
  link.href = RELEASES + FILES[platform];
  if (link.dataset.download === 'auto') link.textContent = `Download for ${label}`;
}

for (const node of document.querySelectorAll('[data-year]')) node.textContent = String(new Date().getFullYear());
