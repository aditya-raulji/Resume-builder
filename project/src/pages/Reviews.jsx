import React from 'react';
import { Star, ThumbsUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Reviews = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">User Reviews</h1>
          <p className="text-xl text-gray-600">See what our users are saying about ResumeBuilder</p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-2">4.8</div>
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-6 w-6 text-yellow-400"
                  fill="currentColor"
                />
              ))}
            </div>
            <p className="text-gray-600">Average Rating</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-2">10k+</div>
            <ThumbsUp className="h-8 w-8 mx-auto mb-2 text-indigo-600" />
            <p className="text-gray-600">Happy Users</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-2">95%</div>
            <div className="h-8 mb-2 flex items-center justify-center">
              <span className="text-2xl">👍</span>
            </div>
            <p className="text-gray-600">Success Rate</p>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">{review.name}</h3>
                  <p className="text-gray-600 text-sm">{review.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill={i < review.rating ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
              
              <p className="text-gray-700 mb-4">{review.comment}</p>
              
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{review.date}</span>
                <span>{review.template} Template</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const reviews = [
  {
    name: "John Smith",
    role: "Software Developer",
    rating: 5,
    comment: "The modern templates helped me stand out in my job applications. I received multiple interview calls within a week!",
    date: "March 1, 2024",
    template: "Modern Blue",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
  },
  {
    name: "Alice Johnson",
    role: "Marketing Manager",
    rating: 5,
    comment: "Incredibly easy to use and the results look professional. The ability to customize colors and layouts is fantastic.",
    date: "February 28, 2024",
    template: "Creative Purple",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
  },
  {
    name: "David Chen",
    role: "UX Designer",
    rating: 4,
    comment: "Great selection of templates and easy customization options. Would love to see more creative layouts for design roles.",
    date: "February 25, 2024",
    template: "Minimalist Gray",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
  },
  {
    name: "Sarah Williams",
    role: "Product Manager",
    rating: 5,
    comment: "The resume builder helped me create a clean, professional resume that highlighted my skills perfectly.",
    date: "February 22, 2024",
    template: "Modern Green",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
  },
  {
    name: "Michael Brown",
    role: "Data Analyst",
    rating: 5,
    comment: "Excellent tool! The templates are modern and the interface is intuitive. Saved me hours of formatting.",
    date: "February 20, 2024",
    template: "Creative Teal",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
  },
  {
    name: "Emma Davis",
    role: "Content Writer",
    rating: 4,
    comment: "Very user-friendly and professional results. Would recommend to anyone looking to update their resume.",
    date: "February 18, 2024",
    template: "Minimalist Red",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
  }
];

export default Reviews;