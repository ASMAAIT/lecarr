import { useState } from 'react';
import { motion } from "framer-motion";
import { fadeIn, staggerContainer} from "../utils/motion";
const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission
  };

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      
      
      
    >
    <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        
      >
    <form action="https://formspree.io/f/mleyeege" method='POST' className=" w-full sm:w-80 md:w-1/2 lg:w-1/2 xl:w-1/2 mx-auto shadow-md p-6 rounded-md border border-yellow-500 rounded-[15px] sm:w-[80%] " id="Contact">
  <h2 className="font-semibold text-6xl mt-10 mb-10 w-full text-center text-white mb-8">Contact Us</h2>  
  <div className="mb-4">
    <label className="block mb-2 font-medium text-white">Name</label>
    <input
      type="text"
      className="w-full p-2 border border-gray-300 bg-transparent rounded-md text-white"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  </div>
  <div className="mb-4">
    <label className="block mb-2 font-medium text-white">Email</label>
    <input
      type="email"
      className="w-full p-2 border border-gray-300 bg-transparent rounded-md text-white"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  </div>
  <div className="mb-4">
    <label className="block mb-2 font-medium text-white">Message</label>
    <textarea
      className="w-full p-2 border border-gray-300 bg-transparent rounded-md text-white"
      rows="4"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
    ></textarea>
  </div>
  <button
    type="submit"
    className="w-full py-2 px-4 border border-yellow-500 text-white hover:bg-yellow-500 hover:text-white rounded-md transition-colors"
    onClick={handleSubmit}
  >
    Submit
  </button>
</form>
</motion.div>
</motion.div>

  );
};

export default ContactForm;
