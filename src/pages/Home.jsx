export default function Home() {
  return (
    <>
      <div className="d-flex flex-column justify-content-stretch align-items-center">
        <h2 className="text-center">Bienvenido Maestro Pokémon</h2>
        <div className="container-fluid d-flex justify-content-center">
          <img
            src="../pokemon-23-logo.png"
            alt="Logo Pokemon"
            style={{ height: "85vh" }}
            className="logoPokemon"
          />
          <img src="../Pikachu-logo-D0AAA93F17-seeklogo.com.png" alt="Pikachu" className="pikachu"/>
        </div>
      </div>
    </>
  );
}
