import {fetchAPI} from "@/app/[lang]/utils/fetch-api";

const populate = {
  contentSections: {
    on: {
      "sections.hero": {
        populate: "*",
      },
      "sections.features": {
        populate: "*",
      },
      "sections.bottom-actions": {
        populate: "*",
      },
      "sections.feature-columns-group": {
        populate: "*",
      },
      "sections.feature-rows-group": {
        populate: "*",
      },
      "sections.testimonials-group": {
        populate: {
          testimonials: {
            populate: "*",
          },
        },
      },
      "sections.large-video": {
        populate: "*",
      },
      "sections.rich-text": {
        populate: "*",
      },
      "sections.pricing": {
        populate: {
          plans: {
            populate: "*",
          },
        },
      },
      "sections.lead-form": {
        populate: "*",
      },
      "sections.heading": {
        populate: "*",
      },
    },
  },
  seo: {
    populate: "*",
  },
}

export async function getPageBySlug(slug: string, lang: string) {
  const token = process.env.STRAPI_API_TOKEN;

  const path = `/pages`;
  const urlParamsObject = {
    filters: {
      slug
    },
    locale: lang,
    populate: populate
  };
  const options = {headers: {Authorization: `Bearer ${token}`}};
  return await fetchAPI(path, urlParamsObject, options);
}