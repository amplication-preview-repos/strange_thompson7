import { KidWhereUniqueInput } from "../kid/KidWhereUniqueInput";
import { PrizeWhereUniqueInput } from "../prize/PrizeWhereUniqueInput";

export type PrizeProgressUpdateInput = {
  datePurchased?: Date | null;
  kid?: KidWhereUniqueInput | null;
  prize?: PrizeWhereUniqueInput | null;
};
