import { motion } from 'framer-motion';

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-primary text-light">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <motion.p 
              className="text-4xl font-bold inline border-b-4 border-secondary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              About Me
            </motion.p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <motion.div 
            className="flex justify-center sm:justify-end items-center"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] rounded-full overflow-hidden border-4 border-secondary shadow-lg">
              <img 
                src="/ding.jpg" 
                alt="Ding Wang" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col justify-center"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >

            <p>
              I have 20 years of software testing experience, familiar with various types of testing, especially skilled in system testing, able to discover hidden issues in systems.
              I believe technology can change the world, and I hope to make a positive contribution to this world through my skills.
              Outside of work, I enjoy reading technical blogs, participating in open source projects, and exploring new programming languages and frameworks.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;