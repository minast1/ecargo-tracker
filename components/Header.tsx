import React from 'react'
import Toolbar from '@mui/material/Toolbar';
import { Box } from '@mui/system';
import  Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import Link from '@mui/material/Link';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import { useClientSideStore } from '../src/orderStore';
import LoginDialog from './LoginDialog';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import StyledMenu from './StyledMenu';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import  ListItemIcon  from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuList from '@mui/material/MenuList';


interface HeaderProps {
    sections: ReadonlyArray<{
        title: string;
        url: string;
        options: string[]
    }>

}

function Header(props: HeaderProps) {
    const { sections } = props; 
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const timerRef = React.useRef(null);
    // track with menu should be opened
    const [openIndex, setOpenIndex] = React.useState<number>(-1);

    const handleMenu = (event, index: number) =>  {
        setAnchorEl(event.currentTarget);
        setOpenIndex(index); // set current menu index to open
    };
    
    const handleMenuClose = (event) => {
         setAnchorEl(null);
};

    return (
        <React.Fragment>
            <Toolbar variant="dense" sx={{
                borderBottom: 1,
                borderColor: 'divider',
                borderWidth: '0.01px',
                //opacity: 0.7,
                backgroundColor: '#40c4ff'

            }}>
                <Box sx={{
                    display: 'flex',
                    ml: 'auto',
                    pr: 10,
                    alignItems: 'center',
                    width: 'fit-content',
                   // border: '1px solid black'
                }}>
                    <PersonOutlinedIcon fontSize="small" sx={{ color: 'white'}}/>
                    <Button
                        variant="text"
                        size="small"
                        sx={{ pr: 0, pt: 1 }}
                        onClick={() => useClientSideStore.setState({toggleLoginDialog: true})}
                    >Login</Button>
                    <LoginDialog/>
                    <Divider orientation="vertical" variant="middle" flexItem sx={{ backgroundColor: 'white'}}/>
                    <Button variant="text" size="small"  sx={{pl: 1,pt:1}}>Register</Button>
              </Box>
            </Toolbar>
             <Toolbar variant="dense" sx={{
                borderBottom: 1,
                borderColor: 'divider',
               // justifyContent: 'center',
                overflowX: 'auto',
                backgroundColor: '#00b8d4'
            }}
            component="nav"
            >
                <Box sx={{ mr: 30 }} />
                  <Stack
            direction="row"
             justifyContent="space-evenly"
                    divider={<Divider sx={{backgroundColor: 'white', height: 20, alignSelf:'center'}} variant="middle" orientation="vertical" flexItem />}
              spacing={1}
                >
                  
                {sections.map((section, index) => (
               <span  key={index}>
            <Link
            color="inherit"
            component="button"
            noWrap
            onMouseOver={(event) =>   handleMenu(event, index)}
             
            //onClick={(event) =>  handleMenu(event, index)}         
            variant="caption"
            //href={section.url}
                            sx={{
                                py: 1,
                                px: 3,
                                color: 'white',
                                textDecoration: 'none',
                                textTransform: 'uppercase',
                                fontWeight: 700
                            }}
          >
            {section.title}
                  </Link>
                        <StyledMenu
                        sx={{'&:hover': {cursor:'pointer'}}}
          // only render currently open menu
                          MenuListProps={{onMouseLeave: handleMenuClose}} 
             open={Boolean(anchorEl) && index === openIndex}
             onClose={handleMenuClose}
             anchorEl={anchorEl} 
          {...props}
        >
          <MenuList>                     
         { section.options.map((option, index) => (
             <MenuItem
                 key={index}
                 sx={{ '&:hover': {color:'red'}}}
                 onClick={handleMenuClose}
                 disableRipple>
                 <ListItemText>{option}</ListItemText>
                 <ListItemIcon>
                <ArrowForwardIosOutlinedIcon fontSize="small" sx={{ '&:hover': {color:'red'}}}/>
                 </ListItemIcon>
              
             </MenuItem>            
         ))}
         </MenuList>
         
        </StyledMenu>
               </span>         
                ))}
           
                </Stack>
                
                <SearchIcon sx={{color: 'white', ml:30,}}/>
            </Toolbar>
        </React.Fragment>
    )
}

export default Header
