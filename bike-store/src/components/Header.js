import React, { useState } from 'react'
import {AppBar, Tab, Tabs, Toolbar, Typography} from '@mui/material';
import ElectricBikeIcon from '@mui/icons-material/ElectricBike';
import {NavLink} from 'react-router-dom';

const Header = () => {
    const [value, setValue] = useState()
  return ( 
  <div>
    <AppBar sx={{backgroundColor: '#232F3D'}}position='sticky'>
        <Toolbar>
        <Typography>
            <ElectricBikeIcon/>
        </Typography>
        <Tabs sx={{ml: 'auto'}} textColor='inherit' indicatorColor="secondary" value={value} onChange={(e,val) => setValue(val)}>
            <Tab LinkComponent={NavLink} to="/add" label="Add bikes" />
            <Tab LinkComponent={NavLink} to="/bikes" label="Bike Products"/>
            <Tab LinkComponent={NavLink} to="/salespeople" label="Salespeople"/>
            <Tab LinkComponent={NavLink} to="/customers" label="Customers"/>
        </Tabs>
        </Toolbar>
    </AppBar>
  </div>
  );
};

export default Header;