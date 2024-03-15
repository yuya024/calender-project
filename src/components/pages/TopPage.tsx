import { useNavigate } from "react-router-dom";
import { PrimaryBtn } from "../atoms/PrimaryBtn";

export const TopPage = () => {
  const navigate = useNavigate();
  return (
    <div className="text-center">
      <h1 className="text-7xl logo">スケジュール管理APP</h1>
      <p className="pt-[10vh] text-5xl">
        お互いのスケジュールを管理するアプリです
      </p>
      <div className="pt-[20vh]">
        <PrimaryBtn onClick={() => navigate("login")}>ログイン</PrimaryBtn>
      </div>
    </div>
  );
};
