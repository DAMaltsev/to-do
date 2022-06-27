import React from "react";
import { useFormik } from "formik";

import styles from './styles.module.css'

const validate = values => {
    const errors = {};

    if(!values.title) {
        errors.title = "Please fill a title task"
    } else if (values.title.length < 2 ){
        errors.title = "Min length is 2 symbols"
    }

    return errors;
}

const AddItemForm = () => {
    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            data: 'Today',
        },
        validate,
        onSubmit: values => console.log(JSON.stringify(values, null , 2))
    })

    return(
    <form className={styles.root} onSubmit={formik.handleSubmit}>
        <input value={formik.values.title} onChange={formik.handleChange} onBlur={formik.handleBlur} name="title" type="text" placeholder="TITLE"/>
        {formik.errors.title && formik.touched.title ? <div>{formik.errors.title}</div> : null}
        <textarea value={formik.values.description} onChange={formik.handleChange} onBlur={formik.handleBlur} name="description" cols="30" rows="10" placeholder="DESCRIPTION"></textarea>
        <select name="data" id="" value={formik.values.data} onChange={formik.handleChange}>
            <option value="Today">Today</option>
            <option value="Tomorrow">Tomorrow</option>
        </select>
        <button type="submit">Add</button>
    </form>
    )
}

export default AddItemForm;