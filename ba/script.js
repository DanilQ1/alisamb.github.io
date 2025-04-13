const gameContainer = document.querySelector('.game-container');
const balloon = document.querySelector('.balloon'),
  valueDisplay = document.querySelector('.value'),
  predictButton = document.getElementById('predictButton'),
  backButton = document.getElementById('backButton'),
  telegramButton = document.getElementById('telegramButton');
const stars = document.querySelector('.stars'),
  meteors = document.querySelectorAll('.meteor'),
  saturn = document.querySelector('.saturn');
let isAnimating = false,
  targetMultiplier = 1,
  saturnInterval;
function createRandomMeteor() {
  const _0x37f7cd = Math.random() * 15;
  const _0x3e646c = Math.random() * 80;
  const _0x2bb254 = Math.random() * 40;
  setTimeout(() => {
    const _0x50811a = document.createElement('div');
    _0x50811a.className = 'meteor', _0x50811a.style.left = _0x3e646c + '%', _0x50811a.style.top = _0x2bb254 + '%', document.querySelector('.space-elements').appendChild(_0x50811a), setTimeout(() => {
      _0x50811a.remove(), createRandomMeteor();
    }, 8000);
  }, _0x37f7cd * 1000);
}
function moveSaturn() {
  saturn.style.opacity = '0';
  setTimeout(() => {
    const _0x233654 = 5 + Math.random() * 30,
      _0x2635bb = 5 + Math.random() * 30;
    saturn.style.top = _0x233654 + '%', saturn.style.right = _0x2635bb + '%', saturn.style.opacity = '1';
  }, 1500);
}
function startSaturnMovement() {
  saturnInterval && clearInterval(saturnInterval);
  const _0x1ce261 = 15000 + Math.random() * 15000;
  saturnInterval = setInterval(moveSaturn, _0x1ce261);
}
function getRandomMultiplier() {
  return (1.2 + Math.random() * 8.8).toFixed(2);
}
function updateBalloon(_0x20cbd9) {
  valueDisplay.textContent = parseFloat(_0x20cbd9).toFixed(2) + 'x';
  const _0x5e6490 = 1;
  const _0x21e262 = 1.8,
    _0x937c18 = (_0x20cbd9 - 1) / 9,
    _0x35861e = _0x5e6490 + (_0x21e262 - _0x5e6490) * _0x937c18,
    _0x529eab = 15,
    _0x1974a9 = -70 - _0x529eab * _0x937c18;
  balloon.style.setProperty('--lift-height', _0x1974a9 + '%'), balloon.style.transform = 'translate(-50%, ' + _0x1974a9 + '%)', balloon.style.scale = _0x35861e.toFixed(2);
  balloon.classList.add('flying'), gameContainer.classList.add('flying');
  if (_0x20cbd9 > 5) {
    balloon.classList.add('high-flying'), gameContainer.classList.add('high-flying');
  } else {
    balloon.classList.remove('high-flying'), gameContainer.classList.remove('high-flying');
  }
  if (_0x20cbd9 > 5) {
    const _0x800ace = 0.3 + (_0x20cbd9 - 5) / 10;
    saturn.style.filter = 'drop-shadow(0 0 25px rgba(255, 255, 255, ' + _0x800ace + '))';
  }
}
function resetBalloon() {
  return new Promise(_0x30e9c0 => {
    balloon.classList.remove('flying'), balloon.classList.remove('high-flying'), gameContainer.classList.remove('flying'), gameContainer.classList.remove('high-flying'), balloon.style.transition = 'transform 1s ease, scale 1s ease', balloon.style.setProperty('--lift-height', '-70%'), balloon.style.transform = 'translate(-50%, -70%)', balloon.style.scale = '1', valueDisplay.textContent = '1.00x', saturn.style.filter = 'drop-shadow(0 0 15px rgba(255, 255, 255, 0.3))', document.querySelectorAll('.space-elements, .nebula, .saturn').forEach(_0x3aa411 => {
      _0x3aa411.style.transform = '';
    }), stars.style.animation = 'none', void stars.offsetWidth, stars.style.animation = 'stars-drift 120s infinite linear', document.querySelectorAll('.star').forEach(_0x3e1a9a => {
      const _0x4ef6dc = _0x3e1a9a.className;
      _0x3e1a9a.style.animation = 'none', _0x3e1a9a.style.transform = '', void _0x3e1a9a.offsetWidth;
      if (_0x4ef6dc.includes('star-small')) {
        _0x3e1a9a.style.animation = 'twinkle-small 3s infinite alternate';
      } else {
        if (_0x4ef6dc.includes('star-medium')) _0x3e1a9a.style.animation = 'twinkle-medium 4s infinite alternate';else {
          if (_0x4ef6dc.includes('star-large')) _0x3e1a9a.style.animation = 'twinkle-large 5s infinite alternate';else {
            if (_0x4ef6dc.includes('star-bright')) _0x3e1a9a.style.animation = 'pulse-bright 2s infinite alternate';else {
              if (_0x4ef6dc.includes('star-colored')) {
                _0x3e1a9a.style.animation = 'color-shift 8s infinite alternate';
              }
            }
          }
        }
      }
    }), setTimeout(() => {
      balloon.style.transition = 'transform 3s cubic-bezier(0.19, 1, 0.22, 1), scale 3s cubic-bezier(0.19, 1, 0.22, 1)', _0x30e9c0();
    }, 800);
  });
}
function updateBackgroundShift(_0x1f8cb7) {
  const _0x48416d = 10,
    _0x5ea15f = 30,
    _0x19dbf6 = (_0x1f8cb7 - 1) / 9;
  const _0x46310b = _0x48416d + (_0x5ea15f - _0x48416d) * _0x19dbf6;
  gameContainer.style.setProperty('--background-shift', _0x46310b + 'vh');
  gameContainer.style.setProperty('--background-shift-high', _0x46310b * 1.2 + 'vh');
}
function animate(_0x4a5e71, _0x2a6ade, _0x2cbedf) {
  const _0x21e8e6 = performance.now();
  isAnimating = true;
  predictButton.disabled = true, balloon.style.transition = 'transform 3s cubic-bezier(0.19, 1, 0.22, 1), scale 3s cubic-bezier(0.19, 1, 0.22, 1)';
  balloon.classList.add('flying');
  gameContainer.classList.add('flying');
  function _0x576b39(_0x1ca52f) {
    const _0x22fb55 = _0x1ca52f - _0x21e8e6;
    const _0x2c0b3f = Math.min(_0x22fb55 / _0x2cbedf, 1),
      _0x115281 = easeOutQuart(_0x2c0b3f);
    const _0x17c0b8 = _0x4a5e71 + (_0x2a6ade - _0x4a5e71) * _0x115281;
    updateBackgroundShift(_0x17c0b8), updateBalloon(_0x17c0b8.toFixed(2)), _0x2c0b3f < 1 ? requestAnimationFrame(_0x576b39) : (isAnimating = false, setTimeout(() => {
      predictButton.disabled = false;
    }, 500));
  }
  requestAnimationFrame(_0x576b39);
}
function easeOutQuart(_0x5190d9) {
  return 1 - Math.pow(1 - _0x5190d9, 4);
}
predictButton.addEventListener('click', async () => {
  if (isAnimating) return;
  isAnimating = true, predictButton.disabled = true, backButton.classList.add('disabled'), await resetBalloon();
  targetMultiplier = getRandomMultiplier();
  const _0x5576bc = parseFloat(targetMultiplier) > 5 ? 5000 : 4000;
  animate(1, parseFloat(targetMultiplier), _0x5576bc);
  const _0x208b6a = document.querySelector('.meteor');
  _0x208b6a && (_0x208b6a.style.animation = 'none', void _0x208b6a.offsetWidth, _0x208b6a.style.animation = 'meteor-fall 8s 1'), setTimeout(() => {
    backButton.classList.remove('disabled');
    telegramButton.classList.remove('disabled'), predictButton.disabled = false;
  }, _0x5576bc + 500);
}), updateBalloon(1), balloon.style.setProperty('--lift-height', '-70%'), balloon.style.transform = 'translate(-50%, -70%)', balloon.style.scale = '1', balloon.style.transition = 'transform 3s cubic-bezier(0.19, 1, 0.22, 1), scale 3s cubic-bezier(0.19, 1, 0.22, 1)';
for (let i = 0; i < 3; i++) {
  createRandomMeteor();
}
startSaturnMovement();