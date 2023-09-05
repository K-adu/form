/* eslint-disable import/no-anonymous-default-export */
import { SET_FORM_VALUES } from "../actions/FormValues";

const _nullSession = [];
export default (state = _nullSession, { type, formValues }) => {
  Object.freeze(state);
  switch (type) {
    case SET_FORM_VALUES:
      return formValues || state;

    default:
      return state;
  }
};
