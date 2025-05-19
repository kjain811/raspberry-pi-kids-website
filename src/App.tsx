import { useState } from 'react'
import { Button } from './components/ui/button'
import { Card } from './components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs'
import { Home, Lightbulb, Gamepad2, Bot, MessageSquare, Github } from 'lucide-react'
import { projects } from './data/projects'
import { ContactForm } from './components/ContactForm'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('home')

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return renderHome()
      case 'projects':
        return renderProjects()
      case 'games':
        return renderGames()
      case 'contact':
        return renderContact()
      default:
        return renderHome()
    }
  }

  const renderHome = () => (
    <>
      {/* Hero Section */}
      <section className="py-12 px-4 bg-gradient-to-b from-purple-100 to-blue-100">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 rainbow-text">
            Raspberry Pi Adventures!
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-700">
            Awesome coding projects for curious kids!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white grow-hover" onClick={() => setActiveTab('projects')}>
              Start Exploring
            </Button>
            <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-100 grow-hover">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
              Cool Pi Projects
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map(project => (
              <ProjectCard 
                key={project.id}
                title={project.title} 
                description={project.description}
                difficulty={project.difficulty}
                image={project.image}
                githubUrl={project.githubUrl}
                color={
                  project.difficulty === 'beginner' ? "from-green-500 to-emerald-500" :
                  project.difficulty === 'intermediate' ? "from-blue-500 to-cyan-500" :
                  "from-red-500 to-yellow-500"
                }
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-secondary hover:bg-secondary/90 text-white grow-hover" onClick={() => setActiveTab('projects')}>
              See All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-100 to-blue-100">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
              How It Works
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StepCard 
              number="1" 
              title="Choose a Project" 
              description="Pick a cool project that matches your skill level and interests!"
            />
            <StepCard 
              number="2" 
              title="Gather Materials" 
              description="Get your Raspberry Pi and the parts you need from the list."
            />
            <StepCard 
              number="3" 
              title="Build & Code" 
              description="Follow our step-by-step guide to make your project come alive!"
            />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Pi Club!</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get new project ideas, coding tips, and special offers sent straight to your inbox!
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground grow-hover">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </>
  )

  const renderProjects = () => (
    <div className="py-12 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
            Raspberry Pi Projects
          </span>
        </h1>
        
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          Explore our collection of fun and educational Raspberry Pi projects for kids of all ages and skill levels!
        </p>
        
        <Tabs defaultValue="all" className="w-full mb-8">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="all" className="text-lg">All Projects</TabsTrigger>
            <TabsTrigger value="beginner" className="text-lg">Beginner</TabsTrigger>
            <TabsTrigger value="intermediate" className="text-lg">Intermediate</TabsTrigger>
            <TabsTrigger value="advanced" className="text-lg">Advanced</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map(project => (
                <ProjectCard 
                  key={project.id}
                  title={project.title} 
                  description={project.description}
                  difficulty={project.difficulty}
                  image={project.image}
                  githubUrl={project.githubUrl}
                  color={
                    project.difficulty === 'beginner' ? "from-green-500 to-emerald-500" :
                    project.difficulty === 'intermediate' ? "from-blue-500 to-cyan-500" :
                    "from-red-500 to-yellow-500"
                  }
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="beginner" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.filter(p => p.difficulty === 'beginner').map(project => (
                <ProjectCard 
                  key={project.id}
                  title={project.title} 
                  description={project.description}
                  difficulty={project.difficulty}
                  image={project.image}
                  githubUrl={project.githubUrl}
                  color="from-green-500 to-emerald-500"
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="intermediate" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.filter(p => p.difficulty === 'intermediate').map(project => (
                <ProjectCard 
                  key={project.id}
                  title={project.title} 
                  description={project.description}
                  difficulty={project.difficulty}
                  image={project.image}
                  githubUrl={project.githubUrl}
                  color="from-blue-500 to-cyan-500"
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="advanced" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.filter(p => p.difficulty === 'advanced').map(project => (
                <ProjectCard 
                  key={project.id}
                  title={project.title} 
                  description={project.description}
                  difficulty={project.difficulty}
                  image={project.image}
                  githubUrl={project.githubUrl}
                  color="from-red-500 to-yellow-500"
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )

  const renderGames = () => (
    <div className="py-12 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
            Fun Pi Games
          </span>
        </h1>
        
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          Create your own games with Raspberry Pi! These projects are super fun to build and play.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.filter(p => p.category === 'games').map(project => (
            <ProjectCard 
              key={project.id}
              title={project.title} 
              description={project.description}
              difficulty={project.difficulty}
              image={project.image}
              githubUrl={project.githubUrl}
              color={
                project.difficulty === 'beginner' ? "from-green-500 to-emerald-500" :
                project.difficulty === 'intermediate' ? "from-blue-500 to-cyan-500" :
                "from-red-500 to-yellow-500"
              }
            />
          ))}
        </div>
      </div>
    </div>
  )

  const renderContact = () => (
    <div className="py-12 px-4">
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
      </div>
    </div>
  )

  return (
    <div className="min-h-screen confetti-bg">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-purple-600 via-blue-500 to-green-400 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-red-500 flex items-center justify-center bouncy">
              <Bot className="text-white" size={24} />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white glow">
              <span className="rainbow-text">Pi</span>Kids
            </h1>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden bg-white/20 p-2 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-0.5 bg-white mb-1.5"></div>
            <div className="w-6 h-0.5 bg-white mb-1.5"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-4">
            <NavLink 
              icon={<Home size={18} />} 
              text="Home" 
              active={activeTab === 'home'} 
              onClick={() => setActiveTab('home')}
            />
            <NavLink 
              icon={<Lightbulb size={18} />} 
              text="Projects" 
              active={activeTab === 'projects'} 
              onClick={() => setActiveTab('projects')}
            />
            <NavLink 
              icon={<Gamepad2 size={18} />} 
              text="Games" 
              active={activeTab === 'games'} 
              onClick={() => setActiveTab('games')}
            />
            <NavLink 
              icon={<MessageSquare size={18} />} 
              text="Contact" 
              active={activeTab === 'contact'} 
              onClick={() => setActiveTab('contact')}
            />
            <NavLink 
              icon={<Github size={18} />} 
              text="Code" 
              active={false}
            />
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden bg-white rounded-lg mt-2 p-2 flex flex-col gap-1">
            <MobileNavLink 
              icon={<Home size={18} />} 
              text="Home" 
              active={activeTab === 'home'} 
              onClick={() => {
                setActiveTab('home')
                setIsMenuOpen(false)
              }}
            />
            <MobileNavLink 
              icon={<Lightbulb size={18} />} 
              text="Projects" 
              active={activeTab === 'projects'} 
              onClick={() => {
                setActiveTab('projects')
                setIsMenuOpen(false)
              }}
            />
            <MobileNavLink 
              icon={<Gamepad2 size={18} />} 
              text="Games" 
              active={activeTab === 'games'} 
              onClick={() => {
                setActiveTab('games')
                setIsMenuOpen(false)
              }}
            />
            <MobileNavLink 
              icon={<MessageSquare size={18} />} 
              text="Contact" 
              active={activeTab === 'contact'} 
              onClick={() => {
                setActiveTab('contact')
                setIsMenuOpen(false)
              }}
            />
            <MobileNavLink 
              icon={<Github size={18} />} 
              text="Code" 
              active={false}
            />
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main>
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">PiKids</h3>
            <p className="text-gray-300">
              Making technology fun and accessible for kids through creative Raspberry Pi projects.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white" onClick={() => setActiveTab('home')}>Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white" onClick={() => setActiveTab('projects')}>Projects</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white" onClick={() => setActiveTab('games')}>Games</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white" onClick={() => setActiveTab('contact')}>Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Getting Started</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Raspberry Pi Basics</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Coding Tutorials</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Twitter</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">YouTube</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Instagram</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} PiKids. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

// Navigation Link Component
function NavLink({ icon, text, active = false, onClick = () => {} }: { icon: React.ReactNode, text: string, active?: boolean, onClick?: () => void }) {
  return (
    <a 
      href="#" 
      onClick={(e) => {
        e.preventDefault()
        onClick()
      }}
      className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-all ${
        active 
          ? 'bg-white/20 text-white' 
          : 'text-white/80 hover:bg-white/10 hover:text-white'
      }`}
    >
      {icon}
      <span>{text}</span>
    </a>
  )
}

// Mobile Navigation Link Component
function MobileNavLink({ icon, text, active = false, onClick = () => {} }: { icon: React.ReactNode, text: string, active?: boolean, onClick?: () => void }) {
  return (
    <a 
      href="#" 
      onClick={(e) => {
        e.preventDefault()
        onClick()
      }}
      className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
        active 
          ? 'bg-purple-100 text-purple-600' 
          : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      {icon}
      <span>{text}</span>
    </a>
  )
}

// Project Card Component
function ProjectCard({ title, description, difficulty, image, githubUrl, color }: { title: string, description: string, difficulty: string, image: string, githubUrl: string, color: string }) {
  return (
    <Card className="overflow-hidden card-3d">
      <div className={`h-48 bg-gradient-to-r ${color} flex items-center justify-center relative`}>
        <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="text-white text-4xl font-bold relative z-10">{title.split(' ')[0]}</div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
            difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {difficulty}
          </span>
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rotate-hover"
          >
            <Github className="mr-1.5 h-4 w-4" />
            View Project
          </a>
        </div>
      </div>
    </Card>
  )
}

// Step Card Component
function StepCard({ number, title, description }: { number: string, title: string, description: string }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg text-center">
      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mx-auto mb-4 bouncy">
        {number}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default App
