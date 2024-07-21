import { InputJsonValue } from "../../types";
import { ParentWhereUniqueInput } from "../parent/ParentWhereUniqueInput";
import { ProgressUpdateManyWithoutKidsInput } from "./ProgressUpdateManyWithoutKidsInput";
import { EndeavorProgressUpdateManyWithoutKidsInput } from "./EndeavorProgressUpdateManyWithoutKidsInput";
import { PrizeProgressUpdateManyWithoutKidsInput } from "./PrizeProgressUpdateManyWithoutKidsInput";

export type KidUpdateInput = {
  profilePicture?: InputJsonValue;
  name?: string | null;
  yearOfBirth?: number | null;
  parent?: ParentWhereUniqueInput | null;
  gender?: "Option1" | null;
  progresses?: ProgressUpdateManyWithoutKidsInput;
  endeavorProgresses?: EndeavorProgressUpdateManyWithoutKidsInput;
  prizeProgresses?: PrizeProgressUpdateManyWithoutKidsInput;
};
