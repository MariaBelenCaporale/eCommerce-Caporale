import React from 'react'
import { useState, useEffect } from 'react';
import './Loader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/free-solid-svg-icons';
import {faRocket, faCloud} from '@fortawesome/free-solid-svg-icons';



const Loader = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
    
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 4000);
    
      return () => {
        clearTimeout(timeout);
        setLoading(false);
    
        
      };
    
    }, []);
    
    if (loading) {
      return (
        <div className='loader'>
            <div className='rocket'>
            <FontAwesomeIcon className='fa-rocket' icon={faRocket} />

            
            <h3 className='loading'>Cargando Experiencias</h3>
            </div>
            
            <span><i></i></span>
        </div>
          
      );
    }
  
    }
  


export default Loader;