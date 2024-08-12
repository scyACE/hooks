import { useState, useMemo } from 'react';

export interface Action<T> {
  setLeft: () => void;
  setRight: () => void;
  toggle: () => void;
  set: (value: T) => void;
}
function useToggle<T = boolean>(): [boolean, Action<T>];
function useToggle<T>(defaultValue: T): [boolean, Action<T>];
function useToggle<T, U>(defaultValue: T, reverseValue: U): [T | U, Action<T | U>];

function useToggle<D, R>(defaultValue: D = false as unknown as D, reverseValue?: R) {
  const [state, setState] = useState<D | R>(defaultValue);

  const reverseValueOrigin = reverseValue === undefined ? !defaultValue : reverseValue;

  const actions = useMemo(() => {
    const setLeft = () => setState(defaultValue);
    const setRight = () => setState(reverseValueOrigin);
    const toggle = () =>
      setState((t: D | R) => (t === defaultValue ? reverseValueOrigin : defaultValue));
    const set = (value: D | R) => setState(value);
    return {
      setLeft,
      setRight,
      toggle,
      set,
    };
  }, [defaultValue, reverseValueOrigin]);

  return [state, actions];
}

export default useToggle;
