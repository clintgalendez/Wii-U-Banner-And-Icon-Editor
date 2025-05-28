export default function Component() {
    return (
        <nav className="w-full mx-auto max-w-7xl mt-4 mb-8 relative">
            {/* Main navigation container with Aero glass effect */}
            <div className="relative bg-gradient-to-b from-blue-400 via-blue-500 to-blue-700 rounded-2xl shadow-2xl border border-blue-300/50 overflow-hidden">
                {/* Glass overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-transparent rounded-2xl"></div>

                {/* Top highlight */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>

                {/* Inner glow */}
                <div className="absolute inset-0 rounded-2xl shadow-inner shadow-blue-300/50"></div>

                <div className="relative px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Left side - Website title with Frutiger-inspired typography */}
                        <div className="flex-shrink-0">
                            <a href="/" className="flex items-center group">
                                <h1
                                    className="text-lg sm:text-xl lg:text-2xl font-medium text-white drop-shadow-lg hover:drop-shadow-xl transition-all duration-300 group-hover:scale-105"
                                    style={{ fontFamily: '"Segoe UI", "Frutiger", "Helvetica Neue", Arial, sans-serif' }}
                                >
                                    <span className="hidden sm:inline bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent font-semibold">
                                        Wii U Icon and Banner Editor
                                    </span>
                                    <span className="sm:hidden bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent font-semibold">
                                        Wii U Editor
                                    </span>
                                </h1>
                            </a>
                        </div>

                        {/* Right side - C.O.G. logo with enhanced skeuomorphic design */}
                        <div className="flex-shrink-0">
                            <div className="relative group cursor-pointer">
                                {/* Outer glow */}
                                <div className="absolute inset-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-orange-400 to-red-600 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Main logo container */}
                                <div className="relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-orange-300 via-orange-500 to-red-700 rounded-full shadow-lg border-2 border-orange-200/50 group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">

                                    {/* Inner shadow for depth */}
                                    <div className="absolute inset-1 rounded-full shadow-inner shadow-red-800/30"></div>

                                    <img src={`${import.meta.env.BASE_URL}cog_logo.png`} alt="C.O.G. Logo" />

                                    {/* Glossy overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/10 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom edge highlight */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-800/50 to-transparent"></div>
            </div>

            {/* Reflection effect */}
            <div className="absolute top-full left-0 right-0 h-8 bg-gradient-to-b from-blue-500/20 to-transparent rounded-b-2xl transform scale-y-[-1] blur-sm opacity-40"></div>
        </nav>
    )
}
