import React from 'react';
import md5 from 'md5';
import { browserHistory } from 'react-router';
import { FormGroup, ControlLabel, FormControl, Button ,Navbar } from 'react-bootstrap';
import swal from 'sweetalert2';
import { withBasename } from "../utils/params";

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.userValidation = this.userValidation.bind(this);
        this.submitRegister = this.submitRegister.bind(this);
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
            browserHistory.push(withBasename('/login'));
        } else if (!data.isFetching) {
            this.alarm(data.message);
        }
    }

    submitRegister(e) {
        e.preventDefault();
        if (this.password.value === this.confirmpassword.value) {
            const data = new FormData();
            data.append('username', this.username.value);
            data.append('email', this.email.value);
            data.append('password', md5(this.password.value));
            this.props.mappeduserRegister(data);
        } else {
            this.alarm("Confirm Password is wrong!");
        }
    }

    componentWillReceiveProps(nextProps) {
        this.userValidation(nextProps.user)
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
                    <form className="form form-horizontal" id="userRegisterForm" onSubmit={this.submitRegister}>
                        <div>
                            <h3 className="welcome">Register</h3>
                        </div>

                        <FormGroup>
                            <ControlLabel>User Name</ControlLabel>
                            <FormControl
                                type="text" componentClass="input" label="User Name" placeholder="User Name"
                                name="username" required
                                inputRef={input => this.username = input}
                            />
                        </FormGroup>

                        <FormGroup>
                            <ControlLabel>Email</ControlLabel>
                            <FormControl
                                type="email" componentClass="input" label="Email address" placeholder="email"
                                name="email" required
                                inputRef={input => this.email = input}
                            />
                        </FormGroup>

                        <FormGroup>
                            <ControlLabel>Password</ControlLabel>
                            <FormControl
                                type="password" componentClass="input" label="Password" placeholder="Password"
                                name="password" required
                                inputRef={input => this.password = input}
                            />
                        </FormGroup>

                        <FormGroup>
                            <ControlLabel>Confirm Password</ControlLabel>
                            <FormControl
                                type="password" componentClass="input" placeholder="Confirm Password"
                                name="confirmpassword" required
                                inputRef={input => this.confirmpassword = input}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Button type="submit" className="success btn btn-primary block full-width m-b" block>Register</Button>
                        </FormGroup>
                        <a className="btn btn-sm btn-white btn-block gotoRegister" href={ withBasename('/login') }>Login</a>
                    </form>
                </div>
            </div>
        );
    }
}

