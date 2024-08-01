import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { fetchPostById, postComment } from "../services/posts";
import { useParams } from "react-router-dom";
import { timestampFormatter } from "../utilities/timeStampFormatter";
import Input from "../components/Input";
import { useState } from "react";
import Button from "../components/button";
import Cookies from "js-cookie";
const SingleBlog = () => {
  const params: any = useParams();
  const [comment, setComment] = useState("");
  const postId = params?.id;
  const { data, isError, isLoading } = useQuery({
    queryKey: ["post", postId],
    queryFn: () => fetchPostById(postId),
  });
  const mutation = useMutation({
    mutationFn: postComment,
    onSuccess: () => {
      window.location.reload();
    },
    onError: () => {
      alert("Some thing went wrong");
    },
  });
  const handleSubmit = () => {
    mutation.mutate({ postId, content: comment });
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading post</div>;
  }
  return (
    <section className=" w-full flex justify-center">
      <div className="bg-white w-fit p-8 rounded shadow-sm">
        <div className="flex justify-center flex-wrap md:flex-wrap lg:flex-row lg:justify-between gap-8">
          <div className="w-full flex justify-between flex-col">
            <div className="block lg:text-left text-center">
              <h2 className="text-4xl font-bold text-gray-700 leading-[3.25rem] mb-5">
                {data?.title}
              </h2>
              <p className="text-gray-500 mb-10 max-w-[800px]">
                {data?.content}
              </p>
            </div>
            <p className="capitalize text-gray-700 text-sm">
              Written by: <span>{data?.author?.name}</span>
            </p>
            <p className="capitalize text-gray-700 text-sm font-medium">
              Written at: <span>{timestampFormatter(data?.createdAt)}</span>
            </p>
          </div>
          {Cookies.get("authToken") ? (
            <>
              <Input
                type="text"
                label="Write a comment"
                change={setComment}
                value={comment}
                placeholder="type..."
              />
              <div className="w-full">
                <Button
                  label="Save"
                  extrastyle="border rounded-xl py-2 px-4 ml-3"
                  click={handleSubmit}
                />
              </div>
            </>
          ) : (
            ""
          )}
          <p className="font-medium text-gray-600 ml-3">
            Comments {`(${data.comments.length})`}
          </p>
          <div className="w-full text-sm">
            {data.comments.map((comment: any, index: number) => (
              <div className="flex gap-2 w-fit" key={index}>
                <p>{comment?.content}</p>
                <span className="font-medium">
                  {timestampFormatter(comment?.createdAt)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default SingleBlog;
