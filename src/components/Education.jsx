import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Education = () => {
  const education = [
    {
      id: 1,
      school: 'Shanghai Jiao Tong University',
      degree: 'Bachelor',
      major: 'Communication Engineering',
      date: '1995.9 - 1999.7',
      icon: <FaGraduationCap />,
      iconStyle: { background: '#3B82F6', color: '#fff' }
    },
    {
      id: 2,
      school: 'Shanghai Shixi High School',
      degree: 'High School Diploma',
      major: 'General Education',
      date: '1992.9 - 1995.7',
      icon: <FaGraduationCap />,
      iconStyle: { background: '#3B82F6', color: '#fff' }
    }
  ];

  return (
    <div name="education" className="w-full min-h-screen bg-primary text-light py-16">
      <div className="max-w-[1000px] mx-auto p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="pb-8"
        >
          <p className="text-4xl font-bold inline border-b-4 border-secondary">Education</p>
          <p className="py-4">My Academic Background</p>
        </motion.div>

        <VerticalTimeline>
          {education.map((edu) => (
            <VerticalTimelineElement
              key={edu.id}
              className="vertical-timeline-element--education"
              date={edu.date}
              iconStyle={edu.iconStyle}
              icon={edu.icon}
              contentStyle={{ background: '#0f172a', color: '#F8FAFC' }}
              contentArrowStyle={{ borderRight: '7px solid #0f172a' }}
            >
              <h3 className="vertical-timeline-element-title text-xl font-bold">{edu.school}</h3>
              <h4 className="vertical-timeline-element-subtitle text-tertiary">{edu.major}</h4>
              <p>{edu.degree}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Education;