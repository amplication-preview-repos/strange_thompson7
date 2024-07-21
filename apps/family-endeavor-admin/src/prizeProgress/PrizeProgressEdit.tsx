import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { KidTitle } from "../kid/KidTitle";
import { PrizeTitle } from "../prize/PrizeTitle";

export const PrizeProgressEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="datePurchased" source="datePurchased" />
        <ReferenceInput source="kid.id" reference="Kid" label="Kid">
          <SelectInput optionText={KidTitle} />
        </ReferenceInput>
        <ReferenceInput source="prize.id" reference="Prize" label="Prize">
          <SelectInput optionText={PrizeTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
