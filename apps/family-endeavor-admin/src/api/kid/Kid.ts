import { JsonValue } from "type-fest";
import { Parent } from "../parent/Parent";
import { EndeavorProgress } from "../endeavorProgress/EndeavorProgress";
import { PrizeProgress } from "../prizeProgress/PrizeProgress";
import { User } from "../user/User";

export type Kid = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  profilePicture: JsonValue;
  name: string | null;
  yearOfBirth: number | null;
  parent?: Parent | null;
  gender?: "Option1" | null;
  endeavorProgresses?: Array<EndeavorProgress>;
  prizeProgresses?: Array<PrizeProgress>;
  user?: User | null;
};
