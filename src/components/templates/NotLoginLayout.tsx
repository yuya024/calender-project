import { Link, Outlet } from "react-router-dom";

export const NotLoginLayout = () => {
  return (
    <div className="relative">
      <header className="fixed top-0 right-0 left-0 bg-white">
        <div className="flex justify-between container mx-auto leading-[50px]">
          <p className="logo">
            <Link to="/">スケジュール管理APP</Link>
          </p>
          <nav>
            <ul className="flex gap-5 text-lime-800">
              <li>ご利用方法</li>
              <li>
                <Link to="/login">ログイン</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="pt-[50px] bg-gradient-to-r from-lime-100 to-lime-200 h-screen flex flex-col justify-center items-center">
        <Outlet />
      </main>
    </div>
  );
};
