import {
 Datagrid, List, NumberField, TextField 
} from 'react-admin';

function LicensesList() {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <NumberField source="price" />
        <TextField source="contractValues.copies" />
      </Datagrid>
    </List>
  );
}

export default LicensesList;
