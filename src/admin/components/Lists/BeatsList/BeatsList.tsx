import {
  BooleanField,
  Datagrid,
  List,
  NumberField,
  TextField,
} from 'react-admin';

const BeatsList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="type" />
      <NumberField source="price" />
      <NumberField source="bpm" />
      <TextField source="date" />
      <TextField source="time" />
      <TextField source="chord" />
      <TextField source="musician.name" />
      <BooleanField source="featured" />
    </Datagrid>
  </List>
);

export default BeatsList;
