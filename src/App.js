import React, {Component}  from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import SearchBox from './components/SearchBox';
import ContactForm from './components/ContactForm';
class App extends Component 
{
  constructor(props)
  {
    super(props);
    this.state = {
      searchText:'Búsqueda',
      FirstName: 'Aqui su nombre',
      LastName: 'Aqui su apellido',
      Telephone: 'Aqui su telefono',
    };
  }

handleSearchTextChange =(event) =>
{
  this.setState(
    {
      searchText: event.target.value
    });
}

handleFirstNameChange = (event) =>
{
    this.setState(
    {
      FirstName: event.target.value
    });
}
handleLastNameChange = (event) =>
{
    this.setState(
    {
      LastName: event.target.value
    });
}
handleTelephoneChange = (event) =>
{
    this.setState(
    {
      Telephone: event.target.value
    });
}

  render() 
  {
     return (
       <div>
         <Header title="Address Book"/>
         <div className="container">
           <div className="row">
             <div className="col-md-6">
               <SearchBox 
                 value={this.state.searchText}
                 onChange={this.handleSearchTextChange}
               />
             </div>
             <div className="col-md-6">
                <h1>Nuevo Contacto</h1>
                <ContactForm 
                FirstName={this.state.FirstName}
                LastName={this.state.LastName}
                Telephone={this.state.Telephone}
                onChangeFirstName={this.handleFirstNameChange}
                onChangeLastName={this.handleLastNameChange}
                onChangeTelephone={this.handleTelephoneChange}
                />

             </div>
           </div>
        </div>
         <Footer title= "Todos los derechos reservados a Sergio Paez" />
      </div>
      )
     ;
  }
}

export default App;
