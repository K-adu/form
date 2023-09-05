import { Stepper, Step, StepLabel } from '@mui/material';
import { useContext } from 'react';
import { FormContext } from '../App';
export default function MaterialSteeper() {
  const { activeStepIndex } = useContext(FormContext);
  return (
    <div className="w-2/3 flex flex-row items-center justify-center px-32 py-16">
      <Stepper activeStep={activeStepIndex}>
        <Step>
          <StepLabel>User Details</StepLabel>
        </Step>
        <Step>
          <StepLabel>Payment Details</StepLabel>
        </Step>
        <Step>
          <StepLabel>File Upload</StepLabel>
        </Step>
        <Step>
          <StepLabel>link accounts</StepLabel>
        </Step>
      </Stepper>
    </div>
  );
}
