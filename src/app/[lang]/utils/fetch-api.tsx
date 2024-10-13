"use server"
import qs from "qs";
import {getStrapiURL} from "./api-helpers";

export async function fetchAPI(
  path: string,
  urlParamsObject = {},
  options = {}
) {
  try {
    // Merge default and user options
    const mergedOptions = {
      next: {revalidate: 60},
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    };

    // Build request URL
    const queryString = qs.stringify(urlParamsObject);
    const requestUrl = `${getStrapiURL(
      `/api${path}${queryString ? `?${queryString}` : ""}`
    )}`;

    // Trigger API call
    console.log("Try to get data from server: ", requestUrl)
    const response = await fetch(requestUrl, mergedOptions);
    const status = response.status;
    if (200 !== status) {
      console.error("ERROR to get data from server: ", requestUrl, ", status code: ", status, ", response info: ", await response.text())
      throw new Error(`ERROR to get server data from: ${requestUrl},status code: ${status}`)
    }
    const respData = await response.json();
    console.log("SUCCESS to get data from server: ", requestUrl, ", resp data: ", JSON.stringify(respData, null, 2));
    return respData;
  } catch (error) {
    console.error(error);
    throw new Error(`Please check if your server is running and you set all the required tokens.`);
  }
}
