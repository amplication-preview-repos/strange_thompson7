import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { KidListRelationFilter } from "../kid/KidListRelationFilter";

export type ParentWhereInput = {
  id?: StringFilter;
  email?: StringNullableFilter;
  name?: StringNullableFilter;
  kids?: KidListRelationFilter;
};
