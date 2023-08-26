import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Box, Card, Typography } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
// utils
// components
import Iconify from './iconify/Iconify';



export default function AddTransactionCard({ total, sx, color = 'primary', ...other }) {

    const navigate = useNavigate();

    const StyledIcon = styled('div')(({ theme }) => ({
        margin: 'auto',
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
                    color: 'white',
                    bgcolor: '#814dd6',
                    ...sx,
                }}
                {...other}
                onClick={()=>navigate('/dashboard/scanpage')}
            >
                <StyledIcon
                    sx={{
                        color: 'white',
                        backgroundImage: (theme) =>
                            `linear-gradient(135deg, ${alpha('#FFFFFF', 0.65)} 0%, ${alpha(
                                '#FFFFFF',
                                0.24
                            )} 100%)`,
                    }}
                >
                    <Iconify icon='bi:file-earmark-plus' width={24} height={24} />
                </StyledIcon>

                <Typography variant="h3">Create Template</Typography>

                <Typography variant="subtitle2" sx={{ opacity: 0.72, paddingX:'5px' }}>
                    Create a template for recurring transactions.
                </Typography>

            </Card>
        </>
    );
}
