import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'

import React from 'react'

const Rightbar = () => {
  return (
    <Box flex={3} p={3}sx={{display:{xs:'none',sm:'block'}}}>
      <Box position={'fixed'} width={300}> 
        <Typography variant='h6'margin={3} >online
      Freind</Typography>
  <AvatarGroup  max={6}>
  <Avatar alt="Remy Sharp" src="mypro\dell-xps-15-2020-11.jpg" />
  <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
  <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />
  <Avatar alt="Remy Sharp" src="mypro\dell-xps-15-2020-11.jpg" />
  <Avatar alt="Remy Sharp" src="mypro\dell-xps-15-2020-11.jpg" />
  <Avatar alt="Remy Sharp" src="mypro\dell-xps-15-2020-11.jpg" />
  <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
  <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />
  <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/4.jpg" />
  <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
</AvatarGroup>
<Typography>recent postes</Typography>
<ImageList  cols={3} rowHeight={100} gap={10} >
  <ImageListItem >
    <img src='https://images.unsplash.com/photo-1718041705221-0a6a8735c278?w=500&auto=format&fit=crop&q=
    60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D'
    alt='' />
  </ImageListItem>
  <ImageListItem >
    <img src='https://images.unsplash.com/photo-1718041705221-0a6a8735c278?w=500&auto=format&fit=crop&q=60&ixlib
    =rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D'
    alt='' />
  </ImageListItem>
  <ImageListItem>
    <img  alt='' src ='https://images.unsplash.com/photo-1718095737567-4e4e5ae276b7?w=500&aut
    o=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8'
    />
  </ImageListItem>
  <ImageListItem>
    <img src='https://images.unsplash.com/photo-1608725131946-c73a151f2f8a?q=
    80&w=928&auto=format&fit= crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
  </ImageListItem>
  <ImageListItem>
    <img src='https://plus.unsplash.com/premium_photo-1684379149861-27b6bbe04400?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid
    =M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'alt='' />
  </ImageListItem>
</ImageList>
<Typography>recent chats</Typography>
<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
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
          <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
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
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
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
        </Box>

    </Box>
  )
}

export default Rightbar
