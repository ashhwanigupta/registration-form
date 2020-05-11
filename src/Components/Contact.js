import React, { Component } from 'react'
import './Contact.css'
class Contact extends Component {
    render() {
        return (
            <div>
                <form>
                    <div>
                        <label>Communication Address*</label><br />
                        <input type="text" />
                        <input style={{ marginLeft: "150px" }} type="text" /><br />
                    </div>
                    <div className="con2">
                        <label>PAN Number*</label><br />
                        <input type="text" />
                    </div>
                    <div className="contact3">
                        <label>PAN Attachment*</label><br />
                        <input type="file" />
                    </div>
                    <div className="">
                        <label >Aadhar Number*</label><br />
                        <input type="text" />
                    </div>
                    <div className="con5">
                        <label>Aadhar Attachment*</label><br />
                        <input type="file" />
                    </div>

                </form>
            </div>
        )
    }
}
export default Contact