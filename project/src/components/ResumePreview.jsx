import React, { useRef } from 'react';
import { Phone, Mail, MapPin, Globe, Github, Linkedin, Download, Share2, Printer } from 'lucide-react';
import { motion } from 'framer-motion';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const ResumePreview = ({ resumeData, template }) => {
  const { personalInfo, skills, experiences, education, projects } = resumeData;
  const resumeRef = useRef(null);

  const downloadPDF = async () => {
    const element = resumeRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL('image/png');

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    
    pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('resume.pdf');
  };

  return (
    <div className="bg-gray-100 p-8">
      {/* Preview Controls */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto mb-8 bg-white rounded-lg shadow-lg p-4 flex justify-between items-center"
      >
        <h2 className="text-xl font-semibold text-gray-800">Resume Preview</h2>
        <div className="flex space-x-4">
          <button
            onClick={downloadPDF}
            className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </button>
          <button className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </button>
          <button className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
            <Printer className="w-4 h-4 mr-2" />
            Print
          </button>
        </div>
      </motion.div>

      {/* Resume Preview */}
      <motion.div
        ref={resumeRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden"
        style={{ fontFamily: template.fontFamily }}
      >
        {/* Header */}
        <div 
          className="p-8 relative overflow-hidden"
          style={{ backgroundColor: template.primaryColor }}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full transform -translate-x-24 translate-y-24"></div>

          <div className="relative flex items-center gap-6">
            {personalInfo.photo && (
              <motion.img 
                src={personalInfo.photo}
                alt={personalInfo.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              />
            )}
            <div className="flex-1">
              <motion.h1 
                className="text-3xl font-bold text-white mb-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                {personalInfo.name}
              </motion.h1>
              <motion.h2 
                className="text-xl text-white/90 mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                {personalInfo.title}
              </motion.h2>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-white/80"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {personalInfo.email && (
                  <div className="flex items-center">
                    <Mail size={16} className="mr-2" />
                    <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                )}
                {personalInfo.phone && (
                  <div className="flex items-center">
                    <Phone size={16} className="mr-2" />
                    <a href={`tel:${personalInfo.phone}`} className="hover:text-white transition-colors">
                      {personalInfo.phone}
                    </a>
                  </div>
                )}
                {personalInfo.location && (
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2" />
                    <span>{personalInfo.location}</span>
                  </div>
                )}
                {personalInfo.website && (
                  <div className="flex items-center">
                    <Globe size={16} className="mr-2" />
                    <a href={personalInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      Portfolio
                    </a>
                  </div>
                )}
                {personalInfo.github && (
                  <div className="flex items-center">
                    <Github size={16} className="mr-2" />
                    <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      GitHub
                    </a>
                  </div>
                )}
                {personalInfo.linkedin && (
                  <div className="flex items-center">
                    <Linkedin size={16} className="mr-2" />
                    <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      LinkedIn
                    </a>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Summary */}
          {personalInfo.summary && (
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h3 className="text-xl font-semibold mb-3" style={{ color: template.primaryColor }}>
                Professional Summary
              </h3>
              <p className="text-gray-700 leading-relaxed">{personalInfo.summary}</p>
            </motion.div>
          )}

          {/* Skills */}
          {skills.length > 0 && (
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-3" style={{ color: template.primaryColor }}>
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    className="px-3 py-1 rounded-full text-sm"
                    style={{ 
                      backgroundColor: `${template.primaryColor}10`,
                      color: template.primaryColor,
                      border: `1px solid ${template.primaryColor}30`
                    }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}

          {/* Experience */}
          {experiences.length > 0 && (
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-3" style={{ color: template.primaryColor }}>
                Work Experience
              </h3>
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index} 
                  className="mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-800">{exp.title}</h4>
                      <p className="text-gray-600">{exp.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-600 text-sm">{exp.location}</p>
                      <p className="text-gray-500 text-sm">{exp.startDate} - {exp.endDate}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mt-2">{exp.description}</p>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Education */}
          {education.length > 0 && (
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-3" style={{ color: template.primaryColor }}>
                Education
              </h3>
              {education.map((edu, index) => (
                <motion.div 
                  key={index} 
                  className="mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-800">{edu.degree}</h4>
                      <p className="text-gray-600">{edu.institution}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-600 text-sm">{edu.location}</p>
                      <p className="text-gray-500 text-sm">{edu.startDate} - {edu.endDate}</p>
                    </div>
                  </div>
                  {edu.description && (
                    <p className="text-gray-700 mt-2">{edu.description}</p>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Projects */}
          {projects.length > 0 && (
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-3" style={{ color: template.primaryColor }}>
                Projects
              </h3>
              {projects.map((project, index) => (
                <motion.div 
                  key={index} 
                  className="mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-800">{project.name}</h4>
                      <p className="text-gray-600">{project.role}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-600 text-sm">{project.techStack}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mt-2">{project.description}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ResumePreview;