import React, {Component} from 'react'
import { header } from '../../data/data.json' 

class Header extends Component{
   
  constructor(){
     super()
   }
      
   render(){    
     return(
       <header className="">
          <h1>Agendamiento de citas</h1>       
       </header>
    )
   }
}

export default  Header;