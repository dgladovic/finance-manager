import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import AppWidgetSummary from '../sections/@dashboard/app/AppWidgetSummary';

export default function CashFlowWidget({ total, sx, ...other }) {
  return (
    <AppWidgetSummary
      title="Cash Flow"
      total={total}
      icon="bi:arrow-left-right"
      color="success"
      sx={sx}
      {...other}
    />
  );
}
