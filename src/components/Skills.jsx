import React from 'react'
import Img1 from '../assets/Html.webp'
import Img2 from '../assets/css.webp'
import Img3 from '../assets/javascript.webp'
import Img4 from '../assets/react.webp'
import Img5 from '../assets/node.webp'
import Img6 from '../assets/express.webp'
import Img7 from '../assets/firebase.webp'
import Img8 from '../assets/mongo.webp'
import Img9 from '../assets/mysql.webp'
import Img10 from '../assets/git.webp'
import Img11 from '../assets/github.webp'
import Img12 from '../assets/vscode.webp'

export default function Skills() {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "HTML", image: Img1 },
        { name: "CSS", image: Img2 },
        { name: "JavaScript", Img3 },
        { name: "React", image: Img4 }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", image: Img5 },
        { name: "Express", image: Img6},
        { name: "Firebase", image: Img7 }
      ]
    },
    {
      category: "Database",
      items: [
        { name: "MongoDB", image: Img8 },
        { name: "MySQL", image: Img9}
      ]
    },
    {
      category: "Tools",
      items: [
        { name: "Git", image: Img10 },
        { name: "GitHub", image: Img11 },
        { name: "Vs Code", image: Img12 },
      ]
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillSet, index) => (
            <div key={index} className="bg-gray-800 bg-opacity-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">{skillSet.category}</h3>
              <ul className="grid grid-cols-2 gap-4">
                {skillSet.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex flex-col items-center">
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-12 h-12 mb-2"
                    />
                    <span className="text-sm text-gray-300">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}