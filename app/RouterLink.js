import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import RouteAppNav from './RouteApp';
import Home from './Home';
import Register from './Register';


const CustomRouterLink = () => (
	
	<Router>
		<div>
			<RouteAppNav />
			
				<Route exact path='/' component={Home} />
				<Route exact path='/Home' component={Home} />
				<Route exact path='/Register' component={Register} />
			
		</div>
	
	</Router>
)
export default CustomRouterLink;