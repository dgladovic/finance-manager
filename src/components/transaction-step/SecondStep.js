import { useState, useRef, useEffect } from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Autocomplete } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


// Replace this with your API fetch logic for categories and custom labels
const fetchCategories = () => Promise.resolve([]);
const fetchCustomLabels = () => Promise.resolve([]);

const StartStep = ({ setTransactionContent, error, persistentContent }) => {

  const today = new Date();

  const handleDateChange = (date) => {
    const formDate = new Date(date.$d);
    const day = formDate.getDate();
    const month = formDate.getMonth() + 1;
    const year = formDate.getFullYear();
    setDate(`${year}-${month}-${day}`);

    setForm((prevFormData) => ({
      ...prevFormData,
      date: `${year}-${month}-${day}`
    }));

    return `${year}-${month}-${day}`;
  };

  const [categoryForm, setFormCategory] = useState([]);
  const [subCategoryForm, setFormSubcategory] = useState([]);
  const [amount, setAmount] = useState([]);
  const [customLabels, setCustomLabels] = useState([]);
  const [date, setDate] = useState('');

  const formData = {
    amount: [],
    category: '',
    date: '',
    // label: ''
  }

  const [form, setForm] = useState({
    amount: [],
    category: '',
    subcategory: '',
    date: ''
  });

  useEffect(() => {
    const modif = {
      ...persistentContent
    }
    if(modif.amount || modif.category || modif.date){
      setForm(persistentContent);
    }
  }, []);

  useEffect(() => {
    if(form.category === ''){
      setSelectedSubcategory('aa','');
      console.log('amoro-2')
    }
    setTransactionContent(form);
    console.log(form, 'amoro');
  }, [form]);

  const dateRef = useRef();
  const amountRef = useRef();
  const formRef = useRef();

  // podaci za autocomplete

  const categories = [
    { id: '100', name: 'Food' },
    { id: '200', name: 'Transportation' },
    { id: '300', name: 'Housing' }
  ];

  const subcategories = [
    { id: '101', name: 'Fruits', parentId: '100' },
    { id: '102', name: 'Vegetables', parentId: '100' },
    { id: '103', name: 'Grains', parentId: '100' },
    { id: '201', name: 'Car', parentId: '200' },
    { id: '202', name: 'Bus', parentId: '200' },
    { id: '203', name: 'Bike', parentId: '200' },
    { id: '301', name: 'Apartment', parentId: '300' },
    { id: '302', name: 'House', parentId: '300' },
    { id: '303', name: 'Condo', parentId: '300' }
  ];

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [filteredSubcategory, setFilteredSubcategory] = useState('');

  const handleCategoryChange = (event, newValue) => {
    if(!newValue){
      setForm((prevFormData) => ({
        ...prevFormData,
        subcategory: ''
      }));
    }
    getfilteredSubcategories(newValue);
    setSelectedCategory(() => (newValue));
    setForm((prevFormData) => ({
      ...prevFormData,
      category: newValue ? newValue.id : ''
    }));
    setSelectedSubcategory('');
  };

  const handleSubcategoryChange = (event, newValue) => {
    setSelectedSubcategory(() => (newValue));
    setForm((prevFormData) => ({
      ...prevFormData,
      subcategory: newValue ? newValue.id : ''
    }));
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setForm((prevFormData) => ({
      ...prevFormData,
      amount: value
    }));
  }

  const getfilteredSubcategories = (category) => {
    if(!category){
      return setFilteredSubcategory('');
    }
    return setFilteredSubcategory(subcategories.filter(subcategory => subcategory.parentId === category.id));
  }

  return (
    <div>
      <form id='myForm'>
        <TextField
          ref={amountRef}
          label="Amount"
          fullWidth
          variant="outlined"
          // onChange={(e) => {
          //   setAmount(e.target.value);
          //   const obj = {...formData, amount: e.target.value}
          //   setForm(obj);
          //   handleData(obj);
          // }}
          onChange={handleAmountChange}
          margin="normal"
        />

        <FormControl fullWidth variant="outlined" margin="normal">
          <Autocomplete
            options={categories}
            getOptionLabel={(category) => category.name !== undefined ? category.name : ''}
            value={selectedCategory}
            // onChange={(event,value)=>{
            //   console.log(value,'opa2san')
            //   getfilteredSubcategories(value);
            //   handleCategoryChange(event,value);
            //   setFormCategory(value);
            //   const obj = {...formData, category: value.id}
            //   setForm(obj);
            //   handleData(obj);
            // }}
            onChange={handleCategoryChange}
            renderInput={(params) => <TextField {...params} label="Category" variant="outlined" />}
          />
        </FormControl>
        {selectedCategory && (
          <FormControl fullWidth variant="outlined" margin="normal" style={{ marginBottom: '12px' }}>
            <Autocomplete
              options={filteredSubcategory}
              getOptionLabel={(subcategory) => subcategory.name !== undefined ? subcategory.name : ''}
              value={selectedSubcategory}
              // onChange={(event,value)=>{
              //   console.log(value,'opa3san')
              //   handleSubcategoryChange(event,value);
              //   setFormCategory(value);
              //   const obj = {...formData, category: value.id}
              //   setForm(obj);
              //   handleData(obj);
              // }}
              onChange={handleSubcategoryChange}
              renderInput={(params) => <TextField {...params} label="Subcategory" variant="outlined" />}
            />
          </FormControl>
        )}

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            sx={{marginTop:'15px', marginBottom:'6px'}}
            name="date_of_birth"
            label="Date of Birth"
            ref={dateRef}
            onFocus={() => dateRef.current.focus()}
            onChange={(e) => handleDateChange(e)}
            // onChange={(e) => {
            //   const tex = handleDateChange(e);
            //   const obj = {...formData, date: tex}
            //   setForm(obj);
            //   handleData(obj);
            // }}
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