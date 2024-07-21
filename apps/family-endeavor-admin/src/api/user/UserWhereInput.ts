import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ParentListRelationFilter } from "../parent/ParentListRelationFilter";
import { KidListRelationFilter } from "../kid/KidListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  parents?: ParentListRelationFilter;
  kids?: KidListRelationFilter;
};
