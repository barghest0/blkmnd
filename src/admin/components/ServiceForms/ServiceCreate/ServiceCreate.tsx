import {
  SimpleForm,
  TextInput,
  Create,
  FileInput,
  NumberInput,
} from 'react-admin';

const ServiceCreate = () => {
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
};

export default ServiceCreate;
