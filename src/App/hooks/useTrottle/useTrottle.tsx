import { useRef, useCallback } from "react";

export function useThrottle(callback: () => void, delay: number): () => void {
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    return useCallback(() => {
        if (!timerRef.current) {
            callback();
            timerRef.current = setTimeout(() => {
                clearTimeout(timerRef.current!);
                timerRef.current = null;
            }, delay);
        }
    }, [callback, delay]);
}
