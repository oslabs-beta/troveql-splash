import React from "react";
import EngineerCard from "../components/EngineerCard";
import samhenderson from '../assets/samhenderson.jpeg'
import triciayeh from '../assets/triciayeh.jpg'
import erikajung from '../assets/erikajung.jpeg'
import alexklein from '../assets/alexklein.jpg'


const Team = () => {

  return (
    <div id='team-info'>
      <h2>OUR TEAM</h2>
      <div className='engineer-card-cont'>
        <EngineerCard
          name='Tricia Yeh'
          title='Software Engineer'
          pic={triciayeh}
          gitHubLink='https://github.com/triciacorwin'
          linkedInLink='https://www.linkedin.com/in/tricia-yeh/'
        />
        <EngineerCard
          name='Alex T Klein'
          title='Software Engineer'
          pic={alexklein}
          gitHubLink='https://github.com/a-t-klein'
          linkedInLink='https://www.linkedin.com/in/alex-t-klein-183aa758/'
        />
        <EngineerCard
          name='Erika Jung'
          title='Software Engineer'
          pic={erikajung}
          gitHubLink='https://github.com/erikahjung'
          linkedInLink='https://www.linkedin.com/in/erikahjung/'
        />
        <EngineerCard
          name='Sam Henderson'
          title='Software Engineer'
          pic={samhenderson}
          gitHubLink='https://github.com/samhhenderson'
          linkedInLink='https://www.linkedin.com/in/samuel-h-henderson/'
          />
      </div>
    </div>
  )
}

export default Team;