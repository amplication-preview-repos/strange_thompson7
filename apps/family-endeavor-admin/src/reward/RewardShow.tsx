import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { REWARD_TITLE_FIELD } from "./RewardTitle";

export const RewardShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="blueGems" source="blueGems" />
        <TextField label="redGems" source="redGems" />
        <TextField label="purpleGems" source="purpleGems" />
        <ReferenceManyField
          reference="Endeavor"
          target="rewardId"
          label="Endeavors"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="description" source="description" />
            <TextField label="name" source="name" />
            <TextField label="dueDate" source="dueDate" />
            <ReferenceField
              label="Reward"
              source="reward.id"
              reference="Reward"
            >
              <TextField source={REWARD_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="AssignedTo" source="assignedTo" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
