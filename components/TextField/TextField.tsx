import React, { ReactPropTypes } from 'react'
import { ErrorMessage, useField } from 'formik'

const TextField = ({label, ...props}: any) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
      <label htmlFor={field.name}>{label}</label>
      <input
        className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
        {...field} {...props}
      />
      <ErrorMessage name={field.name}/>
    </div>
  )
}

export default TextField