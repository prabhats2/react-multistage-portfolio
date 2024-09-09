import React from 'react'
import { Grid } from '@mui/material'
import { CProgress } from '@coreui/react'

export default function Resume() {
  return (
    <div className='ResumeSection' id='ResumeSection'>
       <Grid container spacing={10}>
          <Grid item xs={6}>
             <div className="Heading">
                <h1>Experince</h1>
             </div>
             <div className="Experince">
                <h4>Frontend Developer</h4>
                <span>V'nspire Solution Pvt. Ltd., Gurgaon</span><br />
                <span>2021-Present</span>
                <ul>
                  <li>Experince in utilizing mordern framework and libraries such as React.js to built robust application.</li>
                  <li>Familiar with version control system like GIT, enabling efficient code collaboration and project management.</li>
                  <li>Strong problem solving skill, capable of debugging and troubleshooting frontend issue to ensure smooth user experience.</li>
                  <li>Work closely with backend developer to integrate frontend and backend component, ensuring seamleass functionality and data exchange.</li>
                </ul>
             </div>
          </Grid>
          <Grid item xs={6}>
               <div className="Heading">
                  <h1>Education</h1>
               </div>
             <Grid container>
               <Grid item xs={12}>
                     <div className="Experince">
                        <h4>B-Tech (Computer Science and Engineering)</h4>
                        <span>Anand Engineering College, Agra</span><br />
                        <span>2016-2020</span>
                        <p>As a Computer Science Engineering graduate, I have acquired a solid foundation in programming, algorithms, and problem-solving. With a keen interest in development and a passion for creating webpag, I am equipped to tackle complex challenges and develop efficient software solutions. </p>
                     </div>
               </Grid>
               <Grid item xs={12}>
                     <div className="Experince" style={{marginTop: '20px'}}>
                        <h4>Web Development Course</h4>
                        <span>2019</span>
                        <p> I have gained comprehensive knowledge and skills in various aspects of web development. Throughout the course, I learned essential programming languages such as HTML, CSS, and JavaScript, enabling me to create and structure web pages effectively. Additionally, I explored frontend frameworks like React.js and backend technologies like Node.js to build dynamic and interactive web applications. </p>
                     </div>
               </Grid>
             </Grid>
          </Grid>
       </Grid>
       <Grid container spacing={10} style={{ marginTop: '30px'}}>
          <Grid item xs={6}>
               <div className="Heading">
                  <h1>Personal Skills</h1>
               </div>
               <div className="Experince">
                  <Grid container>
                     <Grid item xs={12}>
                        <div className="mb">
                           <h4>Communication</h4>
                           <CProgress value={50} height={10}>50%</CProgress>
                        </div>
                     </Grid>
                     <Grid item xs={12}>
                        <div className="mb">
                           <h4>Time Management</h4>
                           <CProgress value={80} height={10}>50%</CProgress>
                        </div>
                     </Grid>
                     <Grid item xs={12}>
                        <div className="mb">
                           <h4>Team Work & Collaboration</h4>
                           <CProgress value={70} height={10}>50%</CProgress>
                        </div>
                     </Grid>
                     <Grid item xs={12}>
                        <div className="mb">
                           <h4>Continous Learning</h4>
                           <CProgress value={90} height={10}>50%</CProgress>
                        </div>
                     </Grid>
                  </Grid>
               </div>
          </Grid>
          <Grid item xs={6}>
               <div className="Heading">
                  <h1> Skills</h1>
               </div>
               <div className="Experince">
                  <Grid container>
                     <Grid item xs={12}>
                        <div className="mb">
                           <h4>HTML5</h4>
                           <CProgress value={80} height={10}>50%</CProgress>
                        </div>
                     </Grid>
                     <Grid item xs={12}>
                        <div className="mb">
                           <h4>CSS3</h4>
                           <CProgress value={80} height={10}>50%</CProgress>
                        </div>
                     </Grid>
                     <Grid item xs={12}>
                        <div className="mb">
                           <h4>React js</h4>
                           <CProgress value={60} height={10}>50%</CProgress>
                        </div>
                     </Grid>
                     <Grid item xs={12}>
                        <div className="mb">
                           <h4>Bootstrap</h4>
                           <CProgress value={90} height={10}>50%</CProgress>
                        </div>
                     </Grid>
                     <Grid item xs={12}>
                        <div className="mb">
                           <h4>Material UI</h4>
                           <CProgress value={90} height={10}>50%</CProgress>
                        </div>
                     </Grid>
                  </Grid>
               </div>
          </Grid>
       </Grid>
    </div>
  )
}
