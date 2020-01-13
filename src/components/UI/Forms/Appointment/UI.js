import React from 'react'

const UI =({handlerSubmit, handlerChange, sedes, services})=>{
    return(
       <div className="form-wrapper container">
        <form onSubmit={handlerSubmit} id="find">
            <div className="row">
                <div className="form-group col-md-6">
                       <label for="nick">* Prestación</label>
                       <select className="m-input--select" onChange={handlerChange} id="prestacion_id" name="prestacion_id" required>
                       {
                            services.map((opt, index)=>{
                                return(                                    
                                    <option  value={opt.prestacion_id}>{opt.name}</option>
                                )
                            })
                        }
                        </select>
                </div>

                <div className="form-group col-md-6">
                    <label for="nick">* Sedes</label>
                    <ul className="flex">
                    {
                        sedes.map((program, index)=>{
                            return (
                                <li key={"p" + index}>
                                <input type="radio" onChange={handlerChange} name="sede_id" value={program.sede_id}/>
                                <span className="name">{program.name}</span>                                
                                </li>
                            )
                        })
                    }
                    </ul>
                </div>
            </div>           
            <center><button type="submit" className={`site-btn btn-blue`}>Buscar disponibilidad</button></center>
        </form>
       </div>
    )
}

export default UI