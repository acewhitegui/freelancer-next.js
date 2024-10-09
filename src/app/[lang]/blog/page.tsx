"use client";
import {useCallback, useEffect, useState} from "react";

import Loader from "../components/Loader";
import Blog from "../views/blog-list";
import PageHeader from "../components/PageHeader";
import {listArticles} from "@/app/[lang]/service/article-service";

interface Meta {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

export default function Profile() {
  const [meta, setMeta] = useState<Meta | undefined>();
  const [data, setData] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);

  const fetchData = useCallback(async (page: number, pageSize: number) => {
    setLoading(true);
    try {
      const responseData = await listArticles(page, pageSize)

      if (page === 0) {
        setData(responseData.data);
      } else {
        setData((prevData: any[]) => [...prevData, ...responseData.data]);
      }

      setMeta(responseData.meta);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  function loadMorePosts(): void {
    const nextPosts = meta!.pagination.page + meta!.pagination.pageSize;
    fetchData(nextPosts, Number(process.env.NEXT_PUBLIC_PAGE_LIMIT));
  }

  useEffect(() => {
    fetchData(0, Number(process.env.NEXT_PUBLIC_PAGE_LIMIT));
  }, [fetchData]);

  if (isLoading) return <Loader/>;

  return (
    <div>
      <PageHeader heading="Our Blog" text="Checkout Something Cool"/>
      <Blog data={data}>
        {meta!.pagination.page + meta!.pagination.pageSize <
          meta!.pagination.total && (
            <div className="flex justify-center">
              <button
                type="button"
                className="px-6 py-3 text-sm rounded-lg hover:underline dark:bg-gray-900 dark:text-gray-400"
                onClick={loadMorePosts}
              >
                Load more posts...
              </button>
            </div>
          )}
      </Blog>
    </div>
  );
}
