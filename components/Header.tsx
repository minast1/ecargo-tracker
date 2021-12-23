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
import { useRouter } from 'next/router'


interface HeaderProps {
    sections: ReadonlyArray<{
        title: string;
        url: string;
    }>

}

function Header(props: HeaderProps) {
    const { sections } = props; 
    const router = useRouter();
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
                    <Button variant="text" size="small" onClick={() => router.push(`${process.env.NEXT_PUBLIC_URL}/admin-area`)} sx={{pl: 1,pt:1}}>Register</Button>
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
               
          <Link
            color="inherit"
            noWrap
            key={index}
            variant="caption"
            href={section.url}
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
            
                ))}
                </Stack>
                
                <SearchIcon sx={{color: 'white', ml:30,}}/>
            </Toolbar>
        </React.Fragment>
    )
}

export default Header
