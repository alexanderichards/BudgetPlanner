import React, {useState, useEffect} from 'react';
import ControlPresupuesto from './components/ControlPresupuesto';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import Pregunta from './components/Pregunta';

function App() {

  const [presupuesto, setPresupuesto] = useState(0)
  const [restante, setRestante] = useState(0)
  const [showPregunta, setPregunta] = useState(true)
  const [gastos, setGastos] = useState([])
  const [gasto, setGasto] = useState({})
  const [crearGasto, guardarCrearGasto] = useState(false)

  useEffect(() => {
    if(crearGasto){
      // Agrega al nuevo presupuesto
      setGastos([...gastos, gasto])

      // Resta del presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad
      setRestante(presupuestoRestante)
      guardarCrearGasto(false)
    }
  }, [gasto, gastos, crearGasto, restante])

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className='contenido-principal contenido'>
          {showPregunta ? 
          ( <Pregunta
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
              setPregunta={setPregunta}
          ></Pregunta> ) : 
          (
            <div className='row'>
              <div className='one-half column'>
                <Formulario setGasto={setGasto} guardarCrearGasto={guardarCrearGasto}></Formulario>
              </div>
              <div className='one-half column'>
                <Listado gastos={gastos}></Listado>
                <ControlPresupuesto presupuesto={presupuesto} restante={restante}></ControlPresupuesto>
              </div>
          </div>
          )}
        </div>
      </header>
    </div>
  );
}


export default App;
