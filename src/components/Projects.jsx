import React from 'react'
import { ExternalLink } from 'lucide-react'
import Img1 from '../assets/project.webp'
import Project1 from '../assets/Project1.webp'

export default function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "A brief description of Project 1 and its key features.",
      image: Project1,
      link: "https://f-chats.netlify.app/login",
    },
    {
      title: "Project 2",
      description: "A brief description of Project 2 and its key features.",
      image: Img1,
      link: "#",
    },
    {
      title: "Project 3",
      description: "A brief description of Project 3 and its key features.",
      image: Img1,
      link: "#",
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-800 bg-opacity-50 lg:px-16 px-4">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-700 bg-opacity-50 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
              <img className="w-full h-48 object-cover" src={project.image} alt={project.title} />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-gray-300 text-base mb-4">{project.description}</p>
                <div className="flex justify-between">
                  <a href={project.link} className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition duration-300">
                    View Project
                    <ExternalLink className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}