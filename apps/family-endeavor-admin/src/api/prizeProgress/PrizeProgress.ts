import { Kid } from "../kid/Kid";
import { Prize } from "../prize/Prize";

export type PrizeProgress = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  datePurchased: Date | null;
  kid?: Kid | null;
  prize?: Prize | null;
  status?: "Option1" | null;
  dateRedeemed: Date | null;
};
