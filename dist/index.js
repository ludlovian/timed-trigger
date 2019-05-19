'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Trigger = _interopDefault(require('trigger'));

class TimedTrigger {
  constructor () {
    const trg = new Trigger();
    let timeout;
    return Object.assign(trg, {
      fireAfter (ms, value) {
        trg.clear();
        timeout = setTimeout(() => {
          trg.clear();
          trg.fire(value);
        }, ms);
      },
      clear () {
        if (timeout) clearTimeout(timeout);
        timeout = undefined;
      }
    })
  }
  static [Symbol.hasInstance] (instance) {
    return (
      instance instanceof Trigger && typeof instance.fireAfter === 'function'
    )
  }
}

module.exports = TimedTrigger;
