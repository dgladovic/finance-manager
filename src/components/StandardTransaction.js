import React, { useState, useEffect } from 'react';
import { FormControl, FormControlLabel, Checkbox, RadioGroup, Select, MenuItem, Card, CardContent, CardHeader    } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import {CalendarMonthRounded, PlusOne }from '@mui/icons-material'

const StandardTransaction = ({ template, content, contMeta, contMetaSub}) => {

    const defaultTemp = { name: 'Template 3' };

    const fontColor = 'black';
    const bckCol = 'white'

    const [selectedTemplate, setSelectedTemplate] = useState('');
    const [abba, setAbba] = useState('');

    useEffect(()=>{
    },[])

    return (<>

        <Card variant="outlined" sx={{ width:'100%', backgroundColor: bckCol, color: fontColor, marginTop: 2, border: 'solid 4px #00AF78' }}>
            <CardHeader title={
                <div style={{display:'flex', justifyContent:'flex-end'}}>
                    <span style={{}}>{contMeta.name ?? '------'}</span>
                </div>
            }
                avatar={
                <Avatar sx={{width: 56, height: 56}}>
                    <PlusOne />
                </Avatar>
                }
                subheader={
                    <div style={{display:'flex', justifyContent:'flex-end'}}>
                        <span style={{color: fontColor}}>{contMetaSub.name ?? '---'}</span>
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
                        <span >{content.date}</span>
                    </div>
                    <div style={{ justifyContent:'space-between', display:'flex'}}>
                        <span style={{ textAlign:'end'}}>Label:</span>
                        <span style={{ textAlign:'end'}}>---</span>
                    </div>
                    <div style={{ justifyContent:'space-between', marginTop:'14px', display:'flex'}}>
                        <span style={{ textAlign:'end', fontWeight:'bold'}}>Amount:</span>
                        <span style={{ textAlign:'end', fontWeight:'bold'}}>{content.amount}</span>
                    </div>
            </CardContent>
        </Card>
    </>
    );
};

export default StandardTransaction;
