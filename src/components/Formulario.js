import React, {useState} from 'react'
import Error from './Error'
import shortid from 'shortid'
import PropTypes from 'prop-types'

const Formulario = ({setGasto, guardarCrearGasto}) => {

    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState(0)
    const [error, setError] = useState(false)

    const agregarGasto = e => {
        e.preventDefault()

        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ''){
            setError(true)
            return
        }

        setGasto(gasto)
        guardarCrearGasto(true)

        setNombre('')
        setCantidad(0)

    }

    const gasto = {
        nombre,
        cantidad,
        id: shortid.generate()
    }


    return (
        <form onSubmit={agregarGasto}>
            <h2>Agrega tus gastos aqui</h2>
            {error ? <Error mensaje='Ambos campos son obligatorios o presupuesto incorrecto'></Error> : null}

            <div className='campo'>
                <label>Nombre Gasto</label>
                <input 
                    type='text' 
                    className='u-full-width' 
                    placeholder='Ej. Transporte' 
                    value={nombre} 
                    onChange={e => setNombre(e.target.value)}/>
            </div>
            <div className='campo'>
                <label>Cantidad Gasto</label>
                <input 
                    type='number' 
                    className='u-full-width' 
                    placeholder='Ej. 300'
                    value={cantidad} 
                    onChange={e => setCantidad(parseInt(e.target.value))}/>
            </div>
            <input type='submit' className='buttton-primary u-full-width' value='Agregar gasto'/>
        </form>
    )
}

Formulario.propTypes = {
    setGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
}

export default Formulario
