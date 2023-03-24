import React from 'react'
import { useState, useEffect } from 'react';
import './Loader.css';

const Loader = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
    
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 3000);
    
      return () => {
        clearTimeout(timeout);
        setLoading(false);
    
        
      };
    
    }, []);
    
    if (loading) {
      return (
        <div className='load'>
            <h1 className='titulos'>
            HOLA DELFI, ACA SOLO DEBERÍAS VER EN AMARILLO EL FONDO, Y DESPUES CARGA OK
            </h1>
          
        </div>
      );
    }
}

export default Loader;