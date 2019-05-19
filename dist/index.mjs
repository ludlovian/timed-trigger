import Trigger from 'trigger';

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

export default TimedTrigger;
