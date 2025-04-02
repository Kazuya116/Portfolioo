import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-gray-900 text-white py-6 text-center"
    >
      <div className="container mx-auto">
        <h2 className="text-lg font-semibold">Aman Pratap Singh</h2>
        <p className="text-gray-400">Fullstack Web Developer</p>

        {/* Social Links */}
        <div className="flex justify-center mt-4 space-x-6">
          <a
            href="https://github.com/Kazuya116?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/aman-pratap-374614250/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://portfolioo-flame-omega.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-400 transition text-2xl"
          >
            <FaCode />
          </a>
        </div>

        <p className="mt-4 text-sm text-gray-500">
          © {new Date().getFullYear()} Aman Pratap Singh. All Rights Reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
