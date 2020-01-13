import React, {Component} from 'react'
import ItemDay from '../../ItemDay';
import ItemHour from '../../ItemHour';

export default class Contact extends Component {
    _isMounted = false;
     constructor(props){
         super(props)       
         this.state={            
            intervals:[]         
         } 
     }
 
    _onclick = (i, ii) => {
        this.setState({isClickDay : true, intervals: ii})
    }

    render(){
        const { schedule} = this.props;
            return(
                <div className="form-wrapper container">    
                <div className="row schedule">
                    <div className="col-md-3 sec">
                        <ItemDay 
                            item={schedule}    
                            _onclick = {this._onclick}                        
                             />
                    </div>
                    <div className="col-md-9">
                        <div className="section-hour">Horas disponibles</div>                                                  
                            <ItemHour 
                            hora= {this.state.intervals}/>                         
                        </div>        
                    </div>                
                </div>
         )
     }
}