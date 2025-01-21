import { useRandom } from "./hooks/useRandom";
import "./App.css";
import { useNavigate } from "react-router-dom";

function App() {
  const { randomQuery } = useRandom();
  const navigate=useNavigate()
  return (
    <>
      {randomQuery.isFetching ? (
        <h1>Cargando</h1>
      ) : (
        <h1>Numero :{randomQuery.data}</h1>
      )}
      <div>{JSON.stringify(randomQuery.error)}</div>
      <button
        disabled={randomQuery.isFetching}
        onClick={() => randomQuery.refetch()}
      >
        Nuevo numero
      </button>
      <button onClick={()=> navigate('/members')}>Ir a tanStack Table</button>
    </>
  );
}

export default App;
