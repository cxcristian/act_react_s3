import Link from "next/link";
interface slugInterface {
  params: { slug: string }; 
}

export default function blogPage({ params }: slugInterface) {

    const {slug} =  params;
  const articulos = [
    { slug: "introduccion-nextjs", titulo: "Introducción a Next.js" },
    { slug: "react-server-components", titulo: "React Server Components" },
    { slug: "app-router-guia", titulo: "Guía del App Router" },
  ];

  const articulo = articulos.find((a)=> a.slug === slug) 
  if (!articulo){
    return <div>Articulo no encontrado</div>
  }
  return <>
    <h1>{articulo.titulo}</h1>
    <p>Contenido del artículo {articulo.titulo}...</p>
    <Link href="../blog">Regresar a blog</Link>

    
  </>;
}
