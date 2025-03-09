import { useState } from 'react';
import { useFormik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const formikForm= () =>{

    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            username: Yup.string()
            .required("Username is required")
            ,email: Yup.string()
            .email("Invalid email format")
            .required("Email is required")
            ,password: Yup.string()
            .required("Password is required")
        })
        ,onSubmit: (values) => {
            console.log("Formik Form Submitted:", values);
        }
    })



    return (
        <formik 
           initialValues={initialValues}
           validationSchema={validationSchema}
           onSubmit={onSubmit}
        >
            <form>
            <h1>Registration Form</h1>
            <div>
                <label htmlfor="username">Username</label>
                <input type="username" name="username" id="username"  />
            </div>

            <div>
                <label htmlfor="email">Email</label>
                <input type="email" name="email" id="email"  />
            </div>

            <div>
                <label htmlfor="password">Password</label>
                <input type="password" name="password" id="password"/>
            </div>
            <input type="submit" value="" />

        </form>
        </formik>


    );
};

export default formikForm