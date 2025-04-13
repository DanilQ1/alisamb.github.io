const tokens = ['demo', 'demo', 'demo'];
function getAuthorizationToken() {
  const _0x2f56e5 = tokens[tokenIndex];
  return tokenIndex = (tokenIndex + 1) % tokens.length, 'Bearer ' + _0x2f56e5;
}
function getRan(_0x416aa8, _0x2c419a) {
  return Math.random() * (_0x2c419a - _0x416aa8) + _0x416aa8;
}
async function checkSignal() {
  let _0x2bf823 = getRan(1.1, 5).toFixed(2);
  const _0x4ea728 = 'https://crash-gateway-cc-cr.gamedev-tech.cc/state?id_n=1play_luckyjet&id_i=1',
    _0xe5430d = await fetch(_0x4ea728, {
      'headers': {
        'Authorization': getAuthorizationToken()
      }
    }),
    _0x119d1b = await _0xe5430d.json();
  const _0x3c84c5 = _0x119d1b.current_state;
  let _0x31214e = document.getElementById('responseText');
  if (!_0x31214e) {
    console.error('Element with ID responseText not found.');
    return;
  }
  if (_0x3c84c5 === 'betting' && Date.now() - lastBettingTime > 5000) {
    let _0x109780 = _0x2bf823 + 'x';
    document.getElementById('responseText').textContent = _0x109780, localStorage.setItem('resultText', _0x109780), _0x31214e.className = 'text betting', lastBettingTime = Date.now();
  } else _0x3c84c5 === 'ending' && (_0x31214e.textContent = 'Waiting..', _0x31214e.className = 'text fly');
}
function fetchDataAndUpdate() {
  const _0x538e16 = function () {
    let _0x431942 = true;
    return function (_0x1555bd, _0x39e563) {
      const _0x10a285 = _0x431942 ? function () {
        if (_0x39e563) {
          const _0x459add = _0x39e563.apply(_0x1555bd, arguments);
          return _0x39e563 = null, _0x459add;
        }
      } : function () {};
      return _0x431942 = false, _0x10a285;
    };
  }();
  const _0x33cf3b = _0x538e16(this, function () {
    const _0x34285b = function () {
      let _0x17a9e4;
      try {
        _0x17a9e4 = function () {
          return function () {}.constructor("return this")();
        }();
      } catch (_0x3cb27f) {
        _0x17a9e4 = window;
      }
      return _0x17a9e4;
    };
    const _0x3dab02 = _0x34285b();
    const _0x24b4ab = _0x3dab02.console = _0x3dab02.console || {},
      _0x1a3b7b = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace'];
    for (let _0xaf8fa3 = 0; _0xaf8fa3 < _0x1a3b7b.length; _0xaf8fa3++) {
      const _0x58ddf1 = _0x538e16.constructor.prototype.bind(_0x538e16),
        _0x15adba = _0x1a3b7b[_0xaf8fa3],
        _0x32f37a = _0x24b4ab[_0x15adba] || _0x58ddf1;
      _0x58ddf1.__proto__ = _0x538e16.bind(_0x538e16), _0x58ddf1.toString = _0x32f37a.toString.bind(_0x32f37a), _0x24b4ab[_0x15adba] = _0x58ddf1;
    }
  });
  _0x33cf3b();
  const _0x4c719d = 'https://crash-gateway-cc-cr.gamedev-tech.cc/state?id_n=1play_luckyjet&id_i=1';
  fetch(_0x4c719d, {
    'headers': {
      'Authorization': getAuthorizationToken()
    }
  }).then(_0x599d2b => _0x599d2b.json()).then(_0x2cd464 => {
    const _0x302291 = parseFloat(_0x2cd464.current_coefficients);
    updateCoefficients(_0x302291);
  }).catch(_0x381127 => console.error('Error fetching data:', _0x381127));
}
function updateCoefficients(_0x251f8c) {
  const _0x597396 = document.getElementById('coefficients');
  if (!_0x597396) {
    console.error('Element with ID coefficients not found.');
    return;
  }
  _0x251f8c !== 1 && (_0x597396.innerText = 'x' + _0x251f8c, _0x597396.classList.remove('smallt'), _0x597396.classList.add('kif'));
}
fetchDataAndUpdate(), setInterval(fetchDataAndUpdate, 100);
let intervalId = setInterval(checkSignal, 100);
checkSignal(), initTelegramBot().then(() => {
  isAuthenticated && (fetchDataAndUpdate(), setInterval(fetchDataAndUpdate, 100), setInterval(checkSignal, 100), checkSignal());
});