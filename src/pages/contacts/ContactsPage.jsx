import React from 'react';
import AppLayout from '../components/AppLayout';
import TableDisplayer from '../components/table/TableDisplayer';
import { People as PeopleIcon } from '@mui/icons-material';
import { Stack } from '@mui/material';

const initialObjectState = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  company: '',
  position: '',
  notes: '',
};

const ContactsPage = () => (
  <AppLayout>
    <Stack spacing={2}>
      <TableDisplayer
        tableName="Contacts"
        icon={<PeopleIcon />}
        object={initialObjectState}
        forEndpoint="CONTACTS_TENANT"
        addEndpoint="CONTACT_ADD"
        updateEndpoint="CONTACT_UPDATE"
        deleteEndpoint="CONTACT_DELETE" //too add soon
      />
    </Stack>
  </AppLayout>
);

export default ContactsPage;