import React from "react";

const SubstackEmbed = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Stay Updated with My Newsletter
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get insights on UX design, product strategy, and my latest thoughts delivered straight to your inbox.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              Lexi's Substack
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              My personal Substack where I share insights and updates
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 mb-6">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white">Lexi Rohrer</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">Launched a year ago</p>
              </div>
            </div>
            
            <div className="text-center">
              <a
                href="https://uxlex.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
                </svg>
                Visit My Substack
              </a>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              By subscribing, you agree to Substack's Terms of Use and acknowledge its Information Collection Notice and Privacy Policy
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
              <span>•</span>
              <span>Personal insights</span>
              <span>•</span>
              <span>UX design tips</span>
              <span>•</span>
              <span>Product strategy</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubstackEmbed; 