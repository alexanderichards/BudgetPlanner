import React, {Fragment, useState} from 'react'
import Error from './Error'
import PropTypes from 'prop-types'

const Pregunta = ({setPresupuesto, setRestante,  setPregunta}) => {

    const [cantidad, guardarCantidad] = useState(0)
    const [error, setError] = useState(false)

    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value))
        setError(false)
    }

    const agregarPresupuesto = e => {
        e.preventDefault();

        if(cantidad < 1 || isNaN(cantidad)){
            setError(true)
            return
        }

        setError(false)
        setRestante(cantidad)
        setPresupuesto(cantidad)
        setPregunta(false)
    }

    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            {error ? <Error mensaje='El presupuesto es incorrecto'></Error> : null}
            <form onSubmit={agregarPresupuesto}>
                <input type='number'
                    className='u-full-width'
                    placeholder='Coloca tu presupuesto'
                    onChange={definirPresupuesto}
                />
                <input type='submit'
                    className='button-primary u-full-width'
                    value='Definir presupuesto'
                />
            </form>
        </Fragment>
    )
}

Pregunta.propTypes = {
    setPresupuesto: PropTypes.func.isRequired,
    setRestante: PropTypes.func.isRequired,
    setPregunta: PropTypes.func.isRequired,

}

export default Pregunta
