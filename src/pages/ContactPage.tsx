import { ContactForm } from '../components/ContactForm'

export default function ContactPage() {
  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-to-b from-purple-100 to-blue-100">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
            Get In Touch!
          </span>
        </h1>
        
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          Have questions about Raspberry Pi projects? Want to share your awesome creation? 
          Or maybe you just want to say hi! We'd love to hear from you!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-md text-center card-3d">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Email Us</h3>
            <p className="text-gray-600 mb-4">We usually respond within 24 hours!</p>
            <a href="mailto:hello@pikids.example.com" className="text-purple-600 font-medium hover:underline">
              hello@pikids.example.com
            </a>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md text-center card-3d">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Live Chat</h3>
            <p className="text-gray-600 mb-4">Chat with our friendly support team!</p>
            <button className="text-blue-600 font-medium hover:underline">
              Start a Chat
            </button>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md text-center card-3d">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Community</h3>
            <p className="text-gray-600 mb-4">Join our community forum!</p>
            <a href="#" className="text-green-600 font-medium hover:underline">
              Visit Forum
            </a>
          </div>
        </div>
        
        <ContactForm />
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
              Find Us
            </span>
          </h2>
          
          <div className="bg-white p-6 rounded-xl shadow-md max-w-2xl mx-auto">
            <div className="aspect-w-16 aspect-h-9 mb-4">
              <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Map would be displayed here</p>
              </div>
            </div>
            <p className="text-gray-600">
              123 Raspberry Road, Pitown, PT 12345<br />
              Open Monday-Friday: 9am - 5pm
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
