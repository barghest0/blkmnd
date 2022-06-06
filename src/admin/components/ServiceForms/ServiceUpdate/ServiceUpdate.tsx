import {
  SimpleForm,
  TextInput,
  Edit,
  FileInput,
  NumberInput,
} from 'react-admin';

function ServiceUpdate() {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput source="type" />
        <TextInput source="description" />
        <NumberInput source="price" />
        <FileInput source="image" />
      </SimpleForm>
    </Edit>
  );
}

export default ServiceUpdate;
