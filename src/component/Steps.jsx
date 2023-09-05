import { useContext } from 'react';
import { FormContext } from '../App';
import UserInfo from './forms/UserInfo';
import PaymentInfo from './forms/Payment';
import ImageUpload from './forms/Fileupload';
import ProfileLinks from './forms/ProfileLinks';
export default function Step() {
  const { activeStepIndex } = useContext(FormContext);
  console.log(activeStepIndex);
  let stepContent;
  switch (activeStepIndex) {
    case 0:
      stepContent = <UserInfo />;
      break;
    case 2:
      stepContent = <ProfileLinks />;
      break;
    case 1:
      stepContent = <PaymentInfo />;
      break;

    case 3:
      stepContent = <ImageUpload />;
      break;
    default:
      break;
  }
  return stepContent;
}
