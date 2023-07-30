import { Avatar, AvatarGroup, ImageList, ImageListItem, TextField } from '@mui/material'
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';
const RightDrawer = () => {
    const itemData = [
      
       
       
       
        {
          img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
          title: 'Fern',
        },
        {
          img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
          title: 'Mushrooms',
        },
       
       
      ];
  return (
  
    <>
     <div className='right-drawer'>
         <h6>Online Users  </h6>
     <AvatarGroup max={4}>
      <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpNzm87al2sfvzoqnkSY1nKMcuGS0gdG4xUDdJl3CqQn5i6KhtpR2tDYSJEubf-Q6-CEU&usqp=CAU" />
      <Avatar alt="Travis Howard" src="https://cdn.pixabay.com/photo/2022/12/14/12/13/boys-attitude-handsome-pose-images-7655304_640.jpg" />
      <Avatar alt="Cindy Baker" src="https://sohohindi.in/wp-content/uploads/2022/09/29-boy-dp-sohohindi.in_-251x300.jpg" />
      <Avatar alt="Agnes Walker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGQU4vX8YuI5aS8C1yPWTJThJnZzhxn_z5pA&usqp=CAU" />
      <Avatar alt="Trevor Henderson" src="https://i.pinimg.com/564x/9b/b7/b7/9bb7b761feafed3bb3e731c00a753929.jpg" />
    </AvatarGroup>
     <h4>
        Latest Photo
          </h4>
           <ImageList sx={{}}>
             <ImageListItem style={{display:'flex',justifyContent:'space-around'}}>
                 <img src='https://images.unsplash.com/photo-1522770179533-24471fcdba45'/>
                 
                 
             </ImageListItem>
             <ImageListItem style={{display:'flex',justifyContent:'space-around'}}>
                 <img src='https://images.unsplash.com/photo-1518756131217-31eb79b20e8f'/>
                 
                 
             </ImageListItem>
           </ImageList>
       
     </div>
     <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://www.imagesplatform.com/mohsin_site/uploads/2019_10_09/a9a98243b190f1ba.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://cdn4.sharechat.com/img_79175_2671f85f_1670854075660_sc.jpg?tenant=sc&referrer=pwa-sharechat-service&f=img_79175_2671f85f_1670854075660_sc.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuogI2a_Y8kfWx37xznPOuaLWBAHjq-UDCpLzKnD5ICYT72yCaX1knKJ8gs_vxTqycIdc&usqp=CAU" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
    
    </>
  )
}

export default RightDrawer