import React, { Component} from 'react';
import './App.css';
import './sass/App.scss';
import Footer from './components/UI/Footer'
import Header from './components/UI/Header'
import Content from './components/UI/Forms/Appointment/Container'

class App extends Component {
     
  componentDidMount(){
   
  }
  render() {
    return (
      <div className="App">      
            <Header/>            
              <Content/>           
             <Footer/>        
      </div>
    );
  }
}

export default App;
