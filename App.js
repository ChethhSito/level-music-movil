import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store/config'; // Asegúrate que la ruta a tu store sea correcta
import { AppRoutes } from './src/routes/app-routes'; // Asegúrate que la ruta sea correcta

export default function App() {
  // Aquí envolvemos toda la app con Redux
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}