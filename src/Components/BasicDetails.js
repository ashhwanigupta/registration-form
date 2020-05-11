import React, { Component } from 'react'
import Form from "./Form"
import Contact from "./Contact"

import './BasicDetails.css'
import logo from '../logo.png'

class BasicDetails extends Component {

    render() {
        return (
            <div className="main-De">
                <div className="Basic">
                    <img src={logo} className="logo" alt="basic logo" />
                    <h2>Basic Details</h2>
                    <h4>Personal Details</h4>
                    <Form />
                    <h3>Contact & ID Proof Details</h3>
                    <Contact />
                    <button type="submit">Submit & Next</button>
                </div>
            </div>
        )
    }
}
export default BasicDetails;