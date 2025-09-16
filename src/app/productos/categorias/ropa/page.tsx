export default function page(){
    const ropa = ["camisa", "pantalon", "zapatos"];
    const contador = ropa.length;
     return(
        <>
        <h1>Productos: Ropa </h1>
        <p>productos encontrados: {contador}</p>
        <ol>{
            ropa.map((item, id)=>(
                 <li key={id}>{item}</li>
            ))
            }</ol>
        </>
    )
}