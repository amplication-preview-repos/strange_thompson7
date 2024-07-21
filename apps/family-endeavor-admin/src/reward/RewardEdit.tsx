import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { EndeavorTitle } from "../endeavor/EndeavorTitle";

export const RewardEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="endeavors"
          reference="Endeavor"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EndeavorTitle} />
        </ReferenceArrayInput>
        <NumberInput step={1} label="blueGems" source="blueGems" />
        <NumberInput step={1} label="redGems" source="redGems" />
        <NumberInput step={1} label="purpleGems" source="purpleGems" />
      </SimpleForm>
    </Edit>
  );
};
