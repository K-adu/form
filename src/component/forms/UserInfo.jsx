import { TextField, Button } from "@mui/material";
import { useFormik, Field, Form, ErrorMessage } from "formik";
import { useContext } from "react";
import * as yup from "yup";
import { FormContext } from "../../App";
import { VerticalStack } from "./Common.style";
export default function UserInfo() {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } =
    useContext(FormContext);
  const ValidationSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required(),
    age: yup.number().required(),
  });
  const Formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      age: "",
    },
    validationSchema: ValidationSchema,
    onSubmit: (values) => {
      const data = { ...formData, ...values };
      setFormData(data);
      setActiveStepIndex(activeStepIndex + 1);
      console.log("activeStepIndex");
    },
  });
  return (
    <div>
      <form onSubmit={Formik.handleSubmit}>
        <VerticalStack>
          <TextField
            fullWidth
            id="firstName"
            name="firstName"
            label="firstName"
            value={Formik.values.firstName}
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
            error={Formik.touched.firstName && Boolean(Formik.errors.firstName)}
          />
          <TextField
            fullWidth
            id="lastName"
            name="lastName"
            label="lastName"
            value={Formik.values.lastName}
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
            error={Formik.touched.lastName && Boolean(Formik.errors.lastName)}
          />

          <TextField
            fullWidth
            id="email"
            name="email"
            label="email"
            value={Formik.values.email}
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
            error={Formik.touched.email && Boolean(Formik.errors.email)}
          />
          <TextField
            fullWidth
            id="age"
            name="age"
            label="age"
            value={Formik.values.age}
            onChange={Formik.handleChange}
            onBlur={Formik.handleBlur}
            error={Formik.touched.age && Boolean(Formik.errors.email)}
          />
          <Button color="primary" variant="contained" fullWidth type="submit">
            Next
          </Button>
        </VerticalStack>
      </form>
    </div>
  );
}
