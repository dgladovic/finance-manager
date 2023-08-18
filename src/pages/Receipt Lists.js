import { Helmet } from 'react-helmet-async';
import { useState, useEffect, useContext } from 'react';
// @mui
import { Grid, Button, Container, Stack, Typography, List, ListItem } from '@mui/material';
// components
import axios from 'axios';
import AuthContext, { AuthProvider, useAuth } from '../context/AuthProvider';
import Receipt from '../components/receipt/receipt';
import Iconify from '../components/iconify';
import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../sections/@dashboard/blog';
// mock
import RECEIPTS from '../_mock/receipts';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'date', label: 'Date' },
  { value: 'amount', label: 'Amount' }
];

// ----------------------------------------------------------------------

const liveUrl = process.env.REACT_APP_BACKEND_URL;

export default function ReceiptsList() {

  const { auth } = useAuth();

  const [totalAmount, setTotalAmount] = useState([]);
  const [receiptsList, setReceiptsList] = useState([]);

  const userId = auth.id;
  const url = `${liveUrl}/receipts/totalpurchases/${userId}`;
  const allReceiptsUrl = `${liveUrl}/receipts/${userId}`

  useEffect(() => {
    if(auth.id){
    console.log(auth);
    console.log(auth.id);
    // Define the function to fetch data
    const getTotalAmount = async () => {
      try {
        const response = await axios.get(url);
        setTotalAmount(response.data.totalAmount); // Update the state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const getAllReceipts = async () => {
      try {
        const response = await axios.get(allReceiptsUrl);
        console.log(response,'TEST2!');
        setReceiptsList(response.data); // Update the state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetch function when the component is mounted
    getTotalAmount();
    getAllReceipts();

    // You can also return a cleanup function here if needed
    // For example, to cancel any pending requests or clean up resources
    // return () => {
    //   cleanupLogic();
    // };
    }
  }, [auth]); // 

  return (
    <>
      {/* <Helmet>
        <title> Dashboard: Blog | Minimal UI </title>
      </Helmet> */}
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            <span>TOTAL AMOUNT SCANNED: {totalAmount} RSD</span>
            <p>Scroll through all of your scanned receipts by swiping left or right</p>
          </Typography>
          
          {/* <BlogPostsSort options={SORT_OPTIONS} /> */}

        </Stack>
        {/* <Stack mb={5} spacing={{ xs: 1, sm: 1 }} direction="row" useFlexGap flexWrap="wrap">
        { RECEIPTS.map( (e,i)  => (<Receipt amo={e} key={i}/>))
        }
        </Stack> */}

      </Container>

      <List style={{ display: 'flex', flexDirection: 'row', overflowX: 'auto', alignItems:'flex-start'}}>
        { receiptsList.map( (e,i)  => (
        <ListItem>
          <Receipt amo={e} key={i}/>
        </ListItem>
        ))
        }
        </List>


    </>
  );
}
