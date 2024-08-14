import { useRef, useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Timer from "./components/Timer";
import Rankings from "./components/Rankings";
import { supabase } from "./utils/supabaseClient";

function App() {
  const [start, setStart] = useState(false);
  const [save, setSave] = useState(false);
  const [name, setName] = useState("");
  const [warning, setWarning] = useState<string | null>(null);
  const score = useRef(0); // Mantener el puntaje actual aquí
  const [error, setError] = useState(false);

  const handleSave = async () => {
    if (name !== "") {
      
      const error = await supabase
        .from('ranking')
        .insert({ name: name, score: score.current })

      error.status === 409 ? setError(true) : location.reload()
      console.log(error);
      setWarning(null)
    }else {
      setWarning("Please enter a name before saving.")
    }
  }

  return (
    <div
      className="d-flex flex-column align-items-center p-4  rounded"
      style={{ backgroundColor: "#a8ffd9", maxWidth: '718px'}}
    >
      <div
        className="rounded mb-3 mx-auto border border-dark w-50"
        style={{ backgroundColor: "#4fffb2" }}
      >
        <h2 className="display-4">Fruit Party</h2>
      </div>

      <div className="bg-white rounded p-3 mb-4 border shadow-sm w-100 w-md-75 w-lg-50">
        <div
          className="rounded mb-2 p-1 mx-auto border border-dark w-25"
          style={{ backgroundColor: "#4fffb2" }}
        >
          <Timer start={start} setStart={setStart} setSave={setSave} />
        </div>
        <div className="d-flex justify-content-center align-items-center mb-3">
        { !start && !save ? (
          <button
            className="btn btn-primary me-2"
            onClick={() => setStart(true)}
          >
            Start
          </button>
        ) : (
          <button
            className="btn btn-primary me-2"
            onClick={() => location.reload()}
          >
            Again
          </button>
        )}
          {save && (
            <>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control me-2"
                style={{ maxWidth: "200px" }}
              />
              <button onClick={handleSave} className="btn btn-success">
                Save
              </button>
            </>
          )}
          {error && <p className="error">The name exists.</p>}
        </div>
        {warning && (
          <div className="alert alert-danger" role="alert">
            {warning}
          </div>
        )}
        <Cards start={start} scoreRef={score} /> {/* Pasar scoreRef a Cards */}
      </div>

      <div className="bg-white rounded p-3 mb-4 border shadow-sm w-100 w-md-75 w-lg-50">
        <Rankings />
      </div>
    </div>
  );
}

export default App;
