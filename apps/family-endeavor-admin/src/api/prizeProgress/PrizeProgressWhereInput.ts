import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { KidWhereUniqueInput } from "../kid/KidWhereUniqueInput";
import { PrizeWhereUniqueInput } from "../prize/PrizeWhereUniqueInput";

export type PrizeProgressWhereInput = {
  id?: StringFilter;
  datePurchased?: DateTimeNullableFilter;
  kid?: KidWhereUniqueInput;
  prize?: PrizeWhereUniqueInput;
  status?: "Option1";
  dateRedeemed?: DateTimeNullableFilter;
};
