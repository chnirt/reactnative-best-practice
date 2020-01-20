import * as Yup from 'yup';

const phoneRegExp = /^0\d{9}$/;

const phone = Yup.string()
  .matches(phoneRegExp, 'Phone number is not valid')
  .required('Phone is required');

const ForgotSchema = Yup.object().shape({
  phone,
});

export default ForgotSchema;
