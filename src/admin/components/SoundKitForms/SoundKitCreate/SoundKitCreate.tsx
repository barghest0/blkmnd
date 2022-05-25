import {
  SimpleForm,
  TextInput,
  Create,
  FileInput,
  NumberInput,
} from 'react-admin';

const SoundKitCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput source="type" />
        <TextInput source="description" />
        <NumberInput source="price" />
        <FileInput source="image" />
        <FileInput source="track" />
      </SimpleForm>
    </Create>
  );
};

export default SoundKitCreate;
