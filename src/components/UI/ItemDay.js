import React from 'react'

const ItemDay=({item, _onclick})=>{
    let dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
    return(      
               <div className="ItemDay">
                {                 
                    item.map((opt, index)=>{     
                        var d = new Date(opt.date_initial); 
                        return(   
                            <button 
                                onClick={ ()=> _onclick(index, opt.interval)} 
                                type="submit">
                                <div className="col-md-12 item"> 
                                        <p>{dias[d.getDay()-1] + '  ' + d.getDate()}</p>                                          
                                </div>
                            </button>                            
                        )                       
                    })         
                 }               
            </div>
    )
}

export default ItemDay