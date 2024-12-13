import { useState, useRef, useCallback } from "react";

interface DrawerState {
  isOpen: boolean;
  height: number;
}

export function useDrawer(maxHeight: number) {
  const [state, setState] = useState<DrawerState>({
    isOpen: false,
    height: 64,
  });
  const dragRef = useRef<number>(0);
  const isDraggingRef = useRef(false);

  const handleTouchStart = useCallback((e: TouchEvent | React.TouchEvent) => {
    isDraggingRef.current = true;
    dragRef.current = e.touches[0].clientY;
  }, []);

  const handleTouchMove = useCallback(
    (e: TouchEvent | React.TouchEvent) => {
      if (!isDraggingRef.current) return;

      const deltaY = e.touches[0].clientY - dragRef.current;
      const newHeight = Math.max(64, Math.min(maxHeight, maxHeight - deltaY));

      setState((prev) => ({ ...prev, height: newHeight }));
    },
    [maxHeight]
  );

  const handleTouchEnd = useCallback(() => {
    isDraggingRef.current = false;
    const threshold = maxHeight / 2;

    setState((prev) => ({
      isOpen: prev.height > threshold,
      height: prev.height > threshold ? maxHeight : 64,
    }));
  }, [maxHeight]);

  const toggle = useCallback(() => {
    setState((prev) => ({
      isOpen: !prev.isOpen,
      height: !prev.isOpen ? maxHeight : 64,
    }));
  }, [maxHeight]);

  return {
    isOpen: state.isOpen,
    height: state.height,
    handlers: {
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd,
      onClick: toggle,
    },
  };
}
