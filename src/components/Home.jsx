import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaWeixin } from 'react-icons/fa';

const Home = () => {
  return (
    <div name="home" className="w-full min-h-screen bg-primary pt-[80px]">
      <div className="max-w-[1200px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center h-full py-8">
        <motion.div
          className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-4xl font-bold text-secondary">
            Hello,
          </h2>
          <h2 className="text-2xl sm:text-4xl font-bold text-light">
            This is <span className="text-pink-500">Ding Wang</span>
          </h2>
          <h2 className="text-2xl sm:text-4xl font-bold text-tertiary mt-2">
            I was a Professional <span className="text-green-400">Verification Engineer</span>
          </h2>
          <h2 className="text-2xl sm:text-4xl font-bold text-blue-400 mt-2">
            now I am upgrading to <span className="text-purple-500">An expert of AIGC</span>
          </h2>
          <p className="text-light py-4 max-w-[700px]">
            
          </p>
          <div className="flex gap-4 my-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-light hover:text-secondary transition-colors duration-300">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-light hover:text-secondary transition-colors duration-300">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="text-light hover:text-secondary transition-colors duration-300">
              <FaWeixin size={24} />
            </a>
          </div>
          <div>
            <Link to="projects" smooth={true} duration={500}>
              <button className="text-tertiary group border-2 px-6 py-3 my-2 flex items-center hover:bg-secondary hover:border-secondary hover:text-light duration-300">
                View Projects
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3" />
                </span>
              </button>
            </Link>
          </div>
        </motion.div>
        
        <motion.div
          className="w-full md:w-1/2 bg-dark rounded-lg shadow-xl overflow-hidden"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-gray-400 text-sm ml-2">coder.js</span>
          </div>
          <div className="p-4 font-mono text-sm">
            <div className="text-left">
              <span className="text-green-400">const </span>
              <span className="text-blue-400">coder </span>
              <span className="text-white">= </span>
              <span className="text-white">&#123;</span>
              <div className="pl-4">
                <span className="text-blue-400">name</span>
                <span className="text-white">: </span>
                <span className="text-yellow-300">'Ding Wang'</span>
                <span className="text-white">,</span>
              </div>
              <div className="pl-4">
                <span className="text-blue-400">skills</span>
                <span className="text-white">: [</span>
                <span className="text-yellow-300">'TRAE'</span>
                <span className="text-white">, </span>
                <span className="text-yellow-300">'MarsCode'</span>
                <span className="text-white">, </span>
                <span className="text-yellow-300">'Coze'</span>
                <span className="text-white">, </span>
                <span className="text-yellow-300">'Prompt Engineering'</span>
                <span className="text-white">,</span>
                <span className="text-yellow-300">'Python'</span>
                <span className="text-white">, </span>
                <span className="text-yellow-300">'GIT'</span>
                <span className="text-white">, </span>
                <span className="text-yellow-300">'Kubernet'</span>
                <span className="text-white">, </span>
                <span className="text-yellow-300">'Docker'</span>
                <span className="text-white">, </span>
                <span className="text-yellow-300">'FeiShu'</span>
                <span className="text-white">],</span>
              </div>
              <div className="pl-4">
                <span className="text-blue-400">hardWorker</span>
                <span className="text-white">: </span>
                <span className="text-orange-500">true</span>
                <span className="text-white">,</span>
              </div>
              <div className="pl-4">
                <span className="text-blue-400">quickLearner</span>
                <span className="text-white">: </span>
                <span className="text-orange-500">true</span>
                <span className="text-white">,</span>
              </div>
              <div className="pl-4">
                <span className="text-blue-400">problemSolver</span>
                <span className="text-white">: </span>
                <span className="text-orange-500">true</span>
                <span className="text-white">,</span>
              </div>
              <div className="pl-4">
                <span className="text-cyan-400">hireable</span>
                <span className="text-white">: </span>
                <span className="text-red-400">function</span>
                <span className="text-white">() &#123;</span>
              </div>
              <div className="pl-8">
                <span className="text-red-400">return </span>
                <span className="text-white">(</span>
              </div>
              <div className="pl-12">
                <span className="text-cyan-400">this</span>
                <span className="text-white">.</span>
                <span className="text-blue-400">hardWorker </span>
                <span className="text-yellow-500">&amp;&amp;</span>
              </div>
              <div className="pl-12">
                <span className="text-cyan-400">this</span>
                <span className="text-white">.</span>
                <span className="text-blue-400">problemSolver </span>
                <span className="text-yellow-500">&amp;&amp;</span>
              </div>
              <div className="pl-12">
                <span className="text-cyan-400">this</span>
                <span className="text-white">.</span>
                <span className="text-blue-400">skills</span>
                <span className="text-white">.</span>
                <span className="text-blue-400">length </span>
                <span className="text-yellow-500">&gt;=</span>
                <span className="text-purple-500"> 5</span>
              </div>
              <div className="pl-8">
                <span className="text-white">);</span>
              </div>
              <div className="pl-4">
                <span className="text-white">&#125;</span>
              </div>
              <div>
                <span className="text-white">&#125;;</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;