import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import AppWidgetSummary from '../sections/@dashboard/app/AppWidgetSummary';

export default function CurrentSavingsWidget({ total, sx, ...other }) {
  return (
    <AppWidgetSummary
      title="Current Savings"
      total={total}
      icon="ant-design:dollar-circle-filled"
      color="warning"
      sx={sx}
      {...other}
    />
  );
}
