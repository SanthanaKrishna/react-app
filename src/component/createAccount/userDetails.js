import React from 'react';
import { Formik, FormikProps, withFormik, Field, Form, ErrorMessage } from 'formik';
import Fieldvalidation from '../../utils/validation';

const Errors = {
    requiredError: {
        userName: "Enter your First Name",
        emailId: "Enter a valid email address",
        confirmEmail: "You must confirm Email",
        mobileNumber: "Enter a valid Phone number"
    },
    invalidError: {
        emailId: "Enter a valid email address",
        confirmEmail: "Email and Confirm Email dIdn't match",
        mobileNumber: "Provide a valid contact number"
    }
}


export class UserDetails extends React.Component {

    onInputChange = (event) => {
        console.log('onInputChange', event.target.value, this.props)
        const { setFieldValue } = this.props;
        let inputValue = '';
        const { name, value } = event.target;
        //console.log(event.target)
        if (name === "firstName" || name === "lastName") {
            inputValue = Fieldvalidation.limitMaxValue(value, 20);
            setFieldValue(name, inputValue)
        } else if (name === "mobileNumber") {
            inputValue = Fieldvalidation.allowOnlyNumber(value);
            let phoneNumber = Fieldvalidation.limitMaxValue(inputValue, 10);
            //phoneNumber = `+91${phoneNumber}`
            setFieldValue(name, phoneNumber);
        }
        //  else if (name === "email" || name === "confirmEmail") {
        //     inputValue = Fieldvalidation.emailValidate(value, Errors)
        //     setFieldValue(name, inputValue)
        // }
    }
    fieldValidation = (event) => {
        const { setFieldError } = this.props;
        //let fieldValue = '';
        const { name, value } = event.target;
        if (name === "firstName") {
            if (!value)
                setFieldError(name, Errors.requiredError.userName)
        } else if (name === "email") {
            if (!value)
                setFieldError(name, Errors.requiredError.emailId)
        } else if (name === "confirmEmail") {
            if (!value)
                return setFieldError(name, Errors.requiredError.confirmEmail)
        }
    }

    render() {
        const { values } = this.props;
        console.log('initialValues', this.props);
        return (
            <div>
                <div className="field">
                    <label>First Name</label>
                    <Field
                        //className="ui input error"
                        id="firstName"
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        //maxLength={20}
                        value={values.firstName}
                        onChange={(ev) => this.onInputChange(ev)}
                        //onBlur={handleBlur}
                        validate={(ev) => this.onValidation(ev)}
                    />
                </div>
                <div className="field">
                    <label>Last Name</label>
                    <Field
                        //className="ui input error"
                        id="lastName"
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={values.lastName}
                        onChange={(ev) => this.onInputChange(ev)}
                        //onBlur={handleBlur}
                        validate={(ev) => this.onValidation(ev)}
                    />
                </div>
                <div className="field">
                    <label>E-mail</label>
                    <Field
                        //className="ui input error"
                        id="emailId"
                        type="email"
                        name="email"
                        placeholder="Email Id"
                        value={values.email}
                        onChange={(ev) => this.onInputChange(ev)}
                        //onBlur={handleBlur}
                        validate={(ev) => this.onValidation(ev)}
                    />
                    <ErrorMessage name="email" />
                </div>
                <div className="field">
                    <label>Confirm E-mail</label>
                    <Field
                        className="ui input error"
                        id="confirmemailId"
                        type="email"
                        name="confirmEmail"
                        placeholder="re-enter Email Id"
                        value={values.confirmEmail}
                        onChange={(ev) => this.onInputChange(ev)}
                        //onBlur={handleBlur}
                        validate={(ev) => this.onValidation(ev)}
                    />
                </div>
                <div className="field">
                    <label>Password</label>
                    <Field
                        className="ui input error"
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={values.password}
                        onChange={(ev) => this.onInputChange(ev)}
                    //onBlur={handleBlur}
                    />
                </div>
                <div>
                    <label>Contact Number</label>
                    <Field
                        id="mobileNumber"
                        type="text"
                        name="mobileNumber"
                        placeholder="Mobile Number"
                        value={values.mobileNumber}
                        onChange={(ev) => this.onInputChange(ev)}
                    //onBlur={handleBlur}
                    />
                </div>
                <div>
                    <button type="submit" className="ui button">Submit</button>
                </div>
            </div>
        )
    }
}

