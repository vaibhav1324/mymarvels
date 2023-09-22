import { useState, useCallback } from 'react';

export const useToggle = () => {
  const [isOpen, setToggle] = useState(false);

  const toggleState = useCallback(() => setToggle((prev) => !prev), []);
  const onClose = useCallback(() => setToggle(false), []);
  const onOpen = useCallback(() => setToggle(true), []);

  return { isOpen, toggleState, onOpen, onClose };
};
