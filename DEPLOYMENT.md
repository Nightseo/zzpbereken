# Guía de Deployment - ZZP Bereken

## Despliegue en Vercel

### 🚀 Configuración Rápida

1. **Conectar Repositorio**
   - Ve a [vercel.com](https://vercel.com)
   - Click en "Add New Project"
   - Importa: `https://github.com/Nightseo/zzpbereken`

2. **Configuración del Framework**
   - Framework Preset: `Next.js`
   - Root Directory: `./`
   - Build Command: `npm run build` (autodetectado)
   - Output Directory: `.next` (autodetectado)
   - Install Command: `npm install` (autodetectado)

3. **Variables de Entorno** ⚠️ IMPORTANTE

   **NO configurar estas variables en producción** (solo para desarrollo local):
   ```bash
   # NO añadir estas en Vercel:
   ANTHROPIC_API_KEY=sk-ant-xxx
   OPENAI_API_KEY=sk-xxx
   ```

   **Variables opcionales** (si las necesitas):
   ```bash
   NODE_ENV=production  # Se configura automáticamente
   ```

4. **Deploy**
   - Click "Deploy"
   - Espera 2-3 minutos
   - ✅ Tu sitio estará en: `https://zzpbereken.vercel.app`

---

## ✅ Verificación Post-Deploy

### 1. Verificar Rutas Públicas (deben funcionar)

Estas URLs **DEBEN responder correctamente**:

```bash
✅ https://zzpbereken.vercel.app/
✅ https://zzpbereken.vercel.app/bereken
✅ https://zzpbereken.vercel.app/bereken/kinderalimentatie-zzp
✅ https://zzpbereken.vercel.app/categorie/belasting
✅ https://zzpbereken.vercel.app/over-ons
✅ https://zzpbereken.vercel.app/privacybeleid
✅ https://zzpbereken.vercel.app/cookies
✅ https://zzpbereken.vercel.app/sitemap.xml
✅ https://zzpbereken.vercel.app/robots.txt
```

### 2. Verificar Rutas Protegidas (deben dar 404)

Estas URLs **DEBEN devolver 404**:

```bash
❌ https://zzpbereken.vercel.app/keywords → 404
❌ https://zzpbereken.vercel.app/api/generate → 404
❌ https://zzpbereken.vercel.app/api/check-calculator → 404
❌ https://zzpbereken.vercel.app/api/generate-calculator → 404
❌ https://zzpbereken.vercel.app/api/generate-content → 404
```

---

## 🔧 Configuración de Dominio Personalizado

### Opción 1: Dominio Propio

1. En Vercel Project Settings → Domains
2. Añade: `zzpbereken.com`
3. Configura DNS en tu proveedor:
   ```
   Tipo: A
   Nombre: @
   Valor: 76.76.21.21

   Tipo: CNAME
   Nombre: www
   Valor: cname.vercel-dns.com
   ```

### Opción 2: Subdominio Vercel

El proyecto automáticamente tendrá:
- `https://zzpbereken.vercel.app` (principal)
- `https://zzpbereken-git-main-nightseo.vercel.app` (por rama)
- `https://zzpbereken-xxxxx.vercel.app` (por deploy)

---

## 🐛 Troubleshooting

### Build Falla

**Error**: `Module not found: Can't resolve '@/...'`

**Solución**: Verifica `tsconfig.json` tenga:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### Las rutas protegidas son accesibles

**Problema**: `/keywords` o APIs responden en producción

**Verificar**:
1. Variable de entorno `NODE_ENV=production` está configurada
2. El archivo `middleware.ts` existe en la raíz
3. Revisa los logs de Vercel para errores

**Solución**:
```bash
# Vercel configura NODE_ENV automáticamente
# NO es necesario configurarlo manualmente
```

### Error de TypeScript en Build

**Error**: Type errors durante `npm run build`

**Solución**:
```bash
# Ejecutar localmente primero
npm run build

# Si hay errores, corregir antes de deploy
```

### Calculadoras no se cargan

**Problema**: Las páginas de calculadoras devuelven error

**Verificar**:
1. Los archivos existen en `calculators-data/*.ts`
2. Están exportados correctamente en `lib/generated-calculators.ts`
3. El build se completó sin errores

---

## 📊 Monitoreo y Analytics

### Logs de Vercel

Ver logs en tiempo real:
1. Ve a tu proyecto en Vercel
2. Click en "Deployments"
3. Selecciona un deployment
4. Click en "View Function Logs"

### Performance

Vercel provee automáticamente:
- ✅ Edge Network (CDN global)
- ✅ Automatic HTTPS
- ✅ Brotli/Gzip compression
- ✅ Image optimization
- ✅ Static page caching

---

## 🔄 CI/CD Automático

### Deploy Automático por Rama

- **main** → `https://zzpbereken.vercel.app` (producción)
- **develop** → `https://zzpbereken-git-develop.vercel.app` (staging)
- **feature/x** → `https://zzpbereken-git-feature-x.vercel.app` (preview)

### Deploy Manual

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy a producción
vercel --prod

# Deploy a preview
vercel
```

---

## 🔐 Seguridad en Producción

### Variables de Entorno

⚠️ **NUNCA** expongas estas claves en producción:

```bash
# ❌ NO CONFIGURAR en Vercel
ANTHROPIC_API_KEY
OPENAI_API_KEY
```

Estas claves solo se usan en **desarrollo local** para generar calculadoras.
En producción, las calculadoras ya están pre-generadas en archivos `.ts`.

### Headers de Seguridad

Vercel añade automáticamente:
- `X-Frame-Options: SAMEORIGIN`
- `X-Content-Type-Options: nosniff`
- `X-XSS-Protection: 1; mode=block`

Para headers adicionales, crear `vercel.json`:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-DNS-Prefetch-Control",
          "value": "on"
        },
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=31536000; includeSubDomains"
        }
      ]
    }
  ]
}
```

---

## ✅ Checklist Pre-Deploy

- [ ] `npm run build` funciona sin errores
- [ ] `npm run lint` pasa sin warnings críticos
- [ ] Todas las calculadoras están generadas
- [ ] `.env.local` NO está en git
- [ ] `SECURITY.md` revisado
- [ ] Dominio configurado (si aplica)
- [ ] Variables de entorno NO configuradas en Vercel

---

## 📞 Soporte

**Vercel Docs**: https://vercel.com/docs
**Next.js Docs**: https://nextjs.org/docs

**Repositorio**: https://github.com/Nightseo/zzpbereken

---

**Última actualización**: 2025-01-27
**Versión**: 1.0.0
