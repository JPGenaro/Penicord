# Contribuir a Penicord

¡Gracias por tu interés en contribuir a Penicord! A continuación tienes una guía rápida para colaborar de forma efectiva.

## Cómo reportar un problema (issue)

- Crea un issue nuevo en el repositorio con un título claro.
- Incluye pasos para reproducir, resultado esperado vs resultado real, y el entorno (Node/OS/browser).
- Si es posible, añade capturas de pantalla o ejemplos mínimos de código.

## Cómo proponer cambios (pull request)

1. Haz fork del repositorio y clona tu fork localmente.
2. Crea una rama descriptiva: `feature/mi-nueva-funcionalidad` o `fix/descripcion-bug`.
3. Haz cambios pequeños y atómicos. Asegúrate de que el proyecto se compila:

```bash
npm install
npm run dev
```

4. Formatea tu código y corre el linter si aplica:

```bash
npm run lint
```

5. Escribe un mensaje de commit claro (ej.: `feat: añadir slider en galería` o `fix: corregir responsive navbar`).
6. Abre un Pull Request desde tu rama hacia `main` con:
   - Descripción del cambio
   - Issues relacionados (si los hay)
   - Instrucciones para probarlo

## Checklist para Pull Requests

- [ ] El código compila y la app corre en modo desarrollo
- [ ] No se rompen otras rutas/páginas
- [ ] Los estilos siguen la convención del proyecto
- [ ] Añadiste documentación o ejemplos si aplica

## Estilo de código

- Sigue la convención de React/Next (JSX/TSX según corresponda).
- Usa los linters y formateadores configurados en el proyecto.
- Prefiere nombres descriptivos para componentes y props.

## Pruebas y verificación local

Aunque este proyecto no incluye pruebas automatizadas por defecto, prueba manualmente las rutas principales:

- `http://localhost:3000/`
- `http://localhost:3000/galeria`
- `http://localhost:3000/nosotros`

## Comunicación

Si tienes dudas grandes antes de hacer PRs (cambios de arquitectura, migraciones), abre un issue o contacta al mantenedor principal.

---

Gracias por tu contribución — tu ayuda mejora el proyecto para todos.