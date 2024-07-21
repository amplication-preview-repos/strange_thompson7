import { SortOrder } from "../../util/SortOrder";

export type KidOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  profilePicture?: SortOrder;
  name?: SortOrder;
  yearOfBirth?: SortOrder;
  parentId?: SortOrder;
  gender?: SortOrder;
};
