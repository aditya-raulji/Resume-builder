import React from 'react';
import { Phone, Mail, MapPin, Globe, Github, Linkedin } from 'lucide-react';

interface ResumePreviewProps {
  resumeData: any;
  template: any;
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ resumeData, template }) => {
  const { personalInfo, skills, experiences, education, projects } = resumeData;

  return (
    <div className="bg-white shadow-xl rounded-lg overflow-hidden max-w-4xl mx-auto" style={{ fontFamily: template.fontFamily }}>
      {/* Header */}
      <div className="p-8" style={{ backgroundColor: template.primaryColor }}>
        <h1 className="text-3xl font-bold text-white mb-2">{personalInfo.name}</h1>
        <h2 className="text-xl text-white/90 mb-4">{personalInfo.title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-white/80">
          {personalInfo.email && (
            <div className="flex items-center">
              <Mail size={16} className="mr-2" />
              <a href={`mailto:${personalInfo.email}`} className="hover:text-white">{personalInfo.email}</a>
            </div>
          )}
          {personalInfo.phone && (
            <div className="flex items-center">
              <Phone size={16} className="mr-2" />
              <a href={`tel:${personalInfo.phone}`} className="hover:text-white">{personalInfo.phone}</a>
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
              <a href={personalInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-white">Portfolio</a>
            </div>
          )}
          {personalInfo.github && (
            <div className="flex items-center">
              <Github size={16} className="mr-2" />
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-white">GitHub</a>
            </div>
          )}
          {personalInfo.linkedin && (
            <div className="flex items-center">
              <Linkedin size={16} className="mr-2" />
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        {/* Summary */}
        {personalInfo.summary && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3" style={{ color: template.primaryColor }}>Professional Summary</h3>
            <p className="text-gray-700 leading-relaxed">{personalInfo.summary}</p>
          </div>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3" style={{ color: template.primaryColor }}>Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full text-sm"
                  style={{ backgroundColor: template.secondaryColor, color: template.primaryColor }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Experience */}
        {experiences.length > 0 && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3" style={{ color: template.primaryColor }}>Work Experience</h3>
            {experiences.map((exp: any, index: number) => (
              <div key={index} className="mb-4">
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
              </div>
            ))}
          </div>
        )}

        {/* Education */}
        {education.length > 0 && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3" style={{ color: template.primaryColor }}>Education</h3>
            {education.map((edu: any, index: number) => (
              <div key={index} className="mb-4">
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
                {edu.description && <p className="text-gray-700 mt-2">{edu.description}</p>}
              </div>
            ))}
          </div>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3" style={{ color: template.primaryColor }}>Projects</h3>
            {projects.map((project: any, index: number) => (
              <div key={index} className="mb-4">
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
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumePreview;