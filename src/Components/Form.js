import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
    render() {
        return (
            <div>
                <form>
                    <div className="first">
                        <label>First Name*</label><br />
                        <input type="text" />
                    </div>
                    <div className="second">
                        <label>Last Name*</label><br />
                        <input type="text" />
                    </div>
                    <div className="third">
                        <label>Gender*</label><br />
                        <label>Male</label>
                        <input type="radio" id="male" name="gender" value="male" />
                        <label>Female</label>
                        <input type="radio" id="male" name="gender" value="male" />
                    </div>
                    <div className="forth">
                        <label >Date of Birth*</label><br />
                        <input type="date" />
                    </div>
                    <div className="fifth">
                        <label>Phone Number*</label><br />
                        <input type="number" />
                    </div>
                    <div className="sixth">
                        <label>Email</label><br />
                        <input type="email" />
                    </div>
                </form>
            </div>
        )
    }
}
export default Form