import React from 'react';
import { Formik, FormikProps, withFormik, Field, Form, ErrorMessage } from 'formik';
import { UserDetails } from './userDetails';

class CreateAccount extends React.Component {

    render() {
        return (
            <div className="ui container">
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                        confirmEmail: '',
                        password: '',
                        mobileNumber: ''
                    }}
                    onSubmit={(values) => {
                        console.log('submit', values)
                        setTimeout(() => {
                            alert(JSON.stringify(values));
                        }, 2000);
                    }}
                    render={(
                        {
                            values,
                            errors,
                            setFieldValue,
                            setFieldError
                        }
                    ) => (
                            <Form className="ui form">
                                <UserDetails
                                    values={values}
                                    errors={errors}
                                    setFieldValue={setFieldValue}
                                    setFieldError={setFieldError}
                                />
                            </Form>
                        )
                    }
                />
            </div>
        )
    }
}
export default CreateAccount;