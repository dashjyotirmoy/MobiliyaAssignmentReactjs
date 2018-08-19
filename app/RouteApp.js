import React from 'react';
import {Link} from 'react-router-dom';
class RouteAppNav extends React.Component{
   
		constructor(props){
        super(props);
		
	}
    render(){
		return(
           <div>
			<div className="header_section">
               <ul className="primary-menu-nav no-padding">
                  <li className="primary-tab"><Link to={'/Home'}>HOME</Link></li>
				  <li className="primary-tab"><Link to={'/Register'}>REGISTER</Link></li>
				  <li className="primary-tab"><Link to={'/Home'}>INDURSTRY</Link></li>
				  <li className="primary-tab"><Link to={'/Home'}>CAREER</Link></li>
				  <li className="primary-tab"><Link to={'/Home'}>LOGIN</Link></li>
               </ul>
            </div>
			<div className="Line space-20"></div>
		</div>
        );
    }
}
export default RouteAppNav; 
