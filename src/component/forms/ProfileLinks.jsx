import { Formik, Form, Field, FieldArray } from 'formik';
import * as Yup from 'yup';
import { Typography, Grid, Button, TextField } from '@mui/material';
import MaterialSteeper from '../Stepper';
import { useContext, useState } from 'react';
import { FormContext } from '../../App';
const linksGroup = { linkName: '', linkUrl: '' };
export default function ProfileLinks() {
  const { activeStepIndex, setActiveStepIndex, formData, setFormData } =
    useContext(FormContext);

  return (
    // <form onSubmit={Formik.handelSubmit}>
    <Formik
      initialValues={{
        links: [linksGroup],
      }}
      onSubmit={async (values, actions) => {
        console.log('this is being triggered');
        // const data = { ...formData, ...values };
        // //alert(JSON.stringify(values, null, 2));
        // setFormData(data);
        setActiveStepIndex(activeStepIndex + 1);
      }}
    >
      {({ values, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <FieldArray name="links">
            {({ push, remove }) => (
              <Grid container spacing={2} sx={{ marginTop: 2, paddingX: 2 }}>
                <Grid item xs={12}>
                  <Typography variant="h6" component="h2">
                    Social Media Acoounts
                  </Typography>
                </Grid>
                {values.links.map((_, index) => (
                  <>
                    <Grid item md={5}>
                      <Field
                        fullWidth
                        name={`links.${index}.linkname`}
                        component={TextField}
                        label="Link Name"
                      />
                    </Grid>
                    <Grid item md={5}>
                      <Field
                        fullWidth
                        name={`links.${index}.linkurl`}
                        component={TextField}
                        label="Link URL"
                      />
                    </Grid>
                    {index > 0 && (
                      <Grid item md={2}>
                        <Button
                          variant="outlined"
                          color="error"
                          onClick={() => remove(index)}
                        >
                          Delete
                        </Button>
                      </Grid>
                    )}
                  </>
                ))}{' '}
                <Grid item xs={12}>
                  <Button variant="outlined" onClick={() => push(linksGroup)}>
                    Add Link
                  </Button>
                  <Button variant="outlined" type="submit">
                    Next
                  </Button>
                </Grid>
              </Grid>
            )}
          </FieldArray>
        </Form>
      )}
    </Formik>
    // </form>
  );
}
