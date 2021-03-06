import {
  SimpleForm,
  TextInput,
  Edit,
  FileInput,
  NumberInput,
  AutocompleteArrayInput,
  ReferenceInput,
} from 'react-admin';

const LicenseUpdate = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <NumberInput source="price" />
      <TextInput source="description" />
      <ReferenceInput label="FileType" source="fileTypes" reference="fileTypes">
        <AutocompleteArrayInput optionText="name" />
      </ReferenceInput>
      <NumberInput source="price" />
      <TextInput source="contractValues.copies" />
      <TextInput source="contractValues.radioStations" />
      <TextInput source="contractValues.musicVideo" />
      <TextInput source="contractValues.streams" />
      <FileInput source="image" />
    </SimpleForm>
  </Edit>
);

export default LicenseUpdate;
