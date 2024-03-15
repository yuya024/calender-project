import { PrimaryBtn } from "../atoms/PrimaryBtn";

export const LoginPage = () => {
  return (
    <div className="w-[500px] bg-white rounded-lg shadow-lg py-10">
      <form className="flex flex-col justify-center items-center gap-10">
        <h1 className="text-3xl text-lime-800 font-bold text-center">
          ログイン
        </h1>
        <div className="w-[80%]">
          <input
            type="text"
            placeholder="email"
            className="w-full border-4 border-solid border-lime-800 rounded-md p-2"
          />
        </div>
        <div className="w-[80%]">
          <input
            type="password"
            placeholder="password"
            className="w-full border-4 border-solid border-lime-800 rounded-md p-2"
          />
        </div>
        <PrimaryBtn>ログイン</PrimaryBtn>
      </form>
    </div>
  );
};
