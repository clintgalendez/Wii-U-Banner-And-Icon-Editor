import { Github, Linkedin, Mail, Phone } from "lucide-react"

export default function Footer() {
    return (
        <footer className="w-full bg-gray-50 shadow-sm rounded-lg mx-auto max-w-7xl mb-4 mt-8">
            <div className="px-4 sm:px-6 lg:px-8 py-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    {/* Left section - Website info */}
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-bold text-gray-800 mb-2"><span className="text-blue-500">Wii U</span> Icon and Banner Editor</h3>
                        <p className="text-sm text-gray-600">Create a custom Wii U Banner and Icon for your WUP needs.</p>
                    </div>

                    {/* Center section - Contact details */}
                    <div className="text-center">
                        <h4 className="text-md font-semibold text-gray-800 mb-3">Contact Me</h4>
                        <div className="space-y-2">
                            <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                                <Mail className="w-4 h-4" />
                                <span>galendez.clintjonathan@gmail.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Right section - Social links */}
                    <div className="text-center md:text-right">
                        <h4 className="text-md font-semibold text-gray-800 mb-3">Follow Me</h4>
                        <div className="flex justify-center md:justify-end space-x-4">
                            <a
                                href="https://www.linkedin.com/in/clintgalendez/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg"
                                aria-label="LinkedIn Profile"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="https://github.com/clintgalendez/Wii-U-Banner-And-Icon-Editor"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center w-10 h-10 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg"
                                aria-label="GitHub Profile"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom section - Copyright */}
                <div className="border-t border-gray-200 mt-6 pt-4">
                    <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
                        <p className="text-sm text-gray-600">
                            (c) {new Date().getFullYear()} Clint's Online Gizmos. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
