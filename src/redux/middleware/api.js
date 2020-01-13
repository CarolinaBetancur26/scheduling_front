import {API_REQUEST} from '../actions/api'

export const api = ({dispatch })=> next => action=>{
   if(action.type === API_REQUEST){
     const {method, success, URL} = action.meta
     fetch(URL,{method})
       .then(response => response.json())
       .then(data=>dispatch(success(data.items)))
   }

   next(action)
}