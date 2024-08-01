import Cookies from "js-cookie";
const apiUrl = import.meta.env.VITE_BACKEND_URL;
export type SignUpUserInput = {
  email: string;
  password: string;
  name: string;
};
export type LoginUserInput = {
  email: string;
  password: string;
};

export type LoginUserResponse = {
  token: string;
  user: {
    id: number;
    email: string;
    name: string;
  };
};
export const signUpUser = async ({
  email,
  password,
  name,
}: SignUpUserInput): Promise<any> => {
  const response = await fetch(`${apiUrl}/api/v1/users/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name }),
  });

  if (!response.ok) {
    throw new Error("Error signing up user");
  }

  return response.json();
};

export const loginUser = async (
  input: LoginUserInput
): Promise<LoginUserResponse> => {
  const response = await fetch(`${apiUrl}/api/v1/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });

  if (!response.ok) {
    throw new Error("Error logging in user.Check credentials");
  }
  const data = await response.json();
  Cookies.set("authToken", data.token, { expires: 1 });
  Cookies.set("username", data.data?.name, { expires: 1 });
  return data;
};
