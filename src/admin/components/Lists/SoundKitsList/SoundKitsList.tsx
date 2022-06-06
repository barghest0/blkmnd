import {
 Datagrid, List, NumberField, TextField 
} from 'react-admin';

const SoundKitsList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="type" />
      <TextField source="title" />
      <TextField source="description" />
      <NumberField source="price" />
    </Datagrid>
  </List>
);

export default SoundKitsList;
