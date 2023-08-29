import { TextField, Button } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { FormContext } from '../../App';
import { useContext } from 'react';

export default function PaymentInfo() {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } =
    useContext(FormContext);
  const ValidationSchema = yup.object().shape({
    cardNumber: yup
      .string()
      .matches(/^\d{16}$/, 'Card number must be 16 digits')
      .required('Card number is required'),
    expirationDate: yup
      .string()
      .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Invalid expiration date')
      .required('Expiration date is required'),
    cvv: yup
      .string()
      .matches(/^\d{3}$/, 'CVV must be 3 digits')
      .required('CVV is required'),
  });

  const Formik = useFormik({
    initialValues: {
      cardNumber: '',
      expirationDate: '',
      cvv: '',
    },
    validationSchema: ValidationSchema,
    onSubmit: (values) => {
      const data = { ...formData, ...values };
      setFormData(data);
      setActiveStepIndex(activeStepIndex + 1);
    },
  });

  return (
    <div>
      <form onSubmit={Formik.handleSubmit}>
        <TextField
          fullWidth
          id="cardNumber"
          name="cardNumber"
          label="Card Number"
          value={Formik.values.cardNumber}
          onChange={Formik.handleChange}
          onBlur={Formik.handleBlur}
          error={Formik.touched.cardNumber && Boolean(Formik.errors.cardNumber)}
          helperText={Formik.touched.cardNumber && Formik.errors.cardNumber}
        />
        <TextField
          fullWidth
          id="expirationDate"
          name="expirationDate"
          label="Expiration Date (MM/YY)"
          value={Formik.values.expirationDate}
          onChange={Formik.handleChange}
          onBlur={Formik.handleBlur}
          error={
            Formik.touched.expirationDate &&
            Boolean(Formik.errors.expirationDate)
          }
          helperText={
            Formik.touched.expirationDate && Formik.errors.expirationDate
          }
        />
        <TextField
          fullWidth
          id="cvv"
          name="cvv"
          label="CVV"
          value={Formik.values.cvv}
          onChange={Formik.handleChange}
          onBlur={Formik.handleBlur}
          error={Formik.touched.cvv && Boolean(Formik.errors.cvv)}
          helperText={Formik.touched.cvv && Formik.errors.cvv}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}
