import React, { Component } from 'react';
import {Redirect} from "react-router-dom";

class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            isRedirect : false,
            fName :  "",
            fEmail : "",
            fPhone : "",
            fMess : "",
            fNgay : "thu7"
        }
    }

    isChange = (event) =>{
        const ten = event.target.name;
        const giaTri = event.target.value;
        this.setState({
            [ten] : giaTri
        })
    }
    submitForm = (event) =>  {
        event.preventDefault();
        this.setState({
            isRedirect:true
        })
    }

    isFileChange = (event) => {
        //const fAnh = event.target.files[0];
        const tenAnh = event.target.files[0].name;
        this.setState({
            fAnh : tenAnh
        })
    }

    getGiaTri = () => {
        var noiDung = "";
        noiDung += "Ten nhan duoc la: " + this.state.fName;
        noiDung += " / Email nhan duoc la: " + this.state.fEmail;
        noiDung += " / Phone nhan duoc la: " + this.state.fPhone;
        noiDung += "/ Message nhan duoc la: " + this.state.fMess;
        noiDung += "/ Ngay nhan duoc la: " + this.state.fNgay;
        noiDung += "/ Anh nhan duoc la: " + this.state.fAnh;
        return noiDung;
    }


    render() {
        //chuyển hướng về trang chủ
        if (this.state.isRedirect === true){
            console.log(this.getGiaTri())
            return <Redirect to="/" />;
        }


        return (
            <div>
                <div>
                    <header className="masthead tintuc">
                        <div className="container h-100">
                        <div className="row h-100">
                            <div className="col-lg-12 my-auto">
                            <div className="header-content mx-auto">
                                <h1 className="mb-1 text-center">Trang liên hệ</h1>
                            </div>
                            </div>
                        </div>
                        </div>
                    </header>
                    {/* begin contact */}
                    <section id="contact">
                        <div className="container">
                        <h2 className="text-center text-uppercase text-secondary mb-0">Liên hệ với chúng tôi</h2>
                        <hr className="star-dark mb-5" />
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                            {/* To configure the contact form email address, go to mail/contact_me.php and update the email address in the PHP file on line 19. */}
                            {/* The form should work on most web servers, but if the form is not working you may need to configure your web server differently. */}
                            <form name="sentMessage" id="contactForm" noValidate="novalidate">
                                <div className="control-group">
                                <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                    <label>Name</label>
                                    <input onChange = {(event) => this.isChange(event)} name = "fName" className="form-control" id="name" type="text" placeholder="Name" required="required" data-validation-required-message="Please enter your name." />
                                    <p className="help-block text-danger" />
                                </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label>Email Address</label>
                                        <input onChange = {(event) => this.isChange(event)} name = "fEmail" className="form-control" id="email" type="email" placeholder="Email Address" required="required" data-validation-required-message="Please enter your email address." />
                                        <p className="help-block text-danger" />
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label>Phone Number</label>
                                        <input onChange = {(event) => this.isChange(event)} name = "fPhone" className="form-control" id="phone" type="tel" placeholder="Phone Number" required="required" data-validation-required-message="Please enter your phone number." />
                                        <p className="help-block text-danger" />
                                    </div>
                                </div>
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label>Message</label>
                                        <textarea onChange = {(event) => this.isChange(event)} name = "fMess" className="form-control" id="message" rows={5} placeholder="Message" required="required" data-validation-required-message="Please enter a message." defaultValue={""} />
                                        <p className="help-block text-danger" />
                                    </div>
                                </div>
                                <br />

                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label>Chọn ngày</label>
                                        <select value = {this.state.fNgay} className="form-control" name="fNgay" onChange = {(event) => this.isChange(event)}>
                                        <option value = "thu3">Ngày thứ 3</option>
                                        <option value = "thu5">Ngày thứ 5</option>
                                        <option value = "thu7">Ngày thứ 7</option>
                                        <option value = "chunhat">Ngày chủ nhật</option>
                                        </select>
                                        
                                    </div>
                                </div>
                                <br />

                                
                                <div className="control-group">
                                    <div className="form-group floating-label-form-group controls mb-0 pb-2">
                                        <label>Chọn ảnh</label>
                                        <input onChange = {(event => this.isFileChange(event))} type = "file" className = "form-control-file" name = "fAnh" />
                                    </div>
                                </div>
                                <br />
                                <div id="success" />
                                <div className="form-group">
                                <button type="submit" onClick = {(event) => this.submitForm(event)} className="btn btn-primary btn-xl" id="sendMessageButton">Send</button>
                                </div>
                            </form>
                            </div>
                        </div>
                        </div>
                    </section>
                    {/* end contact*/}
                    </div>

            </div>
        );
    }
}

export default Contact;