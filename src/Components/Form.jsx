import {React, useState} from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [datosUsuario, setUser] = useState({
    nombre: "",
    correo: ""
  })
  const [validaciones, setValidaciones] = useState({mostrar:false, error:false});

  const handleSubmit = (event) => {
    event.preventDefault();
    const correoRegex = /\w+@\w+\.\w{1,3}/;
    console.log(datosUsuario)
    if (
      datosUsuario.nombre.trim().length >= 5 &&
      datosUsuario.nombre.trim().includes(" ") &&
      correoRegex.test(datosUsuario.correo)
    ) {
      setValidaciones({...validaciones, mostrar:true});
    } else {
      setValidaciones({...validaciones, error:true});
    }
  };
  const handleChange = (event) => {
    setUser({
      ...datosUsuario,
      [event.target.name]: event.target.value,
    });
  };

  const output = () => { 
    if(validaciones.mostrar){
      return <div>Gracias {datosUsuario.nombre.split(" ")[0]}, te contactaremos cuando antes vía mail</div>
    } else if(validaciones.error){
      return <div>Por favor verifique su información nuevamente</div>
    } else {
      return null
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input
          type="text"
          value={datosUsuario.nombre}
          name="nombre"
          onChange={handleChange}
        />
        <label>Dirección</label>
        <input
          type="text"
          value={datosUsuario.correo}
          name="correo"
          onChange={handleChange}
        />
      <button>Enviar</button>
      </form>
      {output()}
    </div>
  );
};

export default Form;
