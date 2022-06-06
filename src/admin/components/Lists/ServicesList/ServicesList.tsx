import {
  Datagrid, List, NumberField, TextField,
} from 'react-admin';

function ServicesList() {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="type" />
        <TextField source="title" />
        <NumberField source="price" />
        <TextField source="description" />
      </Datagrid>
    </List>
  );
}

export default ServicesList;
