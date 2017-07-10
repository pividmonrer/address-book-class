import React from 'react';

const ContactForm= (props) => (
    <div>
        <p>Nombre: </p>
        <input 
            type="text" 
            value={props.nombre}
            onChange={props.handleFirstNameChange}
        />
         <p>Apellido: </p>    
         <input 
            type="text" 
            value={props.apellido} 
            onChange={props.handleLastNameChange}
        />

         <p>Telefono: </p>
         <input 
            type="text" 
            value={props.telefono} 
            onChange={props.handlePhoneChange}
        />
        
        <div>
            <button className="btn btn-primary" onClick={() => props.saveContact({
                nombre: props.nombre,
                apellido: props.apellido,
                telefono: props.telefono
                })}
                >
                Guardar
                </button>
        </div>
    </div>
);

export default ContactForm;