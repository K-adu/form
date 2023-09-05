//import * as FormService from "../../services/FormService";

export const SET_FORM_VALUES = "SET_FORM_VALUES";

export const fetchFormValues = (value) => async (dispatch) => {
  dispatch({
    type: SET_FORM_VALUES,
    formValues: value,
  });
  //   const response = await FormService.getFormValues();
  //   console.log('REDUX----formValues', response);
  //   if (response.status === 200) {
  //     dispatch({
  //       type: SET_FORM_VALUES,
  //       formValues: response.data.docs
  //     });
  //   }
  //   return response;
  return { formValues: value };
};
