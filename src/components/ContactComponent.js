import React from 'react';

function Contact(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Contact a consultant</h2>
                    <hr />
                </div>
            </div>
            <div className="row row-content align-items-center">
                <div className="col-sm-4">
                    <a role="button" className="btn btn-link" href="tel:+15033497151"><i className="fa fa-phone">Phone</i></a>
                    <a role="button" className="btn btn-link" href="mailto:nwrestaurantconsultants@hotmail.com"><i className="fa fa-envelope-o">Email</i></a>
                </div>
            </div>
        </div>
    );
}

export default Contact;