import { Upload, Download } from "lucide-react"

export default function ButtonControlSection(props) {
    const {
        onUploadIcon, onDownloadIcon, onUploadBanner, onDownloadBanner
    } = props

    return (
        <div className="relative w-full mx-auto max-w-7xl mb-4 mt-8">
            {/* Main container with Aero glass effect */}
            <div className="relative bg-gradient-to-b from-blue-400 via-blue-500 to-blue-700 rounded-2xl shadow-2xl border border-blue-300/50 overflow-hidden">
                {/* Glass overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-transparent rounded-2xl"></div>

                {/* Top highlight */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>

                {/* Inner glow */}
                <div className="absolute inset-0 rounded-2xl shadow-inner shadow-blue-300/50"></div>

                <div className="relative px-4 sm:px-6 lg:px-8 py-6">
                    {/* Button grid - 1x4 layout (responsive: stacks on mobile, single row on larger screens) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                        {/* Upload Icon Button */}
                        <button className="relative group cursor-pointer" onClick={onUploadIcon}>
                            {/* Outer glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-xl blur-sm opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>

                            {/* Main button */}
                            <div className="relative w-full bg-gradient-to-br from-green-400 via-green-500 to-green-700 rounded-xl shadow-lg border-2 border-green-200/50 group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 p-3 lg:p-4">
                                {/* Top highlight */}
                                <div className="absolute top-1 left-1 right-1 h-2 lg:h-3 bg-gradient-to-b from-white/60 to-transparent rounded-lg"></div>

                                {/* Inner shadow */}
                                <div className="absolute inset-1 rounded-lg shadow-inner shadow-green-800/30"></div>

                                {/* Button content */}
                                <div className="relative flex flex-col lg:flex-row items-center justify-center space-y-2 lg:space-y-0 lg:space-x-2">
                                    <div className="w-6 h-6 lg:w-8 lg:h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Upload className="w-4 h-4 lg:w-5 lg:h-5 text-white drop-shadow-md" />
                                    </div>
                                    <span
                                        className="text-white font-semibold text-xs lg:text-sm text-center lg:text-left drop-shadow-md leading-tight"
                                        style={{ fontFamily: '"Segoe UI", "Frutiger", "Helvetica Neue", Arial, sans-serif' }}
                                    >
                                        Upload Icon Image
                                    </span>
                                </div>

                                {/* Glossy overlay */}
                                <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/10 rounded-xl"></div>
                            </div>
                        </button>

                        {/* Download Icon Button */}
                        <button className="relative group cursor-pointer" onClick={onDownloadIcon}>
                            {/* Outer glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl blur-sm opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>

                            {/* Main button */}
                            <div className="relative w-full bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-700 rounded-xl shadow-lg border-2 border-emerald-200/50 group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 p-3 lg:p-4">
                                {/* Top highlight */}
                                <div className="absolute top-1 left-1 right-1 h-2 lg:h-3 bg-gradient-to-b from-white/60 to-transparent rounded-lg"></div>

                                {/* Inner shadow */}
                                <div className="absolute inset-1 rounded-lg shadow-inner shadow-emerald-800/30"></div>

                                {/* Button content */}
                                <div className="relative flex flex-col lg:flex-row items-center justify-center space-y-2 lg:space-y-0 lg:space-x-2">
                                    <div className="w-6 h-6 lg:w-8 lg:h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Download className="w-4 h-4 lg:w-5 lg:h-5 text-white drop-shadow-md" />
                                    </div>
                                    <span
                                        className="text-white font-semibold text-xs lg:text-sm text-center lg:text-left drop-shadow-md leading-tight"
                                        style={{ fontFamily: '"Segoe UI", "Frutiger", "Helvetica Neue", Arial, sans-serif' }}
                                    >
                                        Download Icon Image
                                    </span>
                                </div>

                                {/* Glossy overlay */}
                                <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/10 rounded-xl"></div>
                            </div>
                        </button>

                        {/* Upload Banner Button */}
                        <button className="relative group cursor-pointer" onClick={onUploadBanner}>
                            {/* Outer glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl blur-sm opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>

                            {/* Main button */}
                            <div className="relative w-full bg-gradient-to-br from-purple-400 via-purple-500 to-purple-700 rounded-xl shadow-lg border-2 border-purple-200/50 group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 p-3 lg:p-4">
                                {/* Top highlight */}
                                <div className="absolute top-1 left-1 right-1 h-2 lg:h-3 bg-gradient-to-b from-white/60 to-transparent rounded-lg"></div>

                                {/* Inner shadow */}
                                <div className="absolute inset-1 rounded-lg shadow-inner shadow-purple-800/30"></div>

                                {/* Button content */}
                                <div className="relative flex flex-col lg:flex-row items-center justify-center space-y-2 lg:space-y-0 lg:space-x-2">
                                    <div className="w-6 h-6 lg:w-8 lg:h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Upload className="w-4 h-4 lg:w-5 lg:h-5 text-white drop-shadow-md" />
                                    </div>
                                    <span
                                        className="text-white font-semibold text-xs lg:text-sm text-center lg:text-left drop-shadow-md leading-tight"
                                        style={{ fontFamily: '"Segoe UI", "Frutiger", "Helvetica Neue", Arial, sans-serif' }}
                                    >
                                        Upload Banner Image
                                    </span>
                                </div>

                                {/* Glossy overlay */}
                                <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/10 rounded-xl"></div>
                            </div>
                        </button>

                        {/* Download Banner Button */}
                        <button className="relative group cursor-pointer" onClick={onDownloadBanner}>
                            {/* Outer glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-violet-400 to-violet-600 rounded-xl blur-sm opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>

                            {/* Main button */}
                            <div className="relative w-full bg-gradient-to-br from-violet-400 via-violet-500 to-violet-700 rounded-xl shadow-lg border-2 border-violet-200/50 group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 p-3 lg:p-4">
                                {/* Top highlight */}
                                <div className="absolute top-1 left-1 right-1 h-2 lg:h-3 bg-gradient-to-b from-white/60 to-transparent rounded-lg"></div>

                                {/* Inner shadow */}
                                <div className="absolute inset-1 rounded-lg shadow-inner shadow-violet-800/30"></div>

                                {/* Button content */}
                                <div className="relative flex flex-col lg:flex-row items-center justify-center space-y-2 lg:space-y-0 lg:space-x-2">
                                    <div className="w-6 h-6 lg:w-8 lg:h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Download className="w-4 h-4 lg:w-5 lg:h-5 text-white drop-shadow-md" />
                                    </div>
                                    <span
                                        className="text-white font-semibold text-xs lg:text-sm text-center lg:text-left drop-shadow-md leading-tight"
                                        style={{ fontFamily: '"Segoe UI", "Frutiger", "Helvetica Neue", Arial, sans-serif' }}
                                    >
                                        Download Banner Image
                                    </span>
                                </div>

                                {/* Glossy overlay */}
                                <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-black/10 rounded-xl"></div>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Bottom edge highlight */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-800/50 to-transparent"></div>
            </div>

            {/* Reflection effect */}
            <div className="absolute top-full left-0 right-0 h-8 bg-gradient-to-b from-blue-500/20 to-transparent rounded-b-2xl transform scale-y-[-1] blur-sm opacity-40"></div>
        </div>
    )
}