import React, { Component } from 'react';

import axios from 'axios';

import Header from './components/Header'; 
import Footer from './components/Footer'; 
import SearchBox from './components/SearchBox';
import ContactForm from './components/ContactForm'; 
import ContactList from './components/ContactList';

const API_URL = 'https://address-book-api-kfpkaqtghu.now.sh';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      contacts: [],
      searchText:'',
      firstName: '',
      lastName: '',
      phone:'',
    };

   
  }
  
  componentDidMount(){
    this.getContacts();
  }

  handleSearchTextChange = (event) =>{
    this.setState({
      searchText: event.target.value
    });
  }

   handleFirstNameChange = (event) =>{
    this.setState({
      firstName: event.target.value
    });
  }

 handleLastNameChange = (event) =>{
    this.setState({
      lastName: event.target.value
    });
  }

 handlePhoneChange = (event) =>{
    this.setState({
      phone: event.target.value
    });
  }

  getContacts = () => {
    axios({
          method: 'GET',
          url: API_URL + '/api/contacts',
          headers: {
            'Api-Key':'1723112643',
          }
        })
        .then((response)=>{
          console.log(response);
          this.setState({ contacts: response.data.data})
        })
        .catch((error)=>{
          console.log(error);
        })
      }

      saveContact = (contact) =>{
        axios({
          method: 'POST',
          url: API_URL + '/api/contacts',
          headers: {
            'Api-Key':'1723112643',  
            'Content-Type':'application/json'
            
          },
          data: {
            firstName: contact.firstName,
            lastName: contact.lastName,
            phone: contact.phone,
          }
        })
        .then((response)=>{
          console.log(response);
          this.getContacts();
          this.setState({ contacts: response.data.data})
        })
        .catch((error)=>{
          console.log(error);
        })
  }

  render() {
    const contacts = this.state.contacts.filter((contact, 
    index) =>{

      if(contact.firstName.indexOf(this.state.searchText) > -1){
        return true
      }
      return false;
    });
    return (//se renderiza el cmponente aqui
      <div>
        <Header title="Address Book" /> 
        <div className ="Container">
          <div className="row">
            <div className="col-md-6">
              <SearchBox 
                value={this.state.searchText}
                onChange={this.handleSearchTextChange} //se pasa una declaracion de funcion, x eso no se usa (), xq seria llamar la funcion
              />
              <ContactList 
                contacts={contacts}
              />
            </div>
            <div className="col-md-6">

              <h1>Nuevo Contacto</h1>
              <ContactForm 
                firstName={this.state.firstName}
                handleFirstNameChange={this.handleFirstNameChange}

                lastName={this.state.lastName}
                handleLastNameChange={this.handleLastNameChange}

                phone={this.state.phone}
                handlePhoneChange={this.handlePhoneChange}

                saveContact={this.saveContact}
              />
            </div>
          </div>
        </div>
        <Footer copyright="Todos los derechos reservados a Sergio Paez" />
      </div>
      
    );
  }
}

export default App;