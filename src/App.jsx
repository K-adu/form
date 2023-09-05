import MaterialSteeper from "./component/Stepper";
import { createContext, useEffect, useState } from "react";
import Step from "./component/Steps";
import { useSelector, useDispatch } from "react-redux";
import { fetchFormValues } from "./stores/actions/FormValues";
import { Button } from "@mui/material";
export const FormContext = createContext();

function App() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [formData, setFormData] = useState({});
  const formValues = useSelector((state) => state.formValues);
  const dispatch = useDispatch();
  const handleClick = async () => {
    dispatch(fetchFormValues({ value: "new value" }));
  };

  useEffect(() => {
    console.log("formValues initial===>", formValues);

    dispatch(fetchFormValues());

    setTimeout(() => {
      console.log("formValues later===>", formValues);
    }, 3000);
  }, []);
  return (
    <FormContext.Provider
      value={{ activeStepIndex, setActiveStepIndex, formData, setFormData }}
    >
      <Button variant="contained" onClick={handleClick}>
        set to redux
      </Button>
      <>{formValues?.value || "nothing now"}</>
      <div>
        <MaterialSteeper></MaterialSteeper>
        <br></br>
        <br></br>
        <br></br>
        <Step></Step>
      </div>
    </FormContext.Provider>
  );
}

export default App;
