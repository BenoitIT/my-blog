import { DummyBlogs } from "../assets/dummyData";
import Button from "../components/button";
import BlogCard from "../components/Card";

const UsersBlog = () => {
  return (
    <section className=" w-full flex justify-center">
      <div className="bg-white w-fit p-8 rounded shadow-sm">
        <div className="flex justify-center flex-wrap md:flex-wrap lg:flex-row lg:justify-between gap-8">
          <div className="w-full flex justify-between flex-col">
            <div className="flex lg:text-left text-center justify-between">
              <h2 className="text-4xl font-bold text-gray-700 leading-[3.25rem] mb-5">
                My <span className=" text-[#008282]">blogs</span>
              </h2>
              <Button
                label="Create new blog"
                extrastyle=" border rounded-full bg-gray-200 border-[#008282] h-fit py-2 px-4"
              />
            </div>
          </div>
        </div>
        {/* card component */}
        <div className="flex flex-col gap-3">
          {DummyBlogs.map((blog, index) => (
            <BlogCard
              key={index}
              title={blog.title}
              contents={blog.contents}
              author={blog.author}
              timeStamp={blog.timeStamp}
            />
          ))}
        </div>
        <div className="my-8">
          <Button
            label="View more blogs"
            extrastyle="cursor-pointer border border-gray-300 shadow-sm rounded-full py-2 px-7 w-52 lg:mx-0 mx-auto"
          />
        </div>
      </div>
    </section>
  );
};
export default UsersBlog;
