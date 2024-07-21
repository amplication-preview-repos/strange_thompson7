import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  NumberInput,
  ReferenceInput,
} from "react-admin";
import { KidTitle } from "../kid/KidTitle";
import { EndeavorTitle } from "../endeavor/EndeavorTitle";

export const EndeavorProgressEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput step={1} label="blueGemsEarned" source="blueGemsEarned" />
        <NumberInput step={1} label="redGemsEarned" source="redGemsEarned" />
        <NumberInput
          step={1}
          label="purpleGemsEarned"
          source="purpleGemsEarned"
        />
        <ReferenceInput source="kid.id" reference="Kid" label="Kid">
          <SelectInput optionText={KidTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="endeavor.id"
          reference="Endeavor"
          label="Endeavor"
        >
          <SelectInput optionText={EndeavorTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
