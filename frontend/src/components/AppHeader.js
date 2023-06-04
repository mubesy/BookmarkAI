import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import ButtonBase from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/bookmark_logo.png';
import Box from '@mui/material/Box';
import SearchBar from './SearchBar';


export default function AppHeader() {
  const navigate = useNavigate();

  return (
    <AppBar position="static" elevation="0" sx={{pt: 2, backgroundColor: "white"}}>
        <Toolbar sx={{backgroundColor: "white", justifyContent: 'space-between'}}>
            <Box sx={{display: 'flex', pt: 1, alignItems: 'center'}}>
                <Box onClick={() => navigate('/browse')} sx={{mr:3}}>
                    <img 
                        src={logo} 
                        alt="Split.it Logo" 
                        style={{
                            height: 60,
                            marginLeft: 5,
                            marginRight: 10,
                        }}
                    />
                </Box>
                <SearchBar height={60}/>
            </Box>
            
            <IconButton>
                <Avatar sx={{ width: 50, height: 50 }}/>
            </IconButton>

        </Toolbar>
    </AppBar>
  );
}
