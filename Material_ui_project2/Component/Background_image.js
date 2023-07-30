import { Box, Grid } from '@mui/material';
import React from 'react';
import Navbar from './Navbar';
import '../Style/MypostStyle.css';
import Feed from './Feed';
import LeftDrawer from './LeftDrawer';
// Define a new component called Item
import '../Style/MypostStyle.css';
import RightDrawer from './RightDrawer';
const Item = ({ children }) => {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', padding: '1rem', textAlign: 'center' }}>
      {children}
    </Box>
  );
};

const Background_image = () => {
  return (
    <>
      <div className='navbar-item-mui'>
         <Navbar/>
      </div>
      <div className='navbar-bottom-nav'>
        <Grid container spacing={3}>
          <Grid item xs>
            <Item className='customdrawer'>
              <LeftDrawer/>

            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
         <Feed/>
         <Feed/>
         <Feed/>
         <Feed/>


            </Item>
          </Grid>
          <Grid item xs>
            <Item>
             <RightDrawer/>
            </Item>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Background_image;
