import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ userInput: event.target.value });
    }
    render() {
        return (
        
                <form>
                    <input type="text" value={this.state.userInput} onChange={this.handleChange}/>
                </form>
           
        )
    }
}

export default Contact;