import React from 'react'

class Signup extends React.Component {

    state = {
        username:'',
        password:''
    }

    handleOnChange = e => {
        console.log(e.target.value)
        this.setState({ [e.target.name]: e.target.value })
    }
    
    handleSubmit = e => {
        e.preventDefault();
    }

    render() {
    return (
        <div className='form'>
Please, sign up!<br/>
<form onSubmit={this.handleSubmit}>
    <label>
        Name:
        <input type='text' 
               name='username' 
               onChange={this.handleOnChange}
               value={this.state.username} />
    </label><br />
    <label>
        Password:
        <input type='text' 
               name='password' 
               onChange={this.handleOnChange}
               value={this.state.password} />
    </label><br />
<input type='submit' 
       value='Log In'
        />
</form>
</div>
        )
    }
}


export default Signup