# AppTrading

Aplicación móvil de trading desarrollada con React Native para Android. Permite visualizar instrumentos financieros, gestionar portafolios y realizar operaciones de compra/venta.

## Capturas de Pantalla

| Login | Instrumentos | Portfolio | Perfil |
|-------|--------------|-----------|--------|
| ![Login](docs/screenshots/login.png) | ![Instrumentos](docs/screenshots/instruments.png) | ![Portfolio](docs/screenshots/portfolio.png) | ![Perfil](docs/screenshots/profile.png) |

## Requisitos Previos

- **Node.js** >= 20
- **Yarn** (gestor de paquetes)
- **Android Studio** con Android SDK
- **JDK** 17+

## Instalación

1. Clonar el repositorio:
```bash
git clone <repo-url>
cd AppTrading
```

2. Instalar dependencias:
```bash
yarn install
```

## Ejecutar el Proyecto

1. Iniciar el servidor Metro:
```bash
yarn start
```

2. En otra terminal, compilar y ejecutar en Android:
```bash
yarn android
```

> **Nota:** Asegúrate de tener un emulador Android corriendo o un dispositivo conectado.

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
        ├── state/             # Estado local (Context específico)
        ├── [screen].screen.tsx
        └── [screen].styles.ts
```

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
| `yarn lint` | Ejecuta ESLint para verificar el código |

## Tecnologías Principales

- **React Native** 0.83
- **TypeScript**
- **React Navigation** (navegación)
- **Axios** (peticiones HTTP)
- **Ionicons** (iconos)
