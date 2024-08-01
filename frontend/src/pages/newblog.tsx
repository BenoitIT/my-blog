import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/button";
import Input, { CustomTextArea } from "../components/Input";

const NewBlog = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  return (
    <section className="bg-gradient-to-b from-gray-300 to-white">
      <div className="w-full">
        <div className=" flex justify-center items-center h-screen flex-col gap-2">
          <div className="md:w-[550px] w-full  rounded bg-white p-6 shadow">
            <p className="w-full flex justify-center items-center text-center font-semibold text-2xl mb-10">
              Create new blog unto
              <Link to="/" className="text-[#008282] ml-2">
                Blogerz.
              </Link>
            </p>
            <form>
              <div className="flex flex-wrap -mx-3 mb-4 gap-3">
                <Input
                  type="text"
                  label="Post Title"
                  change={setTitle}
                  value={title}
                  placeholder="type..."
                />
                <CustomTextArea
                  label="Contents"
                  change={setContent}
                  value={content}
                  placeholder="type....."
                />
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <Button
                    extrastyle="btn text-white bg-[#008282] hover:bg-[#008289] w-full px-3 py-2 rounded-full"
                    label="Save"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewBlog;
