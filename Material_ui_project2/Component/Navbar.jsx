import { AppBar, Box, IconButton, Toolbar,Button, Avatar, Badge } from '@mui/material'
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import MailIcon from '@mui/icons-material/Mail';
import AddAlertIcon from '@mui/icons-material/AddAlert';
const Navbar = () => {
  return (
    <>
    
     <Box>
         <AppBar sx={{position:'fixed'}}>
             <Toolbar>
                 <IconButton>
                     
                 </IconButton>
                 <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
                 <Button variant='error' color='action'   > <AddAlertIcon/></Button>
                 <Badge badgeContent={4} color="error" sx={{marginRight:2,height:23}}>
  <MailIcon color="action" />
</Badge>
                 <Avatar src='https://c.saavncdn.com/343/Voicenotes-English-2018-20190607043050-500x500.jpg'/>
             </Toolbar>
         </AppBar>
     </Box>
    </>
  )
}

export default Navbar