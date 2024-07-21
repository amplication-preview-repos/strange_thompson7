import { SortOrder } from "../../util/SortOrder";

export type EndeavorProgressOrderByInput = {
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
