import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.css'

import BaseLayout from '../../layouts/BaseLayout'
import TextField from '../../components/TextField/TextField';
import { FormAdd, FormContainer, FormUpdate } from './style';

const Admin = () => {
  const yupSchemaAdd = Yup.object({
    title: Yup.string()
      .required('Title is required')
      .max(60, 'Title cannot be over 60 characters long.'),
    price: Yup.number()
      .required('Price is required')
      .max(10000, 'Price cannot exceed 10,000.'),
    description: Yup.string()
      .required('Description is required'),
    image: Yup.mixed()
      .required('Image is required'),
  });

  const yupSchemaUpdate = Yup.object({
    itemId: Yup.string()
      .required('Item id is required'),
    newTitle: Yup.string()
      .max(60, 'Title cannot be over 60 characters long.'),
    newPrice: Yup.number()
      .max(10000, 'Price cannot exceed 10,000.'),
    newDescription: Yup.string(),
    newImage: Yup.string(),
  });

  return (
    <BaseLayout>
      <FormContainer className="secondary-container">
        <Formik
          initialValues={{
            title: '',
            price: '',
            description: '',
            image: ''
          }}
          validationSchema={yupSchemaAdd}
          onSubmit={ (values, actions) => {
            const title = values.title;
            const price = values.price;
            const description = values.description;

            fetch('http://localhost:3000/api/allProducts', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                'title' : title,
                'price' : price,
                'description' : description
              })
            })
            
            actions.resetForm({
              values: {
                title: '',
                price: '',
                description: '',
                image: ''
              }
            })

            alert('Your item is posted!');
          }}
        >
          {formik => (
            <FormAdd>
              <h2>Add an item</h2>
              <Form>
                <TextField label="Title *" name="title" type="text" />
                <TextField label="Price *" name="price" type="number" />
                <TextField label="Description *" name="description" type="textarea" />
                <TextField label="Image *" name="image" type="file" />
                <button type="submit" className="btn btn-danger mt-3">Submit</button>
              </Form>
            </FormAdd>
          )}
        </Formik>
        
        <Formik
          initialValues={{
            newTitle: '',
            newPrice: '',
            newDescription: '',
            newImage: '',
            itemId: '',
          }}
          validationSchema={yupSchemaUpdate}
          onSubmit={(values: any, actions) => {
              const newTitle = values.newTitle;
              const newPrice = values.newPrice;
              const newDescription = values.newDescription;
              const itemId = values.itemId;

              fetch('http://localhost:3000/api/allProducts', {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  'newTitle' : newTitle,
                  'newPrice' : newPrice,
                  'newDescription' : newDescription,
                  'itemId' : itemId
                })
              })
              
              actions.resetForm({
                values: {
                  newTitle: '',
                  newPrice: '',
                  newDescription: '',
                  newImage: '',
                  itemId: '',
                }
              })

              alert('Your item is updated!');
          }}
        >
          {formik => (
            <FormUpdate>
              <h2>Update an item</h2>
              <Form>
                <TextField label="Item ID *" name="itemId" type="text" />
                <TextField label="New title" name="newTitle" type="text" />
                <TextField label="New price" name="newPrice" type="number" />
                <TextField label="New description" name="newDescription" type="textarea" />
                <TextField label="New image" name="newImage" type="file" />
                <button type="submit" className="btn btn-danger mt-3">Update</button>
              </Form>
            </FormUpdate>
          )}
        </Formik>
      </FormContainer>
    </BaseLayout>
  )
}

export default Admin