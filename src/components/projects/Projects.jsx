import React from 'react'
import Title from '../layouts/Title'
import ProjectsCard from './ProjectsCard'
import projectOne from '/images/projectOne.jpg'


const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Jobwings"
          des="A platform where recruiters and job seekers connect to apply for jobs."
          src="https://jobwings33.com/"
          websiteLink="https://jobwings33.com/"
        />

        <ProjectsCard
          title="rigitiX"
          des="An event management software that allows event owners to sell tickets and get real-time updates on ticket sales."
          src="https://rigitix.com/"
          websiteLink="https://rigitix.com/"
        />
        <ProjectsCard
          title="Kreater"
          des="A logistics platform for shipping goods from China and Bangladesh to Nigeria with automated shipment tracking."
          src="https://kreater.africa/"
          websiteLink="https://kreater.africa/"
        />

        <ProjectsCard
          title="Pharste Fintech App"
          des="A fintech app for currency exchange and P2P transactions."
          src="https://pharste.com/"
        />
        <ProjectsCard
          title="Custom MVC API Template"
          des="A PHP-based API template for custom MVC applications."
          src="https://github.com/Marlz74/api_template_php"
          githubLink="https://github.com/Marlz74/api_template_php"
        />
        <ProjectsCard
          title="Telegram MiniApp Backend"
          des="A backend for a Telegram mini app built using Node.js."
          src="https://github.com/Marlz74/telegram_bot"
          githubLink="https://github.com/Marlz74/telegram_bot"
        />
      </div>
    </section>
  );
}

export default Projects
