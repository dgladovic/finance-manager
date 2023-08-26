import { Helmet } from 'react-helmet-async';
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
import RecitExtractor from '../components/recit-extractor/RecitExtractor';
import ScanQRCard from '../components/ScanQRCard';
import AddTransactionCard from '../components/AddTransactionCard';
import AddTemplateCard from '../components/AddTemplateCard';

export default function ScanPageNew() {
 
  return (
      <>
        <Helmet>
          <title> Dashboard | Minimal UI </title>
        </Helmet>
  
        <Container maxWidth="xl">
          <Typography variant="h4" sx={{ mb: 5 }}>
            How would you like to register your transaction?
          </Typography>
  
          <Grid container spacing={3}>
  
          <Grid item xs={12} sm={6} md={3}>
              <ScanQRCard/>
            </Grid>
  
            <Grid item xs={12} sm={6} md={3}>
              <AddTransactionCard/>
            </Grid>
  
            <Grid item xs={12} sm={6} md={3}>
              <AddTemplateCard/>
            </Grid>
  
            {/* <Grid item xs={12} sm={6} md={3}>
              <ExpenseStructureWidget total={100.0}/>
            </Grid> */}
          </Grid>
        </Container>
      </>
    );
}
