import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { RewardTitle } from "../reward/RewardTitle";
import { EndeavorProgressTitle } from "../endeavorProgress/EndeavorProgressTitle";

export const EndeavorEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="name" source="name" />
        <DateTimeInput label="dueDate" source="dueDate" />
        <ReferenceInput source="reward.id" reference="Reward" label="Reward">
          <SelectInput optionText={RewardTitle} />
        </ReferenceInput>
        <TextInput label="AssignedTo" source="assignedTo" />
        <ReferenceArrayInput
          source="endeavorProgresses"
          reference="EndeavorProgress"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EndeavorProgressTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
