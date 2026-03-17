## Collectibol – Prueba Técnica Frontend (React Native + 3D)

Mini app desarrollada con Expo + React Native para generar objetos 3D de forma procedural, interactuar con ellos y persistir el estado entre sesiones.

### Stack

- Expo (SDK 54)
- Expo Router
- React Native + TypeScript
- @react-three/fiber
- @react-three/drei
- r3f-native-orbitcontrols
- @react-spring/three
- Zustand
- AsyncStorage

### Funcionalidades implementadas

- Escena 3D con cámara (`PerspectiveCamera`) y luces básicas (ambient + spot + point).
- Controles táctiles de cámara con `r3f-native-orbitcontrols` (pan, rotate, zoom).
- CTA para crear instancias 3D (cubos) y CTA para limpiar la escena.
- Generación procedural por instancia: color, tamaño, posición, eje de rotación y velocidad.
- Interacción por tap/click en cada objeto:
  - randomización de color,
  - cambio de eje de rotación.
- Animación de escala por interacción usando `@react-spring/three`.
- Estado global con Zustand (lista de instancias).
- Persistencia con Zustand + AsyncStorage (las instancias se recuperan al reabrir).
- Límite de objetos en store (`MAX_OBJECTS = 5`) para mantener la escena ligera y estable.

### Requisitos previos

- Node.js 18+
- npm o yarn

### Ejecución

1. Instalar dependencias:

   yarn install

2. Iniciar Expo:

   npx expo start

3. Opciones comunes:
   - iOS simulator: npx expo start --ios
   - Web: npx expo start --web

### Demo Video
https://github.com/user-attachments/assets/9f5f15cd-262d-4122-bdc4-24830a578112

### Nota sobre iOS Simulator

El simulador de iOS puede tener limitaciones de OpenGL/EXGL. La validación final de rendimiento y estabilidad 3D es más fiable en dispositivo físico.

Autor: Franklin Rocha
