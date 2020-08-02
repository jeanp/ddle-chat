export const toQueryParam = (params) =>
  Object.keys(params)
    .map((key) => key + "=" + params[key])
    .join("&");
