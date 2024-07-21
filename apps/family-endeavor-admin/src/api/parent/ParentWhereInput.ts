import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { KidListRelationFilter } from "../kid/KidListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ParentWhereInput = {
  id?: StringFilter;
  email?: StringNullableFilter;
  name?: StringNullableFilter;
  kids?: KidListRelationFilter;
  user?: UserWhereUniqueInput;
};
