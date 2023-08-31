import React, { useState, useEffect } from 'react';
import { FormControl, FormControlLabel, Checkbox, RadioGroup, Select, MenuItem, Card, CardContent, Typography } from '@mui/material';
import StandardTransaction from '../StandardTransaction';

const ZeroStep = ({ templates, setTemplateContext }) => {

    const defaultTemp = 'Template 3';

    const [load,setLoad] = useState(true);
    const [isRecurring, setIsRecurring] = useState(false);
    const [selectedTemplate, setSelectedTemplate] = useState([]);

    useEffect(() => {
        if(!isRecurring){
            handleTemplateSelection(defaultTemp);
        }
    }, [isRecurring]);

    const handleTemplateSelection = (template) => {
        console.log(template,'kopmo');
        setTemplateContext(template);
    }

    return (<>
        <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', marginTop:'20px'}}>
            <Typography>Get ready to add a transaction!</Typography>
            {/* <FormControl>
            <Checkbox
                checked={isRecurring}
                onChange={(e) => setIsRecurring(e.target.checked)}
                color="primary"
            />
        </FormControl> */}
        </div>
        {/* {isRecurring && (
            <FormControl fullWidth variant="outlined" margin="normal">
                <Select
                    value={selectedTemplate}
                    onChange={(e) => {
                        setSelectedTemplate(e.target.value);
                        handleTemplateSelection(e.target.value)
                    }}
                    displayEmpty
                >
                    <MenuItem value="" disabled>
                        Select a Template
                    </MenuItem>
                    {templates.map((template) => (
                        <MenuItem key={template.id} value={template.name}>
                            {template.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        )} */}
    </>
    );
};

export default ZeroStep;
