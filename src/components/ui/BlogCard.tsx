import React from "react";

interface BlogCardProps {
  title: string;
  description: string;
  thumbnail: string;
  link: string;
  guid: string;
}

// Fungsi utilitas untuk menghapus tag HTML
function stripHTML(html: string): string {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;
  return tempDiv.textContent || tempDiv.innerText || "";
}

export function BlogCard({ title, description, thumbnail, link }: BlogCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-xl shadow-lg border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 bg-white dark:bg-gray-900 hover:shadow-xl"
    >
      {/* Blog Cover Image */}
      <div className="p-3 pt-4 pb-0 overflow-hidden rounded-lg">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={title}
            loading="lazy"
            className="w-full h-48 object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        ) : (
          <div className="w-full h-48 bg-gray-200 dark:bg-gray-800 flex items-center justify-center rounded-lg">
            <span className="text-gray-500 dark:text-gray-400 text-sm">No Image Available</span>
          </div>
        )}
      </div>

      {/* Blog Content */}
      <div className="p-5 pt-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
          {title}
        </h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
          {stripHTML(description)}
        </p>
      </div>

      {/* Read More Button */}
      <div className="px-5 pb-4">
        <span className="inline-block text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">
          Read More →
        </span>
      </div>
    </a>
  );
}
