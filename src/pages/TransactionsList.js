import { Helmet } from 'react-helmet-async';
import { useState, useEffect, useContext } from 'react';
// @mui
import { Grid, Button, Container, Stack, Typography, List, ListItem } from '@mui/material';
// components
import axios from 'axios';
import StandardTransaction from '../components/StandardTransaction';
import AuthContext, { AuthProvider, useAuth } from '../context/AuthProvider';
import Receipt from '../components/receipt/receipt';
// mock

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'date', label: 'Date' },
  { value: 'amount', label: 'Amount' }
];

// ----------------------------------------------------------------------

const liveUrl = process.env.REACT_APP_BACKEND_URL;

export default function TransactionsList() {

  const { auth } = useAuth();

  const [contMeta, setContMeta] = useState({id: '',name:'Kat1'});
  const [contMetaSub, setContMetaSub] = useState({id:'',name:'SubKat1'});

  const [totalAmount, setTotalAmount] = useState([]);
  const [transactionsList, setTransactionsList] = useState([]);

  const userId = auth.id;
  const url = `${liveUrl}/receipts/totalpurchases/${userId}`;
  const allReceiptsUrl = `${liveUrl}/transactions?userId=${userId}`

  useEffect(() => {
    if(auth.id){
    console.log(auth);
    console.log(auth.id);
    // Define the function to fetch data
    const getAllTransactions = async () => {
      try {
        const response = await axios.get(allReceiptsUrl);
        console.log(response,'TEST2!');
        setTransactionsList(response.data); // Update the state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the fetch function when the component is mounted
    getAllTransactions();

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
          <Typography variant="h4" gutterBottom>
            <span>All your saved transactions are here</span>
          </Typography>
          
          {/* <BlogPostsSort options={SORT_OPTIONS} /> */}

        {/* <Stack mb={5} spacing={{ xs: 1, sm: 1 }} direction="row" useFlexGap flexWrap="wrap">
        { RECEIPTS.map( (e,i)  => (<Receipt amo={e} key={i}/>))
        }
        </Stack> */}

      </Container>

      <List style={{ width:'100%', display: 'flex', flexDirection: 'column', overflowX: 'auto', alignItems:'center' }}>
        {transactionsList.map((e, i) => (
          <ListItem key={i} style={{padding:'4px', width:'90%', maxWidth:'800px'}}>
            <StandardTransaction content={e} contMeta={contMeta} contMetaSub={contMetaSub} />
          </ListItem>
        ))}
      </List>



    </>
  );
}
