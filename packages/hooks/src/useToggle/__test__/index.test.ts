import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import useToggle from '..';

const callToggle = (hook: any) => {
  act(() => {
    hook.result.current[1].toggle();
  });
};

const callSetLeft = (hook: any) => {
  act(() => {
    hook.result.current[1].setLeft();
  });
};

describe('useToggle', () => {
  it('test on init', async () => {
    const hook = renderHook(() => useToggle());
    expect(hook.result.current[0]).toBeFalsy();
  });

  it('test one params', async () => {
    const hook = renderHook(() => useToggle('sunwukong'));
    expect(hook.result.current[0]).toBe('sunwukong');
    callToggle(hook);
    expect(hook.result.current[0]).toBeFalsy();
    callSetLeft(hook);
    expect(hook.result.current[0]).toBe('sunwukong');
  });
});
