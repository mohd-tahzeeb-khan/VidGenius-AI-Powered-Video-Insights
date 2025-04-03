'use client'

import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          
          {/* Contact Section */}
          <div className="mb-4 md:mb-0">
            <h4 className="font-semibold mb-2">Contact Us</h4>
            <p>Email: contact@vidgenius.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <div className="flex gap-4 mt-2">
              <Link href="https://github.com" className="hover:text-primary transition-colors">
                <FaGithub size={20} />
              </Link>
              <Link href="https://twitter.com" className="hover:text-primary transition-colors">
                <FaTwitter size={20} />
              </Link>
              <Link href="https://linkedin.com" className="hover:text-primary transition-colors">
                <FaLinkedin size={20} />
              </Link>
              <Link href="https://instagram.com" className="hover:text-primary transition-colors">
                <FaInstagram size={20} />
              </Link>
            </div>
          </div>

          {/* Rights Reserved Section */}
          <div className="mb-4 md:mb-0 text-center">
            <p>&copy; {new Date().getFullYear()} VidGenius. All rights reserved.</p>
          </div>

          {/* Developer Details */}
          <div className="text-right">
            <p>Developed with ❤️ by</p>
            <Link 
              href="https://github.com/yourusername" 
              className="hover:text-primary transition-colors"
            >
              Mohammad Tahzeeb Khan
            </Link>
          </div>

        </div>
      </div>
    </footer>
  )
}
