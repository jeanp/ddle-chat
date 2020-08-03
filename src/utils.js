import { format } from "date-fns";

export const toQueryParam = (params) =>
  Object.keys(params)
    .map((key) => key + "=" + params[key])
    .join("&");

export const formatTimestamp = (timestamp) =>
  format(timestamp, "dd MMM yyyy HH:mm");
