import { SortOrder } from "../../util/SortOrder";

export type ProgressOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  status?: SortOrder;
  blueGemsEarned?: SortOrder;
  redGemsEarned?: SortOrder;
  purpleGemsEarned?: SortOrder;
  kidId?: SortOrder;
  endeavorId?: SortOrder;
};
