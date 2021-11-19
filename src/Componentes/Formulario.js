import React, { Fragment, useState ,Component} from 'react';
import { useForm } from 'react-hook-form';

//elaborado por moises Coba

const Formulario = () => {
//variables para guardar los datos que se ingresan
const {handleSubmit}=useForm();
const[datos,setDatos]=useState({
nombre:'',
edad:'',
dia:'',
mes:'',
anio:'',
dia2:'',
mes2:'',
anio2:'',
pasatiempo:'',
mensaje:''

})

//se obtienen los datos ingresados
const cambio=(evento)=>{
  //console.log(evento.target.value)
  setDatos({
    ...datos,
    [evento.target.name]: evento.target.value
  })

}

//esto sirve para realizar el submit de los datos
const onSubmit=(evento,e)=>{

console.log(datos.nombre + ' ' + datos.pasatiempo)
setDatos2([...datos2,evento])
}
const[datos2,setDatos2]=useState([])


//termina validacion
  return (
  <Fragment>
    <h2> formulario</h2>
    <form className="row" onSubmit={handleSubmit(onSubmit)}>
    <div className="col-md-3">
    <input
    className="form-control"
    placeholder="Ingrese nombre"
    type="text"
    name="nombre"
    onChange={cambio}

    

    ></input>
    </div>


    <div className="col-md-3">
    <input
    className="form-control"
    placeholder="Edad"
    name="edad"
    type="number"
    onChange={cambio}
    ></input>
    </div>


    <h2> Fecha de nacimiento</h2>
    <div className="col-md-3">
    <input type="number"
    className="form-control"
    placeholder="Dia"
    name="dia"
    onChange={cambio}
    ></input>
    </div>


    <div className="col-md-3">
    <input type="number"
    className="form-control"
    placeholder="Mes"
    name="mes"
    onChange={cambio}
    ></input>
    </div>


    <div className="col-md-3">
    <input type="number"
    className="form-control"
    placeholder="Año"
    name="anio"
    onChange={cambio}
    ></input>
    </div>

    <h2> Fecha Actual</h2>
    <div className="col-md-3">
    <input type="number"
    className="form-control"
    placeholder="Dia"
    name="dia2"
    onChange={cambio}
    ></input>
    </div>


    <div className="col-md-3">
    <input type="number"
    className="form-control"
    placeholder="Mes"
    name="mes2"
    onChange={cambio}
    ></input>
    </div>


    <div className="col-md-3">
    <input type="number"
    className="form-control"
    placeholder="Año"
    name="anio2"
    onChange={cambio}
    ></input>
    </div>

    <h2> Pasatiempo</h2>
    <div className="col-md-3">
    <input type="ntext"
    className="form-control"
    placeholder="Hobby"
    name="pasatiempo"
    onChange={cambio}
    ></input>
    </div>

    <div className="col-md-3">
    <button className="btn btn-primary" type="submit">Procesar</button>
    </div>
    </form>
   
   
    <ul>{
      datos2.map(item =>
      <li>El ser humano {datos.nombre} ha vivido un total de {(datos.edad*365)} dias ,{(datos.edad*8760)} horas y {(datos.edad*525960)} minutos</li>

      
      )
}
{
      datos2.map(item =>
        <li>Su hobbie favorito es:{datos.pasatiempo}</li>
  
        
        )
}

{
      datos2.map(item =>
        <li>faltan {((datos.mes2-datos.mes)*31-datos.dia2) + datos.dia} dias, {(((datos.mes2-datos.mes)*31-datos.dia2) + datos.dia)*24}
           Horas para su cumpleaños</li>
  
        
        )
}
    </ul>    


  </Fragment>
  
 
  
  );

   
  
    
}
export default Formulario;