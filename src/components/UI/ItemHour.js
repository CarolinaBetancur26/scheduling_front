import React from 'react'

const ItemHour=({hora})=>{
    return(  
        <div className="row">   
            {                 
                    hora.map((opt, index)=>{                       
                        return(   
                            <div className="col-md-3">
                                <div className="sec-name">
                                <input type="radio" name="hour" value="hour"     
                             />{opt}</div>                            
                        </div>                            
                        )                       
                    })         
                 }      
        </div> 
    )
}

export default ItemHour