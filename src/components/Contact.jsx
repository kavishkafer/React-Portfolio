import { CONTACT } from "../../constants";
import {motion} from "framer-motion"


const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20 ">
        <motion.h1 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y: -100}}
      transition={{duration: 0.5}}
      className="my-20 text-center text-4xl">Get in Touch
      </motion.h1>
        <div className="text-center tracking-tighter">
            <motion.p 
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0, y: -100}}
            transition={{ duration: 1}}
            className="my-4">{CONTACT.address}</motion.p>
            <motion.p 
             whileInView={{opacity:1, y:0}}
             initial={{opacity:0, y: -100}}
             transition={{ duration: 1}}
            className="my-4">{CONTACT.phoneNo}</motion.p>
            <motion.a 
             whileInView={{opacity:1, y:0}}
             initial={{opacity:0, y: -100}}
             transition={{ duration: 1}}
            href="mailto:kavishkafernando64@gmail.com" className="border-b">{CONTACT.email}</motion.a>
            <div className="mt-4">
            <a
  href="/MyCV.pdf" // URL to the file in the public folder
  download="Kavishka_Fernando_CV.pdf" // Name for the downloaded file
  className="bg-gray-900 hover:bg-gray-800 text-teal-600 font-bold py-2 px-4 rounded inline-flex items-center"
>
  <svg
    className="fill-current w-4 h-4 mr-2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
  >
    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
  </svg>
  <span>Download My CV</span>
</a>

</div>
        </div>
    </div>
    
  )
}

export default Contact;