import * as yup from 'yup';
export const validationSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Required'),
  dob: yup.string().required('Required'),
  doj: yup.string().required('Required'),
  mobile_number: yup.string().required('Required'),
  address: yup.string().required('Required'),
  zipCode: yup.string().required('Required'),
});
