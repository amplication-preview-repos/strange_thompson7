import { Reward } from "../reward/Reward";
import { EndeavorProgress } from "../endeavorProgress/EndeavorProgress";

export type Endeavor = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  name: string | null;
  dueDate: Date | null;
  reward?: Reward | null;
  assignedTo: string | null;
  endeavorProgresses?: Array<EndeavorProgress>;
};
