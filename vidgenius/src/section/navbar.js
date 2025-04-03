'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function Navbar() {
  const { data: session } = useSession()
  const [isOpen, setIsOpen] = useState(false)

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.nav 
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="bg-background border-b border-border sticky top-0 z-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          {/* Desktop Navigation Links */}
          <motion.div variants={itemVariants} className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              About Us
            </Link>
          </motion.div>

          {/* Logo */}
          <motion.div 
            variants={itemVariants}
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-600"
          >
            VIDGENIUS
          </motion.div>

          {/* Auth Section */}
          <motion.div variants={itemVariants} className="hidden md:flex items-center space-x-4">
            {session ? (
              <div className="flex items-center space-x-3">
                <span className="text-foreground">{session.user.name}</span>
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={session.user.image || '/default-avatar.png'}
                    alt="Profile"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ) : (
              <>
                
                  <Button onClick={()=>signIn()} variant="ghost">Login</Button>
                
                
                  <Button onClick={()=>signIn()}  className="bg-red-500 hover:bg-red-600 text-white">Sign Up</Button>
               
              </>
            )}
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            variants={itemVariants}
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="space-y-2">
              <span className={`block w-8 h-0.5 bg-foreground transition-transform ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
              <span className={`block w-8 h-0.5 bg-foreground transition-opacity ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-8 h-0.5 bg-foreground transition-transform ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4"
          >
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              {!session && (
                <>
                  
                    <Button onClick={()=>signIn()} variant="ghost" className="w-full">Login</Button>
                
                  
                    <Button onClick={()=>signIn()}  className="w-full bg-red-500 hover:bg-red-600 text-white">Sign Up</Button>
                  
                </>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
