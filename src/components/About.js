import React from 'react'
import { Grid } from '@mui/material'

export default function About() {
  const resumeURL = 'https://drive.google.com/file/d/1ufYDdp2XYzj93l8JLvxMagP1892FMQlH/view?usp=sharing'
  return (
    <div className='AboutSection' id='about-section'>
       <Grid container>
         <Grid item xs={8}>
            <div className="about">
                <h1>I'm Vanshika Tomar, <br /> Frontend Developer & Freelancer, <br /> from Uttar Pradesh, India</h1>
                <p>Frontend developer with 1 year of experience, focusing in React.js development. Proficient in building user-friendly and responsive web applications using React.js and its related technologies. Skilled in front-end fundamentals like HTML, CSS, and JavaScript, with a focus on creating well-structured and maintainable code. Passionate about continuously learning and improving React.js skills to deliver high-quality and engaging user interfaces. </p>
                <a href={resumeURL} download="resume.pdf">
                Download Resume
                </a>
            </div>
         </Grid>
       </Grid>
    </div>
  )
}
