# AppTrading

Aplicación móvil de trading desarrollada con React Native para Android e iOS. Permite visualizar instrumentos financieros, gestionar portafolios y realizar operaciones de compra/venta.

> **Nota:** Esta aplicación ha sido desarrollada y probada principalmente en **Android**. La configuración de iOS está disponible pero no ha sido verificada completamente.

## Capturas de Pantalla

| Login | Instrumentos | Portfolio |
|-------|--------------|-----------|
| ![Login](docs/screenshots/login.png) | ![Instrumentos](docs/screenshots/instruments.png) | ![Portfolio](docs/screenshots/portfolio.png) |

| Perfil | Orden Compra | Orden Venta |
|--------|--------------|-------------|
| ![Perfil](docs/screenshots/profile.png) | ![Orden Compra](docs/screenshots/order-buy.png) | ![Orden Venta](docs/screenshots/order-sell.png) |

## Requisitos Previos

### Generales (ambas plataformas)

| Herramienta | Versión | Notas |
|-------------|---------|-------|
| **Node.js** | >= 20 | Requerido |
| **Yarn** | >= 1.22 | Gestor de paquetes |
| **Watchman** | Última | Recomendado para macOS |

### Para Android

| Herramienta | Versión | Notas |
|-------------|---------|-------|
| **JDK** | 17+ | OpenJDK o Amazon Corretto |
| **Android Studio** | Última estable | Con Android SDK |
| **Android SDK** | API 36 (Android 15) | Compile & Target SDK |
| **Build Tools** | 36.0.0 | |
| **NDK** | 27.1.12297006 | Opcional, para módulos nativos |

**Variables de entorno requeridas:**

```bash
# Agregar a ~/.zshrc o ~/.bashrc
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

### Para iOS (solo macOS)

| Herramienta | Versión | Notas |
|-------------|---------|-------|
| **macOS** | 13+ | Ventura o superior |
| **Xcode** | 15+ | Incluye simulador iOS |
| **CocoaPods** | >= 1.14 | Gestor de dependencias iOS |
| **Ruby** | >= 2.7 | Para CocoaPods |

**Instalación de CocoaPods:**

```bash
sudo gem install cocoapods
```

### Configuración del Entorno

Para una guía completa de configuración del entorno de desarrollo, consulta la documentación oficial:

- [Configuración del entorno React Native](https://reactnative.dev/docs/set-up-your-environment)

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/crisfix22/AppTrading
cd AppTrading
```

2. Instalar dependencias:
```bash
yarn install
```

3. (Solo iOS) Instalar pods:
```bash
cd ios && pod install && cd ..
```

## Ejecutar el Proyecto

1. Iniciar el servidor Metro:
```bash
yarn start
```

2. En otra terminal, compilar y ejecutar:

**Android:**
```bash
yarn android
```

**iOS:**
```bash
yarn ios
```

> **Nota:** Asegúrate de tener un emulador/simulador corriendo o un dispositivo conectado.

## Credenciales de Prueba

La aplicación utiliza un sistema de autenticación simulado con mocks. Para ingresar, usa las siguientes credenciales:

| Email | Contraseña |
|-------|------------|
| `test@test.com` | `123456` |
| `john.doe@example.com` | `123456` |

## Estructura de Carpetas

```
src/
├── global/                    # Recursos compartidos en toda la app
│   ├── api/                   # Configuración de axios y tipos de respuesta
│   ├── components/            # Componentes reutilizables (Button, Input, Card, etc.)
│   ├── interface/             # Interfaces TypeScript globales
│   ├── navigation/            # Navegación principal de la app
│   ├── state/                 # Context y estado global (ej: UserContext)
│   ├── styles/                # Estilos, colores y hooks de estilos
│   └── utils/                 # Funciones utilitarias generales
│
└── screens/                   # Pantallas de la aplicación
    └── [screen]/              # Cada pantalla es autocontenida
        ├── components/        # Componentes específicos de la pantalla
        ├── hooks/             # Custom hooks de la pantalla
        ├── services/          # Llamadas a API y lógica de servicios
        │   └── mocks/         # Datos simulados para desarrollo/testing
        ├── state/             # Estado local (Context específico)
        ├── [screen].screen.tsx
        └── [screen].styles.ts
```

## Login Simulado

El login utiliza datos simulados (mock) para facilitar el desarrollo y pruebas. Los usuarios de prueba están definidos en `screens/login/services/mocks/userMock.ts`.

La arquitectura de carpetas soporta agregar mocks en `services/mocks/` para cualquier pantalla durante el desarrollo. Actualmente, los servicios de instrumentos y portfolio consumen APIs reales.

## Ventajas de la Estructura

| Ventaja | Descripción |
|---------|-------------|
| **Modularidad** | Cada pantalla es autocontenida con sus propios componentes, hooks, servicios y estado |
| **Escalabilidad** | Fácil agregar nuevas pantallas sin afectar las existentes |
| **Reutilización** | Componentes globales compartidos evitan duplicación de código |
| **Mantenibilidad** | Código organizado facilita encontrar y modificar funcionalidades |
| **Separación de responsabilidades** | Lógica de negocio (hooks/services) separada de la UI (components) |
| **Tipado consistente** | Interfaces en carpetas dedicadas para cada módulo |

## Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `yarn start` | Inicia el servidor Metro (bundler) |
| `yarn android` | Compila y ejecuta la app en Android |
| `yarn ios` | Compila y ejecuta la app en iOS |
| `yarn lint` | Ejecuta ESLint para verificar el código |

## Tecnologías Principales

- **React Native** 0.83
- **TypeScript**
- **React Navigation** (navegación)
- **Axios** (peticiones HTTP)
- **Ionicons** (iconos)
