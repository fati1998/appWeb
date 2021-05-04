import React, {Component} from 'react';

import axios from 'axios';
import styled from 'styled-components';
import './addUser.css';
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
const App = styled.div`
    display : flex;
    justify-content : center;
    margin-top: 100px;
`;

const Container =styled.div`
`;

const Notification = styled.div`
  background-color : green;
  color: white;
  padding: 10px 100px;
  position : absolute;
  top : ${props=>props.top}px;
  right : 700px;
  z-index: 999;
  transition: top 0.5s ease;
`;
class addUser extends Component{
  constructor(props) {
    super(props);
 	
    this.state = { 
      Nom: "", Prenom: "", Email: "", Tel: "", top : -50
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    
  }
 
  async handleSubmitForm(event) {
    event.preventDefault();
      console.log(this.state);
      axios.post('http://localhost:9000/test', {Nom :this.state.Nom, Prenom: this.state.Prenom, Email: this.state.Email, Tel: this.state.Tel})
      .then(response => console.log(response))
    this.showNotification();
    await sleep(1500);
    window.location.reload(true);
    
    
}
  handleChange(event) {
    const value = event.target.value;
    const name =  event.target.name;
    this.setState({
      [name]: value
    });
  }

  showNotification(){
    this.setState({top: 200}, ()=>{
      setTimeout(()=> {this.setState({top:-100,});},1500);
    });
  }
  

  render() {
    return(
	   <div id = "body"> 
          <App>
              <Container>
                         <Notification top={this.state.top}>Utilisateur ajouté avec succès !</Notification>
              </Container>
          </App>
		      <form method="post" onSubmit={this.handleSubmitForm} >
			
          			<div className = "formulaire"><label> <p> Nom : </p> </label><input type="text" name="Nom" placeholder="KERDAD" value={this.state.Nom} onChange={this.handleChange} required /> </div>
          			<div className = "formulaire"><label><p> Prénom : </p></label><input type="text" name="Prenom" placeholder="FATIMA-ZAHRA" value={this.state.Prenom} onChange={this.handleChange} required/> </div>
          			<div className = "formulaire"><label><p>Email : </p> </label><input type="email" name="Email" placeholder="blabla@imt.net" value={this.state.Email} onChange={this.handleChange} required /> </div>
          			<div className = "formulaire"><label><p> Téléphone : </p> </label><input type="tel" name="Tel" placeholder="0548442056" value={this.state.Tel} onChange={this.handleChange} required /> </div>
          			<div className="formulaire"><button id="button" type="submit">Ajouter </button>
          		  </div>

		      </form>
    </div>
	);
  }
}
 






export default addUser;
