import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { KidWhereUniqueInput } from "../kid/KidWhereUniqueInput";
import { EndeavorWhereUniqueInput } from "../endeavor/EndeavorWhereUniqueInput";

export type EndeavorProgressWhereInput = {
  id?: StringFilter;
  status?: "Option1";
  blueGemsEarned?: IntNullableFilter;
  redGemsEarned?: IntNullableFilter;
  purpleGemsEarned?: IntNullableFilter;
  kid?: KidWhereUniqueInput;
  endeavor?: EndeavorWhereUniqueInput;
};
