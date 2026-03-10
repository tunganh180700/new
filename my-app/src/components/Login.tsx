import { useState } from "react";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [saveAccount, setSaveAccount] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = () => {
    console.log("Đăng nhập với:", { email, password, saveAccount });
  };
  const handleSSO = () => {
    console.log("Đăng nhập SSO");
  };
  const features = [
    "Báo cáo mua sắm",
    "Lựa chọn nhà cung cấp",
    "Đánh giá nhà cung cấp",
    "Phân tích dữ liệu hệ thống",
  ];

  return (
    <div className="fixed inset-0 flex font-sans">
      <div className="w-1/2 bg-[#3a7bd5] flex flex-col justify-center px-16 relative overflow-hidden">
        <div className="absolute top-6 left-6 grid grid-cols-6 gap-2 opacity-30">
          {Array.from({ length: 36 }).map((_, index) => (
            <div key={index} className="w-1.5 h-1.5 rounded-full bg-white" />
          ))}
        </div>

        <div className="absolute bottom-0 left-0 w-full opacity-20">
          <svg
            viewBox="0 0 500 120"
            preserveAspectRatio="none"
            className="w-full h-24"
          >
            <path
              d="M0,60 C150,120 350,0 500,60 L500,120 L0,120 Z"
              fill="white"
            />
          </svg>
        </div>

        <h2 className="text-white text-2xl font-semibold mb-10">
          Hệ thống mua sắm nội bộ
        </h2>

        <div className="flex flex-col gap-5">
          {features.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-8 h-8 rounded bg-white bg-opacity-20 flex items-center justify-center flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect
                    x="1"
                    y="1"
                    width="6"
                    height="6"
                    rx="1"
                    fill="white"
                    opacity="0.9"
                  />
                  <rect
                    x="9"
                    y="1"
                    width="6"
                    height="6"
                    rx="1"
                    fill="white"
                    opacity="0.9"
                  />
                  <rect
                    x="1"
                    y="9"
                    width="6"
                    height="6"
                    rx="1"
                    fill="white"
                    opacity="0.9"
                  />
                  <rect
                    x="9"
                    y="9"
                    width="6"
                    height="6"
                    rx="1"
                    fill="white"
                    opacity="0.9"
                  />
                </svg>
              </div>
              <span className="text-white text-sm">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="w-1/2 bg-[#eaf2fb] flex flex-col justify-center px-16">
        <div className="flex items-center gap-3 mb-10">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <circle cx="11" cy="11" r="7" fill="#4A90D9" opacity="0.8" />
            <circle cx="25" cy="11" r="7" fill="#6AAEE8" opacity="0.7" />
            <circle cx="11" cy="25" r="7" fill="#6AAEE8" opacity="0.7" />
            <circle cx="25" cy="25" r="7" fill="#4A90D9" opacity="0.6" />
          </svg>
          <span className="text-xl font-bold text-[#2a6db5] tracking-wide">
            ePurchase
          </span>
        </div>

        <h2 className="text-3xl font-normal text-[#2a6db5] mb-7">Login</h2>

        <div className="mb-5">
          <label className="block text-sm text-gray-400 mb-2">Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="administrator"
            className="w-full px-4 py-3 rounded-lg border border-[#c8dff4] bg-white text-gray-700 text-sm outline-none focus:border-[#4A90D9] transition-colors"
          />
        </div>

        <div className="mb-5">
          <label className="block text-sm text-gray-400 mb-2">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg border border-[#c8dff4] bg-white text-gray-700 text-sm outline-none focus:border-[#4A90D9] transition-colors pr-10"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-sm bg-transparent border-none outline-none focus:outline-none focus:ring-0 cursor-pointer"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between mb-8">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={saveAccount}
              onChange={(e) => setSaveAccount(e.target.checked)}
              className="w-4 h-4 accent-[#4A90D9] bg-white cursor-pointer"
            />
            <span className="text-sm text-gray-500">Save account</span>
          </label>
          <a
            href="#"
            className="text-xs text-gray-400 tracking-widest hover:text-[#4A90D9] transition-colors"
          >
            FORGET PASSWORD ?
          </a>
        </div>

        <div className="flex gap-4">
          <button
            onClick={handleSSO}
            className="flex-1 py-3 rounded-lg bg-[#4A90D9] text-white text-sm font-bold tracking-wider hover:bg-[#3a7bc8] transition-colors"
          >
            ĐĂNG NHẬP SSO
          </button>
          <button
            onClick={handleLogin}
            className="flex-1 py-3 rounded-lg bg-[#4A90D9] text-white text-sm font-bold tracking-wider hover:bg-[#3a7bc8] transition-colors"
          >
            ĐĂNG NHẬP
          </button>
        </div>
      </div>
    </div>
  );
}
