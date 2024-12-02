import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { createSystem, defaultConfig } from '@chakra-ui/react';
import App from './App';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};

const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        brand: {
          900: { value: '#1a365d' },
          800: { value: '#153e75' },
          700: { value: '#2a69ac' },
        },
      },
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider value={system}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
