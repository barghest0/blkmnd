import {
  SimpleForm,
  TextInput,
  Create,
  AutocompleteArrayInput,
  ReferenceInput,
} from 'react-admin';

const BeatCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput source="chord" />
        <TextInput source="image" />
        <TextInput source="track" />
        <ReferenceInput label="Post" source="tags" reference="tags">
          <AutocompleteArrayInput optionText="name" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

export default BeatCreate;
