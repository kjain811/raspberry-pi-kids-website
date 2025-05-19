import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Label } from './ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Check, Send, Loader2 } from 'lucide-react'

export function ContactForm() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    reason: 'question'
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, reason: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('submitting')
    
    // Simulate form submission
    setTimeout(() => {
      setFormState('success')
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormState('idle')
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          reason: 'question'
        })
      }, 3000)
    }, 1500)
  }

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg border-2 border-primary/20 overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-500 text-white">
        <CardTitle className="text-2xl md:text-3xl font-bold">Contact Us</CardTitle>
        <CardDescription className="text-white/90 text-lg">
          We'd love to hear from you! Send us your questions or feedback.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        {formState === 'success' ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-green-600">Message Sent!</h3>
            <p className="text-gray-600">
              Thanks for reaching out! We'll get back to you soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-lg">Your Name</Label>
              <Input 
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="text-lg p-6 rounded-xl border-2 border-gray-300 focus:border-primary"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-lg">Email Address</Label>
              <Input 
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="text-lg p-6 rounded-xl border-2 border-gray-300 focus:border-primary"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="reason" className="text-lg">Reason for Contact</Label>
              <Select 
                value={formData.reason} 
                onValueChange={handleSelectChange}
              >
                <SelectTrigger className="text-lg p-6 rounded-xl border-2 border-gray-300">
                  <SelectValue placeholder="Select a reason" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="question" className="text-lg">Question about a project</SelectItem>
                  <SelectItem value="suggestion" className="text-lg">Suggestion for new project</SelectItem>
                  <SelectItem value="feedback" className="text-lg">Website feedback</SelectItem>
                  <SelectItem value="help" className="text-lg">Need help with a project</SelectItem>
                  <SelectItem value="other" className="text-lg">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="subject" className="text-lg">Subject</Label>
              <Input 
                id="subject"
                name="subject"
                placeholder="What's this about?"
                value={formData.subject}
                onChange={handleChange}
                required
                className="text-lg p-6 rounded-xl border-2 border-gray-300 focus:border-primary"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message" className="text-lg">Your Message</Label>
              <Textarea 
                id="message"
                name="message"
                placeholder="Type your message here..."
                value={formData.message}
                onChange={handleChange}
                required
                className="min-h-[150px] text-lg p-6 rounded-xl border-2 border-gray-300 focus:border-primary"
              />
            </div>
            
            <Button 
              type="submit" 
              disabled={formState === 'submitting'}
              className="w-full text-lg py-6 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition-all duration-300 shadow-lg"
            >
              {formState === 'submitting' ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  )
}
