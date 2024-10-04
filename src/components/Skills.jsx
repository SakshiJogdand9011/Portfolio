import React from 'react'

export default function Skills() {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "HTML", image: "src/Img/Html.webp" },
        { name: "CSS", image: "src/Img/css.webp" },
        { name: "JavaScript", image: "src/Img/javascript.webp" },
        { name: "React", image: "src/Img/react.webp" }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", image: "src/Img/node.webp" },
        { name: "Express", image: "src/Img/express.webp" },
        { name: "Firebase", image: "src/Img/firebase.webp" }
      ]
    },
    {
      category: "Database",
      items: [
        { name: "MongoDB", image: "src/Img/mongo.webp" },
        { name: "MySQL", image: "src/Img/mysql.webp" }
      ]
    },
    {
      category: "Tools",
      items: [
        { name: "Git", image: "src/Img/git.webp" },
        { name: "GitHub", image: "src/Img/github.webp" },
        { name: "Vs Code", image: "src/Img/vscode.webp" },
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