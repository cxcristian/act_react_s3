
import React from 'react';
import Link from 'next/link'
export default function Home() {
  return (
         
   <>
   <h1>Pagina de inicio</h1>
   <article><p>Bienvenido estimado visitante, estas es una pagina muy basica de HTML, </p></article>

<section style={{ backgroundColor: "#f5f5f5", padding: "16px", borderRadius: "8px" }}>
  <h2 style={{ marginBottom: "8px", fontWeight: "bold" }}>Enlaces</h2>
  <section style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
    <Link href="/">Inicio</Link>
    <Link href="/productos">Productos</Link>
    <Link href="/blog">Blog</Link>
    <Link href="/contacto">Contacto</Link>
    <Link href="/docs">Documentación</Link>
  </section>
</section>

   </>
  );
}
