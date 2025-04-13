document.addEventListener('DOMContentLoaded', function () {
  const _0x10441b = document.querySelector('.cells-board');
  if (!_0x10441b) {
    console.error('Element .cells-board not found.');
    return;
  }
  let _0x406a2c = _0x10441b.innerHTML;
  const _0x4aaf9d = new URLSearchParams(window.location.search),
    _0x5f245a = _0x4aaf9d.get('botName') || 'Unknown',
    _0x3a6a52 = _0x4aaf9d.get('language') || 'en',
    _0x50987f = [1, 3, 5, 7],
    _0x53ed1f = {};
  _0x53ed1f['1'] = 0x7, _0x53ed1f['3'] = 0x5, _0x53ed1f['5'] = 0x4, _0x53ed1f['7'] = 0x3;
  const _0x33a8de = _0x53ed1f;
  let _0x2c8efa = 0;
  const _0x22e759 = document.getElementById('trapsAmount'),
    _0x412627 = document.getElementById('prev_preset_btn');
  const _0x230b2b = document.getElementById('next_preset_btn'),
    _0x41bdac = document.getElementById('modeButton');
  let _0x1c7d9d = 'nesk';
  function _0x630d05() {
    if (_0x22e759) {
      _0x22e759.textContent = _0x50987f[_0x2c8efa];
    }
  }
  if (_0x412627) {
    _0x412627.addEventListener('click', function () {
      _0x2c8efa > 0 && (_0x2c8efa--, _0x630d05());
    });
  }
  _0x230b2b && _0x230b2b.addEventListener('click', function () {
    _0x2c8efa < _0x50987f.length - 1 && (_0x2c8efa++, _0x630d05());
  });
  if (_0x41bdac) {
    _0x41bdac.addEventListener('click', function () {
      _0x1c7d9d = _0x1c7d9d === 'nesk' ? 'all' : 'nesk', _0x41bdac.textContent = _0x1c7d9d === 'nesk' ? 'Switch to All' : 'Switch to multiple';
    });
  }
  _0x630d05();
  function _0x49c8cf() {
    const _0x3f224c = document.querySelectorAll('.cells-board .cell');
    _0x3f224c.forEach(_0x326f62 => {
      _0x326f62.addEventListener('click', () => {
        _0x326f62.style.transform = 'scale(0.7)', setTimeout(() => {
          _0x326f62.style.transform = 'scale(1)';
        }, 200);
      });
    });
  }
  function _0x414a44(_0xed758c) {
    return _0xed758c.style.display = 'block', _0xed758c;
  }
  let _0x5c70fa = true;
  const _0x51a706 = document.getElementById('playButton');
  _0x51a706 && _0x51a706.addEventListener('click', function () {
    _0x51a706.disabled = true;
    let _0x70b8e6 = document.querySelectorAll('.cells-board .cell');
    !_0x5c70fa && (_0x10441b.innerHTML = '', _0x3f50c0(), _0x70b8e6 = document.querySelectorAll('.cells-board .cell'));
    const _0x4c93f1 = parseInt(_0x22e759.textContent),
      _0x284a58 = _0x70b8e6.length;
    const _0x5ab662 = new Set();
    while (_0x5ab662.size < _0x4c93f1) {
      const _0x5e070a = Math.floor(Math.random() * _0x284a58);
      _0x5ab662.add(_0x5e070a);
    }
    if (_0x1c7d9d === 'nesk') {
      const _0x3d24cc = _0x33a8de[_0x4c93f1] || 0,
        _0x112b54 = [];
      while (_0x112b54.length < _0x3d24cc) {
        const _0x5c8f27 = Math.floor(Math.random() * _0x70b8e6.length);
        if (!_0x112b54.includes(_0x5c8f27)) {
          _0x112b54.push(_0x5c8f27);
        }
      }
      let _0x34368b = 0;
      function _0x118eef() {
        if (_0x34368b < _0x112b54.length) {
          const _0x42f718 = _0x112b54[_0x34368b],
            _0x14df35 = _0x70b8e6[_0x42f718];
          _0x14df35.classList.add('cell-fade-out'), setTimeout(async () => {
            _0x14df35.innerHTML = '';
            try {
              const _0x59eca6 = await fetch('img/stars.svg'),
                _0x383ee1 = await _0x59eca6.text(),
                _0x1d9381 = document.createElement('div');
              _0x1d9381.style.cssText = '\n                                    width: 56px;\n                                    height: 56px;\n                                    display: flex;\n                                    align-items: center;\n                                    justify-content: center;\n                                    position: relative;\n                                ', _0x1d9381.innerHTML = _0x383ee1, _0x14df35.appendChild(_0x1d9381);
              const _0x26e2b3 = _0x1d9381.querySelector('svg');
              if (_0x26e2b3) {
                _0x26e2b3.style.cssText = '\n                                        width: 56px;\n                                        height: 56px;\n                                        max-width: 100%;\n                                        max-height: 100%;\n                                        display: block;\n                                        opacity: 0;\n                                        transform: scale(0);\n                                        transition: opacity 0.3s, transform 0.3s;\n                                    ';
                const _0x2368d4 = _0x26e2b3.getAttribute('viewBox');
                if (!_0x2368d4) {
                  const _0x376a74 = _0x26e2b3.getAttribute('width') || '100',
                    _0x224316 = _0x26e2b3.getAttribute('height') || '100';
                  _0x26e2b3.setAttribute('viewBox', '0 0 ' + _0x376a74 + ' ' + _0x224316);
                }
                _0x26e2b3.setAttribute('preserveAspectRatio', 'xMidYMid meet'), _0x26e2b3.classList.add('star-animation'), requestAnimationFrame(() => {
                  _0x26e2b3.style.opacity = '1', _0x26e2b3.style.transform = 'scale(1)';
                });
              }
            } catch (_0x7bb9d2) {
              const _0x35c382 = document.createElement('img');
              _0x35c382.style.cssText = '\n                                    width: 56px;\n                                    height: 56px;\n                                    display: block;\n                                    will-change: transform, opacity;\n                                    opacity: 0;\n                                    transform: scale(0);\n                                    transition: opacity 0.3s, transform 0.3s;\n                                ', _0x35c382.src = 'img/stars.svg', _0x14df35.appendChild(_0x35c382), requestAnimationFrame(() => {
                _0x35c382.style.opacity = '1', _0x35c382.style.transform = 'scale(1)';
              });
            }
            _0x14df35.classList.remove('cell-fade-out'), _0x34368b++, setTimeout(_0x118eef, 700);
          }, 400);
        } else {
          _0x51a706.disabled = false, _0x5c70fa && (_0x5c70fa = false);
        }
      }
      _0x118eef();
    } else Promise.all([..._0x70b8e6].map((_0x2c319d, _0x3f76b1) => {
      return new Promise(async _0x38da5e => {
        _0x2c319d.classList.add('cell-fade-out'), _0x2c319d.innerHTML = '';
        try {
          const _0x4bbed6 = await fetch(_0x5ab662.has(_0x3f76b1) ? 'img/krest.svg' : 'img/stars.svg'),
            _0x518122 = await _0x4bbed6.text(),
            _0x261ddd = document.createElement('div');
          _0x261ddd.style.cssText = '\n                                width: 56px;\n                                height: 56px;\n                                display: flex;\n                                align-items: center;\n                                justify-content: center;\n                                position: relative;\n                            ', _0x261ddd.innerHTML = _0x518122, _0x2c319d.appendChild(_0x261ddd);
          const _0x3f785c = _0x261ddd.querySelector('svg');
          if (_0x3f785c) {
            _0x3f785c.style.cssText = '\n                                    width: 56px;\n                                    height: 56px;\n                                    max-width: 100%;\n                                    max-height: 100%;\n                                    display: block;\n                                    opacity: 0;\n                                    transform: scale(0);\n                                    transition: opacity 0.3s, transform 0.3s;\n                                ';
            const _0x2b9422 = _0x3f785c.getAttribute('viewBox');
            if (!_0x2b9422) {
              const _0x2462fa = _0x3f785c.getAttribute('width') || '100',
                _0x44283e = _0x3f785c.getAttribute('height') || '100';
              _0x3f785c.setAttribute('viewBox', '0 0 ' + _0x2462fa + ' ' + _0x44283e);
            }
            _0x3f785c.setAttribute('preserveAspectRatio', 'xMidYMid meet'), _0x3f785c.classList.add('star-animation'), _0x3f785c.style.opacity = '0', _0x3f785c.style.transform = 'scale(0)', requestAnimationFrame(() => {
              _0x3f785c.style.opacity = '1';
              _0x3f785c.style.transform = 'scale(1)';
            });
          }
        } catch (_0x28f659) {
          const _0x53bbee = document.createElement('img');
          _0x53bbee.style.cssText = '\n                                width: 56px;\n                                height: 56px;\n                                display: block;\n                                will-change: transform, opacity;\n                                opacity: 0;\n                                transform: scale(0);\n                                transition: opacity 0.3s, transform 0.3s;\n                            ', _0x53bbee.src = _0x5ab662.has(_0x3f76b1) ? 'img/krest.svg' : 'img/stars.svg', _0x2c319d.appendChild(_0x53bbee), requestAnimationFrame(() => {
            _0x53bbee.style.opacity = '1';
            _0x53bbee.style.transform = 'scale(1)';
          });
        }
        _0x2c319d.classList.remove('cell-fade-out');
        _0x38da5e();
      });
    })).then(() => {
      _0x51a706.disabled = false;
      _0x5c70fa && (_0x5c70fa = false);
    });
  });
  function _0x3f50c0() {
    const _0x320f3b = ['output_svgs/image_5450.svg', 'output_svgs/image_11641.svg', 'output_svgs/image_18337.svg', 'output_svgs/image_24493.svg', 'output_svgs/image_31201.svg', 'output_svgs/image_37357.svg', 'output_svgs/image_44065.svg', 'output_svgs/image_50221.svg', 'output_svgs/image_56929.svg', 'output_svgs/image_63085.svg', 'output_svgs/image_69793.svg', 'output_svgs/image_75949.svg', 'output_svgs/image_82645.svg', 'output_svgs/image_89353.svg', 'output_svgs/image_95509.svg', 'output_svgs/image_102217.svg', 'output_svgs/image_108373.svg', 'output_svgs/image_115081.svg', 'output_svgs/image_121237.svg', 'output_svgs/image_127381.svg', 'output_svgs/image_134077.svg', 'output_svgs/image_140221.svg', 'output_svgs/image_146917.svg', 'output_svgs/image_153061.svg', 'output_svgs/image_159757.svg'];
    _0x320f3b.forEach(_0x29a8f1 => {
      const _0x57e512 = document.createElement('button');
      _0x57e512.type = 'button', _0x57e512.className = 'cell', _0x57e512.innerHTML = '<img width="56" height="56" src="' + _0x29a8f1 + '">', _0x10441b.appendChild(_0x57e512);
    });
    _0x49c8cf();
  }
  _0x3f50c0();
});