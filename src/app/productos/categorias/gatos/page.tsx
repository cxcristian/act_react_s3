export default function page(){
    const gatos = ["persa", "siames", "angora"];
    const contador = gatos.length
     return(
        <>
        <h1>Productos: Gatos</h1>
        <ol>
            {
                gatos.map((item, id)=>(
                         <li key={id}>{item}</li>
                ))
            }
        </ol>
        </>
    )
}