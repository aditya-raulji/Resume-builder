import React from 'react';
import { User, Briefcase, GraduationCap, Award, Phone, Mail, MapPin, Globe, Github, Linkedin, Plus, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';

const ResumeForm = ({ resumeData, setResumeData, templateColor, onPhotoUpload }) => {
  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setResumeData({
      ...resumeData,
      personalInfo: {
        ...resumeData.personalInfo,
        [name]: value,
      },
    });
  };

  const handleSkillChange = (index, value) => {
    const updatedSkills = [...resumeData.skills];
    updatedSkills[index] = value;
    setResumeData({
      ...resumeData,
      skills: updatedSkills,
    });
  };

  const addSkill = () => {
    setResumeData({
      ...resumeData,
      skills: [...resumeData.skills, ''],
    });
  };

  const removeSkill = (index) => {
    const updatedSkills = resumeData.skills.filter((_, i) => i !== index);
    setResumeData({
      ...resumeData,
      skills: updatedSkills,
    });
  };

  const handleExperienceChange = (index, field, value) => {
    const updatedExperiences = [...resumeData.experiences];
    updatedExperiences[index] = {
      ...updatedExperiences[index],
      [field]: value,
    };
    setResumeData({
      ...resumeData,
      experiences: updatedExperiences,
    });
  };

  const addExperience = () => {
    setResumeData({
      ...resumeData,
      experiences: [
        ...resumeData.experiences,
        { title: '', company: '', location: '', startDate: '', endDate: '', description: '' },
      ],
    });
  };

  const removeExperience = (index) => {
    const updatedExperiences = resumeData.experiences.filter((_, i) => i !== index);
    setResumeData({
      ...resumeData,
      experiences: updatedExperiences,
    });
  };

  const handleEducationChange = (index, field, value) => {
    const updatedEducation = [...resumeData.education];
    updatedEducation[index] = {
      ...updatedEducation[index],
      [field]: value,
    };
    setResumeData({
      ...resumeData,
      education: updatedEducation,
    });
  };

  const addEducation = () => {
    setResumeData({
      ...resumeData,
      education: [
        ...resumeData.education,
        { degree: '', institution: '', location: '', startDate: '', endDate: '', description: '' },
      ],
    });
  };

  const removeEducation = (index) => {
    const updatedEducation = resumeData.education.filter((_, i) => i !== index);
    setResumeData({
      ...resumeData,
      education: updatedEducation,
    });
  };

  const handleProjectChange = (index, field, value) => {
    const updatedProjects = [...resumeData.projects];
    updatedProjects[index] = {
      ...updatedProjects[index],
      [field]: value,
    };
    setResumeData({
      ...resumeData,
      projects: updatedProjects,
    });
  };

  const addProject = () => {
    setResumeData({
      ...resumeData,
      projects: [
        ...resumeData.projects,
        { name: '', role: '', techStack: '', description: '' },
      ],
    });
  };

  const removeProject = (index) => {
    const updatedProjects = resumeData.projects.filter((_, i) => i !== index);
    setResumeData({
      ...resumeData,
      projects: updatedProjects,
    });
  };

  const getColorStyle = () => {
    return {
      backgroundColor: templateColor,
      color: '#fff',
      borderColor: templateColor
    };
  };

  const getButtonStyle = () => {
    return {
      backgroundColor: templateColor,
      color: '#fff',
      borderColor: templateColor,
      ':hover': {
        backgroundColor: `${templateColor}dd`,
      }
    };
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-xl border border-white/20 w-full max-w-4xl mx-auto"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.h2 
        className="text-2xl font-bold mb-6 text-white border-b pb-2 border-white/20"
        variants={item}
      >
        Resume Information
      </motion.h2>
      
      <motion.div className="mb-6" variants={item}>
        <div className="flex items-center mb-4">
          <User className="mr-2 text-white" size={20} />
          <h3 className="text-xl font-semibold text-white">Personal Information</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-white mb-1">Profile Photo</label>
            <input
              type="file"
              accept="image/*"
              onChange={onPhotoUpload}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={resumeData.personalInfo.name}
              onChange={handlePersonalInfoChange}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/50"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-1">Job Title</label>
            <input
              type="text"
              name="title"
              value={resumeData.personalInfo.title}
              onChange={handlePersonalInfoChange}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/50"
              placeholder="Full Stack Developer"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={resumeData.personalInfo.email}
              onChange={handlePersonalInfoChange}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/50"
              placeholder="john.doe@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-1">Phone</label>
            <input
              type="text"
              name="phone"
              value={resumeData.personalInfo.phone}
              onChange={handlePersonalInfoChange}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/50"
              placeholder="+1 234 567 890"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-1">Location</label>
            <input
              type="text"
              name="location"
              value={resumeData.personalInfo.location}
              onChange={handlePersonalInfoChange}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/50"
              placeholder="New York, NY"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-1">Website</label>
            <input
              type="text"
              name="website"
              value={resumeData.personalInfo.website}
              onChange={handlePersonalInfoChange}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/50"
              placeholder="https://yourportfolio.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-1">LinkedIn</label>
            <input
              type="text"
              name="linkedin"
              value={resumeData.personalInfo.linkedin}
              onChange={handlePersonalInfoChange}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/50"
              placeholder="https://linkedin.com/in/johndoe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-1">GitHub</label>
            <input
              type="text"
              name="github"
              value={resumeData.personalInfo.github}
              onChange={handlePersonalInfoChange}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/50"
              placeholder="https://github.com/johndoe"
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-white mb-1">Summary</label>
          <textarea
            name="summary"
            value={resumeData.personalInfo.summary}
            onChange={handlePersonalInfoChange}
            rows={4}
            className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/50"
            placeholder="A brief summary of your professional background and goals"
          ></textarea>
        </div>
      </motion.div>

      <motion.div className="mb-6" variants={item}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Award className="mr-2 text-white" size={20} />
            <h3 className="text-xl font-semibold text-white">Skills</h3>
          </div>
          <button
            type="button"
            onClick={addSkill}
            className="px-3 py-1 rounded-md hover:bg-opacity-80 transition-colors flex items-center"
            style={getButtonStyle()}
          >
            <Plus size={16} className="mr-1" />
            Add Skill
          </button>
        </div>
        {resumeData.skills.map((skill, index) => (
          <motion.div 
            key={index} 
            className="flex items-center mb-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <input
              type="text"
              value={skill}
              onChange={(e) => handleSkillChange(index, e.target.value)}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/50"
              placeholder="e.g., React.js, Node.js, etc."
            />
            <button
              type="button"
              onClick={() => removeSkill(index)}
              className="ml-2 p-2 bg-red-500/80 text-white rounded-md hover:bg-red-600/80 transition-colors"
            >
              <Trash2 size={16} />
            </button>
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="mb-6" variants={item}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Briefcase className="mr-2 text-white" size={20} />
            <h3 className="text-xl font-semibold text-white">Work Experience</h3>
          </div>
          <button
            type="button"
            onClick={addExperience}
            className="px-3 py-1 rounded-md hover:bg-opacity-80 transition-colors flex items-center"
            style={getButtonStyle()}
          >
            <Plus size={16} className="mr-1" />
            Add Experience
          </button>
        </div>
        {resumeData.experiences.map((experience, index) => (
          <motion.div 
            key={index} 
            className="mb-4 p-4 border border-white/20 rounded-md bg-white/5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
              <div>
                <label className="block text-sm font-medium text-white mb-1">Job Title</label>
                <input
                  type="text"
                  value={experience.title}
                  onChange={(e) => handleExperienceChange(index, 'title', e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/50"
                  placeholder="Software Engineer"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-1">Company</label>
                <input
                  type="text"
                  value={experience.company}
                  onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/50"
                  placeholder="Google"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-1">Location</label>
                <input
                  type="text"
                  value={experience.location}
                  onChange={(e) => handleExperienceChange(index, 'location', e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/50"
                  placeholder="Mountain View, CA"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-sm font-medium text-white mb-1">Start Date</label>
                  <input
                    type="text"
                    value={experience.startDate}
                    onChange={(e) => handleExperienceChange(index, 'startDate', e.target.value)}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/50"
                    placeholder="Jan 2020"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-1">End Date</label>
                  <input
                    type="text"
                    value={experience.endDate}
                    onChange={(e) => handleExperienceChange(index, 'endDate', e.target.value)}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/50"
                    placeholder="Present"
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-1">Description</label>
              <textarea
                value={experience.description}
                onChange={(e) => handleExperienceChange(index, 'description', e.target.value)}
                rows={3}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/50"
                placeholder="Describe your responsibilities and achievements"
              ></textarea>
            </div>
            <button
              type="button"
              onClick={() => removeExperience(index)}
              className="mt-2 px-3 py-1 bg-red-500/80 text-white rounded-md hover:bg-red-600/80 transition-colors flex items-center"
            >
              <Trash2 size={16} className="mr-1" />
              Remove
            </button>
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="mb-6" variants={item}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <GraduationCap className="mr-2 text-white" size={20} />
            <h3 className="text-xl font-semibold text-white">Education</h3>
          </div>
          <button
            type="button"
            onClick={addEducation}
            className="px-3 py-1 rounded-md hover:bg-opacity-80 transition-colors flex items-center"
            style={getButtonStyle()}
          >
            <Plus size={16} className="mr-1" />
            Add Education
          </button>
        </div>
        {resumeData.education.map((edu, index) => (
          <motion.div 
            key={index} 
            className="mb-4 p-4 border border-white/20 rounded-md bg-white/5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
              <div>
                <label className="block text-sm font-medium text-white mb-1">Degree</label>
                <input
                  type="text"
                  value={edu.degree}
                  onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/50"
                  placeholder="Bachelor of Science in Computer Science"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-1">Institution</label>
                <input
                  type="text"
                  value={edu.institution}
                  onChange={(e) => handleEducationChange(index, 'institution', e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/50"
                  placeholder="Stanford University"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-1">Location</label>
                <input
                  type="text"
                  value={edu.location}
                  onChange={(e) => handleEducationChange(index, 'location', e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/50"
                  placeholder="Stanford, CA"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-sm font-medium text-white mb-1">Start Date</label>
                  <input
                    type="text"
                    value={edu.startDate}
                    onChange={(e) => handleEducationChange(index, 'startDate', e.target.value)}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/50"
                    placeholder="Sep 2016"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-1">End Date</label>
                  <input
                    type="text"
                    value={edu.endDate}
                    onChange={(e) => handleEducationChange(index, 'endDate', e.target.value)}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/50"
                    placeholder="Jun 2020"
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-1">Description</label>
              <textarea
                value={edu.description}
                onChange={(e) => handleEducationChange(index, 'description', e.target.value)}
                rows={3}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/50"
                placeholder="GPA, achievements, relevant coursework, etc."
              ></textarea>
            </div>
            <button
              type="button"
              onClick={() => removeEducation(index)}
              className="mt-2 px-3 py-1 bg-red-500/80 text-white rounded-md hover:bg-red-600/80 transition-colors flex items-center"
            >
              <Trash2 size={16} className="mr-1" />
              Remove
            </button>
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="mb-6" variants={item}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Briefcase className="mr-2 text-white" size={20} />
            <h3 className="text-xl font-semibold text-white">Projects</h3>
          </div>
          <button
            type="button"
            onClick={addProject}
            className="px-3 py-1 rounded-md hover:bg-opacity-80 transition-colors flex items-center"
            style={getButtonStyle()}
          >
            <Plus size={16} className="mr-1" />
            Add Project
          </button>
        </div>
        {resumeData.projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="mb-4 p-4 border border-white/20 rounded-md bg-white/5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
              <div>
                <label className="block text-sm font-medium text-white mb-1">Project Name</label>
                <input
                  type="text"
                  value={project.name}
                  onChange={(e) => handleProjectChange(index, 'name', e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/50"
                  placeholder="E-commerce Platform"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-1">Role</label>
                <input
                  type="text"
                  value={project.role}
                  onChange={(e) => handleProjectChange(index, 'role', e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/50"
                  placeholder="Lead Developer"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-1">Tech Stack</label>
                <input
                  type="text"
                  value={project.techStack}
                  onChange={(e) => handleProjectChange(index, 'techStack', e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/50"
                  placeholder="React, Node.js, MongoDB"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-1">Description</label>
              <textarea
                value={project.description}
                onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
                rows={3}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-white/50"
                placeholder="Describe the project, your contributions, and achievements"
              ></textarea>
            </div>
            <button
              type="button"
              onClick={() => removeProject(index)}
              className="mt-2 px-3 py-1 bg-red-500/80 text-white rounded-md hover:bg-red-600/80 transition-colors flex items-center"
            >
              <Trash2 size={16} className="mr-1" />
              Remove
            </button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ResumeForm;