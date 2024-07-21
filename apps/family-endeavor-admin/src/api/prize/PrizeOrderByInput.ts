import { SortOrder } from "../../util/SortOrder";

export type PrizeOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  costInBlueGems?: SortOrder;
  costInPurpleGems?: SortOrder;
  costInRedGems?: SortOrder;
};
