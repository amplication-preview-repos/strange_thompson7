import { EndeavorProgress as TEndeavorProgress } from "../api/endeavorProgress/EndeavorProgress";

export const ENDEAVORPROGRESS_TITLE_FIELD = "id";

export const EndeavorProgressTitle = (record: TEndeavorProgress): string => {
  return record.id?.toString() || String(record.id);
};
