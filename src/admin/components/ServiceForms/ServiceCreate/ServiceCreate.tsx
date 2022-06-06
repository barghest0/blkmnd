import {
  SimpleForm,
  TextInput,
  Create,
  FileInput,
  NumberInput,
} from 'react-admin';

function ServiceCreate() {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput source="type" />
        <TextInput source="description" />
        <NumberInput source="price" />
        <FileInput source="image" />
      </SimpleForm>
    </Create>
  );
}

export default ServiceCreate;
