"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';


import twitterIcon from '@/public/icons/twitter.png';
import instagramIcon from '@/public/icons/instagram.png';
import facebookIcon from '@/public/icons/facebook.jpg';
import whatsappIcon from '@/public/icons/whatsapp.png';

import adventurerIcon from '@/public/personality/adventurer.jpg'
import builderIcon from '@/public/personality/builder.jpg'
import campaignerIcon from '@/public/personality/campaigner.jpg'
import inventorIcon from '@/public/personality/inventor.jpg'
import observerIcon from '@/public/personality/observer.jpg'
import philosopherIcon from '@/public/personality/philosopher.jpg'
import researcherIcon from '@/public/personality/researcher.jpg'
import skepticIcon from '@/public/personality/skeptic.jpg'
import educatorIcon from '@/public/personality/educator.jpg'
import warriorIcon from '@/public/personality/warrior.jpg'


interface PersonalityType {
  name: string;
  description: string;
  illustration: StaticImageData; 
}

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);

  };

  return (
    <header className="bg-white text-black shadow">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between p-5">
        <div className="flex items-center ml-0">
          <div className="ml-2 text-center">
            <h1 className="text-3xl md:text-4xl font-bold font-serif">New World</h1>
            <h2 className="text-base md:text-lg">Better Environment, <br />Happier Generation.</h2>
          </div>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-black focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        <nav className="hidden md:flex items-center ml-5">
          <Link href="/" className="mx-4 text-black hover:underline">Home</Link>
          <Link href="/about" className="mx-4 text-black hover:underline">About Us</Link>
          <Link href="/services" className="mx-4 text-black hover:underline">Services</Link>
          <Link href="/teams" className="mx-4 text-black hover:underline">Teams</Link>
          <Link href="/quiz" className="mx-4 text-black hover:underline">Take the Quiz!</Link>
        </nav>
      </div>

      <div className={`md:hidden ${isMobileMenuOpen ? 'flex' : 'hidden'} flex-col items-center bg-white p-4`}>
        <Link href="/" className="my-2 text-black hover:underline">Home</Link>
        <Link href="/about" className="my-2 text-black hover:underline">About Us</Link>
        <Link href="/services" className="my-2 text-black hover:underline">Services</Link>
        <Link href="/teams" className="my-2 text-black hover:underline">Teams</Link>
        <Link href="/quiz" className="my-2 text-black hover:underline">Take the Quiz!</Link>
      </div>
    </header>
  );
};

const questions = [
  {
    question: "1/10: What do you do when you find litter in your community?",
    options: ["Hoping that somebody will pick it up", "Pick it up and dispose of it", "Use it for a DIY project"],
    scores: [0, 1, 2],
  },
  {
    question: "2/10: How often do you use public transportation?",
    options: ["Rarely", "Sometimes", "Always"],
    scores: [0, 1, 2],
  },
  {
    question: "3/10: How do you feel about recycling?",
    options: ["It's too much hassle", "I recycle occasionally", "I always recycle everything I can"],
    scores: [0, 1, 2],
  },
  {
    question: "4/10: What type of products do you prefer to buy?",
    options: ["Single-use products", "Some reusable products", "Mainly reusable and sustainable products"],
    scores: [0, 1, 2],
  },
  {
    question: "5/10: How do you dispose of food waste?",
    options: ["Throw it in the regular trash", "Compost it if possible", "I have a composting system at home"],
    scores: [0, 1, 2],
  },
  {
    question: "6/10: How do you travel to work?",
    options: ["By car", "By train or bus", "By bike or walking"],
    scores: [0, 1, 2],
  },
  {
    question: "7/10: How often do you support local environmental initiatives?",
    options: ["Sometimes", "Often", "Always"],
    scores: [0, 1, 2],
  },
  {
    question: "8/10: What do you think about climate change?",
    options: ["I've heard about it, but I'm not sure", "I knew it, but just in the surface", "I believe it's a serious issue that needs urgent action"],
    scores: [0, 1, 2],
  },
  {
    question: "9/10: How do you handle energy consumption at home?",
    options: ["I rarely turn off my lights", "I turn off lights when not in use", "I use energy-efficient appliances"],
    scores: [0, 1, 2],
  },
  {
    question: "10/10: How often do you educate others about sustainability?",
    options: ["Rarely", "Sometimes", "Often"],
    scores: [0, 1, 2],
  },
];

const personalityTypes = [
  { name: "The Skeptic", description: "You are aware of environmental issues but remain unconvinced of their urgency.", illustration: skepticIcon, scoreRange: [0, 1] },
  { name: "The Observer", description: "You are interested in environmental issues but haven't engaged actively.", illustration: observerIcon, scoreRange: [2, 4] },
  { name: "The Adventurer", description: "You believe in living simply, explore the nature and avoiding excess.", illustration: adventurerIcon, scoreRange: [5, 6] },
  { name: "The Campaigner", description: "You actively promote sustainability and encourage others to change.", illustration: campaignerIcon, scoreRange: [7, 8] },
  { name: "The Builder", description: "You work with others to create a sustainable community.", illustration: builderIcon, scoreRange: [9, 10] },
  { name: "The Educator", description: "You strive to inform others about the importance of environmental conservation.", illustration: educatorIcon, scoreRange: [11, 12] },
  { name: "The Researcher", description: "You analyze data and evidence to understand environmental issues.", illustration: researcherIcon, scoreRange: [13, 14] },
  { name: "The Inventor", description: "You are always looking for new ways to reduce your carbon footprint.", illustration: inventorIcon, scoreRange: [15, 16] },
  { name: "The Philosopher", description: "You take this universe seriously, having deep contemplation on our environment and its preservation.", illustration: philosopherIcon, scoreRange: [17, 18] },
  { name: "The Warrior", description: "You are deeply committed to the environment and take real action.", illustration: warriorIcon, scoreRange: [19, 20] },
];

  const GreenPersonQuiz = () => {
    const [answers, setAnswers] = useState(Array(questions.length).fill(0));
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [result, setResult] = useState<PersonalityType | null>(null); 
    const [loading, setLoading] = useState(false);
    const [fade, setFade] = useState(false);


  
    const handleOptionChange = (score: number) => {
      const newAnswers = [...answers];
      newAnswers[currentQuestion] = score;
      setAnswers(newAnswers);

      setFade(true);
      setTimeout(() => {
        nextQuestion(); 
      }, 200); 
    };
    
    const nextQuestion = () => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setLoading(true); 
        setTimeout(calculateResult, 1500); 
      }
      setFade(false);
    };
  
    const calculateResult = () => {
      const totalScore = answers.reduce((a, b) => a + b, 0);
      
      const personality = personalityTypes.find(type => 
        totalScore >= type.scoreRange[0] && totalScore <= type.scoreRange[1]
      );
      
      setResult(personality || null); 
      setLoading(false); 
    };
    
  
    const takeQuizAgain = () => {
      setAnswers(Array(questions.length).fill(0));
      setCurrentQuestion(0);
      setResult(null);
      setLoading(false);
    };

    const openFeedbackForm = () => {
      window.open('https://tc937352e8l.typeform.com/to/nVg9PjfZ', '_blank'); 
    };

  
    return (
      <div className="max-w-[800px] mx-auto p-4 flex flex-col items-center justify-center min-h-screen pt-16 md:pt-24">
        <h2 className="text-3xl font-bold mb-4 text-center mt-10 leading-snug">What Type of <span className="text-green-600">Green</span> Personality Are You?</h2>
        {loading ? (
          <div className="text-center">
            <p className="text-xl">Please wait for a moment...</p>
            <p className="text-lg">Calculating your result...</p>
          </div>
        ) : result ? (
          <div className="text-center mt-8">
            <h3 className="text-2xl flex justify-center items-center font-semibold mb-2">{result.name}</h3>
            
            <div className="flex justify-center">
              <Image 
                src={result.illustration} 
                alt={result.name} 
                className="rounded-full" 
                width={300} 
                height={300}
              />
            </div>
            <p className="mt-4 text-lg">{result.description}</p>
            
            <div className="flex flex-col items-center space-y-4 mt-6">
              <button 
                onClick={takeQuizAgain} 
                className="border-2 border-black rounded-lg py-2 px-4 bg-transparent text-gray-600 hover:bg-gray-200"
              >
                Take Quiz Again?
              </button>
  
              <button
                onClick={openFeedbackForm}
                className="border-2 border-black rounded-lg py-2 px-4 bg-transparent text-gray-600 hover:bg-gray-200"
              >
                Give us Feedback
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full">
            <h3 className="text-xl font-semibold mb-4">{questions[currentQuestion].question}</h3>
            <div className={`transition-opacity duration-200 ${fade ? 'opacity-0' : 'opacity-100'}`}>
              <div className="flex flex-col">
                {questions[currentQuestion].options.map((option, index) => {
                  const isSelected = answers[currentQuestion] === questions[currentQuestion].scores[index];
                  return (
                    <button
                      key={index}
                      className={`border-2 rounded-lg p-4 mb-2 text-left 
                        ${isSelected ? 'text-lightseagreen' : 'bg-transparent text-black'}
                        hover:bg-gray-400`}  
                      onClick={() => handleOptionChange(questions[currentQuestion].scores[index])}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
        {result && (
          <div className="mt-6 md:mt-8">
            <h4 className="text-lg font-bold mb-2 text-center">Share your results!</h4>
            <div className="flex space-x-4">
              <a href={`https://api.whatsapp.com/send?text=I just took the Eco-friendly quiz from https://new-world-web.vercel.app/ and I'm a ${result.name}!`} target="_blank" rel="noopener noreferrer">
                <Image src={whatsappIcon} alt="Share on WhatsApp" width={40} height={40} />
              </a>
              <a href={`https://twitter.com/intent/tweet?text=I just took the Eco-friendly quiz from https://new-world-web.vercel.app/  and I'm a ${result.name}!`} target="_blank" rel="noopener noreferrer">
                <Image src={twitterIcon} alt="Share on Twitter" width={40} height={40} />
              </a>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=I just took the New-world green personality quiz and I'm a ${result.name}!`} target="_blank" rel="noopener noreferrer">
                <Image src={facebookIcon} alt="Share on Facebook" width={40} height={40} />
              </a>
              <a href={`https://www.instagram.com/?url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer">
                <Image src={instagramIcon} alt="Share on Instagram" width={40} height={40} />
              </a>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default function GreenPersonalityQuiz() {
    return (
      <div>
        <Header />
        <GreenPersonQuiz />
      </div>
    );
  }