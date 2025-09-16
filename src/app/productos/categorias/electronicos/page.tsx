export default function page(){
    const productos = ["laptop", "smartphone", "tablet"];
    const contador = productos.length;
    return (
      <>
        <h1>Productos: Electrónicos</h1>
        <p>Productos encontrados: {contador}</p>
        <ul>
          {productos.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </>
    );
}