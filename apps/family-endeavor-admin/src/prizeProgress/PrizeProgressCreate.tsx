import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { KidTitle } from "../kid/KidTitle";
import { PrizeTitle } from "../prize/PrizeTitle";

export const PrizeProgressCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="datePurchased" source="datePurchased" />
        <ReferenceInput source="kid.id" reference="Kid" label="Kid">
          <SelectInput optionText={KidTitle} />
        </ReferenceInput>
        <ReferenceInput source="prize.id" reference="Prize" label="Prize">
          <SelectInput optionText={PrizeTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
