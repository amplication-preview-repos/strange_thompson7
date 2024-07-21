import { SortOrder } from "../../util/SortOrder";

export type ParentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  email?: SortOrder;
  name?: SortOrder;
  userId?: SortOrder;
};
