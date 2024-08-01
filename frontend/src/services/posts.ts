import Cookies from "js-cookie";
<<<<<<< HEAD
export const fetchPosts = async (limit: number) => {
  const response = await fetch(
    `http://localhost:3000/api/v1/posts?limit=${limit}`
=======
const apiUrl = import.meta.env.VITE_BACKEND_URL;

export const fetchPosts = async (limit: number) => {
  const response = await fetch(
    `${apiUrl}/api/v1/posts?limit=${limit}`
>>>>>>> 339c907 (api integration on both users, posts and authentication)
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const result = await response.json();
  return { posts: result.data, totalPosts: result.pagination.totalPosts };
};
export const fetchAuthUserPosts = async (limit: number) => {
  const response = await fetch(
<<<<<<< HEAD
    `http://localhost:3000/api/v1/user/posts?limit=${limit}`,
=======
    `${apiUrl}/api/v1/user/posts?limit=${limit}`,
>>>>>>> 339c907 (api integration on both users, posts and authentication)
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
<<<<<<< HEAD
  const response = await fetch(`http://localhost:3000/api/v1/post/${postId}`);
=======
  const response = await fetch(`${apiUrl}/api/v1/post/${postId}`);
>>>>>>> 339c907 (api integration on both users, posts and authentication)
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
<<<<<<< HEAD
  const response = await fetch(`http://localhost:3000/api/v1/post/${commentData.postId}/comment`, {
=======
  const response = await fetch(`${apiUrl}/api/v1/post/${commentData.postId}/comment`, {
>>>>>>> 339c907 (api integration on both users, posts and authentication)
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
<<<<<<< HEAD
  const response = await fetch('http://localhost:3000/api/v1/posts', {
=======
  const response = await fetch(`${apiUrl}/api/v1/posts`, {
>>>>>>> 339c907 (api integration on both users, posts and authentication)
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

