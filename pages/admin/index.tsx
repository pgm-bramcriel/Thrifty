import React, { useState } from 'react';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.css'


import BaseLayout from '../../layouts/BaseLayout'
import TextField from '../../components/TextField/TextField';
import { FormAdd, FormContainer, FormUpdate, SelectStyle } from '../../components/pageStyles/admin/style';
import { apiUrl } from '../../utils';
import { TextFieldContainer } from '../../components/TextField/style';

const Admin = ({ allProducts }: any) => {
  const productList = allProducts;

  const [imgUrl, setImgUrl] = useState('');
  const [updateId, setUpdateId] = useState('');

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
  });

  const yupSchemaUpdate = Yup.object({
    newTitle: Yup.string()
      .max(60, 'Title cannot be over 60 characters long.'),
    newPrice: Yup.number()
      .max(10000, 'Price cannot exceed 10,000.'),
    newDescription: Yup.string(),
    newImage: Yup.string(),
    id: Yup.string()
  });

  const getImageUrl = async (img: any) => {
    const formData = new FormData();
    formData.append("myFile", img);
  
    const x = await fetch(
      "https://europe-west1-kopopeenkop.cloudfunctions.net/upload_image",
      {
        method: "POST",
        body: formData,
      }
    );
    
    const xJson = await x.json();
    setImgUrl(xJson.url);
  };

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
          onSubmit={ async (values, actions) => {
            const title = values.title;
            const price = values.price;
            const description = values.description;

            fetch(`${apiUrl}/api/allProducts`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                'title' : title,
                'price' : price,
                'description' : description,
                'image' : imgUrl
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
                <TextField label="Image" name="image" type="file" onChange={(event: any) => {
                  getImageUrl(event.currentTarget.files[0]);
                }}/>
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
            id: '',
          }}
          validationSchema={yupSchemaUpdate}
          onSubmit={(values: any, actions) => {
              const newTitle = values.newTitle;
              const newPrice = values.newPrice;
              const newDescription = values.newDescription;

              fetch(`${apiUrl}/api/allProducts`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  'newTitle' : newTitle,
                  'newPrice' : newPrice,
                  'newDescription' : newDescription,
                  'itemId' : updateId,
                  'newImage' : imgUrl
                })
              })
              
              actions.resetForm({
                values: {
                  newTitle: '',
                  newPrice: '',
                  newDescription: '',
                  newImage: '',
                  id: ''
                }
              })

              alert('Your item is updated!');
          }}
        >
          {formik => (
            <FormUpdate>
              <h2>Update an item</h2>
              <Form>
                <TextFieldContainer className="mb-2">
                  <label htmlFor="id">Item *</label>
                  <SelectStyle className="form-select" id="id" name="id" onChange={(e) => {setUpdateId(e.target.value)}}>
                    {
                      productList.map((product: any) => {
                        return (
                          <option key={product.id} value={product.id}>{product.productName}</option>
                        )
                      })
                    }
                  </SelectStyle>
                </TextFieldContainer>
                <TextField label="New title" name="newTitle" type="text" />
                <TextField label="New price" name="newPrice" type="number" />
                <TextField label="New description" name="newDescription" type="textarea" />
                <TextField label="New image" name="newImage" type="file" onChange={(event: any) => {
                  getImageUrl(event.currentTarget.files[0]);
                }}/>
                <button type="submit" className="btn btn-danger mt-3">Update</button>
              </Form>
            </FormUpdate>
          )}
        </Formik>
      </FormContainer>
    </BaseLayout>
  )
}

export async function getServerSideProps() {
  const allProductsRes = await fetch(`${apiUrl}/api/allProducts`);
  const allProducts = await allProductsRes.json();

  return {
    props: {
      allProducts,
    }, // will be passed to the page component as props
  }
}

export default Admin