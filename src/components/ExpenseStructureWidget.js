import React from 'react';
import PropTypes from 'prop-types';
import { Box, Card, Typography  } from '@mui/material';
import ReactApexChart from 'react-apexcharts';
import CurrentSavingsWidget from './CurrentSavingsWidget';

export default function ExpenseStructureWidget({ total, sx, color = 'primary', ...other }) {
  const chartOptions = {
    labels: ['Investments', 'Savings', 'Others'],
    colors: ['#0088FE', '#00C49F', '#FFBB28'],
    legend: {
        position: 'bottom', // Show the legend at the bottom
      },
  };

  const chartSeries = [total * 0.6, total * 0.3, total * 0.1]; // Example distribution

  return (
<>
<Card
      sx={{
        py: 5,
        boxShadow: 0,
        textAlign: 'center',
        color: (theme) => theme.palette[color].darker,
        bgcolor: (theme) => theme.palette[color].lighter,
        ...sx,
      }}
      {...other}
    >
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Expense Structure
      </Typography>
      <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <ReactApexChart
          options={chartOptions}
          series={chartSeries}
          type="donut"
          width={300}
          height={300}
        />
      </Box>
      {/* <Typography variant="h3">{total}</Typography> */}


      
      </Card>
</>
  );
}
