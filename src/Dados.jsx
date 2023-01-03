import { useEffect, useState } from "react";
import dadito from "./img/dadito.jpg";
import ganadori from "./img/ganador.jpg";

export default function TocarDado() {
  const [dado1, setDado1] = useState();
  const [dado2, setDado2] = useState();
  const [historial1, setHistorial1] = useState([]);
  const [historial2, setHistorial2] = useState([]);
  const [ganador, setGanador] = useState("");
  const clickDado1 = () => {
    let valor = Math.floor(Math.random() * 100);
    setDado1(valor);
    setHistorial1([...historial1, valor]);
  };

  const clickDado2 = () => {
    let valor = Math.floor(Math.random() * 100);
    setDado2(valor);
    setHistorial2([...historial2, valor]);
  };

  const getGanador = () => {
    if (dado1 === dado2) {
      setGanador("Es empate");
    } else if (dado1 > dado2) {
      setGanador("El jugador 1 es el ganador");
    } else {
      setGanador("El jugador 2 es el ganador");
    }
  };

  return (
    <>
      <div className="containerDado1">
        <h1 className="titleDado1">Jugador 1</h1>
        <button onClick={clickDado1}>
          <img src={dadito} alt="dado1" width="200px" />
        </button>
        <br />
        <p className="number">{dado1}</p>
        <br />
        <ol>
          {historial1.map((dado) => {
            return <li className="number" key={dado}>{dado}</li>;
          })}
        </ol>
      </div>

      <div className="containerDado1">
        <h1 className="titleDado1">Jugador 2</h1>
        <button onClick={clickDado2}>
          <img src={dadito} alt="dado1" width="200px" />
        </button>
        <br />
        <p className="number">{dado2}</p>
          <br />
          
        <ol>
          {historial2.map((dado) => {
            return <li className="number" key={dado}>{dado}</li>;
          })}
        </ol>
      </div>

      <div className="containerDado1">
        <h1 className="titleDado1">GANADOR</h1>
        <img src={ganadori} alt="dado1" width="200px" />
        <br />
        <button className="boton" onClick={getGanador}>
          Obtener ganador
        </button>
        <p className="palabras">{ganador}</p>
      </div>
    </>
  );
}
