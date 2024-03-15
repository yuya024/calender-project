export const TopPage = () => {
  return (
    <div className="relative">
      <header className="fixed top-0 right-0 left-0 bg-white">
        <div className="flex justify-between container mx-auto leading-[50px]">
          <p className="logo">スケジュール管理APP</p>
          <nav>
            <ul className="flex gap-5 text-lime-800">
              <li>ご利用方法</li>
              <li>ログイン</li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="pt-[50px] bg-gradient-to-r from-lime-100 to-lime-200 h-screen flex flex-col justify-center items-center">
        <div className="text-center">
          <h1 className="text-7xl logo">スケジュール管理APP</h1>
          <p className="pt-[10vh] text-5xl">
            お互いのスケジュールを管理するアプリです
          </p>
          <div className="pt-[20vh]">
            <button className="bg-lime-800 text-white p-4 text-lg rounded-lg">
              ログイン
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
