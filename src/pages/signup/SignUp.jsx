import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";
import pic from "/2.png";

const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
    });

    const { loading, signup } = useSignup();

    const handleCheckboxChange = (gender) => {
        setInputs({ ...inputs, gender });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);
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
                    <div className="mb-6 text-center">
                        <div className="relative w-20 h-20 mx-auto mb-3">
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-red-500 blur-md animate-pulse opacity-70"></div>
                            <img 
                                src={pic} 
                                alt="logo" 
                                className="relative z-10 w-20 h-20 mx-auto drop-shadow-lg transition-all duration-300 hover:scale-110 hover:rotate-3" 
                            />
                        </div>
                        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-300 to-purple-500 animate-text-shimmer">
                            Forge Your Identity
                        </h1>
                        <p className="text-orange-200 mt-1 drop-shadow-md text-sm">Create a new account to join RealTalk</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-1">
                            <label className="text-sm font-medium text-orange-200 block drop-shadow-md">
                                Full Name
                            </label>
                            <div className="relative">
                                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600 to-red-500 opacity-50 blur-sm transform -translate-y-1 translate-x-1"></div>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full px-4 py-2 bg-gray-900/70 rounded-lg border border-purple-800/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/40 outline-none transition-all duration-200 text-orange-100 placeholder-orange-200/50 relative z-10"
                                    value={inputs.fullName}
                                    onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm font-medium text-orange-200 block drop-shadow-md">
                                Username
                            </label>
                            <div className="relative">
                                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-500 to-purple-600 opacity-50 blur-sm transform -translate-y-1 translate-x-1"></div>
                                <input
                                    type="text"
                                    placeholder="johndoe"
                                    className="w-full px-4 py-2 bg-gray-900/70 rounded-lg border border-purple-800/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/40 outline-none transition-all duration-200 text-orange-100 placeholder-orange-200/50 relative z-10"
                                    value={inputs.username}
                                    onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm font-medium text-orange-200 block drop-shadow-md">
                                Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-600 to-red-500 opacity-50 blur-sm transform -translate-y-1 translate-x-1"></div>
                                <input
                                    type="password"
                                    placeholder="Enter Password"
                                    className="w-full px-4 py-2 bg-gray-900/70 rounded-lg border border-purple-800/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/40 outline-none transition-all duration-200 text-orange-100 placeholder-orange-200/50 relative z-10"
                                    value={inputs.password}
                                    onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <label className="text-sm font-medium text-orange-200 block drop-shadow-md">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-500 to-purple-600 opacity-50 blur-sm transform -translate-y-1 translate-x-1"></div>
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    className="w-full px-4 py-2 bg-gray-900/70 rounded-lg border border-purple-800/50 focus:border-red-500 focus:ring-2 focus:ring-red-500/40 outline-none transition-all duration-200 text-orange-100 placeholder-orange-200/50 relative z-10"
                                    value={inputs.confirmPassword}
                                    onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                                />
                            </div>
                        </div>

                        <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

                        <Link
                            to={"/login"}
                            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
                            href="#"
                        >
                            Already have an account?
                        </Link>

                        <div>
                            <button className="rounded-2xl hover:bg-blue-600 btn-block bg-blue-500 text-black text-lg btn-sm mt-2" disabled={loading}>
                                {loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default SignUp;