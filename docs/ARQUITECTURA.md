# Arquitectura del Proyecto

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

## Ventajas de la Estructura

| Ventaja | Descripción |
|---------|-------------|
| **Modularidad** | Cada pantalla es autocontenida con sus propios componentes, hooks, servicios y estado |
| **Escalabilidad** | Fácil agregar nuevas pantallas sin afectar las existentes |
| **Reutilización** | Componentes globales compartidos evitan duplicación de código |
| **Mantenibilidad** | Código organizado facilita encontrar y modificar funcionalidades |
| **Separación de responsabilidades** | Lógica de negocio (hooks/services) separada de la UI (components) |
| **Tipado consistente** | Interfaces en carpetas dedicadas para cada módulo |

## Login Simulado

El login utiliza datos simulados (mock) para facilitar el desarrollo y pruebas. Los usuarios de prueba están definidos en `screens/login/services/mocks/userMock.ts`.

La arquitectura de carpetas soporta agregar mocks en `services/mocks/` para cualquier pantalla durante el desarrollo. Actualmente, los servicios de instrumentos y portfolio consumen APIs reales.

---

[← Volver al README](../README.md)

