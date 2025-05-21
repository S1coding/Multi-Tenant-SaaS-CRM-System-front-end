import React from 'react';
import AppLayout from '../components/AppLayout';
import TableDisplayer from '../components/table/TableDisplayer';
import { Construction as ConstructionIcon} from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';
import RowUpdater from '../components/table/TableRowUpdater';
import { Stack } from "@mui/material";

  const initialObjectState = {
    title: '',
    taskProject: '',
    assignedTo: '',
    notes: '',
    dueDate: '',
    status: ''
  };


const TasksPage = () => {
  return (
    <AppLayout>
      <Stack spacing={2}>
        <TableDisplayer 
        tableName='Tasks' 
        icon={<ConstructionIcon />} 
        object={initialObjectState}
        forEndpoint={"TASKS_TENANT"}
        addEndpoint={'TASK_ADD'}
        updateEndpoint={'TASK_UPDATE'}
        deleteEndpoint={'TASK_DELETE'} //too add soon
        />
      </Stack>
    </AppLayout>
  );
};

export default TasksPage;