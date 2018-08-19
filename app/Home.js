import React from 'react';
import ReactDOM from 'react-dom';

class Home extends React.Component{
    constructor(props){
        super(props);
		this.state = {
			data: [{id:1,name:'john', email:'john@gamil.com'},
					{id:2,name:'Kirti', email:'kirthi@gamil.com'},
					{id:3,name:'sohan', email:'sohan@gamil.com'}
				  ]
		};
	}
    render(){
        return(
            <div id="home" className="home-content">
					<div>
					<table>
					
						{this.state.data.map((val,index)=> 
								<tbody key={index}>
									<tr className="table-row">
										<th colSpan="2">Information Details: {val.id}</th>
									</tr>
									<tr>
										<td><a href="#">{val.name}</a></td>
										<td><a href="#">{val.email}</a></td>
									</tr>
								</tbody>
								)}
						
						</table>
					</div>
            </div>
        );
    }
} 

export default Home;