import React from 'react'
import ProjectsCard from './sub/ProjectsCard'
const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20'>
      <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>Our Projects</h1>
      <div className='w-full h-full flex flex-col md:flex-row gap-10 px-10'> 
        <ProjectsCard
        src='/NextWebsite.png'
        title='empty01'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a ipsum sed nisi commodo facilisis. Vestibulum ut nunc aliquet, volutpat ex eget, sagittis urna.'        
        />
        <ProjectsCard
        src='/CardImage.png'
        title='empty02'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a ipsum sed nisi commodo facilisis. Vestibulum ut nunc aliquet, volutpat ex eget, sagittis urna.'        
        />
        <ProjectsCard
        src='/SpaceWebsite.png'
        title='empty03'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a ipsum sed nisi commodo facilisis. Vestibulum ut nunc aliquet, volutpat ex eget, sagittis urna.'        
        />
      </div>
    </div>
  )
}

export default Projects
