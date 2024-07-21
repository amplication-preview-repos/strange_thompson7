import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { EndeavorTitle } from "../endeavor/EndeavorTitle";

export const RewardCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
