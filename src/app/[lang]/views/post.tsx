import {formatDate, getStrapiMedia} from '@/app/[lang]/utils/api-helpers';
import Image from "next/legacy/image";
import componentResolver from '../utils/component-resolver';

interface Article {
  id: number;
  title: string;
  description: string;
  slug: string;
  cover: {
    data: {
      url: string;
    };
  };
  authorsBio: {
    data: {
      name: string;
      avatar: {
        data: {
          url: string;
        };
      };
    };
  };
  blocks: any[];
  publishedAt: string;
}

export default function Post({data}: { data: Article }) {
  const {title, description, publishedAt, cover, authorsBio} = data;
  const author = authorsBio.data
  const imageUrl = getStrapiMedia(cover.data?.url);
  const authorImgUrl = getStrapiMedia(authorsBio.data?.avatar.data.url);

  return (
    <article className="space-y-8 dark:bg-black dark:text-gray-50">
      {imageUrl && (
        <Image
          src={imageUrl}
          alt="article cover image"
          width={400}
          height={400}
          className="w-full h-96 object-cover rounded-lg"
        />
      )}
      <div className="space-y-6">
        <h1 className="leading-tight text-5xl font-bold ">{title}</h1>
        <div
          className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-400">
          <div className="flex items-center md:space-x-2">
            {authorImgUrl && (
              <Image
                src={authorImgUrl}
                alt="article cover image"
                width={400}
                height={400}
                className="w-14 h-14 border rounded-full dark:bg-gray-500 dark:border-gray-700"
              />
            )}
            <p className="text-md dark:text-violet-400">
              {author && author.name} • {formatDate(publishedAt)}
            </p>
          </div>
        </div>
      </div>

      <div className="dark:text-gray-100">
        <p>{description}</p>

        {data.blocks.map((section: any, index: number) => componentResolver(section, index))}
      </div>
    </article>
  );
}
