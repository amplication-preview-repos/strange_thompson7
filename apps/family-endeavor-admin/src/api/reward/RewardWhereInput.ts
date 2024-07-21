import { StringFilter } from "../../util/StringFilter";
import { EndeavorListRelationFilter } from "../endeavor/EndeavorListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type RewardWhereInput = {
  id?: StringFilter;
  endeavors?: EndeavorListRelationFilter;
  blueGems?: IntNullableFilter;
  redGems?: IntNullableFilter;
  purpleGems?: IntNullableFilter;
};
