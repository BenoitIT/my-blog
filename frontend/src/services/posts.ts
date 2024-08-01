import Cookies from "js-cookie";
export const fetchPosts = async (limit: number) => {
  const response = await fetch(
    `http://localhost:3000/api/v1/posts?limit=${limit}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const result = await response.json();
  return { posts: result.data, totalPosts: result.pagination.totalPosts };
};
export const fetchAuthUserPosts = async (limit: number) => {
  const response = await fetch(
    `http://localhost:3000/api/v1/user/posts?limit=${limit}`,
    {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${Cookies.get("authToken")}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const result = await response.json();
  return { posts: result.data, totalPosts: result.pagination.totalPosts };
};

export  const fetchPostById = async (postId: number) => {
  const response = await fetch(`http://localhost:3000/api/v1/post/${postId}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const result = await response.json();
  return result.data;
};

interface CommentData {
  content: string;
  postId: number;
}

export const postComment = async (commentData: CommentData) => {
  const response = await fetch(`http://localhost:3000/api/v1/post/${commentData.postId}/comment`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${Cookies.get("authToken")}`,
    },
    body: JSON.stringify({
      content: commentData.content,
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to post comment');
  }

  const result = await response.json();
  return result.data;
};


interface PostData {
  title: string;
  content: string;
}

export const createPost = async (postData: PostData) => {
  const response = await fetch('http://localhost:3000/api/v1/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${Cookies.get("authToken")}`,
    },
    body: JSON.stringify(postData),
  });

  if (!response.ok) {
    throw new Error('Failed to submit post');
  }

  const result = await response.json();
  return result.message;
};

