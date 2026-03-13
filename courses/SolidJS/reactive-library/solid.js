let context = [];

export function createSignal(value) {
  const suscribers = new Set();

  const read = () => {
    const observer = context[context.length - 1];
    if (observer) suscribers.add(observer);

    return value;
  };

  const write = (newValue) => {
    if (typeof newValue === 'function') value = newValue(value);
    else value = newValue;

    suscribers.forEach((fn) => fn());
  };

  return [read, write];
}

export function createEffect(fn) {
  context.push(fn);
  fn();
  context.pop();
}

export function createMemo(fn) {
  const [signal, setSignal] = createSignal();

  createEffect(() => {
    const value = fn();

    if (value !== signal()) {
      setSignal(value);
    }
  });

  return signal;
}

export function createStore(value) {
  const suscribers = new Set();

  const read = new Proxy(value, {
    get(target, key) {
      const observer = context[context.length - 1];
      if (observer) suscribers.add(observer);
      return target[key];
    },
  });

  const write = (...props) => {
    const [index, key, newValue] = props;
    value[index][key] = newValue;
    suscribers.forEach((fn) => fn());
  };

  return [read, write];
}
