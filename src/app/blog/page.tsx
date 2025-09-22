import Link from "next/link"
export default function BlogPage() {
   const articulos = [
    { slug: "introduccion-nextjs", titulo: "Introducción a Next.js" },
    { slug: "react-server-components", titulo: "React Server Components" },
    { slug: "app-router-guia", titulo: "Guía del App Router" },
  ];

  return (
    <div>
      <h1>Lista de artículos</h1>
      <ul>
        {articulos.map((art) => (
          <li key={art.slug}>
            <Link href={`/blog/${art.slug}`}>{art.titulo}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
    
  
}