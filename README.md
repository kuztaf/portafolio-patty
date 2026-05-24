# Portfolio de Artista Urbano - React + Tailwind CSS

Portfolio moderno y responsive para artista urbano/grafiti, inspirado en diseños contemporáneos de sitios web creativos.

## 🎨 Características

- **Componentes Modulares**: Arquitectura basada en componentes reutilizables
- **Diseño Responsive**: Optimizado para móvil, tablet y desktop
- **Animaciones Suaves**: Transiciones y efectos visuales modernos
- **Accesibilidad**: ARIA labels y navegación por teclado
- **Formulario Funcional**: Validación de campos y manejo de estados
- **Tailwind CSS**: Estilos utility-first sin CSS personalizado complejo
- **Performance**: Lazy loading de imágenes y optimizaciones

## 📁 Estructura

```
/UrbanArtistPortfolio
├── App.jsx                 # Componente principal
├── components/
│   ├── Header.jsx         # Navegación sticky con menú móvil
│   ├── Hero.jsx           # Sección hero con gradientes animados
│   ├── Projects.jsx       # Grid de proyectos con filtros
│   ├── About.jsx          # Información del artista + skills
│   ├── Contact.jsx        # Formulario de contacto validado
│   └── Footer.jsx         # Footer con redes sociales
├── index.css              # Estilos globales y Tailwind
├── tailwind.config.js     # Configuración de Tailwind
└── README.md              # Documentación
```

## 🚀 Uso

### Instalación

```bash
# Instalar dependencias
npm install react react-dom
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Desarrollo

```bash
# Con Vite
npm create vite@latest . -- --template react
npm install
npm run dev

# O con Create React App
npx create-react-app .
npm start
```

### Integración

1. Copia todos los archivos del directorio
2. Asegúrate de tener Tailwind CSS configurado
3. Importa los componentes en tu aplicación
4. Personaliza colores, textos y datos mock

## 🎯 Secciones

### Header
- Logo interactivo
- Navegación responsive
- Menú hamburguesa móvil
- Scroll detection para cambio de estilo

### Hero
- Título principal con gradiente animado
- CTAs para navegación
- Indicador de scroll
- Background con efectos blur

### Projects
- Grid responsive (1-2-3 columnas)
- Filtros por categoría
- Modal de detalles
- Lazy loading de imágenes
- Hover effects

### About
- Biografía del artista
- Estadísticas dinámicas
- Skills con progress bars
- Imagen destacada

### Contact
- Formulario con validación
- Manejo de estados (loading, success, error)
- Información de contacto
- Integración con email (simulada)

### Footer
- Links de navegación
- Redes sociales
- Botón scroll to top
- Copyright dinámico

## 🎨 Personalización

### Colores
Los colores principales están definidos en Tailwind:
- Primary: `red-600` (#dc2626)
- Background: `zinc-900` (#18181b)
- Accent: `purple-600` (#9333ea)

Para cambiar, modifica las clases de Tailwind o extiende en `tailwind.config.js`.

### Datos Mock
Actualiza los arrays de datos en cada componente:
- `projects` en Projects.jsx
- `stats` y `skills` en About.jsx
- `contactInfo` y `socialLinks` en Footer.jsx

### Imágenes
Reemplaza las URLs de Unsplash con tus propias imágenes:
- Proyectos: URLs en el array `projects`
- About: Imagen principal del artista
- Fallback incluido para errores de carga

## ♿ Accesibilidad

- Navegación por teclado completa
- ARIA labels en botones e interacciones
- Roles semánticos (navigation, main, footer)
- Focus visible en elementos interactivos
- Alt text en imágenes
- Form validation con mensajes descriptivos

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔧 Dependencias

- React 18+
- Tailwind CSS 3+
- No requiere bibliotecas adicionales

## 📝 Notas

- Las imágenes usan Unsplash como placeholder
- El formulario tiene lógica de envío simulada (implementar backend)
- Scroll suave habilitado globalmente
- Animaciones optimizadas para performance
- Compatible con React 18 Strict Mode

## 🚀 Producción

```bash
npm run build
```

El código está optimizado para producción sin configuración adicional.
