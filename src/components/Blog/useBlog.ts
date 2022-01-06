import { useEffect, useState } from "react";
import fmt from "../../utils/date";
import { Blog } from "../../utils/interfaces";

interface Item {
  title: string;
  pubDate: string;
  link: string;
  description: string;
  categories: string[];
}

export default function useBlog() {
  const [articles, setArticles] = useState<Blog[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@iamstanlee&count=3&order_by=pubDate&api_key=${process.env.NEXT_PUBLIC_RSS2JSON_KEY}`
        );
        const json = await response.json();
        console.log(json);
        if (json.status === "ok") {
          setArticles(
            (json.items as Item[]).map(
              (item) =>
                <Blog>{
                  title: item.title,
                  link: item.link,
                  text: item.description.substring(0, 512),
                  date: fmt(item.pubDate),
                }
            )
          );
        } else {
          setError(json.message || "An unexpected error occured");
        }
      } catch (e) {
        setError((e as Error).message);
      }
      setIsLoading(false);
    };
    fetchPosts();
  }, []);

  return { articles, error, isLoading };
}
