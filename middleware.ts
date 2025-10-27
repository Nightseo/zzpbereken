import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Rutas protegidas solo accesibles en desarrollo
  const protectedRoutes = [
    '/keywords',
    '/api/generate-calculator',
    '/api/generate-content',
    '/api/generate',
    '/api/check-calculator',
  ]

  // Verificar si estamos en producción
  const isProduction = process.env.NODE_ENV === 'production'

  // Si estamos en producción y la ruta está protegida
  if (isProduction && protectedRoutes.some(route => pathname.startsWith(route))) {
    // Devolver 404 para ocultar la existencia de estas rutas
    return new NextResponse(null, { status: 404 })
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/keywords/:path*',
    '/api/generate-calculator/:path*',
    '/api/generate-content/:path*',
    '/api/generate/:path*',
    '/api/check-calculator/:path*',
  ]
}
