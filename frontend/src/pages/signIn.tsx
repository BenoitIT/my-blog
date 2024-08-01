import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/button";
import Input from "../components/Input";

const Sign = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <section className="bg-gradient-to-b from-gray-300 to-white">
      <div className="w-full">
        <div className=" flex justify-center items-center h-screen flex-col gap-2">
          <div className="md:w-[550px] w-full  rounded bg-white p-6 shadow">
            <p className="w-full flex justify-center items-center text-center font-semibold text-2xl mb-10">
              Sign In
              <Link to="/" className="text-[#008282]">
                Blogerz.
              </Link>
            </p>
            <form>
              <div className="flex flex-wrap -mx-3 mb-4 gap-3">
                <Input
                  type="email"
                  label="Email"
                  change={setEmail}
                  value={email}
                  placeholder="Enter email .."
                />
                <Input
                  type="password"
                  label="Password"
                  change={setPassword}
                  value={password}
                  placeholder="*******"
                />
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <Button
                    extrastyle="btn text-white bg-[#008282] hover:bg-[#008289] w-full px-3 py-2 rounded-full"
                    label="Signin"
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

export default Sign;
