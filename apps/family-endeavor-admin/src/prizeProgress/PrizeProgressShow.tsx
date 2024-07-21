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
import { PRIZE_TITLE_FIELD } from "../prize/PrizeTitle";

export const PrizeProgressShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <TextField label="status" source="status" />
        <TextField label="dateRedeemed" source="dateRedeemed" />
      </SimpleShowLayout>
    </Show>
  );
};
