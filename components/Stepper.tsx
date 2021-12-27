import * as React from 'react';
import { styled } from '@mui/material/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Check from '@mui/icons-material/Check';
import DirectionsBoatFilledIcon from '@mui/icons-material/DirectionsBoatFilled';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepIconProps } from '@mui/material/StepIcon';
import { Status } from '.prisma/client';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  }),
}));

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <Check />,
    2: <QueryBuilderIcon />,
    3: <DirectionsBoatFilledIcon/>,
    4: <LocalShippingIcon />,
    5: <NotificationImportantIcon />,
    6: <LocationOnOutlinedIcon/>,
    7: <ShoppingBasketIcon/>
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

const steps = [
  'Package recieved',
  'Pending Shipment',
  'Shipped',
  'In_Transit',
  'Arrived at Destination',
  'Ready_For_Pick_Up',
  'Delivered'];

 const progress = (status: Status) => {
   if (status === 'PACKAGE_RECIEVED') return 0;
   if (status === 'PENDING') return 1
     if (status === 'SHIPPED') return 2
   if (status === 'IN_TRANSIT') return 3
   if (status === 'ARRIVED_AT_DESTINATION') return 4
     if (status === 'PICK_UP') return 5
   if (status === 'DELIVERED') return 6
  /// if(status === 'RETURNED' || status === 'FAIL_ATTEMPT') return 1
  }


export default function CustomizedStepper({ status }: { status: Status}) {
  
  return (
    <Stepper alternativeLabel  activeStep={progress(status as Status)} connector={<ColorlibConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
  )
}
