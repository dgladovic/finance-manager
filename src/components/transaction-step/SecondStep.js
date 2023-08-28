import {useState,useRef, useEffect} from 'react';
import dayjs from 'dayjs';
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

const StartStep = ({setTransactionContent}) => {

    const today= new Date();


    const handleDateChange = (date) => {
        const formDate = new Date(date.$d);
        const day = formDate.getDate();
        const month = formDate.getMonth() + 1;
        const year = formDate.getFullYear();
        setDate(`${year}-${month}-${day}`);
      };
  
      const [categories, setCategories] = useState([]);
      const [amount, setAmount] = useState([]);
      const [customLabels, setCustomLabels] = useState([]);
      const [date, setDate] = useState('');
  
      const formData = {
        amount,
        category: '',
        date,
        label: ''
      }

      const [form, setForm] = useState({formData});

      const handleData = () =>{
        setTransactionContent(formData);
      }

    useEffect(() => {
      fetchCategories().then((categoriesData) => {
        setCategories(categoriesData);
      });
      fetchCustomLabels().then((customLabelsData) => {
        setCustomLabels(customLabelsData);
      });
    }, []);

    const dateRef = useRef();
    const formRef = useRef();

  
    return (
      <div>
        <form id='myForm'>
        <TextField 
          label="Amount" 
          fullWidth 
          variant="outlined" 
          onChange={(e) => {
            setAmount(e.target.value);
            setForm({
              ...formData, amount
            });
            handleData();
          }}
          margin="normal" 
        />
  
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
              label="Date of Birth"
              ref={dateRef}
              onFocus={() => dateRef.current.focus()}
              onChange={(e) => {
                handleDateChange(e)
                setForm({
                  ...formData, date
                });
                handleData();
              }}
              // value={dateOfBirth}
              defaultValue={dayjs(today)}
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
        </form>
      </div>
    );
  };

export default StartStep;