import { useState, useEffect } from 'react';

/**
 * useLocalStorage - React hook to sync state with localStorage
 * @param {string} key
 * @param {any} initialValue
 */
function useLocalStorage(key, initialValue) {
  const [state, setState] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : (typeof initialValue === 'function' ? initialValue() : initialValue);
    } catch (error) {
      console.error('useLocalStorage read error', error);
      return typeof initialValue === 'function' ? initialValue() : initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.error('useLocalStorage write error', error);
    }
  }, [key, state]);

  return [state, setState];
}

export default useLocalStorage;