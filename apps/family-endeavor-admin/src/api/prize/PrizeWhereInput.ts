import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { PrizeProgressListRelationFilter } from "../prizeProgress/PrizeProgressListRelationFilter";

export type PrizeWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  costInBlueGems?: IntNullableFilter;
  costInPurpleGems?: IntNullableFilter;
  costInRedGems?: IntNullableFilter;
  prizeProgresses?: PrizeProgressListRelationFilter;
};
