"use server";
import {fetchAPI} from "@/app/[lang]/utils/fetch-api";

export async function listArticles(page: number, pageSize: number) {
  const token = process.env.STRAPI_API_TOKEN;
  const path = `/articles`;
  const urlParamsObject = {
    sort: {createdAt: "desc"},
    populate: {
      cover: {fields: ["url"]},
      category: {populate: "*"},
      authorsBio: {
        populate: "*",
      },
    },
    pagination: {
      page: page,
      pageSize: pageSize,
    },
  };
  const options = {headers: {Authorization: `Bearer ${token}`}};
  return await fetchAPI(path, urlParamsObject, options)
}