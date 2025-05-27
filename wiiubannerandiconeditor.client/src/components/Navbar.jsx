export default function Component() {
    return (
        <nav className="w-full bg-gray-50 shadow-sm rounded-lg mx-auto max-w-7xl mt-4">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Left side - Website title */}
                    <div className="flex-shrink-0">
                        <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors duration-200">
                            <span className="hidden sm:inline">Wii U Icon and Banner Editor</span>
                            <span className="sm:hidden">Wii U Editor</span>
                        </h1>
                    </div>

                    {/* Right side - C.O.G. logo */}
                    <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105">
                            <span className="text-white font-bold text-sm sm:text-base tracking-wider">C.O.G.</span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}