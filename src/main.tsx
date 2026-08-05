import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Fix for environments where window.fetch has only a getter or is read-only
try {
  const descriptor = Object.getOwnPropertyDescriptor(window, 'fetch') || 
                     Object.getOwnPropertyDescriptor(Object.getPrototypeOf(window), 'fetch');
  if (descriptor && !descriptor.writable && !descriptor.set) {
    let currentFetch = window.fetch;
    Object.defineProperty(window, 'fetch', {
      configurable: true,
      enumerable: true,
      get: () => currentFetch,
      set: (v) => { currentFetch = v; }
    });
  }
} catch (e) {
  // Ignore polyfill guard errors
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

