"use client";
import { useState } from 'react';
import Image from "next/image";

// miui
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuList from '@mui/material/MenuList';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { LinearProgress } from '@mui/material';

export function Navbar() {
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenUserMenu = (event) => {
        console.log(event);
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="sticky" style={{
                    backgroundColor: '#2980B9',
                }}>
                    {/* <div style={{ height: '2px' }}>
                    {isLinearProgress && <LinearProgress color={'inherit'} />}
                </div> */}
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            {'Todo'}
                        </Typography>

                        {/* <Divider variant='middle' color='white' sx={{ mx: 2, borderBottomWidth: 5 }} orientation="vertical" flexItem /> */}

                        {/* <Button size='small' variant='contained' color="primary">Login</Button> */}

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title={'Shuvam'}>
                                <IconButton
                                    size='small'
                                    variant='contained'
                                    onClick={handleOpenUserMenu}
                                    sx={{ p: 0 }}>
                                    <Avatar
                                        // width={30}
                                        // height={30}
                                        alt="Remy Sharp"
                                        src={'/profile/profile.png'}
                                    />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px', width: 400 }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <MenuList dense={true}>
                                    <MenuItem disabled style={{ color: 'green' }}>
                                        <Typography variant="div" component="div">
                                            {'Shuvam'}
                                            <br />
                                            {'shuvam@gmail.com'}
                                        </Typography>
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem>
                                        <ListItemIcon>
                                            <Person2OutlinedIcon color='primary' fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText>My Profile</ListItemText>

                                    </MenuItem>

                                    {/* <Divider /> */}
                                    <MenuItem style={{ color: 'red' }}>
                                        <ListItemIcon color='inherit'>
                                            <LogoutOutlinedIcon color='error' fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText>Logout</ListItemText>
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}