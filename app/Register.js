import React from 'react';
import ReactDOM from 'react-dom';

class Register extends React.Component{
	constructor() {
    super();
    this.state = { name: '',
					email:'',
					age:''
				};
    this.onChange = this.onChange.bind(this);
    this.add = this.add.bind(this);
  }

  add(e) {
    this.props.onButtonClick(this.state.value);
    this.setState({ name: e.target.name,
					email:e.target.email,
					age:e.target.age
				});
  }

  onChange(e) {
    this.setState({ name:e.target.name,
					email:e.target.email,
					age:e.target.age
				});
  }
    render(){
        return(
            
      <div id="register" className="register-content">
		<h1 className="register-Heading">Registration Form</h1>
		
			<form id="register_form" onSubmit={this.add}>
				<div className="input_container">
					<label>User Name:</label>
					<input type="text" className="add-item__input" value={this.state.name} onChange={this.onChange}/>
				</div>
				<div className="input_container">
					<label>Email id:</label>
					<input type="text" className="add-item__input" value={this.state.email} onChange={this.onChange}/>
				</div>
				<div className="input_container">
					<label>Age:</label>
					<input type="number" className="add-item__input" value={this.state.age} onChange={this.onChange}/>
				</div>
				<div className="button_container">
					<button type="submit" disabled={!this.state.value} name="submit">SUBMIT</button>
				</div>	  
				
			</form>	
		</div>
        );
    }
}
export default Register;