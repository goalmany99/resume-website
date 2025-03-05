import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'AI Literature Speed Reader',
      description: 'An APP built with Feishu multi-dimensional tables. After users input paper links, it calls DeepSeek R1 to quickly extract the core arguments, literature review, theoretical mechanisms, key contributions, and research methods from papers. It can reduce paper reading time by 70%-80%. For example, I recently used it to complete reading the DeepSeek-R1 paper "Incentivizing Reasoning Capability in LLMs via Reinforcement Learning" in just 2 hours, which would have taken days before.',
      image: '/projects/project_1_AI_Literature_Speed_Reader.png',
      tags: ['DeepSeek R1', 'Feishu'],
      demo: 'https://www.feishu.cn/hc/en-US/articles/360040967011-Build-a-base-to-manage-your-data',
      role: 'Full Stack Developer',
      note: 'Idea from Doctor Cynthia'
    },
    {
      id: 2,
      title: 'AI Fund Evaluation',
      description: 'An AI application built with Coze, available on both PC and mobile. After users input a fund name, it calls an AI workflow where DeepSeek extracts various fund data, which is then professionally analyzed by a financial LLM to provide an evaluation of the fund for investors\'reference.',
      image: '/projects/project_2_AI Fund Evaluation.png',
      tags: ['DeepSeek R1', 'Coze', 'Financial LLM'],
      demo: 'https://www.coze.com/store/bot/7348682926311841794',
      role: 'Full Stack Developer',
      note: 'Idea from financial engineering paper "Fund Evaluation Based on ChatGPT", adapted by myself'
    },
    {
      id: 3,
      title: 'AI News Sentiment Report',
      description: 'An AI application built with Coze. Users can input financial news links to trigger an AI workflow that uses large models to analyze news sentiment, score it, and automatically generate research reports. Users can also input stock names to have the model retrieve the latest 3 news items about the stock for sentiment analysis, scoring, and report generation, providing reference for investors.',
      image: '/projects/project_3_AI News Sentiment Report.png',
      tags: ['DeepSeek R1', 'Coze', 'Financial LLM'],
      demo: 'https://www.coze.com/store/bot/7348683001347842050',
      role: 'Full Stack Developer',
      note: 'Idea from financial engineering paper "Crude Oil Futures Strategy Based on ChatGPT News Sentiment Analysis", adapted by myself'
    },
    {
      id: 4,
      title: 'Commodity Futures Quantitative Strategy',
      description: 'A commodity futures strategy using code written with MarsCode for quantitative backtesting and ChatGPT for data analysis of the backtest data.',
      image: '/projects/project_4_Commodity Futures Quantitative Strategy.png',
      tags: ['Marscode', 'ChatGPT'],
      demo: 'https://marscode.io/',
      role: 'Full Stack Developer',
      note: 'Idea/Development/Analysis by myself'
    },
    {
      id: 5,
      title: 'Oxford English Grade 2 AI Learning Assistant',
      description: 'An AI workflow built with Coze. After reading and storing Oxford English Grade 2 textbook content in a knowledge base, it uses the "Doubao" large model to call workflows and RAG to assist students in learning English.',
      image: '/projects/project_5_Oxford English Grade 2 AI Learning Assistant.png',
      tags: ['RAG', 'Doubao', 'Coze'],
      demo: 'https://www.coze.com/store/bot/7348683076452638722',
      role: 'Full Stack Developer',
      note: 'Idea/Development by myself'
    },
    {
      id: 6,
      title: 'AI ID Photo Generator',
      description: 'An AI application built with Coze. After users input a photo, it automatically generates 3 different ID photos for users to choose from.',
      image: '/projects/projcet_6_AI ID Photo Generator.png',
      tags: ['Coze'],
      demo: 'https://www.coze.com/store/bot/7348683151557836802',
      role: 'Full Stack Developer',
      note: 'Idea by Wayne AI agent Studio'
    },
    {
      id: 7,
      title: 'First 5G SRVCC Commercial Call in the World',
      description: 'Using Ericsson 5G technology, we made the world\'s first 5G SRVCC call on China Mobile\'s commercial network, ahead of all other competitors including Huawei, Nokia, Lucent, ZTE, etc.',
      image: '/projects/project_7_First 5G SRVCC Commercial Call in the World.png',
      tags: ['3GPP Standard', 'Trouble Shooting'],
      demo: null,
      role: 'Team Leader/Trouble Shooter of MSC',
      note: ''
    },
    {
      id: 8,
      title: 'KDDI Stress Test',
      description: 'Using Ericsson 5G technology to conduct stress tests for Japanese operator KDDI, testing that the network would not crash under an extreme traffic model 10 times the normal load.',
      image: '/projects/project_8_KDDI Stress Test.png',
      tags: ['3GPP Standard', 'Trouble Shooting'],
      demo: null,
      role: 'Trouble Shooter of HSS',
      note: ''
    },
    {
      id: 9,
      title: 'New Feature Delivery to Operators All Over the World',
      description: 'At Ericsson R&D Center, providing market-customized software testing and delivery for major telecom operators worldwide, including Vodafone, Deutsche Telekom, Sintel, SoftBank, TATA Telecom, Telstra, etc.',
      image: '/projects/project_9_New Feature Delivery to Operators All Over the World.png',
      tags: ['3GPP Standard', 'Trouble Shooting'],
      demo: null,
      role: 'Test Leader/Trouble Shooter of MSC/HSS',
      note: ''
    },
  ];

  return (
    <div name="projects" className="w-full min-h-screen bg-primary text-light py-16">
      <div className="max-w-[1000px] mx-auto p-4">
        <motion.div 
          className="pb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-4xl font-bold inline border-b-4 border-secondary">Projects</p>
          <p className="py-4">These are some of my recent projects</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id} 
              className="shadow-lg shadow-[#040c16] rounded-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-tertiary mb-2">{project.title}</h3>
                <p className="text-sm mb-2"><strong>Role:</strong> {project.role}</p>
                <p className="text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="text-xs bg-dark px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.note && <p className="text-xs mt-2 italic">Note: {project.note}</p>}
                {project.demo && (
                  <div className="flex justify-center mt-2">
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-light hover:text-secondary duration-300 flex items-center"
                    >
                      <FaExternalLinkAlt className="mr-1" /> Demo
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;