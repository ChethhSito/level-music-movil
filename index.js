import { registerRootComponent } from 'expo';
import App from './App'; // Vamos a crear este archivo ahora

// registerRootComponent llama a AppRegistry.registerComponent('main', () => App);
// pero de una forma que funciona con todas las plataformas.
registerRootComponent(App);