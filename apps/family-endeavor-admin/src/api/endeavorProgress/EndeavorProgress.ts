import { Kid } from "../kid/Kid";
import { Endeavor } from "../endeavor/Endeavor";

export type EndeavorProgress = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  status?: "Option1" | null;
  blueGemsEarned: number | null;
  redGemsEarned: number | null;
  purpleGemsEarned: number | null;
  kid?: Kid | null;
  endeavor?: Endeavor | null;
};
