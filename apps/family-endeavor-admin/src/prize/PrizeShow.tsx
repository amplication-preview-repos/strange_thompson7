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

import { KID_TITLE_FIELD } from "../kid/KidTitle";
import { PRIZE_TITLE_FIELD } from "./PrizeTitle";

export const PrizeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="description" source="description" />
        <TextField label="costInBlueGems" source="costInBlueGems" />
        <TextField label="costInPurpleGems" source="costInPurpleGems" />
        <TextField label="costInRedGems" source="costInRedGems" />
        <ReferenceManyField
          reference="PrizeProgress"
          target="prizeId"
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
