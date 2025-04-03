"use client";
import { signIn } from "next-auth/react";

// export default function SignInPage() {
  // return (
    // <div className="flex flex-col items-center justify-center min-h-screen">
      {/* <h1 className="text-2xl font-bold mb-4">Sign In</h1> */}
      {/* <button onClick={() => signIn("github")} className="px-4 py-2 bg-blue-500 text-white rounded"> */}
        {/* Sign in with Github */}
      {/* </button> */}
      {/* <button onClick={() => signIn()} className="px-4 py-2 bg-gray-500 text-white rounded mt-2"> */}
        {/* Sign in with Credentials */}
      {/* </button> */}
    {/* </div> */}
  // );
// }
import { motion } from "framer-motion";
import { FaGithub, FaGoogle, FaDev } from "react-icons/fa";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8"
      >
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl font-bold text-center text-white mb-8"
        >
          Welcome to VidGenius
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => signIn("github")}
            className="w-full flex items-center justify-center gap-3 bg-[#24292F] text-white py-3 px-4 rounded-lg hover:bg-[#24292F]/90 transition-colors"
          >
            <FaGithub className="text-xl" />
            Continue with GitHub
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => signIn("google")}
            className="w-full flex items-center justify-center gap-3 bg-white text-gray-800 py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <FaGoogle className="text-xl text-[#4285F4]" />
            Continue with Google
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => signIn("dev")}
            className="w-full flex items-center justify-center gap-3 bg-[#0A0A0A] text-white py-3 px-4 rounded-lg hover:bg-[#0A0A0A]/90 transition-colors"
          >
            <FaDev className="text-xl" />
            Continue with Dev
          </motion.button>
        </motion.div>

        <div className="mt-8 flex items-center justify-center space-x-2">
          <div className="h-px w-16 bg-gray-400"></div>
          <p className="text-sm text-gray-400">or</p>
          <div className="h-px w-16 bg-gray-400"></div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <button 
            onClick={() => signIn()}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-4 rounded-lg hover:opacity-90 transition-opacity"
          >
            Sign in with Email
          </button>
        </motion.div>

        <p className="text-sm text-gray-400 text-center mt-6">
          Don't have an account?{" "}
          <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
            Sign up
          </a>
        </p>
      </motion.div>
    </div>
  );
}
