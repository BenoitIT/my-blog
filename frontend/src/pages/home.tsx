import { useState } from "react";
import Button from "../components/button";
import BlogCard from "../components/Card";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../services/posts";
const HomePage = () => {
  const [postsLimit, setLimit] = useState<number>(2);
  const { data, isError, isLoading } = useQuery({
    queryKey: ["posts", { limit: postsLimit }],
    queryFn: ({ queryKey }) => {
      const [, params] = queryKey as [string, { limit: number }];
      return fetchPosts(params.limit);
    },
  });
  return (
    <section className=" w-full flex justify-center">
      <div className="bg-white w-fit p-8 rounded shadow-sm">
        <div className="flex justify-center flex-wrap md:flex-wrap lg:flex-row lg:justify-between gap-8">
          <div className="w-full flex justify-between flex-col">
            <div className="block lg:text-left text-center">
              <h2 className="text-4xl font-bold text-gray-700 leading-[3.25rem] mb-5">
                Latest <span className=" text-[#008282]">blogs</span>
              </h2>
              <p className="text-gray-500 mb-10 max-w-[800px]">
                Welcome to our blog section, where knowledge meets inspiration.
                Explore insightful articles, expert tips, and the latest trends
                in our field.
              </p>
            </div>
          </div>
        </div>
        {/* card component */}
        <div className="flex flex-col gap-3">
          {isLoading ? (
            <div>loading posts...</div>
          ) : isError ? (
            <div>Could load the posts.Something went wrong</div>
          ) : data && Array.isArray(data?.posts) && data?.posts.length < 1 ? (
            <div>No post have been created for now..</div>
          ) : (
            Array.isArray(data?.posts) &&
            data?.posts?.map((blog, index) => (
              <BlogCard
                id={blog.id}
                key={index}
                title={blog.title}
                contents={blog.content}
                author={blog.author.name}
                timeStamp={blog.createdAt}
              />
            ))
          )}
        </div>
        {/* hide load more button when all post are loaded; */}
        <div className="my-8">
          {data?.totalPosts > postsLimit ? (
            <Button
              label="View more blogs"
              extrastyle="cursor-pointer border border-gray-300 shadow-sm rounded-full py-2 px-7 w-52 lg:mx-0 mx-auto"
              click={() => setLimit(postsLimit + 3)}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
};
export default HomePage;
