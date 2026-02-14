# Penicord

## **Descripción**

Penicord es una página web de presentación y galería creada con Next.js y React. Está pensada para mostrar servicios, proyectos y una galería visual, con componentes reutilizables y rutas basadas en el App Router de Next.js.

## **Características principales**

- **Interfaz moderna:** Componentes React y estilos globales con `globals.css`.
- **Rutas con App Router:** Páginas y subrutas en `src/app/` (por ejemplo `galeria`, `nosotros`).
- **Componentes reutilizables:** `Navbar`, `Hero`, `Service`, `Contact`, `Footer`, y un carrusel de imágenes.
- **Optimización de imágenes y assets:** Archivos estáticos en la carpeta `public/`.

## **Capturas / GIF demostrativo**

Agrega tus capturas o un GIF dentro de `public/screenshots/` y referencia las imágenes desde aquí. Ejemplos de uso:

![Demo GIF](/screenshots/demo.gif)
![Preview](/screenshots/preview.png)

Si aún no tienes las imágenes, deja los archivos con esos nombres en `public/screenshots/` y se mostrarán automáticamente.

## **Requisitos previos**

- Node.js v18 o superior
- npm, yarn o pnpm (recomendado: `pnpm`)

## **Instalación y ejecución (desarrollo)**

Instala dependencias e inicia el servidor de desarrollo:

```bash
# usando npm
npm install
npm run dev

# o usando pnpm
pnpm install
pnpm dev
```

Abre http://localhost:3000 en tu navegador.

## **Build y producción**

```bash
npm run build
npm start
```

## **Estructura importante**

- `src/app/` — Rutas y páginas de la aplicación.
- `src/components/` — Componentes React reutilizables.
- `public/` — Archivos estáticos (imágenes, GIFs, etc.).

## **Cómo agregar capturas**

1. Crea la carpeta `public/screenshots/` (si no existe).
2. Añade `demo.gif` y/o `preview.png` (o cambia los nombres en este README).

## **Contribuir**

Si quieres contribuir, abre un issue o un pull request en el repositorio con una breve descripción de los cambios.

---

¿Quieres que intente de nuevo sobrescribir `README.md` directamente o prefieres que renombre `README_NEW.md` a `README.md` ahora?