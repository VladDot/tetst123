import { Form, Formik } from 'formik';

import { Button, InputField } from '../../../components';
import { initialValues, validationSchema } from './config';

export const FormLogin = () => {
  return (
    <div className='w-full p-3 flex flex-col gap-2 text-secondText bg-black mobile:flex-row flex-wrap mobile:justify-center mobile:items-center'>
      <h3 className='text-center w-full select-none'>LogIn</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          resetForm();
        }}
      >
        <Form className='w-full h-full flex flex-col gap-6 justify-center items-center max-w-[568px]'>
          <InputField name='login' type='text' placeholder='enter' />
          <InputField name='password' type='password' placeholder='enter' />

          <Button type='submit' textContent='Submit' className='max-w-[260px] ml-auto' />
        </Form>
      </Formik>
    </div>
  );
};
