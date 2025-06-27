import React, { useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import RegisterAdminTab from "./RegisterAdminTab";
import RegisterTenantTab from "./RegisterTenantTab";
import { Height } from '@mui/icons-material';

const RegisterPage = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{height: '10px'}}>
                <Tabs 
                    value={activeTab} 
                    onChange={handleTabChange}
                    centered
                    indicatorColor="primary"
                >
                    <Tab label="Register Admin" />
                    <Tab label="Register Tenant" />
                </Tabs>
            </Box>
            
            <Box sx={{ mt: 2 }}>
                {activeTab === 0 && <RegisterAdminTab />}
                {activeTab === 1 && <RegisterTenantTab />}
            </Box>
        </Box>
    );
};

export default RegisterPage;