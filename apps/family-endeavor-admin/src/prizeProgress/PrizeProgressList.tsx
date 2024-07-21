import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { KID_TITLE_FIELD } from "../kid/KidTitle";
import { PRIZE_TITLE_FIELD } from "../prize/PrizeTitle";

export const PrizeProgressList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"PrizeProgresses"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
