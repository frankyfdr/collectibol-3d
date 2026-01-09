## Collectibol – Prueba Técnica Frontend (React Native + 3D)

    Mini aplicación desarrollada con Expo + React Native que renderiza una escena 3D utilizando react-three/fiber.
    La app permite generar objetos 3D de forma procedural, interactuar con ellos y persistir el estado entre sesiones.

### Tecnologías utilizadas

    Expo

    React Native + TypeScript

    @react-three/fiber

    @react-three/drei

    @react-spring/three

    Zustand

    AsyncStorage

### Requisitos previos

Node.js ≥ 18

npm o yarn

Expo CLI

Instalación de Expo CLI (si no lo tienes):

`npm install -g expo-cli`

### Pasos para ejecutar el proyecto

1. Clonar el repositorio

   ` git clone https://github.com/frankyfdr/collectibol-3d`

   `cd collectibol-3d`

2. Instalar dependencias
   `npm install`

3. Ejecutar la aplicación
   `npx expo start`

Se abrirá el panel de Expo donde podrás ejecutar la app en:

#### iOS Simulator

    iOS simulators often have incomplete or unreliable OpenGL ES support, which can cause EXC_BAD_ACCESS crashes when rendering 3D content. Always test on a physical iOS device (iPhone/iPad running iOS 16 or later) to ensure stable WebGL rendering.

#### Navegador Web

Asegúrate de tener instaladas las siguientes librerías

    npx expo install react-dom react-native-web

Autor

Franklin Rocha
Prueba técnica realizada para Collectibol
