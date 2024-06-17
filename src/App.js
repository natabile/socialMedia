import { Box, Stack } from "@mui/material";
import Feed from "./componet/feed";
import Rightbar from "./componet/rightbar";
import Sidebar from "./componet/sidebar";
import Navbar from "./componet/navbar";
import Addd from "./componet/Add";

//import Container from "@mui/material/Container"

function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">

      <Sidebar />
      <Feed />
      <Rightbar />
      
      </Stack>
      <Addd/>
    </Box>

    
  );
}

export default App;
