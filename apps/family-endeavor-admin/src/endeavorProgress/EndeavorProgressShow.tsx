import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { KID_TITLE_FIELD } from "../kid/KidTitle";
import { ENDEAVOR_TITLE_FIELD } from "../endeavor/EndeavorTitle";

export const EndeavorProgressShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="status" source="status" />
        <TextField label="blueGemsEarned" source="blueGemsEarned" />
        <TextField label="redGemsEarned" source="redGemsEarned" />
        <TextField label="purpleGemsEarned" source="purpleGemsEarned" />
        <ReferenceField label="Kid" source="kid.id" reference="Kid">
          <TextField source={KID_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Endeavor"
          source="endeavor.id"
          reference="Endeavor"
        >
          <TextField source={ENDEAVOR_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
