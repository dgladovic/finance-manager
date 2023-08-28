import React, { useState, useEffect } from 'react';
import { FormControl, FormControlLabel, Checkbox, RadioGroup, Select, MenuItem, Card, CardContent, CardHeader    } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import {CalendarMonthRounded, PlusOne }from '@mui/icons-material'

const StandardTransaction = ({ template }) => {

    const defaultTemp = { name: 'Template 3' };

    const [selectedTemplate, setSelectedTemplate] = useState('');

    return (<>

        <Card variant="outlined" sx={{ backgroundColor: '#4CAF50', color: 'white', marginTop: 2 }}>
            <CardHeader title={
                <div style={{display:'flex', justifyContent:'flex-end'}}>
                    <span style={{}}>Transportation</span>
                </div>
            }
                avatar={
                <Avatar sx={{width: 56, height: 56}}>
                    <PlusOne />
                </Avatar>
                }
                subheader={
                    <div style={{display:'flex', justifyContent:'flex-end'}}>
                        <span style={{color: 'white'}}>Bus pass</span>
                    </div>
                }
                sx={{padding: 3}}
                style={{paddingBottom:'0px'}}
        />
            <CardContent 
                sx={{padding: 3}}
                style={{paddingTop:'8px'}}
            >
                {/* {template} */}
                    <div style={{display:'flex', alignItems:'center',justifyContent:'space-between'}}>
                        <span >Date:</span>
                        <span >14-07-2023</span>
                    </div>
                    <div style={{ justifyContent:'space-between', display:'flex'}}>
                        <span style={{ textAlign:'end'}}>Label:</span>
                        <span style={{ textAlign:'end'}}>Vremenska (m)</span>
                    </div>
                    <div style={{ justifyContent:'space-between', marginTop:'14px', display:'flex'}}>
                        <span style={{ textAlign:'end', fontWeight:'bold'}}>Amount:</span>
                        <span style={{ textAlign:'end', fontWeight:'bold'}}>10,000.00 RSD</span>
                    </div>
            </CardContent>
        </Card>
    </>
    );
};

export default StandardTransaction;
