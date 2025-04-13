let currentRow = null,
  currentCol = -1,
  ROWS = 4,
  COLS = 7,
  ball = null;
let isMoving = false;
document.addEventListener('DOMContentLoaded', () => {
  createGrid(ROWS, COLS);
});
function createGrid(_0x15d9cd, _0x4be64e) {
  const _0x3dbe14 = document.querySelector('.grid-container');
  _0x3dbe14.style.gridTemplateColumns = 'repeat(' + _0x4be64e + ', 1fr)', _0x3dbe14.style.gridTemplateRows = 'repeat(' + _0x15d9cd + ', 1fr)';
  _0x3dbe14.innerHTML = '';
  for (let _0x493231 = 0; _0x493231 < _0x15d9cd * _0x4be64e; _0x493231++) {
    const _0x4720f3 = document.createElement('div');
    _0x4720f3.className = 'grid-item', _0x4720f3.style.animationDelay = _0x493231 * 50 + 'ms', _0x3dbe14.appendChild(_0x4720f3);
  }
}
function changeGridSize(_0x4dcb22, _0x199c75) {
  resetGame();
  ROWS = _0x4dcb22, COLS = _0x199c75;
  const _0x323de1 = _0x199c75 / _0x4dcb22;
  document.documentElement.style.setProperty('--grid-ratio', _0x323de1), document.querySelectorAll('.size-button').forEach(_0xeec0ab => {
    _0xeec0ab.classList.remove('active');
    if (_0xeec0ab.textContent === _0x4dcb22 + ' x ' + _0x199c75) {
      _0xeec0ab.classList.add('active');
    }
  });
  createGrid(_0x4dcb22, _0x199c75);
}
function createBall() {
  const _0x409037 = document.createElement('img');
  _0x409037.src = 'https://img.icons8.com/emoji/48/soccer-ball-emoji.png';
  _0x409037.className = 'ball landing';
  const _0xcfa2ad = document.createElement('div');
  return _0xcfa2ad.className = 'ball-container', _0xcfa2ad.appendChild(_0x409037), _0x409037.style.opacity = '0', _0x409037.style.transform = 'scale(0)', setTimeout(() => {
    _0x409037.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)', _0x409037.style.opacity = '1', _0x409037.style.transform = 'scale(1)';
  }, 50), _0xcfa2ad;
}
function createTrailEffect(_0x43c736, _0xb932b6, _0xc8f029) {
  const _0x4fb821 = document.createElement('div');
  _0x4fb821.className = 'ball-trail';
  document.body.appendChild(_0x4fb821);
  for (let _0x161f84 = 0; _0x161f84 < 5; _0x161f84++) {
    setTimeout(() => {
      if (document.body.contains(_0x4fb821)) {
        const _0x4e2354 = document.createElement('div');
        _0x4e2354.className = 'trail-particle';
        const _0x9f0d35 = (Math.random() - 0.5) * 20,
          _0x181686 = (Math.random() - 0.5) * 20;
        _0x4e2354.style.width = _0xc8f029 * (0.3 + Math.random() * 0.3) + 'px', _0x4e2354.style.height = _0x4e2354.style.width, _0x4e2354.style.left = _0x43c736 + _0x9f0d35 + 'px', _0x4e2354.style.top = _0xb932b6 + _0x181686 + 'px', _0x4fb821.appendChild(_0x4e2354), setTimeout(() => {
          _0x4fb821.contains(_0x4e2354) && _0x4fb821.removeChild(_0x4e2354);
        }, 800);
      }
    }, _0x161f84 * 100);
  }
  setTimeout(() => {
    document.body.contains(_0x4fb821) && document.body.removeChild(_0x4fb821);
  }, 1500);
}
function showGameOver() {
  const _0x2e3687 = document.getElementById('gameOverModal');
  _0x2e3687.style.display = 'flex';
}
function resetGame() {
  const _0x413de7 = document.getElementById('gameOverModal');
  _0x413de7.style.display = 'none';
  const _0xbc2608 = document.querySelectorAll('.grid-item');
  _0xbc2608.forEach(_0x262b71 => {
    _0x262b71.classList.remove('visited');
    if (_0x262b71.contains(ball)) {
      _0x262b71.removeChild(ball);
    }
  }), currentRow = null, currentCol = -1, ball = null, isMoving = false;
}
function moveBall() {
  if (isMoving) return;
  const _0x2fd45a = document.querySelectorAll('.grid-item');
  if (currentCol === -1) {
    currentRow = Math.floor(Math.random() * ROWS), currentCol = 0, ball = createBall();
    const _0x161cf9 = _0x2fd45a[currentRow * COLS + currentCol];
    _0x161cf9.appendChild(ball), _0x161cf9.classList.add('visited'), _0x161cf9.style.boxShadow = 'inset 0 0 30px rgba(255, 255, 255, 0.4), 0 0 20px rgba(255, 255, 255, 0.2)', setTimeout(() => {
      _0x161cf9.style.boxShadow = '';
    }, 800);
    return;
  }
  if (currentCol >= COLS - 1) {
    showGameOver();
    return;
  }
  isMoving = true;
  let _0xc5ce6c = Math.floor(Math.random() * ROWS);
  const _0x4b6cdc = _0x2fd45a[currentRow * COLS + currentCol],
    _0x23a934 = _0x2fd45a[_0xc5ce6c * COLS + currentCol + 1];
  _0x23a934.classList.add('visited');
  const _0x2759c0 = ball.cloneNode(true),
    _0xba359c = _0x2759c0.querySelector('.ball');
  _0xba359c.classList.remove('landing'), _0xba359c.classList.add('ball-moving'), document.body.appendChild(_0x2759c0);
  const _0x2e6807 = _0x4b6cdc.getBoundingClientRect();
  const _0x4d25c = _0x23a934.getBoundingClientRect();
  _0x2759c0.style.position = 'fixed';
  const _0x21ec1b = Math.min(_0x2e6807.width, _0x2e6807.height) * 0.6,
    _0x11df0d = _0x2e6807.left + (_0x2e6807.width - _0x21ec1b) / 2,
    _0x4cfbaa = _0x2e6807.top + (_0x2e6807.height - _0x21ec1b) / 2;
  _0x2759c0.style.left = _0x11df0d + 'px', _0x2759c0.style.top = _0x4cfbaa + 'px', _0x2759c0.style.width = _0x21ec1b + 'px', _0x2759c0.style.height = _0x21ec1b + 'px', _0x2759c0.style.zIndex = '100';
  const _0x295c33 = _0x4d25c.left + (_0x4d25c.width - _0x21ec1b) / 2,
    _0x43fc6a = _0x4d25c.top + (_0x4d25c.height - _0x21ec1b) / 2,
    _0x2be160 = 800;
  const _0x3f9884 = Date.now(),
    _0x163d04 = Math.abs(_0x43fc6a - _0x4cfbaa) * 0.5 + 50,
    _0x3252a6 = setInterval(() => {
      const _0x36a88f = _0x2759c0.getBoundingClientRect(),
        _0x39c809 = _0x36a88f.left + _0x36a88f.width / 2,
        _0x29c33d = _0x36a88f.top + _0x36a88f.height / 2;
      createTrailEffect(_0x39c809, _0x29c33d, _0x21ec1b * 0.3);
    }, 100);
  function _0xbac778() {
    const _0x3af554 = Date.now() - _0x3f9884,
      _0x1f0298 = Math.min(_0x3af554 / _0x2be160, 1);
    const _0x1a4487 = cubicBezier(0.34, 1.56, 0.64, 1, _0x1f0298),
      _0x47b0ba = _0x11df0d + (_0x295c33 - _0x11df0d) * _0x1a4487;
    let _0x1ad68b = _0x4cfbaa + (_0x43fc6a - _0x4cfbaa) * _0x1a4487;
    const _0x2d4783 = 4 * _0x1a4487 * (1 - _0x1a4487),
      _0x319a29 = -_0x163d04 * _0x2d4783;
    _0x2759c0.style.left = _0x47b0ba + 'px', _0x2759c0.style.top = _0x1ad68b + _0x319a29 + 'px', _0xba359c.style.transform = 'rotate(' + _0x1a4487 * 360 + 'deg)';
    if (_0x1f0298 < 1) {
      requestAnimationFrame(_0xbac778);
    } else clearInterval(_0x3252a6), _0x23a934.style.boxShadow = 'inset 0 0 30px rgba(255, 255, 255, 0.4), 0 0 20px rgba(255, 255, 255, 0.2)', setTimeout(() => {
      _0x23a934.style.boxShadow = '';
    }, 800), document.body.removeChild(_0x2759c0), _0x4b6cdc.removeChild(ball), ball.querySelector('.ball').classList.add('landing'), _0x23a934.appendChild(ball), setTimeout(() => {
      const _0x1c7fd6 = ball.querySelector('.ball');
      if (_0x1c7fd6) {
        _0x1c7fd6.classList.remove('landing');
      }
    }, 800), currentRow = _0xc5ce6c, currentCol++, isMoving = false;
  }
  _0xbac778();
}
function cubicBezier(_0x3e48fe, _0x208280, _0x4b9ee8, _0x121fc7, _0x3ad1d2) {
  const _0x1f5a81 = 3 * _0x3e48fe,
    _0xff5110 = 3 * (_0x4b9ee8 - _0x3e48fe) - _0x1f5a81,
    _0xbd30bf = 1 - _0x1f5a81 - _0xff5110,
    _0x491fd5 = 3 * _0x208280,
    _0xbfe455 = 3 * (_0x121fc7 - _0x208280) - _0x491fd5;
  const _0x8710ff = 1 - _0x491fd5 - _0xbfe455,
    _0x213496 = _0x3ad1d2 * _0x3ad1d2,
    _0xa9fd1a = _0x213496 * _0x3ad1d2;
  return _0x8710ff * _0xa9fd1a + _0xbfe455 * _0x213496 + _0x491fd5 * _0x3ad1d2;
}