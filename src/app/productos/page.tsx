import Link from "next/link"

export default function ProductosPage() {
  const productos = [
    { id: 1, nombre: "Producto 1 Rueda" },
    { id: 2, nombre: "Producto 2 Fuego" },
    { id: 3, nombre: "Producto 3 Isamsung" },
  ]

  return (
    <div>
      <h1>Lista de Productos</h1>
      <ul>
        {productos.map((p) => (
          
          <li key={p.id}>
            
            <Link href={`/productos/${p.id}`}>
              {p.nombre}
          </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}