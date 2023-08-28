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


// Replace this with your API fetch logic for categories and custom labels
const fetchCategories = () => Promise.resolve([]);
const fetchCustomLabels = () => Promise.resolve([]);

const StartStep = () => {
    
    const [categories, setCategories] = useState([]);
    const [customLabels, setCustomLabels] = useState([]);
    const [dateOfBirth, setDate] = useState(dayjs(new Date()));

    const handleDateChange = (date) => {
        console.log(date);
        const formDate = new Date(date.$d);
        const day = formDate.getDate();
        const month = formDate.getMonth() + 1;
        const year = formDate.getFullYear();
        setDate(`${year}-${month}-${day}`);
      };
  
    useEffect(() => {
      fetchCategories().then((categoriesData) => {
        setCategories(categoriesData);
      });
      fetchCustomLabels().then((customLabelsData) => {
        setCustomLabels(customLabelsData);
      });
    }, []);

    const dateRef = useRef();

  
    return (
      <div>
        <TextField label="Amount" fullWidth variant="outlined" margin="normal" />
  
        <FormControl fullWidth variant="outlined" margin="normal" style={{marginBottom:'24px'}}>
          <InputLabel>Category</InputLabel>
          <Select>
            {categories.map((category) => (
              <MenuItem key={category.id} value={category.id}>
                {category.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              name="date_of_birth"
              label="Transaction date"
              ref={dateRef}
              onFocus={() => dateRef.current.focus()}
              onChange={(e) => handleDateChange(e)}
              value={dateOfBirth}
              required
            />
          </LocalizationProvider>
  
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel>Custom Label</InputLabel>
          <Select>
            {customLabels.map((label) => (
              <MenuItem key={label.id} value={label.id}>
                {label.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
  };

export default StartStep;