import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PrizeProgressTitle } from "../prizeProgress/PrizeProgressTitle";

export const PrizeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="costInBlueGems" source="costInBlueGems" />
        <NumberInput
          step={1}
          label="costInPurpleGems"
          source="costInPurpleGems"
        />
        <NumberInput step={1} label="costInRedGems" source="costInRedGems" />
        <ReferenceArrayInput
          source="prizeProgresses"
          reference="PrizeProgress"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PrizeProgressTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
