import { GISTS_API } from "../constants/common";
import { ApiRequest } from "../interfaces/common";

let authToken: string | undefined;

const callApi = async ({
  url,
  options,
}: ApiRequest): Promise<Response> => {
  const init = {
    ...options,
    headers: {
      "Cache-Control": "no-cache",
      "Accept": "application/vnd.github.v3+json",
      ...(authToken && {"Authorization": `Bearer ${authToken}`}),
    },
  };

  return await fetch(url, init);
};

export const setAuthToken = (token: string | undefined): void => {
  authToken = token;
};

export const callGetGists = async (username: string): Promise<Response> => {
  return await callApi({
    url: GISTS_API(username),
  });
};
