import { renderHook, act } from '@testing-library/react';
import { useThrottle } from './useTrottle';



describe('useThrottle', () => {

    jest.useFakeTimers();

    it('should execute the callback immediately when invoked for the first time', () => {
        const callback = jest.fn();
        const { result } = renderHook(() => useThrottle(callback, 500));

        act(() => {
            result.current();
        });

        expect(callback).toHaveBeenCalledTimes(1);
    });

    it('should not execute the callback if invoked again within the delay', () => {
        const callback = jest.fn();
        const { result } = renderHook(() => useThrottle(callback, 500));

        act(() => {
            result.current();
        });

        expect(callback).toHaveBeenCalledTimes(1);

        act(() => {
            result.current();
        });

        expect(callback).toHaveBeenCalledTimes(1);
    });

    it('should execute the callback if invoked again after the delay', () => {
        const callback = jest.fn();
        const { result } = renderHook(() => useThrottle(callback, 500));

        act(() => {
            result.current();
        });

        expect(callback).toHaveBeenCalledTimes(1);

        jest.advanceTimersByTime(600);

        act(() => {
            result.current();
        });

        expect(callback).toHaveBeenCalledTimes(2);
    });
})