import { KidWhereUniqueInput } from "../kid/KidWhereUniqueInput";
import { PrizeWhereUniqueInput } from "../prize/PrizeWhereUniqueInput";

export type PrizeProgressCreateInput = {
  datePurchased?: Date | null;
  kid?: KidWhereUniqueInput | null;
  prize?: PrizeWhereUniqueInput | null;
  status?: "Option1" | null;
  dateRedeemed?: Date | null;
};
