import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import ResumeForm from '../components/ResumeForm';
import ResumePreview from '../components/ResumePreview';
import TemplateSelector from '../components/TemplateSelector';
import { templates } from '../data/templates';

const ResumeBuilder = () => {
  const [activeTab, setActiveTab] = useState('templates');
  const [selectedTemplate, setSelectedTemplate] = useState(0);
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      name: '',
      title: '',
      email: '',
      phone: '',
      location: '',
      website: '',
      github: '',
      linkedin: '',
      summary: '',
      photo: ''
    },
    skills: [],
    experiences: [],
    education: [],
    projects: []
  });

  const handleTemplateSelect = (index) => {
    setSelectedTemplate(index);
    setActiveTab('edit');
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setResumeData({
          ...resumeData,
          personalInfo: {
            ...resumeData.personalInfo,
            photo: reader.result
          }
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-600 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg bg-white/10 backdrop-blur-md shadow-lg p-1">
            <button
              onClick={() => setActiveTab('templates')}
              className={`px-4 py-2 rounded-md flex items-center ${
                activeTab === 'templates'
                  ? 'bg-white text-indigo-600'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <FileText className="h-4 w-4 mr-2" />
              Templates
            </button>
            <button
              onClick={() => setActiveTab('edit')}
              className={`px-4 py-2 rounded-md ${
                activeTab === 'edit'
                  ? 'bg-white text-indigo-600'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              Edit
            </button>
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-4 py-2 rounded-md ${
                activeTab === 'preview'
                  ? 'bg-white text-indigo-600'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              Preview
            </button>
          </div>
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          {activeTab === 'templates' && (
            <TemplateSelector
              templates={templates}
              onSelect={handleTemplateSelect}
              selectedTemplate={selectedTemplate}
            />
          )}
          
          {activeTab === 'edit' && (
            <ResumeForm
              resumeData={resumeData}
              setResumeData={setResumeData}
              templateColor={templates[selectedTemplate].primaryColor}
              onPhotoUpload={handlePhotoUpload}
            />
          )}
          
          {activeTab === 'preview' && (
            <ResumePreview
              resumeData={resumeData}
              template={templates[selectedTemplate]}
            />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ResumeBuilder;