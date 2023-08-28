import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Box, Card, Typography } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
// utils
// components
import Iconify from './iconify/Iconify';



export default function ManualTransactionCard({ total, sx, color = 'primary', ...other }) {

    const navigate = useNavigate();

    const StyledIcon = styled('div')(({ theme }) => ({
        margin: 'auto',
        marginTop:'-10px',
        display: 'flex',
        borderRadius: '50%',
        alignItems: 'center',
        width: theme.spacing(8),
        height: theme.spacing(8),
        justifyContent: 'center',
        marginBottom: theme.spacing(3),
    }));

    return (
        <>
            <Card
                sx={{
                    py: 5,
                    boxShadow: 0,
                    textAlign: 'center',
                    color: 'black',
                    bgcolor:'white',
                    border: 'solid 10px rgb(0,175,120)',
                    height:'250px',
                    ...sx,
                }}
                {...other}
                onClick={()=>navigate('/dashboard/addtransaction')}
            >
                <StyledIcon
                    sx={{
                        color: 'white',
                        backgroundImage: (theme) =>
                            `linear-gradient(135deg, ${alpha('#00AF78', 0.65)} 0%, ${alpha(
                                '#00AF78',
                                0.24
                            )} 100%)`,
                    }}
                >
                    <Iconify icon='bi:pencil-square' width={24} height={24} />
                </StyledIcon>

                <Typography variant="h3" color='#00AF78'>Fill data</Typography>

                <Typography variant="subtitle2" sx={{ opacity: 0.72, paddingX:'8px', color:'#00AF78'}}>
                    Add a transaction by filling data manualy with our guide.
                </Typography>

            </Card>
        </>
    );
}
