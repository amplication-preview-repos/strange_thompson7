import { SortOrder } from "../../util/SortOrder";

export type RewardOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  blueGems?: SortOrder;
  redGems?: SortOrder;
  purpleGems?: SortOrder;
};
