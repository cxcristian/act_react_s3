import Link from 'next/link'
export default function ProductosPage() {
  return (
    <>
  <h1>Página de Productos</h1>
  <h2>PRODUCTOS</h2>
     <section>
      <h1>Productos</h1>
      <ol>
        <li>
          <Link href="/productos/laptop">Laptop</Link>
        </li>
        <li>
          <Link href="/productos/smartphone">Smartphone</Link>
        </li>
        <li>
          <Link href="/productos/tablet">Tablet</Link>
        </li>
      </ol>
    </section>
  </>)
}
