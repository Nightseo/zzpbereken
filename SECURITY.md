# Seguridad - ZZP Bereken

## Rutas Protegidas en Producción

Este proyecto implementa múltiples capas de seguridad para proteger rutas administrativas y APIs de generación.

### 🔒 Rutas Bloqueadas en Producción

Las siguientes rutas están **completamente inaccesibles** en producción (devuelven 404):

#### Rutas Administrativas
- `/keywords` - Panel de gestión de keywords y generación de calculadoras
- `/keywords/*` - Todas las subrutas

#### APIs de Generación
- `/api/generate` - API para generar calculadoras con Claude
- `/api/generate-calculator` - API específica para generación de código
- `/api/generate-content` - API específica para generación de contenido
- `/api/check-calculator` - API para verificar calculadoras generadas

### 🛡️ Niveles de Protección

#### 1. Middleware (Primera capa)
**Archivo**: `middleware.ts`

El middleware intercepta todas las peticiones y devuelve 404 en producción:

```typescript
if (isProduction && protectedRoutes.some(route => pathname.startsWith(route))) {
  return new NextResponse(null, { status: 404 })
}
```

#### 2. Protección en API (Segunda capa)
**Archivos**: `app/api/*/route.ts`

Cada API tiene su propia verificación:

```typescript
if (process.env.NODE_ENV === 'production') {
  return new NextResponse(null, { status: 404 })
}
```

#### 3. Robots.txt (Tercera capa)
**Archivo**: `app/robots.ts`

Bloquea crawlers de buscar estas rutas:

```
Disallow: /api/
Disallow: /keywords/
```

### ✅ Verificación

Para verificar que las protecciones funcionan:

1. **Desarrollo** (debe funcionar):
   ```bash
   npm run dev
   # Visitar http://localhost:3000/keywords
   ```

2. **Producción** (debe devolver 404):
   ```bash
   npm run build
   npm start
   # Visitar http://localhost:3000/keywords → 404
   # Visitar http://localhost:3000/api/generate → 404
   ```

### 🚨 IMPORTANTE

**NUNCA** modifiques estas protecciones sin revisar primero las implicaciones de seguridad:

- Las APIs de generación ejecutan scripts del sistema
- El panel de keywords expone información sensible de SEO
- Los endpoints pueden consumir recursos significativos (APIs de IA)

### 🔐 Variables de Entorno Sensibles

Las siguientes variables de entorno contienen claves API y **NO deben exponerse**:

```bash
ANTHROPIC_API_KEY=     # Claude API
OPENAI_API_KEY=        # OpenAI GPT-4o
NODE_ENV=production    # Activa protecciones
```

### 📝 Notas Adicionales

- Todas las protecciones se basan en `NODE_ENV === 'production'`
- En desarrollo local, todas las rutas son accesibles para facilitar el trabajo
- Los archivos `.env` NUNCA deben subirse a git (están en `.gitignore`)

---

**Última actualización**: 2025-01-27
**Mantenedor**: ZZP Bereken Team
