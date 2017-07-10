import React, { Component } from 'react';

import axios from 'axios';

import Header from './components/Header';
import Footer from './components/Footer';
import SearchBox from './components/SearchBox';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

//const API_URL= 'https://address-book-api-kfpkaqtghu.now.sh';
const API_URL= 'http://localhost:8000';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      searchText:'',
      nombre: '',
      apellido: '',
      telefono: '',
      contacts:[],
    };
  }

  componentDidMount(){
    this.getContacts();
  }

  getContacts = () => {
    axios({
      method: 'GET',
      url: API_URL + '/api/contacts',
      /*headers: {
        'Api-Key':'1719069385',
      }*/
    })
    .then((response)=>{
      console.log(response);
      this.setState({
      contacts: response.data
    });
      console.log(this.state.contacts);
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  handleSearchTextChange = (event) =>{
    this.setState({
      searchText: event.target.value
    });
  }
  handleFirstNameChange = (event) =>{
    this.setState({
      nombre: event.target.value
    });
  }
  handleLastNameChange = (event) =>{
    this.setState({
      apellido: event.target.value
    });
  }
  handlePhoneChange = (event) =>{
    this.setState({
      telefono: event.target.value
    });
  }

  saveContact = (contact) =>{
    axios({
      method: 'POST',
      url: API_URL + '/api/contacts',
      headers: {
        //'Api-Key':'1719069385',
        'Content-Type': 'application/json',
      },
      data:{
        nombre: contact.nombre,
        apellido: contact.apellido,
        telefono: contact.telefono,
      }
    }).then((response) =>{
        console.log(response);
        this.getContacts();
    });
  }

  render() {
    const contacts = this.state.contacts.filter((contact, index)=>{
    //  if(this.state.searchText === contact.firstName){
    //    return true;
    //  }
     if(contact.nombre.indexOf(this.state.searchText) > -1){
       return true;
     }
     if(contact.apellido.indexOf(this.state.searchText) > -1){
       return true;
     }
     return false;
    });
    return (
      <div>
        <Header title="Address Book"/>
        <div className="container">
          <div className="row">
              <div className="col-md-6">
                <SearchBox 
                value={this.state.searchText}
                onChange={this.handleSearchTextChange}/>
                <ContactList contacts={contacts}/>
              </div>
              <div className="col-md-6">
                <h1>Nuevo contacto</h1>
                <ContactForm 
                nombre={this.state.nombre}
                apellido={this.state.apellido}
                telefono={this.state.telefono}
                handleFirstNameChange={this.handleFirstNameChange}
                handleLastNameChange={this.handleLastNameChange}
                handlePhoneChange={this.handlePhoneChange}
                saveContact={this.saveContact}
                />
              </div>
          </div>
        </div>
        <Footer title="Todos los derechos reservados a Sergio Paez"/>
      </div>
    );
  }
}

export default App;
