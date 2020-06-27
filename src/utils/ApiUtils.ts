import { ApiRequest } from "../interfaces/common";
import { GISTS_API } from "../constants/common";

const COMMON_OPTIONS: RequestInit = {
  headers: {
    "Accept": "application/vnd.github.v3+json",
  },
};

export const setAuthHeader = (token: string): void => {
  COMMON_OPTIONS.headers = {
    ...COMMON_OPTIONS.headers,
    "Authorization": `Bearer ${token}`,
  };
};

export const callApi = async ({
  url,
  options,
}: ApiRequest): Promise<Response> => {
  return await fetch(url, {
    ...options,
    ...COMMON_OPTIONS,
  });
};

export const callGetGists = async (username: string): Promise<Response> => {
  return await callApi({
    url: GISTS_API(username),
  });
};
