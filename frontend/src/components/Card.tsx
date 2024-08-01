import { timestampFormatter } from "../utilities/timeStampFormatter";
import Button from "./button";
import { FaArrowRight } from "react-icons/fa6";

interface blogCardProps {
  title: string;
  contents: string;
  author: string;
  timeStamp: string;
}

const BlogCard = ({ title, contents, author, timeStamp }: blogCardProps) => {
  return (
    <div className="w-full">
      <h3 className="text-lg text-gray-700 font-medium leading-8 mb-4 hover:text-[#008282] hover:cursor-pointer">
        {title}
      </h3>
      <p className="text-gray-500 leading-6 transition-all duration-500 mb-3 max-w-[600px]">
        {contents}
      </p>
      <div className="flex w-full justify-between flex-col lg:flex-row">
        <Button
          label="Read more"
          extrastyle="text-sm"
          icon={<FaArrowRight />}
        />
        <div className="flex gap-2 text-sm font-medium text-gray-700">
          <p>
            By <small className="font-normal">{author}</small>
          </p>
          <p>
            <small className="font-normal">
              {timestampFormatter(timeStamp)}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
