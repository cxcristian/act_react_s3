import Link from "next/link";

export default function ProductosLayout({ children }) {
  return (
    <section style={{ padding: "16px", backgroundColor: "#fafafa" }}>
      <h1>Sección de Productos</h1>

     
      <nav style={{ marginBottom: "16px" }}>
        <ul style={{ display: "flex", gap: "16px", listStyle: "none", padding: 0 }}>
          <li>
            <Link href="/productos/laptop">Laptops</Link>
          </li>
          <li>
            <Link href="/productos/smartphone">Smartphones</Link>
          </li>
          <li>
            <Link href="/productos/tablet">Tablets</Link>
          </li>
        </ul>
      </nav>

 
      <div>{children}</div>
    </section>
  );
}
