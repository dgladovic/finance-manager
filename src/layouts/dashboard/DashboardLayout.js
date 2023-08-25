import { useState } from 'react';
import { Outlet } from 'react-router-dom';
// @mui
import { styled, useTheme } from '@mui/material/styles';
//
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from './header';
import Nav from './nav';
import AppRibbonBar from '../../components/AppRibbonBar';

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const StyledRoot = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden',
});

const Main = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

// ----------------------------------------------------------------------

export default function DashboardLayout() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <StyledRoot>
      {!isMobile && <Header onOpenNav={() => setOpen(true)} />}
      
      {!isMobile && <Nav openNav={open} onCloseNav={() => setOpen(false)} />}
      

      <Main>
        <Outlet />
      </Main>
      <AppRibbonBar/>
    </StyledRoot>
  );
}
