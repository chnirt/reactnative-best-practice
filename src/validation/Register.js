import * as Yup from 'yup';

const fullName = Yup.string()
  .min(1, 'Fullname too Short!')
  .max(50, 'Fullname too Long!')
  .required('Fullname is required');

const phoneRegExp = /^0\d{9}$/;

const phone = Yup.string()
  .matches(phoneRegExp, 'Phone number is not valid')
  .required('Phone is required');

const email = Yup.string()
  .email('Invalid email')
  .required('Email is required');

const password = Yup.string()
  .min(2, 'Password too Short!')
  .max(50, 'Password too Long!')
  .required('Password is required');

const RegisterSchema = Yup.object().shape({
  fullName,
  phone,
  email,
  password,
});

export default RegisterSchema;
