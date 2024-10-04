import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-white">Sakshi Jogdand</h2>
            <p className="text-sm mt-1">Full Stack Developer</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/SakshiJogdand9011" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <FaGithub className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/sakshi-jogdand7744/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <FaLinkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://x.com/language_sakshi" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <FaTwitter className="w-6 h-6" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Sakshi Jogdand. All rights reserved.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            {' | '}
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  )
}