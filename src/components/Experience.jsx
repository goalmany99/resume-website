import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Telecommunications Software Testing Expert',
      company: 'Ericsson (China) Communications Software Co., Ltd.',
      location: 'Shanghai',
      description: 'Deeply responsible for 4G and 5G mobile communication core network key element testing, precisely controlling network performance; simultaneously leading the entire process of customer customized software, following through from requirement analysis to delivery. Successfully implemented major projects for domestic and international mainstream operators.',
      date: '2000.12 - 2024.11',
      icon: <FaBriefcase />,
      iconStyle: { background: '#F97316', color: '#fff' }
    },
    {
      id: 2,
      title: 'Communication Network Technical Support Engineer',
      company: 'Shanghai Bell Alcatel Mobile Communication Systems Co., Ltd.',
      location: 'Shanghai',
      description: 'Deeply responsible for communication network technical support work, actively undertaking and properly resolving numerous thorny technical issues, efficiently handling various customer inquiries and feedback, ensuring stable operation of communication networks.',
      date: '1999.8 - 2000.12',
      icon: <FaBriefcase />,
      iconStyle: { background: '#F97316', color: '#fff' }
    },
  ];

  return (
    <div name="experience" className="w-full min-h-screen bg-primary text-light py-16">
      <div className="max-w-[1000px] mx-auto p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="pb-8"
        >
          <p className="text-4xl font-bold inline border-b-4 border-secondary">Experience</p>
          <p className="py-4">My Professional Journey</p>
        </motion.div>

        <VerticalTimeline>
          {experiences.map((exp) => (
            <VerticalTimelineElement
              key={exp.id}
              className="vertical-timeline-element--work"
              date={exp.date}
              iconStyle={exp.iconStyle}
              icon={exp.icon}
              contentStyle={{ background: '#0f172a', color: '#F8FAFC' }}
              contentArrowStyle={{ borderRight: '7px solid #0f172a' }}
            >
              <h3 className="vertical-timeline-element-title text-xl font-bold">{exp.title}</h3>
              <h4 className="vertical-timeline-element-subtitle text-tertiary">{exp.company}, {exp.location}</h4>
              <p>{exp.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;