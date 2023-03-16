import React, {useState} from 'react'
import Cards from 'react-credit-cards-2'
import 'react-credit-cards-2/es/styles-compiled.css';
import './PaymentForms.css';
import swal from 'sweetalert';


const PaymentForms = () => {

    const [state, setState] = useState({
        number: "",
        name: "",
        expiry:"",
        cvc:"",
        focus:"",
        email:"",
    })

    const handleInputChange = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        });
    }

    const handleFocusChange = (e) => {
        setState ({
            ...state,
            focus : e.target.name
        })
    }

    const processPayment = () => {
        swal({
            title: 'Tu compra a sido realizada',
            text: 'Muchas gracias',
        })
        
    }; 
    
    return (
        <div className='card'>
            <div className='card-body'>

                <Cards 
                number={state.number}
                name={state.name}
                expiry={state.expiry}
                cvc={state.cvc}
                focused={state.focus}
                email={state.email}
                />

                <form className='formTar'>

                    <div className='form-group'>
                        <label className='labelTar' htmlFor='number'>Número de tajerta</label>
                        <input className='inputTar'
                            type="text"
                            name="number"
                            id="number"
                            placeholder='1234 1234 1234 1234'
                            maxLength="16"

                            onChange={handleInputChange}
                            onFocus={handleFocusChange}
                        />
                    </div>
                    <div className='form-group'>
                        <label className='labelTar' htmlFor='name'>Nombre y apellido</label>
                        <input className='inputTar'
                            type="text"
                            name="name"
                            id="name"
                            placeholder='Zoë Paeca'
                            maxLength="30"
                            onChange={handleInputChange}
                            onFocus={handleFocusChange}
                        />
                    </div>

                
                    <div className='form-group'>
                        <label className='labelTar' htmlFor='expiry'>Fecha de expiración</label>
                        <input className='inputTar'
                            type="text"
                            name="expiry"
                            id="expiry"
                            maxLength="4"
                            placeholder='0925'
                            onChange={handleInputChange}
                            onFocus={handleFocusChange}
                        />
                    </div>

                    <div className='form-group'>
                        <label className='labelTar' htmlFor='cvc'>CVC</label>
                        <input className='inputTar'
                            type="text"
                            name="cvc"
                            id="cvc"
                            placeholder='1234'
                            maxLength="4"
                            onChange={handleInputChange}
                            onFocus={handleFocusChange}
                        />
                    </div>

                    <div className='form-group'>
                        <label className='labelTar' htmlFor='email'>Email</label>
                        <input className='inputTar'
                            type="email"
                            name="email"
                            id="email"
                            placeholder='ejemplo@ejemplo.com'
                            maxLength="30"
                            onChange={handleInputChange}
                            onFocus={handleFocusChange}
                        />
                    </div>
                

                <button onClick={processPayment} type="submit" className='botonCart sigue-comprando compra'>
                    
                
                    Comprar 
        
                </button>
                

                </form>
            </div>
        </div>

    )
}

export default PaymentForms;