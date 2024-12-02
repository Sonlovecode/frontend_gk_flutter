import {
  List,
  Datagrid,
  TextField,
  Edit,
  SimpleForm,
  EditButton,
  TextInput,
  Create,
} from 'react-admin'

export const listProducts = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source='name' />
      <TextField source='from' />
      <TextField source='to' />

      <EditButton basePath='/tourbookings' />
    </Datagrid>
  </List>
)

export const editProduct = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source='name' />
      <TextInput source='from' />
      <TextInput source='to' />
    </SimpleForm>
  </Edit>
)

export const createProduct = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source='name' />
      <TextInput source='from' />
      <TextInput source='to' />
    </SimpleForm>
  </Create>
)
