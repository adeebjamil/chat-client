import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import pic from "/1.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 relative overflow-hidden">
      {/* Dragon scale background effect */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSIxMDAiPgo8cmVjdCB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiBmaWxsPSIjMDAwMDAwMjAiPjwvcmVjdD4KPHBhdGggZD0iTTI4IDY2TDAgNTBMMCAxNkwyOCAwTDU2IDE2TDU2IDUwTDI4IDY2TDI4IDEwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNDMwMDhBMTAiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-20"></div>
      
      {/* Dragon fire effects (top and bottom) */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-red-500/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-red-500/20 to-transparent"></div>
      
      {/* Dragon eye glow effects */}
      <div className="absolute top-1/4 -left-10 w-20 h-20 rounded-full bg-red-500 blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-10 w-20 h-20 rounded-full bg-red-500 blur-3xl opacity-20 animate-pulse" style={{animationDelay: "1s"}}></div>

      <div className="w-full max-w-md p-8 rounded-2xl shadow-2xl bg-black/40 backdrop-blur-xl border border-purple-900/50 relative z-10 overflow-hidden">
        {/* Dragon scale pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1NiIgaGVpZ2h0PSIxMDAiPgo8cmVjdCB3aWR0aD0iNTYiIGhlaWdodD0iMTAwIiBmaWxsPSIjMDAwMDAwMDAiPjwvcmVjdD4KPHBhdGggZD0iTTI4IDY2TDAgNTBMMCAxNkwyOCAwTDU2IDE2TDU2IDUwTDI4IDY2TDI4IDEwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNTAwMDgwMTAiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-30"></div>

        {/* Glowing border effect */}
        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-purple-600 via-red-500 to-purple-600 opacity-50 blur-sm animate-border-glow"></div>
        <div className="relative z-10">
          <div className="mb-8 text-center">
            <div className="relative w-24 h-24 mx-auto mb-4">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-red-500 blur-md animate-pulse opacity-70"></div>
              <img 
                src={pic} 
                alt="logo" 
                className="relative z-10 w-24 h-24 mx-auto drop-shadow-lg transition-all duration-300 hover:scale-110 hover:rotate-3" 
              />
            </div>
            <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-300 to-purple-500 animate-text-shimmer">
              Dragon Gate
            </h1>
            <p className="text-orange-200 mt-2 drop-shadow-md">Enter your credentials to access RealTalk</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-orange-200 block drop-shadow-md">
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600 to-red-500 opacity-50 blur-sm transform -translate-y-1 translate-x-1 group-hover:translate-x-0"></div>
                <input
                  type="text"
                  placeholder="Enter your username"
                  className="w-full px-4 py-3 bg-gray-900/70 rounded-lg border border-purple-800/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/40 outline-none transition-all duration-200 text-orange-100 placeholder-orange-200/50 relative z-10"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-sm font-medium text-orange-200 block drop-shadow-md">
                  Password
                </label>
              </div>
              <div className="relative">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-500 to-purple-600 opacity-50 blur-sm transform -translate-y-1 translate-x-1"></div>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 bg-gray-900/70 rounded-lg border border-purple-800/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/40 outline-none transition-all duration-200 text-orange-100 placeholder-orange-200/50 relative z-10"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="group relative w-full py-3 px-4 bg-gradient-to-r from-purple-700 to-red-700 hover:from-purple-800 hover:to-red-800 text-orange-100 font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
            >
              {/* Fire effect on button hover */}
              <div className="absolute inset-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj4KPGRlZnM+CiAgPGZpbHRlciBpZD0iZiIgeD0iMCIgeT0iMCIgd2lkdGg9IjIwMCUiIGhlaWdodD0iMjAwJSI+CiAgICA8ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjEiIG51bU9jdGF2ZXM9IjMiIHNlZWQ9IjEiLz4KICAgIDxmZURpc3BsYWNlbWVudE1hcCBzY2FsZT0iNSIvPgogIDwvZmlsdGVyPgo8L2RlZnM+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJ0cmFuc3BhcmVudCIgZmlsdGVyPSJ1cmwoI2YpIi8+Cjwvc3ZnPg==')] opacity-0 group-hover:opacity-20 transition-opacity"></div>
              
              <span className="relative z-10 drop-shadow-md flex items-center justify-center">
                {loading ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-orange-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Entering the Realm...
                  </div>
                ) : (
                  <>Enter</>
                )}
              </span>
            </button>
          </form>

          <div className="text-center mt-6">
            <Link to="/signup" className="text-sm text-orange-300 hover:text-red-400 transition-colors">
              Don't have an account? <span className="font-semibold underline decoration-wavy decoration-red-500/30 hover:decoration-red-500/70 underline-offset-2">Forge your identity</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;