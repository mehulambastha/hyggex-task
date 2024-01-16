import React from 'react'
import styles from "./styles.css"

const Navbar = () => {
  return (
    <header class="text-gray-600 body-font font-semibold px-12">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <img src={process.env.PUBLIC_URL + "/assets/logoAndText.svg"} width={150} alt='branding' />
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a class="mr-5 hover:text-gray-900">Home</a>
          <a class="mr-5 hover:text-gray-900">Flashcard</a>
          <a class="mr-5 hover:text-gray-900">Contact</a>
          <a class="mr-5 hover:text-gray-900">FAQ</a>
        </nav>
        <button class="inline-flex items-center border-r border-0 py-3 px-10 text-md loginBtn text-white focus:outline-none mt-4 md:mt-0">Login
        </button>
      </div>
    </header>
  )
}

export default Navbar
