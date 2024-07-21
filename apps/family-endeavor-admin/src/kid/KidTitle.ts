import { Kid as TKid } from "../api/kid/Kid";

export const KID_TITLE_FIELD = "name";

export const KidTitle = (record: TKid): string => {
  return record.name?.toString() || String(record.id);
};
