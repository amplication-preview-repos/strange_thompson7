import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { RewardWhereUniqueInput } from "../reward/RewardWhereUniqueInput";
import { EndeavorProgressListRelationFilter } from "../endeavorProgress/EndeavorProgressListRelationFilter";

export type EndeavorWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  name?: StringNullableFilter;
  dueDate?: DateTimeNullableFilter;
  reward?: RewardWhereUniqueInput;
  assignedTo?: StringNullableFilter;
  endeavorProgresses?: EndeavorProgressListRelationFilter;
};
