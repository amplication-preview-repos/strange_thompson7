import { SortOrder } from "../../util/SortOrder";

export type EndeavorOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  name?: SortOrder;
  dueDate?: SortOrder;
  rewardId?: SortOrder;
  assignedTo?: SortOrder;
};
