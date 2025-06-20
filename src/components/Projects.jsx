import React, { useEffect, useState } from 'react';
import { assets, projectsData } from '../assets/assets';
import { motion } from 'framer-motion';
import ScheduleVisit from './ScheduleVisit';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(projectsData.length);
      } else {
        setCardsToShow(1);
      }
    };
    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  useEffect(() => {
    const filtered = projectsData.filter((project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProjects(filtered);
    setCurrentIndex(0); // Reset to first slide on new search
  }, [searchTerm]);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredProjects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? filteredProjects.length - 1 : prevIndex - 1
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden'
      id='Projects'
    >
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        Projects{' '}
        <span className='underline underline-offset-4 decoration-1 under font-light'>
          Completed
        </span>
      </h1>
      <p className='text-center text-gray-500 mb-6 max-w-80 mx-auto'>
        Crafting Spaces, Building Legacies—Explore Our Portfolio
      </p>

      {/* 🔍 Search Input with Icon */}
      <div className='relative mb-10 text-center flex justify-center'>
        <input
          type='text'
          placeholder='Search by title or location...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full md:w-1/2'
        />
        <div className='absolute left-[calc(50%-140px)] top-1/2 transform -translate-y-1/2 text-gray-400 md:left-[calc(50%-230px)]'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
            />
          </svg>
        </div>
      </div>

      {/* ▶️ Slider Buttons */}
      {filteredProjects.length > 1 && (
        <div className='flex justify-end items-center mb-8'>
          <button
            onClick={prevProject}
            className='p-3 bg-gray-200 rounded mr-2'
            aria-label='Previous Project'
          >
            <img src={assets.left_arrow} alt='Previous' />
          </button>
          <button
            onClick={nextProject}
            className='p-3 bg-gray-200 rounded mr-2'
            aria-label='Next Project'
          >
            <img src={assets.right_arrow} alt='Next' />
          </button>
        </div>
      )}

      {/* 🖼️ Project Cards */}
      <div className='overflow-hidden'>
        <div
          className='flex gap-8 transition-transform duration-500 ease-in-out'
          style={{
            transform: `translateX(-${
              (currentIndex * 100) / cardsToShow
            }%)`,
          }}
        >
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className='relative flex-shrink-0 w-full sm:w-1/4'
            >
              <img
                src={project.image}
                alt={project.title}
                className='w-full h-auto mb-6 rounded-lg shadow-md'
              />
              <div className='px-4 py-4 shadow-md bg-white rounded-md'>
                <h2 className='text-xl font-semibold text-gray-800'>
                  {project.title}
                </h2>
                <p className='text-gray-500 text-sm mb-2'>
                  {project.price} <span className='px-1'>|</span> {project.location}
                </p>

                {/* 📅 Schedule Visit Form */}
                <ScheduleVisit projectTitle={project.title} />
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className='text-center text-gray-500 mt-8'>
            No projects found.
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default Projects;
