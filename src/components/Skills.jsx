import { motion } from 'framer-motion';
import { FaGitAlt, FaDocker, FaFeather, FaCode, FaRobot, FaBrain, FaPython } from 'react-icons/fa';
import { SiKubernetes, SiAssemblyscript } from 'react-icons/si';
import { DiCode } from 'react-icons/di';
import { GiArtificialIntelligence, GiProcessor } from 'react-icons/gi';

const Skills = () => {
  const skills = [
    { id: 1, name: 'AI Agent', icon: <GiArtificialIntelligence size={50} />, color: 'text-indigo-500' },
    { id: 2, name: 'AI Work Flow', icon: <GiProcessor size={50} />, color: 'text-pink-500' },
    { id: 3, name: 'TRAE', icon: <FaRobot size={50} />, color: 'text-purple-500' },
    { id: 4, name: 'MarsCode', icon: <DiCode size={50} />, color: 'text-red-500' },
    { id: 5, name: 'Coze', icon: <FaCode size={50} />, color: 'text-green-400' },
    { id: 6, name: 'Prompt Engineer', icon: <FaBrain size={50} />, color: 'text-yellow-400' },
    { id: 7, name: 'Python', icon: <FaPython size={50} />, color: 'text-blue-500' },
    { id: 8, name: 'GIT', icon: <FaGitAlt size={50} />, color: 'text-orange-600' },
    { id: 9, name: 'Docker', icon: <FaDocker size={50} />, color: 'text-blue-400' },
    { id: 10, name: 'Kubernet', icon: <SiKubernetes size={50} />, color: 'text-blue-600' },
    { id: 11, name: 'Feishu', icon: <FaFeather size={50} />, color: 'text-cyan-400' },
    { id: 12, name: 'Assembly Language', icon: <SiAssemblyscript size={50} />, color: 'text-gray-500' }
  ];

  return (
    <div name="skills" className="w-full min-h-screen bg-primary text-light">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-4xl font-bold inline border-b-4 border-secondary">Skills</p>
          <p className="py-4">These are the technologies I'm familiar with</p>
        </motion.div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center py-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className={`${skill.color} mx-auto`}>{skill.icon}</div>
              <p className="my-4">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;