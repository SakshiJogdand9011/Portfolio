import React from 'react'
import { Briefcase, GraduationCap, Phone, Mail, MapPin, Heart } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-800 bg-opacity-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 lg:px-16">
          <div className="bg-gray-700 bg-opacity-50 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4 flex items-center text-white">
              <Briefcase className="mr-2" /> Who I Am
            </h3>
            <p className="text-gray-300">
              I'm a passionate developer with a keen eye for design and a love for creating seamless user experiences. With a background in both frontend and backend technologies, I bring a holistic approach to web development.
            </p>
          </div>
          <div className="bg-gray-700 bg-opacity-50 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4 flex items-center text-white">
              <GraduationCap className="mr-2" /> What Sets Me Apart
            </h3>
            <p className="text-gray-300">
              My unique blend of technical skills and creative problem-solving allows me to tackle complex challenges with innovative solutions. I'm constantly learning and adapting to new technologies to stay at the forefront of web development.
            </p>
          </div>
        </div>

        <div className="mt-20"> {/* Increase margin to give more space */}
  <h3 className="text-2xl font-bold mb-6 text-center text-white">Education Timeline</h3>
  <div className="relative wrap overflow-hidden h-full">
    {[
      { title: "BTech in Computer Engineering [DBATU]", year: "2025-2022" },
      { title: "Diploma in Computer Technology [MSBTE]", year: "2019-2022" }
    ].map((education, index) => (
      <div key={index} className={`mb-8 flex gap-14 items-center w-full ${index % 2 === 0 ? 'right-timeline' : 'flex-row-reverse left-timeline'}`}>
        <div className="order-1 w-5/12"></div>
        <div className=" flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
          <h1 className="mx-auto font-semibold text-lg text-white bg-purple-700 px-3 py-2 rounded-full">{index + 1}</h1>
        </div>
        <div className="order-1 bg-gray-700 bg-opacity-50 rounded-lg shadow-xl w-5/12 px-6 py-4">
          <h3 className="mb-3 font-bold text-white text-xl">{education.title}</h3>
          <p className="text-sm leading-snug tracking-wide text-gray-300 text-opacity-100">{education.year}</p>
        </div>
      </div>
    ))}
  </div>
</div>


        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6 text-center text-white">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-16">
            <div className="bg-gray-700 bg-opacity-50 rounded-lg p-6 shadow-lg flex items-center">
              <Phone className="mr-4 text-primary" />
              <div>
                <h4 className="font-semibold text-white">Phone</h4>
                <p className="text-gray-300">+91 7774085639</p>
              </div>
            </div>
            <div className="bg-gray-700 bg-opacity-50 rounded-lg p-6 shadow-lg flex items-center">
              <Mail className="mr-4 text-primary" />
              <div>
                <h4 className="font-semibold text-white">Email</h4>
                <p className="text-gray-300">SakshiJogdand9011@gmail.com</p>
              </div>
            </div>
            <div className="bg-gray-700 bg-opacity-50 rounded-lg p-6 shadow-lg flex items-center">
              <MapPin className="mr-4 text-primary" />
              <div>
                <h4 className="font-semibold text-white">Address</h4>
                <p className="text-gray-300">Pune, Maharashtra, India</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 px-6 lg:px-16">
          <h3 className="text-2xl font-bold mb-6 text-center text-white">Interests</h3>
          <div className="bg-gray-700 bg-opacity-50 rounded-lg p-6 shadow-lg">
            <ul className="list-disc list-inside text-gray-300 grid grid-cols-2 gap-4">
              <li className="flex items-center">
                <Heart className="mr-2 text-primary" size={16} />
                Web Development
              </li>
              <li className="flex items-center">
                <Heart className="mr-2 text-primary" size={16} />
                Artificial intelligence (AI) 
              </li>
              <li className="flex items-center">
                <Heart className="mr-2 text-primary" size={16} />
                Machine Learning
              </li>
              <li className="flex items-center">
                <Heart className="mr-2 text-primary" size={16} />
                Open Source Contributing
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}