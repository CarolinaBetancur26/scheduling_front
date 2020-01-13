import React, {Component} from 'react'
import UI from './UI';
import UISchedule from './UISchedule';
import {apiUrl,sedes, services, schedule} from '../../../../data/api'
import {ToastsContainer, ToastsStore} from 'react-toasts'
import Title from '../../Title'

export default class Contact extends Component {

     constructor(){
         super()       
         this.state={
            sedes:[],
            services:[],
            schedule:[],
            sede_id : '',
            prestacion_id : '',
            _show:false
         }      
     }

     async componentDidMount(){       
        const allSedes = await this._loadAllSedes()
        this.setState({sedes: allSedes})
        const allServices = await this._loadAllServices()
        this.setState({services: allServices})
     }
    
    _submit=async (e)=>{
       e.preventDefault()
       const results = await this._loadSchedule()
       this.setState({schedule: results, _show:true})
     }

     _chage=(e)=>{
        this.setState({            
            ...this.state,
            [e.target.name] : e.target.value
        })
        console.log(`Seleccionaste ${e.target.value}`);
     }

     _loadAllSedes= async()=>{
        const sed = await fetch(`${apiUrl}${sedes.show}`)
        const response = await sed.json()
        return response.message
    }

    _loadSchedule= async()=>{
        const info = await fetch(`${apiUrl}${schedule.show}/${this.state.sede_id}/${this.state.prestacion_id}`)
        const responsef = await info.json()
        var resp = [];
        
        Object.values(responsef.message).forEach((opt) => {
            Object.values(opt).forEach((opt1) => {
                Object.values(opt1).forEach((opt2) => {
                        resp.push(opt2)
                })
            })
        })

        return resp
    }

    _loadAllServices= async()=>{
        const ser = await fetch(`${apiUrl}${services.show}`)
        const response = await ser.json()
        return response.message
    }

    render(){
            return(
             <div className="">   
                 <Title name="Agendar cita"/>          
                 <UI
                     handlerSubmit={this._submit}
                     handlerChange={this._chage}
                     sede_id={this.state.sede_id}
                     prestacion_id={this.state.prestacion_id}
                     sedes={this.state.sedes}
                     services={this.state.services}              
                 />
                 {
                    this.state._show ?
                    (
                        <React.Fragment>
                            <Title name="Horarios disponibles"/>     
                            <UISchedule 
                                schedule={this.state.schedule} />
                        </React.Fragment>                   
                    ):null
                }
             </div>
         )
     }
}