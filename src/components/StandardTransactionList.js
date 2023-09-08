import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { FormControl, FormControlLabel, Checkbox, RadioGroup, Select, MenuItem, Card, CardContent, CardHeader    } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import {CalendarMonthRounded, PlusOne }from '@mui/icons-material';
import categories from '../_mock/categories';
import subcategories from '../_mock/subcategories';
import Icon from './color-utils/Icon';
import Iconify from './iconify/Iconify';

const StandardTransactionList = ({ template, content, contMeta, contMetaSub}) => {

    const defaultTemp = { name: 'Template 3' };

    const fontColor = 'black';
    const bckCol = 'white'

    const [selectedTemplate, setSelectedTemplate] = useState('');
    const [abba, setAbba] = useState('');

    const [categoryMeta, setCategoryMeta] = useState({id: "",name: "",color: "#f44336",iconName: "material-symbols:restaurant"});
    const [subcategoryMeta, setSubCategoryMeta] = useState({id: "",name: "",parent_id:""});


    useEffect(()=>{
        const displayCategory = categories.find((cat) => cat.id === content.category);
        if(displayCategory){
            setCategoryMeta(()=>displayCategory);
        }
    },[content.category])

    useEffect(()=>{
        const displaySubCategory = subcategories.find((cat) => cat.id === content.subcategory);
        if(displaySubCategory){
            setSubCategoryMeta(()=>displaySubCategory);
        }
    },[content.subcategory])

    return (<>

        <Card variant="outlined" sx={{ width:'100%', backgroundColor: bckCol, color: fontColor, border: 'solid 4px #afafaf' }}>
            {/* <CardHeader title={
                <div style={{display:'flex', justifyContent:'flex-end'}}>
                    <span style={{}}>{categoryMeta.name ?? '------'}</span>
                </div>
            }
                avatar={
                <Avatar sx={{width: 56, height: 56}}>
                    <div style={{backgroundColor: categoryMeta.color, width:'56px', height:'56px', justifyContent:'center', display:'flex', alignItems:'center'}}>
                        <Iconify  icon={categoryMeta.iconName} width={32}/>
                    </div>
                </Avatar>
                }
                subheader={
                    <div style={{display:'flex', justifyContent:'flex-end'}}>
                        <span style={{color: fontColor}}>{subcategoryMeta.name ?? '---'}</span>
                    </div>
                }
                sx={{padding: 3}}
                style={{paddingBottom:'0px'}}
        /> */}
            <CardContent 
                sx={{padding: 1}}
                style={{paddingBottom:'8px'}}
            >
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
                    <span >{content.date}</span>
                    <Avatar sx={{ width: 28, height: 28 }} style={{display: 'inline-block'}}>
                        <div style={{ backgroundColor: categoryMeta.color, width: '28px', height: '28px', justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
                            <Iconify icon={categoryMeta.iconName} width={22} />
                        </div>
                    </Avatar>
                    {/* <div style={{display:'flex', alignItems:'center',justifyContent:'space-between'}}> */}
                    {/* <span >Date:</span> */}
                    {/* </div> */}
                    {/* <div style={{ justifyContent:'space-between', display:'flex'}}> */}
                    {/* <span style={{ textAlign: 'end' }}>Label:</span> */}
                    <span style={{ textAlign: 'end' }}>---</span>
                    {/* </div> */}
                    {/* <div style={{ justifyContent:'space-between', marginTop:'14px', display:'flex'}}> */}
                    {/* <span style={{ textAlign: 'end', fontWeight: 'bold' }}>Amount:</span> */}
                    <span style={{ textAlign: 'end', fontWeight: 'bold' }}>{content.amount}</span>
                    {/* </div> */}
                </div>
            </CardContent>
        </Card>
    </>
    );
};

export default StandardTransactionList;
