import React from 'react';
import { motion } from 'framer-motion';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';

const TemplateSelector = ({ templates, onSelect, selectedTemplate }) => {
  const [currentPage, setCurrentPage] = React.useState(0);
  const templatesPerPage = 3;
  const totalPages = Math.ceil(templates.length / templatesPerPage);
  
  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };
  
  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  const displayedTemplates = templates.slice(
    currentPage * templatesPerPage, 
    (currentPage + 1) * templatesPerPage
  );

  return (
    <div className="w-full max-w-6xl mx-auto">
      <motion.h2 
        className="text-3xl font-bold text-white text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Choose Your Resume Template
      </motion.h2>
      
      <motion.p 
        className="text-white/80 text-center mb-12 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Select from our professionally designed templates to create a stunning resume that stands out. Each template offers unique layouts and color schemes to match your personal style.
      </motion.p>
      
      <div className="flex items-center justify-center mb-8">
        <button 
          onClick={prevPage} 
          disabled={currentPage === 0}
          className="p-2 rounded-full bg-white/10 text-white disabled:opacity-50 mr-4 hover:bg-white/20 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        
        <div className="flex space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`w-3 h-3 rounded-full ${currentPage === index ? 'bg-white' : 'bg-white/30'}`}
            />
          ))}
        </div>
        
        <button 
          onClick={nextPage} 
          disabled={currentPage === totalPages - 1}
          className="p-2 rounded-full bg-white/10 text-white disabled:opacity-50 ml-4 hover:bg-white/20 transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {displayedTemplates.map((template, index) => {
          const actualIndex = currentPage * templatesPerPage + index;
          const isSelected = selectedTemplate === actualIndex;
          
          return (
            <motion.div 
              key={actualIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-lg overflow-hidden shadow-xl cursor-pointer transform transition-all duration-300 ${
                isSelected ? 'ring-4 scale-105' : 'hover:scale-105'
              }`}
              style={{ 
                ringColor: template.primaryColor,
                backgroundColor: 'rgba(255, 255, 255, 0.9)'
              }}
              onClick={() => onSelect(actualIndex)}
            >
              {isSelected && (
                <div className="absolute top-3 right-3 z-10 bg-green-500 text-white p-1 rounded-full">
                  <Check size={16} />
                </div>
              )}
              
              <div className="h-64 overflow-hidden">
                <img 
                  src={template.thumbnail} 
                  alt={template.name} 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              
              <div className="p-4 bg-white">
                <h3 className="font-bold text-lg" style={{ color: template.primaryColor }}>{template.name}</h3>
                <p className="text-gray-600 text-sm">{template.description}</p>
                
                <div className="mt-3 flex space-x-2">
                  <div className="w-6 h-6 rounded-full" style={{ backgroundColor: template.primaryColor }}></div>
                  <div className="w-6 h-6 rounded-full" style={{ backgroundColor: template.secondaryColor }}></div>
                  <div className="w-6 h-6 rounded-full" style={{ backgroundColor: template.accentColor }}></div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      
      <div className="mt-8 text-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-md shadow-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300"
          onClick={() => onSelect(selectedTemplate)}
        >
          Use Selected Template
        </motion.button>
      </div>
    </div>
  );
};

export default TemplateSelector;