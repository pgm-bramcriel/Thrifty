import React, { ReactPropTypes } from 'react'
import { ErrorMessage, useField } from 'formik'
import { TextFieldStyle, TextFieldContainer } from './style';

const TextField = ({label, ...props}: any) => {
  const [field, meta] = useField(props);
  return (
    <TextFieldContainer className="mb-2">
      <label htmlFor={field.name}>{label}</label>
      <TextFieldStyle
        className={`form-control ${meta.touched && meta.error && 'is-invalid'}`}
        {...field} {...props}
      />
      <ErrorMessage name={field.name}/>
    </TextFieldContainer>
  )
}

export default TextField