// app/layout.tsx
'use client'

import Link from 'next/link'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <nav style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
          <Link href="/">Inicio</Link>
          <Link href="/productos">Productos</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contacto">Contacto</Link>
        </nav>
        {/* Aquí se muestran las páginas */}
        {children}
      </body>
    </html>
  )
}
