import { Datagrid, List, NumberField, TextField } from 'react-admin';

const ServicesList = () => (
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

export default ServicesList;
