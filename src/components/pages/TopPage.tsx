import { PrimaryBtn } from "../atoms/PrimaryBtn";

export const TopPage = () => {
  return (
    <div className="text-center">
      <h1 className="text-7xl logo">スケジュール管理APP</h1>
      <p className="pt-[10vh] text-5xl">
        お互いのスケジュールを管理するアプリです
      </p>
      <div className="pt-[20vh]">
        <PrimaryBtn>ログイン</PrimaryBtn>
      </div>
    </div>
  );
};
