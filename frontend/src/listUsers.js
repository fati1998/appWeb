import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './listUsers.css';
import modify from './images/modify.png';
import del from './images/delete.png';

import axios from 'axios';

class listUsers extends Component{
		constructor(props) {
    		super(props);
 	
		    this.state = {
		      list: [{index:1, user:{Nom: "kerdad", Prenom: "erzer", Email: "", Tel: ""}}]
		    };
		   
		  }
		
		  
		 callAPI(){
		 	
		    fetch("http://localhost:9000/test")
		    .then(res => res.json())
		    .then(res => this.setState({list:res.list}));
		  }
		  componentWillMount(){
		    this.callAPI();
		    
		  }
 		del(index){
 			 
		      console.log(index);
		      
 		}
		
		render(){
			return(
				<table id="table">
					<thead>
						<tr>

							<td className="column">Nom</td>
							<td className="column">Prénom</td>
							<td className="column">Email</td>
							<td className="column">Téléphone</td>

							<td className="column" id="buttons">Modifier Supprimer</td>
						</tr>
					</thead>

					<tbody>  
					 {this.state.list.map(({index, user}) => (
        					
						<tr  key ={index}>
							<td className="cell">{user.Nom}</td>
							<td className="cell">{user.Prenom}</td>
							<td className="cell">{user.Email}</td>

							<td className="cell">{user.Tel}</td>

							<td className="cell">
							<Link to="/modifyUser">
								<img src={modify} className="icons" alt="icone_modify" onClick ={function(){
									console.log(index);
									axios.post('http://localhost:9000/test/modify',{"index":index})
	    						   .then(response => console.log(response));
								}}
	                                

								hspace="70"/>

							</Link>

							<img src={del} className="icons"  alt="icone_delete" onClick ={function(){

								console.log(index);
							    axios.post('http://localhost:9000/test/delete',{"index":index})
    						   .then(response => console.log(response));
    						    window.location.reload(true);}} hspace="70"/></td>
						</tr>
					))}
					</tbody> 

				</table>
	 
			);
		}
	
}


export default listUsers;


