import {useState,useRef, useEffect} from 'react';
import dayjs from 'dayjs';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Typography } from '@mui/material';


// Replace this with your API fetch logic for categories and custom labels
const fetchCategories = () => Promise.resolve([]);
const fetchCustomLabels = () => Promise.resolve([]);

const LastStep = ({persistentContent}) => {

  const [form, setForm] = useState({...persistentContent});

  useEffect(()=>{
    console.log(form,'TEST!')
  },[form]);
    return (
      <div style={{margin:'auto', marginTop:'20px', display:'flex', justifyContent:'center'}}>
        <Typography variant="h5">Is this ok?</Typography>
      </div>
    );
  };

export default LastStep;