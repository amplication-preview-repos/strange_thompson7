import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ParentTitle } from "../parent/ParentTitle";
import { EndeavorProgressTitle } from "../endeavorProgress/EndeavorProgressTitle";
import { PrizeProgressTitle } from "../prizeProgress/PrizeProgressTitle";
import { UserTitle } from "../user/UserTitle";

export const KidEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="name" source="name" />
        <NumberInput step={1} label="yearOfBirth" source="yearOfBirth" />
        <ReferenceInput source="parent.id" reference="Parent" label="Parent">
          <SelectInput optionText={ParentTitle} />
        </ReferenceInput>
        <SelectInput
          source="gender"
          label="gender"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceArrayInput
          source="endeavorProgresses"
          reference="EndeavorProgress"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EndeavorProgressTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="prizeProgresses"
          reference="PrizeProgress"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PrizeProgressTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
