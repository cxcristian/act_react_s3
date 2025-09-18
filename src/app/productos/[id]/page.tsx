interface ProductoPageProps {
  params: {
    id: string;
  };
}

export default function ProductoPage({ params }: ProductoPageProps) {
  const { id } = params;

  return (
    <div>
      <h1>Producto: {id}</h1>
      <p>Este es un producto con el id {id}.</p>
      <p>Descripcion: producto descriptivo</p>
      <a href="/productos">Volver a la lista de productos</a>
    </div>
  );
}