import { useEffect, useState } from "react";

interface Blog {
  title: string;
  description: string;
  thumbnail: string;
  link: string;
  guid: string;
}

export function useBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMediumFeed = async () => {
      try {
        const res = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@muhrangga.prasetya"
        );
        const data = await res.json();

        const processed = data.items.map((item: any) => {
          const imgMatch = item.content.match(/<img[^>]+src="([^">]+)"/);
          const firstImage = imgMatch ? imgMatch[1] : "";

          return {
            title: item.title,
            description: item.description,
            thumbnail: firstImage,
            link: item.link,
            guid: item.guid,
          };
        });

        setBlogs(processed);
      } catch (err) {
        console.error("Error fetching Medium blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMediumFeed();
  }, []);

  return { blogs, loading };
}
