import React, { useState, useContext } from 'react'
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/es/styles-compiled.css';
import './PaymentForms.css';
import swal from 'sweetalert';
import { useForm } from "react-hook-form"
import { CartContext } from '../../Context/CartContext';




const PaymentForms = () => {

    const { clear } = useContext(CartContext);

    const { register, formState: { errors }, handleSubmit } = useForm({
        mode: "all"
    });



    const onSubmit = (data, e) => {
        
        swal(
            'Pago realizado',
            'Houston, su boucher lo espera. Revise su email',
            'success'
        )
        e.target.reset();
        clear();
    }


    const [state, setState] = useState({
        number: '',
        name: '',
        expiry: '',
        cvc: '',
        focus: '',
        email: '',
    })

    const handleInputChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    const handleFocusChange = (e) => {
        setState({
            ...state,
            focus: e.target.name
        })
    }



    return (

        <div className='card'>
            <h2 className='datos'>Ingresar datos</h2>
            <div className='card-body'>

                <Cards
                    number={state.number}
                    name={state.name}
                    expiry={state.expiry}
                    cvc={state.cvc}
                    focused={state.focus}
                    email={state.email}
                />

                <form className='formTar' autoComplete='off' onSubmit={handleSubmit(onSubmit)}>

                    <div className='form-group'>
                        <label className='labelTar' htmlFor='number'></label>

                        <input className='inputTar' {...register("number", {
                            required: "Campo obligatorio",
                            minLength: {
                                value: 16,
                                message: "Completar dígitos"
                            },
                            maxLength: {
                                value: 16,
                                message: "Superaste cantidad de dígitos"
                            },
                        })}
                            placeholder=" 1234 1234 1234 1234"
                            onChange={handleInputChange}
                            onFocus={handleFocusChange}
                        />
                        <p className='errores'>
                            {errors.number?.message}
                        </p>
                    </div>


                    <div className='form-group'>
                        <label className='labelTar' htmlFor='name'></label>

                        <input type="Text" className='inputTar' {...register("name", {
                            required: "Ingresar datos",
                            pattern: {
                                 
                                value: "^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$",
                                message: "Completar datos"
                            }
                        })}
                            placeholder="Nombre y Apellido"
                            onChange={handleInputChange}
                            onFocus={handleFocusChange}
                        />
                        <p className='errores'>
                            {errors.name?.message}
                        </p>
                    </div>


                    <div className='form-group'>
                        <label className='labelTar' htmlFor='expiry'></label>

                        <input className='inputTar' {...register("expiry", {
                            required: "Igresar datos",
                            pattern: {
                                value: /^([0-9])*$/,
                                message: "Solo números",
                            },
                            minLength: {
                                value: 4,
                                message: "Faltan datos"
                            },

                            maxLength: {
                                value: 4,
                                message: "Datos incorrectos"
                            },

                        })}
                            placeholder='0925'
                            onChange={handleInputChange}
                            onFocus={handleFocusChange}
                        />
                        <p className='errores'>
                            {errors.expiry?.message}
                        </p>
                    </div>

                    <div className='form-group'>
                        <label className='labelTar' htmlFor='cvc'></label>

                        <input className='inputTar'{...register("cvc", {
                            required: {
                                value: 3,
                                message: "Solo números"
                            },
                            
                            pattern: {
                                value: /^([0-9])*$/,
                                message: "Solo números",
                            },
                            minLength: {
                                value: 3,
                                message: "Faltan datos"
                            },
                            maxLength: {
                                value: 3,
                                message: "Datos incorrectos"
                            },
                        })}
                        
                            placeholder='123'
                            onChange={handleInputChange}
                            onFocus={handleFocusChange}
                        />
                        <p className='errores'>
                            {errors.cvc?.message}
                        </p>
                    </div>

                    <div className='form-group'>
                        <label className='labelTar' htmlFor='email'></label>

                        <input className='inputTar' {...register("email", {
                            required: "Ingresar el mail",
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: "Email inválido"
                            },
                        })}
                            placeholder='ejemplo@ejemplo.com'
                            onChange={handleInputChange}
                            onFocus={handleFocusChange}
                        />
                        <p className='errores'>
                            {errors.email?.message}
                        </p>
                    </div>


                    <div className='botonPago'>
                        <input 
                        type="Submit"  
                        
                        className='botonCart sigue-comprando compra'
                         />
 
                    </div> 
                   
                </form>


            </div>


        </div>


    )

}

export default PaymentForms;