import { Endeavor as TEndeavor } from "../api/endeavor/Endeavor";

export const ENDEAVOR_TITLE_FIELD = "name";

export const EndeavorTitle = (record: TEndeavor): string => {
  return record.name?.toString() || String(record.id);
};
