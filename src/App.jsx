import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { CheckCircle, Star, Zap, BookOpen, Download, Users, Clock, Trophy, Lightbulb, GraduationCap, DollarSign, ShieldCheck, MessageSquare, TrendingUp, Award, Rocket, Code, Layers, Play, ArrowRight, Target, Brain, Sparkles, ChevronDown } from 'lucide-react'
import aiPromptImage from './assets/kLF4AVJGwW58.jpg'
import aiTechImage from './assets/Vi0MFGxEQgpB.jpg'
import aiLearningImage from './assets/Cmk5pLaUa69f.png'
import instructorImage from './assets/instructor.jpg'
import testimonialFreelancer from './assets/testimonial_freelancer.jpg'
import testimonialStudent from './assets/testimonial_student.jpg'
import testimonialEntrepreneur from './assets/testimonial_entrepreneur.jpg'
import testimonialBusinesswoman from './assets/testimonial_businesswoman.jpg'
import './App.css'

function App() {
  const [email, setEmail] = useState('')

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your interest! We will contact you soon.')
    setEmail('')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-gray-300">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-lime-500/10"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-lime-500/20 text-lime-400 border-lime-500/30 px-4 py-2 text-sm font-semibold animate-pulse">
            🔥 LIMITED TIME OFFER - Only 1000 Units Available
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Master AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-cyan-400">Prompt Engineering</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your AI interactions from frustrating to phenomenal with our comprehensive 9-module masterclass + powerful prompt generator app combo
          </p>
          
          <div className="text-center mb-12">
            <div className="text-5xl md:text-6xl font-bold text-lime-400">$99</div>
            <div className="text-gray-400 line-through text-lg">$119</div>
            <div className="text-cyan-400 font-semibold">Save $20 Today!</div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div id="gumroad-button" className="w-full sm:w-auto">
              <a href="https://qandetech.gumroad.com/l/ahqsvrb" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-gradient-to-r from-lime-500 to-cyan-500 hover:from-lime-600 hover:to-cyan-600 text-black font-bold px-8 py-4 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-200"
                >
                  <Zap className="mr-2 h-5 w-5" />
                  Buy on Gumroad - $99
                </Button>
              </a>
            </div>
            <div id="payhip-button" className="w-full sm:w-auto">
              <a href="https://payhip.com/b/meFUq" class="payhip-buy-button" data-theme="green" data-product="meFUq">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold px-8 py-4 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-200"
                >
                  <ShieldCheck className="mr-2 h-5 w-5" />
                  Buy on Payhip - $99
                </Button>
              </a>
            </div>
          </div>
          
          <div className="text-sm text-gray-400 mb-4">
            🔒 Secure payment • 30-day money-back guarantee • Instant access
          </div>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 px-8 py-4 text-lg rounded-full"
            onClick={() => document.getElementById('course-details').scrollIntoView({ behavior: 'smooth' })}
          >
            <ChevronDown className="mr-2 h-5 w-5" />
            Learn More
          </Button>
        </div>
      </section>

      {/* Problem/Pain Point Section */}
      <section className="px-4 py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Are You Struggling with <span className="text-lime-400">Generic AI Results?</span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-gray-300">
            Many AI users face frustration: outputs are vague, irrelevant, or simply not what they envisioned. Without precise communication, your AI tools are underperforming, costing you time and hindering your productivity.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/80 border-slate-700 hover:border-lime-400/50 transition-all duration-300">
              <CardHeader>
                <MessageSquare className="h-12 w-12 text-lime-400 mb-4 mx-auto" />
                <CardTitle className="text-white text-xl">Vague Outputs</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                Tired of AI responses that miss the mark? Learn to guide your AI with crystal-clear precision and get exactly what you need.
              </CardContent>
            </Card>
            <Card className="bg-slate-800/80 border-slate-700 hover:border-lime-400/50 transition-all duration-300">
              <CardHeader>
                <Clock className="h-12 w-12 text-lime-400 mb-4 mx-auto" />
                <CardTitle className="text-white text-xl">Wasted Time</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                Endless revisions and re-prompts eat into your valuable time. Optimize your workflow and get it right the first time.
              </CardContent>
            </Card>
            <Card className="bg-slate-800/80 border-slate-700 hover:border-lime-400/50 transition-all duration-300">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-lime-400 mb-4 mx-auto" />
                <CardTitle className="text-white text-xl">Missed Opportunities</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                Unlock the full potential of AI for your projects and career. Don't let poor prompts hold you back from success.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Overview Section */}
      <section className="px-4 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            The <span className="text-lime-400">Solution</span>: Precision Prompt Engineering
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-gray-300">
            Our Masterclass and AI Prompt Generator provide the exact tools and knowledge you need to transform your AI interactions from frustrating to phenomenal. Learn the proven frameworks and instantly generate high-quality prompts.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-slate-800/80 border-slate-700 hover:border-lime-400/50 transition-all duration-300">
              <CardHeader>
                <img src={aiPromptImage} alt="AI Prompt Engineering" className="w-full h-48 object-cover rounded-lg mb-4" />
                <BookOpen className="h-10 w-10 text-lime-400 mb-4" />
                <CardTitle className="text-white text-xl">Comprehensive Masterclass</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                Dive deep into the art and science of prompt engineering with 9 modules, 50+ prompts, and real-world case studies. Become an AI communication expert.
              </CardContent>
            </Card>
            <Card className="bg-slate-800/80 border-slate-700 hover:border-cyan-400/50 transition-all duration-300">
              <CardHeader>
                <img src={aiTechImage} alt="AI Technology" className="w-full h-48 object-cover rounded-lg mb-4" />
                <Download className="h-10 w-10 text-cyan-400 mb-4" />
                <CardTitle className="text-white text-xl">Powerful AI Prompt Generator (Beta)</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-300">
                One-time purchase desktop application that instantly creates optimized prompts. Save hours of manual work and get precise AI outputs every time. Will be upgraded after BETA period.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Details Section */}
      <section id="course-details" className="px-4 py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            What You Get in This <span className="text-lime-400">Ultimate Combo</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-slate-800/80 border-slate-700 hover:border-lime-400/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <BookOpen className="h-8 w-8 text-lime-400" />
                  <div>
                    <CardTitle className="text-white text-xl">AI Prompt Engineering Masterclass</CardTitle>
                    <CardDescription className="text-gray-400">Complete 9-Module Course</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="text-gray-300">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-lime-400 flex-shrink-0" />
                    <span>Master prompt engineering fundamentals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-lime-400 flex-shrink-0" />
                    <span>Advanced techniques like Chain-of-Thought</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-lime-400 flex-shrink-0" />
                    <span>50+ proven prompt templates</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-lime-400 flex-shrink-0" />
                    <span>Real-world case studies & exercises</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-lime-400 flex-shrink-0" />
                    <span>Ethics in AI prompting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-lime-400 flex-shrink-0" />
                    <span>Future trends & practical projects</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-lime-400 flex-shrink-0" />
                    <span>Lifetime updates & access</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/80 border-slate-700 hover:border-cyan-400/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Download className="h-8 w-8 text-cyan-400" />
                  <div>
                    <CardTitle className="text-white text-xl">AI Prompt Generator (Beta)</CardTitle>
                    <CardDescription className="text-gray-400">One-Time Purchase Desktop App</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="text-gray-300">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                    <span>Generate high-quality prompts instantly</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                    <span>User-friendly interface</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                    <span>Save hours of manual work</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                    <span>One-time purchase (will upgrade after BETA)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                    <span>Direct feedback to development team</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                    <span>Multiple prompt categories</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                    <span>Export & save functionality</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Course Curriculum */}
          <div className="bg-slate-800/80 rounded-lg p-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              <GraduationCap className="inline-block mr-2 h-6 w-6 text-lime-400" />
              Complete Course Curriculum
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-lime-400">Foundations (Modules 1-3)</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Introduction to AI & Prompt Engineering</li>
                  <li>• Understanding AI Language Models</li>
                  <li>• Basic Prompt Structure & Syntax</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-cyan-400">Advanced Techniques (Modules 4-6)</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Chain-of-Thought Prompting</li>
                  <li>• Few-Shot Learning Strategies</li>
                  <li>• Context Management & Optimization</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-purple-400">Mastery (Modules 7-9)</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Industry-Specific Applications</li>
                  <li>• Ethics & Responsible AI Use</li>
                  <li>• Future Trends & Advanced Projects</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Authority Section */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Meet Your <span className="text-lime-400">AI Expert</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8 bg-slate-800/80 rounded-lg p-8 border border-slate-700">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-gradient-to-br from-lime-400 to-cyan-400 rounded-full flex items-center justify-center">
                <img src={instructorImage} alt="Chantelle van der Westhuizen" className="rounded-full w-full h-full object-cover" />
              </div>
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Chantelle van der Westhuizen</h3>
              <p className="text-lg text-lime-400 mb-4">Seasoned AI & Compliance Expert • 15+ Years Experience</p>
              <p className="text-gray-300 mb-4">
                Seasoned Auditing and Compliance Management Professional with 15+ years of experience helping organizations and professionals adopt technology-driven solutions. She specializes in AI, compliance frameworks, and business efficiency, and now teaches learners worldwide how to leverage AI for real-world results.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">

                <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">COBIT Expert</Badge>
                <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">AI Specialist</Badge>
              </div>
              <p className="text-gray-400 text-sm">
                Chantelle combines deep technical expertise with a track record of practical business transformation. Having worked extensively in internal and external auditing, compliance consulting, and forensic auditing, she bridges the gap between technical AI knowledge and business outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="px-4 py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            What Our <span className="text-lime-400">Students Say</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-slate-800/80 border-slate-700">
              <CardContent className="p-6 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                  <img src={testimonialFreelancer} alt="Sarah J." className="w-full h-full object-cover" />
                </div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-lime-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-300 italic mb-4 text-center">
                  "This course completely transformed how I use AI. I save at least 5 hours a week now and my productivity has doubled. The prompt generator is a game-changer!"
                </blockquote>
                <cite className="text-cyan-400 font-semibold">- Sarah J., Marketing Manager</cite>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/80 border-slate-700">
              <CardContent className="p-6 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                  <img src={testimonialStudent} alt="David M." className="w-full h-full object-cover" />
                </div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-lime-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-300 italic mb-4 text-center">
                  "I finally understand how to structure prompts properly. My AI outputs are now precise and relevant. I landed three new freelance projects thanks to this knowledge!"
                </blockquote>
                <cite className="text-lime-400 font-semibold">- David M., Freelance Writer</cite>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/80 border-slate-700">
              <CardContent className="p-6 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                  <img src={testimonialEntrepreneur} alt="John D." className="w-full h-full object-cover" />
                </div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-lime-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-300 italic mb-4 text-center">
                  "As an entrepreneur, efficiency is key. This masterclass and the prompt generator have revolutionized how I interact with AI, saving me countless hours and improving the quality of my content. Highly recommend!"
                </blockquote>
                <cite className="text-cyan-400 font-semibold">- John D., Entrepreneur</cite>
              </CardContent>
            </Card>
            <Card className="bg-slate-800/80 border-slate-700">
              <CardContent className="p-6 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                  <img src={testimonialBusinesswoman} alt="Emily R." className="w-full h-full object-cover" />
                </div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-lime-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-300 italic mb-4 text-center">
                  "This course provided practical, actionable strategies for leveraging AI. My team and I are now much more effective in our daily tasks, and the prompt generator is an indispensable tool for our marketing efforts."
                </blockquote>
                <cite className="text-lime-400 font-semibold">- Emily R., Business Consultant</cite>
              </CardContent>
            </Card>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-lime-400">1000+</div>
              <div className="text-gray-400">Students Enrolled</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">4.9/5</div>
              <div className="text-gray-400">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">50+</div>
              <div className="text-gray-400">Prompt Templates</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400">24/7</div>
              <div className="text-gray-400">Lifetime Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="px-4 py-20">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-red-900/50 to-orange-900/50 rounded-lg p-12 border border-red-500/30">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ⚡ <span className="text-red-400">Limited Time Offer</span> ⚡
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Only <span className="text-red-400 font-bold">1000 combo deals</span> available at this special price. 
            Once they're gone, the price goes back to <span className="line-through">$119</span>.
          </p>
          <p className="text-lg text-gray-300 mb-8">
            Don't miss your chance to master AI prompt engineering and transform your productivity forever.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div id="gumroad-button-2" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold px-12 py-6 text-xl rounded-full shadow-2xl transform hover:scale-105 transition-all duration-200 animate-pulse"
              >
                <Zap className="mr-2 h-6 w-6" />
                Claim Your Deal on Gumroad NOW!
              </Button>
            </div>
            <div id="payhip-button-2" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold px-12 py-6 text-xl rounded-full shadow-2xl transform hover:scale-105 transition-all duration-200 animate-pulse"
              >
                <ShieldCheck className="mr-2 h-6 w-6" />
                Claim Your Deal on Payhip NOW!
              </Button>
            </div>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="px-4 py-12 bg-slate-900">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <img src={aiLearningImage} alt="AI Learning" className="w-24 h-24 mx-auto rounded-lg mb-4" />
            <h3 className="text-xl font-bold text-white">AI Prompt Engineering Masterclass</h3>
          </div>
          <p className="text-gray-400 mb-4">
            © 2024 AI Prompt Engineering Masterclass. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 mb-4">
            Transform your AI interactions today with our comprehensive training and tools.
          </p>
          <div className="flex justify-center space-x-6 text-gray-400">
            <a href="https://docs.google.com/document/d/1vAmJ_4A-JWV9B4fHVBu9HzHjZezAyhmqyuhjtdFGBLU/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-lime-400 transition-colors">Privacy Policy</a>
            <a href="https://docs.google.com/document/d/1WY75ERJ3_bERQHuLGf1OXQNJo2ONLQxvGbmya0-AfRc/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-lime-400 transition-colors">Terms of Service</a>
            <a href="https://docs.google.com/document/d/17tfCQgSBn7hYUFA2uagsli4M8RjG2wyXNriApO9TGic/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-lime-400 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

