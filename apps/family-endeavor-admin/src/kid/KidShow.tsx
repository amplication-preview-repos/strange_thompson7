import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { KID_TITLE_FIELD } from "./KidTitle";
import { ENDEAVOR_TITLE_FIELD } from "../endeavor/EndeavorTitle";
import { PRIZE_TITLE_FIELD } from "../prize/PrizeTitle";
import { PARENT_TITLE_FIELD } from "../parent/ParentTitle";

export const KidShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="profilePicture" source="profilePicture" />
        <TextField label="name" source="name" />
        <TextField label="yearOfBirth" source="yearOfBirth" />
        <ReferenceField label="Parent" source="parent.id" reference="Parent">
          <TextField source={PARENT_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="gender" source="gender" />
        <ReferenceManyField
          reference="Progress"
          target="kidId"
          label="Progresses"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="EndeavorProgress"
          target="kidId"
          label="EndeavorProgresses"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="PrizeProgress"
          target="kidId"
          label="PrizeProgresses"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="datePurchased" source="datePurchased" />
            <ReferenceField label="Kid" source="kid.id" reference="Kid">
              <TextField source={KID_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Prize" source="prize.id" reference="Prize">
              <TextField source={PRIZE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
