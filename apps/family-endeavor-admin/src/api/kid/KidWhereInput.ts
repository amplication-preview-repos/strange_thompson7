import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ParentWhereUniqueInput } from "../parent/ParentWhereUniqueInput";
import { EndeavorProgressListRelationFilter } from "../endeavorProgress/EndeavorProgressListRelationFilter";
import { PrizeProgressListRelationFilter } from "../prizeProgress/PrizeProgressListRelationFilter";

export type KidWhereInput = {
  id?: StringFilter;
  profilePicture?: JsonFilter;
  name?: StringNullableFilter;
  yearOfBirth?: IntNullableFilter;
  parent?: ParentWhereUniqueInput;
  gender?: "Option1";
  endeavorProgresses?: EndeavorProgressListRelationFilter;
  prizeProgresses?: PrizeProgressListRelationFilter;
};
