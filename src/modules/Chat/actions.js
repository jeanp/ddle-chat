import * as api from "../../api";

export const fetchAllMessages = async () => {
  const response = await api.fetchAllMessages();
  const data = await response.json();

  if (data.errors) {
    throw data.errors;
  } else {
    return data;
  }
};

export const postMessage = async (author, message) =>
  api.postMessage(author, message);
