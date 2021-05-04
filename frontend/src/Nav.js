import React from 'react';
import {Link} from 'react-router-dom';


function Nav() {
  return (
  
    <nav>
    	
    		<div>
	    		<Link to="/addUser">
		    		<button> Ajouter un utilisateur </button>
		    	</Link>
		   </div>
		   <div>
	    		<Link to="/">
		    		<button> Page d'accueil </button>
		    	</Link>
		   </div>
		   
		   <div> 
		    	<Link to="/listUsers">
		    		<button> Liste des utilisateurs </button>
		    	</Link>
		    </div>
	    
    </nav>
  );
}

export default Nav;
