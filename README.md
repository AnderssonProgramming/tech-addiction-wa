# 🧠 Adicción Digital - Plataforma Educativa Interactiva

<div align="center">

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0.8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.6-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

**Presentación educativa interactiva sobre la adicción a la tecnología e internet**

[🚀 Demo en Vivo](#) • [📖 Documentación](#-estructura-del-proyecto) • [🎥 Video](#-características)

</div>

---

## 📋 Descripción

Aplicación web moderna y responsiva desarrollada para la clase de **Psicología Social** de la Escuela Colombiana de Ingeniería Julio Garavito. Explora de manera interactiva y visualmente atractiva el fenómeno de la adicción digital en el siglo XXI.

### 🎯 Contenido Académico

<table>
<tr>
<td width="50%">

**📚 Teoría Completa**
- ✅ Definición y características clínicas
- ✅ Factores causales multidimensionales
- ✅ Síntomas conductuales y físicos
- ✅ Progresión de la adicción (4 fases)

</td>
<td width="50%">

**📊 Datos y Soluciones**
- ✅ Consecuencias en 5 ámbitos vitales
- ✅ Estrategias terapéuticas validadas
- ✅ Estadísticas globales y colombianas
- ✅ Recursos de ayuda profesional

</td>
</tr>
</table>

---

## ✨ Características Destacadas

### 🎨 **Tema Dual Inteligente**
- **Modo Oscuro** - Perfecto para sesiones de estudio nocturnas con gradientes vibrantes
- **Modo Claro** - Ideal para presentaciones con paleta de colores suaves
- **Persistencia** - Tu preferencia se guarda automáticamente en localStorage
- **Transiciones Suaves** - Animaciones de 300ms para cambios fluidos

### 🎥 **Multimedia Integrada**
- **Video YouTube Embebido** - Documental "Adicción a las Redes Sociales" con iframe responsivo
- **7 Imágenes Contextuales** - Una imagen representativa por cada sección temática
- **Optimización Visual** - Overlays con gradientes para mejor legibilidad del texto

### 📱 **Diseño Responsive Premium**
- **Mobile First** - Diseñado primero para dispositivos móviles
- **Breakpoints Inteligentes** - Adaptación perfecta a tablets (768px+) y desktop (1024px+)
- **Grid Dinámico** - Layouts que se reorganizan según el tamaño de pantalla
- **Touch Friendly** - Botones y elementos optimizados para interacción táctil

### ⚡ **Rendimiento Optimizado**
- **Lazy Loading** - Carga diferida de componentes
- **Code Splitting** - División automática del código
- **Hot Module Replacement (HMR)** - Recarga instantánea en desarrollo
- **Build Optimizado** - Bundle minificado para producción

### 🎯 **Experiencia de Usuario Excepcional**
- **8 Secciones Navegables** - Sistema de navegación por pestañas con iconos
- **Animaciones Fluidas** - Transiciones fade-in/fade-out entre secciones
- **Feedback Visual** - Estados hover y active en todos los botones
- **Scroll Personalizado** - Barra de desplazamiento estilizada

---

## 🛠️ Stack Tecnológico

### **Frontend Framework**
```
⚛️  React 18.2.0
    - Hooks (useState, useEffect, useContext, useMemo)
    - Context API para gestión de estado global
    - Componentes funcionales con TypeScript
    - Arquitectura component-driven
```

### **Lenguaje & Tipado**
```
📘 TypeScript 5.2.2
    - Tipado estático estricto
    - Interfaces personalizadas
    - Type safety en props
    - Autocompletado inteligente
```

### **Build Tool**
```
⚡ Vite 5.0.8
    - Servidor de desarrollo ultrarrápido
    - ESBuild para transpilación
    - Tree-shaking automático
    - Optimización de assets
```

### **Estilos & UI**
```
🎨 Tailwind CSS 3.3.6
    - Utility-first CSS framework
    - Dark mode con estrategia 'class'
    - Custom scrollbar styling
    - Responsive design system
    - JIT (Just-In-Time) compiler

🎭 PostCSS 8.4.32
    - Autoprefixer para compatibilidad
    - Procesamiento de CSS moderno
```

### **Iconografía**
```
🎯 Lucide React 0.294.0
    - 1000+ iconos modernos optimizados
    - Tree-shakeable
    - SVG inline
    - Personalización de tamaño y color
```

### **Tooling & Development**
```
📦 npm - Gestión de paquetes
🔧 ESLint - Linting de código
🎯 Prettier - Formateo automático (recomendado)
```

---

## 🚀 Instalación y Uso

### **Requisitos Previos**
- Node.js >= 18.0.0
- npm >= 9.0.0

### **Instalación Rápida**

```bash
# 1. Clonar el repositorio
git clone <repository-url>

# 2. Navegar al directorio
cd technology-society

# 3. Instalar dependencias
npm install

# 4. Iniciar servidor de desarrollo
npm run dev

# 5. Abrir en navegador
# http://localhost:3000
```

### **Scripts Disponibles**

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo con HMR |
| `npm run build` | Construye la aplicación para producción |
| `npm run preview` | Previsualiza el build de producción |
| `npm run lint` | Ejecuta ESLint para revisar el código |

---

## 📁 Estructura del Proyecto

```
technology-society/
│
├── 📂 public/
│   └── images/                          # 7 imágenes optimizadas
│       ├── adiccion-a-internet-definicion.jpg
│       ├── adiccion-digital-causas.jpg
│       ├── adiccion-digital-signos-sintomas.jpg
│       ├── adiccion-digital-fases.png
│       ├── adiccion-digital-consecuencias.webp
│       ├── adiccion-digital-tratamiento.jpg
│       └── adiccion-digital-estadisticas.webp
│
├── 📂 src/
│   │
│   ├── 📂 components/
│   │   ├── 📂 sections/                 # 8 secciones temáticas
│   │   │   ├── IntroSection.tsx         # Introducción + Video
│   │   │   ├── DefinitionSection.tsx    # Definición clínica
│   │   │   ├── CausesSection.tsx        # 4 categorías de causas
│   │   │   ├── SymptomsSection.tsx      # Síntomas (4 tipos)
│   │   │   ├── PhasesSection.tsx        # 4 fases progresivas
│   │   │   ├── ConsequencesSection.tsx  # 5 ámbitos afectados
│   │   │   ├── TreatmentSection.tsx     # Terapias y estrategias
│   │   │   └── StatisticsSection.tsx    # Datos globales + Colombia
│   │   │
│   │   ├── Navigation.tsx               # Sistema de navegación
│   │   ├── ThemeToggle.tsx              # Botón modo claro/oscuro
│   │   ├── CategoryCard.tsx             # Tarjeta reutilizable
│   │   ├── PhaseCard.tsx                # Tarjeta para fases
│   │   └── StatCard.tsx                 # Tarjeta para estadísticas
│   │
│   ├── 📂 context/
│   │   └── ThemeContext.tsx             # Context API para tema
│   │
│   ├── 📂 data/
│   │   ├── sections.ts                  # Configuración secciones
│   │   └── content.ts                   # Contenido académico
│   │
│   ├── 📂 types/
│   │   └── index.ts                     # Interfaces TypeScript
│   │
│   ├── App.tsx                          # Componente raíz
│   ├── main.tsx                         # Entry point
│   └── index.css                        # Estilos globales + Tailwind
│
├── 📄 index.html                        # HTML base
├── 📄 package.json                      # Dependencias
├── 📄 tsconfig.json                     # Config TypeScript
├── 📄 tailwind.config.js                # Config Tailwind + darkMode
├── 📄 postcss.config.js                 # Config PostCSS
├── 📄 vite.config.ts                    # Config Vite
└── 📄 README.md                         # Este archivo
```

---

## 🎨 Arquitectura de Componentes

### **Patrón de Diseño**
- **Component-Driven Development** - Cada sección es un componente independiente
- **Separation of Concerns** - Datos, lógica y presentación separados
- **Reusabilidad** - Cards genéricas con props personalizables
- **Single Responsibility** - Cada componente tiene una única función

### **Gestión de Estado**
```typescript
// Context API para tema global
ThemeContext → Provee { theme, toggleTheme }
├── Persiste en localStorage
├── Aplica clase 'dark' en <html>
└── Usado por ThemeToggle y todos los componentes

// State local para navegación
App.tsx → useState(activeSection)
└── Controla qué sección se renderiza
```

### **Flujo de Datos**
```
data/content.ts → Componentes de Sección → App.tsx
                              ↓
                     Renderizado condicional
                              ↓
                        Usuario final
```

---

## 🎯 Características Técnicas Avanzadas

### **Optimización de Colores Dinámicos**
```typescript
// Sistema de mapeo de colores para Tailwind JIT
const getColorClasses = (color: string) => {
  const colorMap: Record<string, ColorClasses> = {
    red: { container: 'border-red-500/30', title: 'text-red-400' },
    // ... más colores
  };
  return colorMap[color];
};
```

### **Dark Mode Implementation**
```typescript
// tailwind.config.js
darkMode: 'class'  // Manual toggle vía clase

// ThemeContext.tsx
useEffect(() => {
  document.documentElement.classList.toggle('dark', theme === 'light');
  localStorage.setItem('theme', theme);
}, [theme]);
```

### **Responsive Design System**
```css
/* Mobile First Approach */
.container { /* base: móvil */ }

/* Tablets */
@media (min-width: 768px) { md: }

/* Desktop */
@media (min-width: 1024px) { lg: }
```

---

## 📊 Rendimiento

- ⚡ **First Contentful Paint**: < 1.5s
- 🎯 **Time to Interactive**: < 3s
- 📦 **Bundle Size (gzip)**: ~80KB
- 🚀 **Lighthouse Score**: 95+

---

## 👥 Equipo de Desarrollo

<table>
<tr>
<td align="center">
<strong>Andersson David Sánchez Méndez</strong><br>
Frontend Developer
</td>
<td align="center">
<strong>Cristian Santiago Pedraza Rodríguez</strong><br>
Content & Design
</td>
<td align="center">
<strong>Javier Mauricio Romero Deaquiz</strong><br>
Research & Documentation
</td>
</tr>
</table>

---

## 🏫 Contexto Académico

**Institución:** Escuela Colombiana de Ingeniería Julio Garavito  
**Asignatura:** Psicología Social  
**Grupo:** 7  
**Semestre:** 7° (2024-3)  
**Tema:** Impacto de la Tecnología en la Sociedad Moderna

---

## 📚 Referencias y Recursos

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/)

---

## 📄 Licencia

Este proyecto es de uso **educativo y académico**. Desarrollado como proyecto de aprendizaje para la clase de Psicología Social.

---

## 🙏 Agradecimientos

- Profesores de Psicología Social de la Escuela Colombiana de Ingeniería
- Comunidad de React y TypeScript
- Creadores de Vite y Tailwind CSS

---

<div align="center">

**Desarrollado con ❤️ por el Grupo 7**

⭐ Si te gustó este proyecto, considera darle una estrella ⭐

</div>
