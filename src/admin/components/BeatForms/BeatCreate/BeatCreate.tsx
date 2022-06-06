import {
  SimpleForm,
  TextInput,
  Create,
  AutocompleteArrayInput,
  ReferenceInput,
  DateInput,
  FileInput,
  BooleanInput,
} from 'react-admin';

function BeatCreate() {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput source="chord" />
        <TextInput source="type" />
        <ReferenceInput label="Tag" source="tags" reference="tags">
          <AutocompleteArrayInput optionText="name" />
        </ReferenceInput>
        <ReferenceInput
          label="Musician"
          source="musicians"
          reference="musicians"
        >
          <AutocompleteArrayInput optionText="name" />
        </ReferenceInput>
        <BooleanInput source="featured" />
        <ReferenceInput label="Musician" source="licenses" reference="licenses">
          <AutocompleteArrayInput optionText="name" />
        </ReferenceInput>
        <DateInput source="date" />
        <TextInput source="time" />
        <FileInput source="image" />
        <FileInput source="track" />
        <FileInput source="excerpt" />
      </SimpleForm>
    </Create>
  );
}

export default BeatCreate;
