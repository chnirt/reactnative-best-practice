import * as Yup from 'yup';

const email = Yup.string()
  .email('Invalid email')
  .required('Email is required');

const password = Yup.string()
  .min(2, 'Password too Short!')
  .max(50, 'Password too Long!')
  .required('Password is required');

const LoginSchema = Yup.object().shape({
  email,
  password,
});

export default LoginSchema;
