import React, {Component} from 'react';

import axios from 'axios';
import './addUser.css';

class modifyUser extends Component{
  constructor(props) {
    super(props);
    this.state = {Nom: "kerdad", Prenom: "erzer", Email: "", Tel: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    
  }
  callAPI(){
      
        fetch("http://localhost:9000/test/user")
        .then(res => res.json())
        .then(res => this.setState(res.user));

      }
  componentWillMount(){
    this.callAPI();
        
  }
 
  handleSubmitForm(event) {
    event.preventDefault();
      console.log(this.state);
      axios.post('http://localhost:9000/test/validate',this.state)
      .then(response => console.log(response));
    console.log(this.state);
    window.location.replace("/listUsers");
   
}
  handleChange(event) {
    const value = event.target.value;
    const name =  event.target.name;
    
    this.setState({
        [name]: value
    
    });

  }


  

  render() {
    return(
	
		<form method="post" onSubmit={this.handleSubmitForm} >
			
			<div className = "formulaire"><label> <p> Nom : </p> </label><input type="text" name="Nom"  value={this.state.Nom} onChange={this.handleChange}/> </div>
			<div className = "formulaire"><label><p> Prénom : </p></label><input type="text" name="Prenom"  value={this.state.Prenom} onChange={this.handleChange} /> </div>
			<div className = "formulaire"><label><p>Email : </p> </label><input type="email" name="Email"  value={this.state.Email} onChange={this.handleChange} /> </div>
			<div className = "formulaire"><label><p> Téléphone : </p> </label><input type="tel" name="Tel"  value={this.state.Tel} onChange={this.handleChange} /> </div>
			<div className="formulaire"><button id="button" type="submit">Valider </button>
		</div>

    
		</form>
	);
  }
}
 






export default modifyUser;
