import React from "react";
import EngineerCard from "../components/EngineerCard";
import samh from '../assets/samhenderson.jpeg'


const Team = () => {

  return (
    <div id='team-info'>
      <h2>OUR TEAM</h2>
      <div className='engineer-card-cont'>
        <EngineerCard
          name='Tricia Yeh'
          title='Software Engineer'
          pic=''
          gitHubLink='https://github.com/triciacorwin'
          linkedInLink=''
        />
        <EngineerCard
          name='Alex Klein'
          title='Software Engineer'
          pic=''
          gitHubLink='https://github.com/a-t-klein'
          linkedInLink=''
        />
        <EngineerCard
          name='Erika Jung'
          title='Software Engineer'
          pic=''
          gitHubLink='https://github.com/erikahjung'
          linkedInLink=''
        />
        <EngineerCard
          name='Sam Henderson'
          title='Software Engineer'
          pic={samh}
          gitHubLink='https://github.com/samhhenderson'
          linkedInLink='https://www.linkedin.com/in/samuel-h-henderson/'
          />
      </div>
    </div>
  )
}

export default Team;