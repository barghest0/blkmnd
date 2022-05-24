import {
  SimpleForm,
  TextInput,
  Edit,
  FileInput,
  NumberInput,
} from 'react-admin';

const SoundKitUpdate = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput source="type" />
        <TextInput source="description" />
        <NumberInput source="price" />
        <FileInput source="image" />
        <FileInput source="track" />
      </SimpleForm>
    </Edit>
  );
};

export default SoundKitUpdate;
