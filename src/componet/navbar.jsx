import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography,  styled } from '@mui/material'
import React, { useState } from 'react'
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
const Styletoolbar=styled(Toolbar)({
  display:'flex',  justifyContent:'space-between',

})
const Searchbar=styled('div')(({theme}) =>({
  backgroundColor:'white',
  padding:"0 10px ",
  marginLeft:"10px",
   borderRadius: theme.shape.borderRadius,
  width:'35%',
  display:'flex',
  justifyContent:'center'
}))
const Icons=styled(Box )(({theme}) =>({
  display:"none",
  alignItems:'center',
  gap:'30px',
  
  [theme.breakpoints.up("sm")]:{
  display:'flex',
  
  }
 
}))
const Userbox=styled(Box)(({theme})=>({
display:"flex",
alignItems:'center',
gap:'20px',

[theme.breakpoints.up("sm")]:{
display:'none'
}
}))

const Navbar =()=>{
  const [open, setopen]=useState(false)
 return (
    <AppBar position='sticky' bgcolor={'black'}>
      <Styletoolbar>
        <Typography variant="h6" sx={{display:{xs:"none",sm:'block'}}}>
           natabil
        </Typography>
       <AllInclusiveIcon sx={{display:{xs:"block",sm:'none'}}}/>
       <Searchbar><InputBase placeholder="what's on mind..." />
         </Searchbar>
        <Icons>
       <Badge badgeContent={6} color='error'>
        <MailIcon></MailIcon>
       </Badge>
       <Badge badgeContent={5} color='error'>
        < NotificationsIcon/>
       </Badge>
       <Badge badgeContent={4} color='error'>
        <Avatar sx={{display:'flex', alignItems:'center',height:'25px',width:'25px',bgcolor:'yellow', cursor:'pointer'}}
         onClick={
          (e)=>setopen(true)
         }></Avatar>
       </Badge>
       </Icons>
       <Userbox>
       <Badge badgeContent={4} color='error'>
        <Avatar sx={{display:'flex', alignItems:'center',height:'25px',width:'25px', cursor:'pointer'}}
        onClick={(e)=>setopen(true)
        }
        ></Avatar>
       </Badge>
       <Typography variant='span'>natabi</Typography>
       </Userbox >
      </Styletoolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=>setopen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Avatar sx={{bgcolor:"red", m:'5px'}}>N</Avatar>
        <MenuItem component='a' href='https://natabile.github.io/ecommerce/'>Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem component="a" href='https://github.com/natabile'> Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}
export default Navbar
