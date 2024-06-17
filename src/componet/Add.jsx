import { Avatar, Box, Fab, Modal, Stack, TextField, Tooltip, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { EmojiEmotions } from '@mui/icons-material';
import ImageIcon from '@mui/icons-material/Image';
const StyleModal=styled(Modal)({
display:'flex',
alignItems:'center',
justifyContent:'space-between',

}

)
const Userbox=styled(Box)({
  
  alignItems:'center',
  gap:'20px',
  marginBottom:'20px'
})

function Addd() {
  const[open,setopen]=useState(false)
  return (
    <>
      <Tooltip onClick={e=>setopen(true) } title="add" sx={{position:'fixed',bottom:20, marginLeft:'50%', }}>
      <Fab color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
</Tooltip>
<StyleModal
  open={open}
  onClose={e=>setopen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box  width={200} height={280}bgcolor={'white'}p={3}borderRadius={5}margin={6}>
    <Typography variant='h6' color='gray' textAlign={'center'}>create post</Typography>
    <Userbox>
      <Avatar src='https://images.unsplash.com/photo-1718039006696-b653fe660e3e?q
      =80&w=1917&auto=format&fit
      =crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' sx={{width:30,height:30}}>
    

      </Avatar>
      <Typography variant='span' fontWeight={500}> natnael hailu</Typography>
      <TextField sx={{width:'100'}} label="Standard" variant='standard' placeholder='caption'multilinerow={4}/>
     <Stack direction='row' gap={1} marginTop={3}>
     <EmojiEmotions/>
     <ImageIcon color='secondary'/>
     <EmojiEmotions/>
     <EmojiEmotions/>
     <EmojiEmotions/>
     

     </Stack>
    </Userbox>
  </Box>
</StyleModal>
    </>
  )
}

export default Addd
