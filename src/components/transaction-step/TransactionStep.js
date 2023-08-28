import {useState}from 'react';
import dayjs from 'dayjs';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import StartStep from './SecondStep';
import ZeroStep from './StartStep';
import StandardTransaction from '../StandardTransaction';
import LastStep from './ThirdStep';

const steps = [
  'Pick kind',
  'Transaction info',
  'Summary',
];

const templates = [
  { id: '1', name: 'Template 1' },
  { id: '2', name: 'Template 2' },
];

const defaultTemp = { id: '3', name: 'Template 3' };

export default function TransactionStep() {
  const [activeStep, setActiveStep] = useState(0);
  const [template, setTemplate] = useState([]);
  const [content, setContent] = useState([]);

  const setTemplateContext = (data) =>{
    setTemplate(data);
  }

  const setTransactionContent = (data) =>{
    setContent(data);
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection:'column' }}>
      <Stepper activeStep={activeStep} alternativeLabel >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel StepIconProps={{ style: { color: '#00af78' } }}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {steps.map((label, index) => (
        <div key={label} style={{ display: index === activeStep ? 'block' : 'none' }}>
          <Card variant="outlined" sx={{ width: '90%', maxWidth:'800px', margin:'auto', marginTop:'40px', marginBottom:'40px' }}>
            <CardContent style={{paddingTop:'10px'}}>
                <StandardTransaction template={template} content={content}/>
                {activeStep === 0 && <ZeroStep templates={templates} setTemplateContext={setTemplateContext}/> }
                {activeStep === 1 && <StartStep setTransactionContent={setTransactionContent}/>}
                {activeStep === 2 && <LastStep/>}
            </CardContent>
            <CardActions sx={{ justifyContent: 'space-around', marginBottom:'20px' }}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} sx={{ mr: 2 }}>
                  Back
                </Button>
              )}
              {activeStep !== steps.length - 1 && (
                <Button onClick={handleNext} variant="contained" color="primary">
                  Next
                </Button>
              )}
              {activeStep === steps.length - 1 && (
                <Button variant="contained" color="primary">
                  Submit
                </Button>
              )}
            </CardActions>
          </Card>
        </div>
      ))}
    </Box>
  );
}
