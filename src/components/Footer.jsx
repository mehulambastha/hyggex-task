import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col items-start w-full px-20 py-20 gap-10' style={{height: '100vh'}}>
      <h1 className='text-2xl font-bold text-indigo-950'>FAQ</h1>
      <div className=' w-1/2'>
        <div id="accordion-collapse" data-accordion="collapse">
          <h2 id="accordion-collapse-heading-1">
            <button type="button" class="flex my-4 items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
              <span>Can education flashcards be used for all age groups?</span>
              <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
              </svg>
            </button>
          </h2>
          <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
            <div class="p-5 border-2 rounded-xl border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p class="text-gray-500 dark:text-gray-400">
              Yes, education flashcards can be tailored to different age groups and learning levels. There are flashcards designed for preschoolers, elementary school students, high school students, and even for college-level and adult learners.
              </p>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-2">
            <button type="button" class="flex my-4 items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border-2 border-gray-200 focus:ring-4 rounded-xl focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
              <span>How do education flashcards work??</span>
              <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
              </svg>
            </button>
          </h2>
          <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
            <div class="p-5 border-2 rounded-xl border-gray-200 dark:border-gray-700">
              <p class="mb-2 text-gray-500 dark:text-gray-400">
              Education flashcards work by presenting a question or prompt on one side and the corresponding answer or information on the other. Users can review the cards repeatedly, reinforcing their memory and enhancing learning through repetition.
              </p>
            </div>
          </div>
          <h2 id="accordion-collapse-heading-3">
            <button type="button" class="flex my-4 items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border-2 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
              <span>Can education flashcards be used for test preparation?</span>
              <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
              </svg>
            </button>
          </h2>
          <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
            <div class="p-5 border-2 rounded-xl border-gray-200 dark:border-gray-700">
              <p class="mb-2 text-gray-500 dark:text-gray-400">
              Flashcards are an excellent tool for test preparation, allowing students to review key concepts, terms, and facts. They provide a quick and focused way to reinforce knowledge before exams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
