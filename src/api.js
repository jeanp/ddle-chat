import { toQueryParam } from "./utils";

const TOKEN = "A9xJbJhuduOx";
const BASE_URL = "https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0";

export const fetchAllMessages = (params = {}) => {
  const defaultFetchAllMessagesParams = {
    limit: 10,
    token: TOKEN,
  };

  const queryParams = toQueryParam({
    ...defaultFetchAllMessagesParams,
    ...params,
  });

  return fetch(`${BASE_URL}/?${queryParams}`);
};

export const postMessage = (author, message) =>
  fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: TOKEN,
    },
    body: JSON.stringify({
      author,
      message,
    }),
  });
