import React, { Component } from 'react'
import BasicDetails from './BasicDetails'
import './MainForm.css'

export default class MainForm extends Component {
    render() {
        return (
            <div >
                <div >
                    <h1>Online<br />Registration Form</h1>
                    <h6>For Pregnant females in any Trimester</h6>
                </div>

                <div>
                    <BasicDetails />
                </div>

            </div>
        )
    }
}
