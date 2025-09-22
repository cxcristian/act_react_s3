import Link from "next/link";
interface ProductoPageProps {
  params: Promise<{ id: string }>; // params es una promesa
}

export default async function ProductoPage({ params }: ProductoPageProps) {
  const { id } = await params; // toca esperar al muchacho 
  // simulamos la base de productos, con el id sacamos el nombre, asi de facil pa
  const productos = [
    { id: 1, nombre: "Producto 1 Rueda" },
    { id: 2, nombre: "Producto 2 Fuego" },
    { id: 3, nombre: "Producto 3 Isamsung" },
  ]

  const producto = productos.find((p) => p.id === Number(id));
  if (!producto){
    return <div>Producto no encontrado</div>
  }

  return (
    <div>
      <h1>Producto: {producto?.nombre}</h1>
      <p>Este es un producto con el id {id}.</p>
      <p>Descripcion: producto descriptivo</p>
      <Link href="../productos">Volver a la lista de productos</Link>
    </div>
  );
}
