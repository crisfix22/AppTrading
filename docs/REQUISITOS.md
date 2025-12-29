# Requisitos Previos

## Generales (ambas plataformas)

| Herramienta | Versión | Notas |
|-------------|---------|-------|
| **Node.js** | >= 20 | Requerido |
| **Yarn** | >= 1.22 | Gestor de paquetes |
| **Watchman** | Última | Recomendado para macOS |

## Para Android

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

## Para iOS (solo macOS)

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

## Configuración del Entorno

Para una guía completa de configuración del entorno de desarrollo, consulta la documentación oficial:

- [Configuración del entorno React Native](https://reactnative.dev/docs/set-up-your-environment)

---

[← Volver al README](../README.md)

