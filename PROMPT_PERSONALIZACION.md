# 🎨 PROMPT: Personalizar Portfolio React con Contenido Real

## CONTEXTO
He analizado el portfolio actual de Patricia Caballero en https://patriciacaballeror.myportfolio.com/sobre-mi y necesito adaptar los componentes React ya creados en `/Users/kuztaf/portafolio/src/components/` con su información real.

---

## INFORMACIÓN EXTRAÍDA DEL PORTFOLIO ACTUAL

### 👤 SOBRE MÍ
- **Nombre**: Patricia Caballero
- **Profesión**: Creadora visual
- **Ubicación**: Madrid, España
- **Especialidades**: Fotografía, diseño y producción audiovisual
- **Enfoque**: Narrativa visual, contenido digital e identidad de marca
- **Bio**: 
  > "A lo largo de mi trayectoria he trabajado en áreas artísticas, académicas y audiovisuales, explorando distintas formas de comunicación visual desde la fotografía, el diseño gráfico, el video y la ilustración. Me interesa crear piezas que conecten estética, emoción y funcionalidad."

### 📁 CATEGORÍAS DE PROYECTOS
1. Dirección editorial
2. Diseño de marca
3. Diseño de app (UX/UI)
4. Fotografía retrato
5. Fotografía esculturas
6. Fotografía naturaleza
7. Cortometraje
8. Corto animado
9. Ilustración vectorial
10. Reel

---

## TAREA: PERSONALIZACIÓN DE COMPONENTES

Actúa como desarrollador frontend experto. Adapta **cada componente React** con los datos reales de Patricia Caballero siguiendo esta estructura:

### 📋 COMPONENTES A PERSONALIZAR

#### 1️⃣ **Hero.jsx** (`src/components/Hero.jsx`)
**Cambios necesarios:**
- Título principal: "PATRICIA CABALLERO" o "Creadora Visual"
- Subtítulo: Breve hook atractivo sobre narrativa visual
- Descripción: Resumen de 2-3 líneas sobre su trabajo
- CTA buttons: Ajustar textos a su estilo
- Colores/gradientes: Adaptar a paleta profesional (no urbana)

**Genera:**
```jsx
// Código completo del componente Hero personalizado
```

---

#### 2️⃣ **About.jsx** (`src/components/About.jsx`)
**Cambios necesarios:**
- Bio completa basada en el texto extraído
- Skills principales:
  - Fotografía (retrato, producto, naturaleza)
  - Diseño gráfico e identidad de marca
  - Producción audiovisual
  - UX/UI Design
  - Dirección editorial
  - Ilustración vectorial
- Experiencia/años: Inferir o dejar flexible
- Ubicación: Madrid, España

**Genera:**
```jsx
// Código completo del componente About personalizado
```

---

#### 3️⃣ **Projects.jsx** (`src/components/Projects.jsx`)
**Cambios necesarios:**
- Crear array de proyectos con las 10 categorías identificadas
- Cada proyecto debe incluir:
  - `title`: Nombre del proyecto
  - `category`: Una de las categorías listadas arriba
  - `image`: URL placeholder (usar https://placehold.co/600x400/[color]/white?text=[Nombre])
  - `description`: Descripción breve de 1-2 líneas
  - `tags`: Array de tecnologías/herramientas (ej: ["Adobe Photoshop", "Lightroom"])

- Sistema de filtros por categoría:
  - "Todos"
  - "Fotografía" (agrupa retratos, esculturas, naturaleza)
  - "Diseño" (agrupa marca, app, editorial)
  - "Audiovisual" (agrupa cortometrajes, animación, reel)
  - "Ilustración"

**Genera:**
```jsx
// Código completo del componente Projects personalizado con data mock
```

---

#### 4️⃣ **Contact.jsx** (`src/components/Contact.jsx`)
**Cambios necesarios:**
- Título: Adaptar a tono profesional (no urbano)
- Descripción: "¿Tienes un proyecto en mente? Hablemos sobre cómo puedo ayudarte."
- Formulario: Mantener campos actuales
- Redes sociales (si tienes):
  - Instagram
  - LinkedIn
  - Behance
  - Email

**Genera:**
```jsx
// Código completo del componente Contact personalizado
```

---

#### 5️⃣ **Header.jsx** (`src/components/Header.jsx`)
**Cambios necesarios:**
- Logo/nombre: "Patricia Caballero" o "PC"
- Links de navegación:
  - Inicio
  - Proyectos
  - Sobre mí
  - Contacto
- Estilo: Más minimalista y profesional

**Genera:**
```jsx
// Código completo del componente Header personalizado
```

---

#### 6️⃣ **Footer.jsx** (`src/components/Footer.jsx`)
**Cambios necesarios:**
- Copyright: "© 2026 Patricia Caballero. Creadora Visual."
- Links adicionales si aplica
- Redes sociales

**Genera:**
```jsx
// Código completo del componente Footer personalizado
```

---

## REQUISITOS ADICIONALES

### 🎨 Paleta de Colores Sugerida
Analiza el portafolio actual y sugiere:
- Color primario (para acentos)
- Color secundario
- Backgrounds
- Tipografía

**Genera:**
```js
// tailwind.config.js - Extensión de colores personalizados
```

---

### 📸 Imágenes Placeholder
Para cada proyecto, genera URLs de placeholder con:
- Dimensiones: 600x400 o 800x600
- Colores coherentes con la categoría
- Texto descriptivo

Formato: `https://placehold.co/600x400/[hex]/ffffff?text=[Titulo+Proyecto]`

---

### ✅ Checklist Final
- [ ] Hero refleja identidad profesional de Patricia
- [ ] About incluye bio completa y skills reales
- [ ] Projects tiene las 10 categorías con data mock
- [ ] Contact tiene tono profesional y CTA claro
- [ ] Header/Footer coherentes con marca personal
- [ ] Colores adaptados (no tema urbano/grafiti)
- [ ] Responsive design mantenido
- [ ] Sin errores de sintaxis

---

## FORMATO DE SALIDA

Genera código listo para copiar/pegar en cada archivo con:
1. Imports necesarios
2. Componente completo funcional
3. Datos mock realistas
4. Comentarios en secciones clave
5. Props/hooks necesarios

**NO INCLUYAS:**
- Explicaciones largas
- Configuraciones de build
- Tests

---

## EJECUCIÓN
Procesa cada componente en orden y entrega el código completo funcional. Si necesitas información adicional (email, redes sociales, etc.), márcalo claramente para que pueda añadirse después.
