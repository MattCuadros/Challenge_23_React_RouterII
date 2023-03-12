import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Pokemones() {
  const [list, setList] = useState([]);
  const [select,setSelect]=useState();

  const getData = async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
      const data = await response.json();
      setList(data.results);
    } catch (error) {
    } finally {
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSelect=(e)=>{
    setSelect(e.target.value);
  }

  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <h2>Selecciona un Pokémon</h2>
        <select name="" id="" className="m-3" onChange={handleSelect}>
          
          <option value="" hidden>
            Seleccione un Pokémon...
          </option>
          {list.map((item) => {
            return (
              <option key={item.name} value={item.name}>
                {list.indexOf(item)+1} - {item.name[0].toUpperCase()+item.name.substr(1)} 
              </option>
            );
          })}
        </select>
        <button className="btn btn-secondary "><Link to={`/pokemones/${select}`} className="text-white text-decoration-none">Ver Detalles</Link></button>
      </div>
    </>
  );
}
