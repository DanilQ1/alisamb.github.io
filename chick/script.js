const stripeContainer = document.getElementById('stripe-container');
const stripeCount = 5,
  stripeSpacing = 20;
for (let i = 0; i < stripeCount; i++) {
  const stripe = document.createElement('div');
  stripe.classList.add('stripe'), stripe.style.animationDelay = i * (stripeSpacing / 100) * 2 + 's', stripeContainer.appendChild(stripe);
}
const centerGif = document.getElementById('centerGif'),
  startButton = document.getElementById('startButton'),
  gifs = ['left.gif', 'right.gif'];
function createCloud() {
  const _0x43481b = document.createElement('div');
  _0x43481b.className = 'cloud';
  const _0x7c2131 = 60 + Math.random() * 40;
  _0x43481b.style.width = _0x7c2131 + 'px';
  _0x43481b.style.height = _0x7c2131 / 2 + 'px';
  _0x43481b.style.top = Math.random() * 60 + '%';
  const _0x2f3cb3 = 15 + Math.random() * 10;
  _0x43481b.style.animationDuration = _0x2f3cb3 + 's', document.getElementById('cloudContainer').appendChild(_0x43481b), setTimeout(() => {
    _0x43481b.remove();
  }, _0x2f3cb3 * 1000);
}
setInterval(createCloud, 3000);
for (let i = 0; i < 5; i++) {
  createCloud();
}
let clickCount = 0;
const maxClicks = 11,
  counterContainer = document.getElementById('counterContainer');
for (let i = 0; i < maxClicks; i++) {
  const arrow = document.createElement('div');
  arrow.className = 'arrow', counterContainer.appendChild(arrow);
}
startButton.addEventListener('click', () => {
  if (clickCount >= maxClicks) return;
  const _0x1ecc1b = gifs[Math.floor(Math.random() * gifs.length)];
  centerGif.src = _0x1ecc1b, centerGif.style.width = '320px', centerGif.style.height = 'auto';
  const _0x275962 = counterContainer.children[clickCount];
  if (_0x1ecc1b.includes('left.gif')) {
    _0x275962.className = 'arrow left active', _0x275962.innerHTML = '&#10094;';
  } else _0x275962.className = 'arrow right active', _0x275962.innerHTML = '&#10095;';
  clickCount++;
  clickCount === maxClicks && setTimeout(() => {
    const _0x3f436f = document.getElementById('gameEndModal'),
      _0x35e7e2 = document.getElementById('modalOverlay');
    _0x3f436f.classList.add('active'), _0x35e7e2.classList.add('active');
    document.getElementById('modalOkButton').onclick = () => {
      _0x3f436f.classList.remove('active');
      _0x35e7e2.classList.remove('active');
      clickCount = 0;
      Array.from(counterContainer.children).forEach(_0x618b7c => {
        _0x618b7c.className = 'arrow', _0x618b7c.innerHTML = '';
      });
    };
  }, 4050);
  setTimeout(() => {
    centerGif.src = 'chicks.gif';
    centerGif.style.width = '150px', centerGif.style.height = 'auto';
  }, 4050);
});