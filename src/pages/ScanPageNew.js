import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
import RecitExtractor from '../components/recit-extractor/RecitExtractor';
import ScanQRCard from '../components/ScanQRCard';
import AddTransactionCard from '../components/AddTransactionCard';
import AddTemplateCard from '../components/AddTemplateCard';
import ManualTransactionCard from '../components/ManualTransactionCard';

export default function ScanPageNew() {

  const [transactionView, setTransactionView] = useState(false);
  // const [templateView, setTemplateView] = useState(false);

 
  return (
      <>
        <Helmet>
          <title> Dashboard | Minimal UI </title>
        </Helmet>
  
        <Container maxWidth="xl">
          <Typography variant="h3" sx={{ mb: 5 }}>
            What would you like to do?
          </Typography>
  
          <Grid container spacing={2}>
          {
            transactionView ?
          <>
          <Grid item xs={12} sm={6} md={3}>
            <ScanQRCard/>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <ManualTransactionCard/>
          </Grid>
          </> :
          <>
            <Grid item xs={12} sm={6} md={3}>
              <AddTransactionCard onClick={()=>setTransactionView(true)}/>
            </Grid>
  
            <Grid item xs={12} sm={6} md={3}>
              <AddTemplateCard/>
            </Grid>
          </>
          } 
            {/* <Grid item xs={12} sm={6} md={3}>
              <ExpenseStructureWidget total={100.0}/>
            </Grid> */}
          </Grid>
        </Container>
      </>
    );
}
