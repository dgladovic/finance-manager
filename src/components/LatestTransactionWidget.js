import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import AppWidgetSummary from '../sections/@dashboard/app/AppWidgetSummary';

export default function LatestTransactionWidget({ total, sx, ...other }) {
  return (
    <AppWidgetSummary
      title="Latest Transaction Added"
      total={total}
      icon="ic:baseline-receipt"
      color="info"
      sx={sx}
      {...other}
    />
  );
}
