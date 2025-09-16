import Link from "next/link";

export default function ProductosLayout({ children }: { children: React.ReactNode }) {
  
  return (
    <section style={{ padding: "16px", backgroundColor: "#fafafa" }}>
      <h1>Categoria de Productos</h1>

     
      <nav style={{ marginBottom: "16px" }}>
        <ul style={{ display: "flex", gap: "16px", listStyle: "none", padding: 0 }}>
          <li>
            <Link href="/productos/categorias/electronicos">Electronicos</Link>
          </li>
          <li>
            <Link href="/productos/categorias/ropa">Ropa</Link>
          </li>
          <li>
            <Link href="/productos/categorias/gatos">Gatos</Link>
          </li>
        </ul>
      </nav>

 
      <div>{children}</div>
    </section>
  );
}
