import MaterialSteeper from './component/Stepper';
import { createContext, useState } from 'react';
import Step from './component/Steps';
export const FormContext = createContext();

function App() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [formData, setFormData] = useState({});
  return (
    <FormContext.Provider
      value={{ activeStepIndex, setActiveStepIndex, formData, setFormData }}
    >
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
