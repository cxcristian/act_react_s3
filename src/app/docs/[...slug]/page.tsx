interface DocsPageProps {
  params: {
    slug?: string[];  
  };
}

export default function page({ params }: DocsPageProps) {
  const slugArray = params.slug ?? []; 
  const titulo = slugArray.length > 0 ? slugArray[slugArray.length - 1] : "Inicio";

  // Breadcrumbs simples
  const breadcrumbs = ["Docs", ...slugArray].join(" > ");

  return (
    <div>
      <h1>Documentación: {titulo}</h1>
      <p>{breadcrumbs}</p>

      {slugArray.length === 0 ? (
        <p>Estás en la página principal de la documentación.</p>
      ) : (
        <p>Estás viendo la sección: {slugArray.join(" / ")}</p>
      )}
    </div>
  );
}