import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
// @mui
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
// components
import axios from 'axios';

import ReceiptBar from '../components/receipt/receiptBar';
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


export default function ReceiptsList() {

  const [totalAmount, setTotalAmount] = useState([]);
  const [receiptsList, setReceiptsList] = useState([]);

  const url = 'http://localhost:4800/receipt/totalpurchases'
  const allReceiptsUrl = 'http://localhost:4800/receipts/1001'
  const userId = 1001;


  useEffect(() => {
    // Define the function to fetch data
    const getTotalAmount = async () => {
      try {
        const response = await axios.get(url);
        setTotalAmount(response.data.totalPurchases); // Update the state with the fetched data
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
  }, []); // 

  return (
    <>
      <Helmet>
        <title> Dashboard: Blog | Minimal UI </title>
      </Helmet>



      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Receipt List
            <span>TOTAL AMOUNT {totalAmount}</span>
          </Typography>
          
          <BlogPostsSort options={SORT_OPTIONS} />

        </Stack>
        <Stack mb={5} spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
        { receiptsList.map( (e,i)  => {
      return (<ReceiptBar amo={e} key={i}/>)
        
        })
        }
        </Stack>

      </Container>


    </>
  );
}
