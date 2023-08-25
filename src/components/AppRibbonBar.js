import React from 'react';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import { Home, FormatListBulleted, Add, History, AccountCircle } from '@mui/icons-material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate } from 'react-router-dom';

const AppRibbonBar = () => {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const navigate = useNavigate();

    if (!isMobile) {
      return null; // Don't render the component on web view
    }
  
    return (
        <Box position="fixed" bottom={0} width="100%" paddingBottom={3} backgroundColor={'white'}>
          <BottomNavigation showLabels>
            <BottomNavigationAction label="Home" icon={<Home />} onClick={() => navigate('/dashboard')} />
            <BottomNavigationAction label="Receipts" icon={<FormatListBulleted />} onClick={() => navigate('/dashboard/receipts')} />
            <BottomNavigationAction label="Add" icon={<Add fontSize="large" />} onClick={() => navigate('/dashboard/scan')} />
            <BottomNavigationAction label="History" icon={<History />} />
            <BottomNavigationAction label="Account" icon={<AccountCircle />} />
          </BottomNavigation>
        </Box>
      );
  };

export default AppRibbonBar;
