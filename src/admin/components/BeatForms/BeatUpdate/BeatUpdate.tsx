import {
  SimpleForm,
  TextInput,
  Edit,
  AutocompleteArrayInput,
  ReferenceInput,
  FileInput,
  DateInput,
  BooleanInput,
} from 'react-admin';

const BeatUpdate = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="chord" />
      <TextInput source="type" />
      <ReferenceInput label="Tag" source="tags" reference="tags">
        <AutocompleteArrayInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput label="Musician" source="musicians" reference="musicians">
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
  </Edit>
);

export default BeatUpdate;
