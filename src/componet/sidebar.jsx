import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'
import Home from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import HeadsetIcon from '@mui/icons-material/Headset';
import ModeNightIcon from '@mui/icons-material/ModeNight';

const Sidebar = () => {
  return (
    <Box  border='none' borderColor='lightgray' flex={3} p={3}  sx={{display:{xs:'none',sm:'inline-block'}}}>
      <Box position={'fixed'}>
    <List>
    <ListItem disablePadding>
      <ListItemButton component="a" href='https://mail.google.com/mail/u/0/#inbox'>
        <ListItemIcon>
      <Home/>
        </ListItemIcon>
        <ListItemText primary="home" />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton component="a" href='https://mail.google.com/mail/u/0/#inbox'>
        <ListItemIcon>
      <SettingsIcon/>
        </ListItemIcon>
        <ListItemText primary="Setting" />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton component="a" href='https://mail.google.com/mail/u/0/#inbox'>
        <ListItemIcon>
      <HeadsetIcon/>
        </ListItemIcon>
        <ListItemText primary="Headset" />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton component="a" href='https://mail.google.com/mail/u/0/#inbox'>
        <ListItemIcon>
      <ModeNightIcon/>
        </ListItemIcon>
        <Switch>
        </Switch>
        
      </ListItemButton>
    </ListItem>
    </List>
    </Box>
    </Box>
  )
}

export default Sidebar
