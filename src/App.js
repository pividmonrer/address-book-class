import React, {Component}  from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
class App extends Component 
{
  render() 
  {
     return (
       <div>
         <Header title="Address Book"/>
            Hola Mundo
         <Footer title= "Todos los derechos reservados a Sergio Paez" />
      </div>
      )
     ;
  }
}

export default App;
