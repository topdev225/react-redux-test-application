import React from 'react';
import md5 from 'md5';
import { browserHistory } from 'react-router';
import { FormGroup, ControlLabel, FormControl, Button ,Navbar} from 'react-bootstrap';
import { withBasename } from "../utils/params";

import swal from 'sweetalert2';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.submitLogin = this.submitLogin.bind(this);
        this.userValidation = this.userValidation.bind(this);
    }

    alarm(msg) {
        swal({
            title: msg,
            animation: false,
            customClass: 'animated tada'
        })
    }

    userValidation = (data) => {
        if (data.status === 200) {
            browserHistory.push(withBasename('/expenses'));
        } else if (!data.isFetching) {
            this.alarm(data.message)
        }
    }

    componentWillReceiveProps(nextProps) {
        this.userValidation(nextProps.user)
    }

    submitLogin(e) {
        e.preventDefault();
        const data = new FormData();
        data.append('email', this.email.value);
        data.append('password', md5(this.password.value));
        this.props.mappeduserLogin(data);
    }

    render() {
        var style={
            backgroundColor:"#2b2b2be6"
        }
        
        return (
            <div>
                <Navbar style={style}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href={ withBasename('/') }>Home</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                </Navbar>

                <div className="middle-box text-center loginscreen ">

                    <form className="form form-horizontal" id="userLoginForm" onSubmit={this.submitLogin}>
                        <div>
                            <h3 className="welcome">User Login</h3>
                        </div>

                        <FormGroup>
                            <ControlLabel>User Email</ControlLabel>
                            <FormControl
                                type="email" componentClass="input" label="Email address" placeholder="email"
                                name="email" required className="email"
                                inputRef={input => this.email = input}
                            />
                        </FormGroup>

                        <FormGroup>
                            <ControlLabel>User Password</ControlLabel>
                            <FormControl
                                type="password" componentClass="input" label="Password" placeholder="Password"
                                name="password" required
                                inputRef={input => this.password = input}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Button type="submit" className="success btn btn-primary block full-width m-b" block>Login</Button>
                        </FormGroup>
                        <a className="btn btn-sm btn-white btn-block gotoRegister" href={ withBasename('/register') }>Create an account</a>
                    </form>
                </div>
            </div>
        );
    }
}

