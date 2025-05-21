import React from 'react';
import AppLayout from '../components/AppLayout';
import TableDisplayer from '../components/table/TableDisplayer';
import { Handshake as HandshakeIcon } from '@mui/icons-material';
import { Stack } from '@mui/material';

const initialObjectState = {
  madeBy: '',
  madeTo: '',
  notes: '',
  updatedAt: ''
};
const DealsPage = () => {
  return (
    <AppLayout>
      <Stack spacing={2}>
        <TableDisplayer
          tableName='Deals'
          icon={<HandshakeIcon />}
          object={initialObjectState}
          forEndpoint={"DEALS_TENANT"}
          addEndpoint={'DEAL_ADD'}
          updateEndpoint={'DEAL_UPDATE'}
          deleteEndpoint={'DEAL_DELETE'} //too add soon
        />
      </Stack>
    </AppLayout>
  );
};

export default DealsPage;