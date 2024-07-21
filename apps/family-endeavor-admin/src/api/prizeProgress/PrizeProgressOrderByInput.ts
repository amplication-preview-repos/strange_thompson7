import { SortOrder } from "../../util/SortOrder";

export type PrizeProgressOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  datePurchased?: SortOrder;
  kidId?: SortOrder;
  prizeId?: SortOrder;
};
