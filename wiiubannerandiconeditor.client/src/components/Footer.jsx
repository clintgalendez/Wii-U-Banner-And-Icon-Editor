import { Github, Linkedin, Mail, Phone } from "lucide-react"

export default function Footer() {
    return (
        <div className="relative w-full mx-auto max-w-7xl mt-4">
            {/* Main footer container with Aero glass effect */}
            <footer className="relative bg-gradient-to-b from-blue-400 via-blue-500 to-blue-700 rounded-2xl shadow-2xl border border-blue-300/50 overflow-hidden">
                {/* Glass overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-transparent rounded-2xl"></div>

                {/* Top highlight */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>

                {/* Inner glow */}
                <div className="absolute inset-0 rounded-2xl shadow-inner shadow-blue-300/50"></div>

                <div className="relative px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                        {/* Left section - Website info */}
                        <div className="text-center md:text-left">
                            <div className="relative">
                                <h3
                                    className="text-lg font-semibold text-white drop-shadow-lg mb-3 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent"
                                    style={{ fontFamily: '"Segoe UI", "Frutiger", "Helvetica Neue", Arial, sans-serif' }}
                                >
                                    Wii U Icon and Banner Editor
                                </h3>
                                <div className="absolute -bottom-1 left-0 md:left-0 right-0 md:right-auto md:w-3/4 h-px bg-gradient-to-r from-white/40 via-blue-200/60 to-transparent"></div>
                            </div>
                            <p
                                className="text-sm text-blue-100 drop-shadow-md mt-4 leading-relaxed"
                                style={{ fontFamily: '"Segoe UI", "Frutiger", "Helvetica Neue", Arial, sans-serif' }}
                            >
                                Create a custom Wii U Banner and Icon for your WUP needs.
                            </p>
                        </div>

                        {/* Center section - Contact details */}
                        <div className="text-center">
                            <div className="relative mb-4">
                                <h4
                                    className="text-md font-semibold text-white drop-shadow-lg bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent"
                                    style={{ fontFamily: '"Segoe UI", "Frutiger", "Helvetica Neue", Arial, sans-serif' }}
                                >
                                    Contact Us
                                </h4>
                                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                            </div>
                            <div className="space-y-3">
                                {/* Email contact with glass effect */}
                                <div className="flex items-center justify-center space-x-3 p-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                                    <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                                        <Mail className="w-4 h-4 text-white drop-shadow-sm" />
                                    </div>
                                    <span
                                        className="text-sm text-blue-100 drop-shadow-md font-medium"
                                        style={{ fontFamily: '"Segoe UI", "Frutiger", "Helvetica Neue", Arial, sans-serif' }}
                                    >
                                        support@wiiueditor.com
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right section - Social links */}
                        <div className="text-center md:text-right">
                            <div className="relative mb-4">
                                <h4
                                    className="text-md font-semibold text-white drop-shadow-lg bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent"
                                    style={{ fontFamily: '"Segoe UI", "Frutiger", "Helvetica Neue", Arial, sans-serif' }}
                                >
                                    Follow Us
                                </h4>
                                <div className="absolute -bottom-1 right-0 md:right-0 left-0 md:left-auto md:w-3/4 h-px bg-gradient-to-l from-white/40 via-blue-200/60 to-transparent"></div>
                            </div>
                            <div className="flex justify-center md:justify-end space-x-4">
                                {/* LinkedIn with enhanced Aero styling */}
                                <a
                                    href="https://www.linkedin.com/in/clintgalendez/"
                                    className="relative group"
                                    aria-label="LinkedIn Profile"
                                >
                                    {/* Outer glow */}
                                    <div className="absolute inset-0 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-700 rounded-2xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* Main button */}
                                    <div className="relative w-12 h-12 bg-gradient-to-br from-blue-400 via-blue-600 to-blue-800 rounded-2xl shadow-lg border-2 border-blue-200/50 group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                                        {/* Top highlight */}
                                        <div className="absolute top-1 left-1 right-1 h-3 bg-gradient-to-b from-white/60 to-transparent rounded-2xl"></div>

                                        {/* Inner shadow */}
                                        <div className="absolute inset-1 rounded-2xl shadow-inner shadow-blue-900/30"></div>

                                        {/* Icon */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Linkedin className="w-6 h-6 text-white drop-shadow-md" />
                                        </div>

                                        {/* Glossy overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/10 rounded-2xl"></div>
                                    </div>
                                </a>

                                {/* GitHub with enhanced Aero styling */}
                                <a href="https://github.com/wiiueditor" className="relative group" aria-label="GitHub Profile">
                                    {/* Outer glow */}
                                    <div className="absolute inset-0 w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-900 rounded-2xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* Main button */}
                                    <div className="relative w-12 h-12 bg-gradient-to-br from-gray-600 via-gray-800 to-black rounded-2xl shadow-lg border-2 border-gray-400/50 group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                                        {/* Top highlight */}
                                        <div className="absolute top-1 left-1 right-1 h-3 bg-gradient-to-b from-white/40 to-transparent rounded-2xl"></div>

                                        {/* Inner shadow */}
                                        <div className="absolute inset-1 rounded-2xl shadow-inner shadow-black/50"></div>

                                        {/* Icon */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <Github className="w-6 h-6 text-white drop-shadow-md" />
                                        </div>

                                        {/* Glossy overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-white/15 via-transparent to-black/20 rounded-2xl"></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Separator with glass effect */}
                    <div className="relative mt-8 mb-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-white/20"></div>
                        </div>
                        <div className="relative flex justify-center">
                            <div className="px-4 bg-gradient-to-r from-transparent via-blue-500 to-transparent">
                                <div className="w-2 h-2 bg-gradient-to-br from-white/60 to-blue-200/40 rounded-full shadow-sm"></div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom section - Copyright with enhanced styling */}
                    <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
                        <p
                            className="text-sm text-blue-100 drop-shadow-md"
                            style={{ fontFamily: '"Segoe UI", "Frutiger", "Helvetica Neue", Arial, sans-serif' }}
                        >
                            (c) {new Date().getFullYear()} Wii U Icon and Banner Editor. All rights reserved.
                        </p>
                    </div>
                </div>

                {/* Bottom edge highlight */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-800/50 to-transparent"></div>
            </footer>

            {/* Reflection effect */}
            <div className="absolute top-full left-0 right-0 h-8 bg-gradient-to-b from-blue-500/20 to-transparent rounded-b-2xl transform scale-y-[-1] blur-sm opacity-40"></div>
        </div>
    )
}
