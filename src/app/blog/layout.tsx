import Link from "next/link";

export default function ProductosLayout({ children }: { children: React.ReactNode }) {
  
  return (
    <section style={{ padding: "16px", backgroundColor: "#fafafa" }}>
      <h1>Seccion de Blog</h1>

     
      <nav style={{ marginBottom: "16px" }}>
        <ul style={{ display: "flex", gap: "16px", listStyle: "none", padding: 0 }}>
        </ul>
      </nav>

 
      <div>{children}</div>
    </section>
  );
}
