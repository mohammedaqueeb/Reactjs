import React, {useState} from 'react';
import {
    Formik,
    Form,
    Field,
    ErrorMessage,
    FieldArray
  } from 'formik'
  import * as Yup from 'yup';

  const initialValues = {
    name: 'Aqueeb',
    email: '',
    phone: '',
  }
  
  const onSubmit = (values) => {
    alert('call');
    console.log('Form data', values)
  }
  
  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Required'),
      phone: Yup.number().required('Required'),
  })


export default function FormFormik() {
    const [formValues, setFormValues] = useState(null)

    return (
        <div className="container">
            
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
            <Form className="form-group">
                <div>
                    <label htmlFor='name'>Name</label>
                    <Field type='text' id='name' name='name' className='form-control' />
                    <ErrorMessage name='name' component="div" className="error" />
                </div>
                <div>
                    <label htmlFor='name'>email</label>
                    <Field type='email' id='email' name='email' className='form-control' />
                    <ErrorMessage name='email' component="div" className="error" />
                </div>
                <div>
                    <label htmlFor='phone'>phone</label>
                    <Field type='tell' id='phone' name='phone' className='form-control' />
                    <ErrorMessage name='phone' component="div" className="error" />
                </div>
                <div>
                    <label htmlFor='Select'>Select</label>
                    <Field as='select' id='select' name='select' className='form-control'>
                        <option value="sa">sas</option>
                    </Field>
                    <ErrorMessage name='select' component="div" className="error" />
                </div>
                <button type='submit' className="btn btn-info mt-3" onClick={() => onSubmit()} >Submit</button>
            </Form>
        </Formik>
        </div>
    )
}
