import { Grid } from '@mui/material'
import React from 'react'
import {PiCopySimple} from 'react-icons/pi'
import {ImMagicWand} from 'react-icons/im'
import {AiOutlineEdit} from 'react-icons/ai'

export default function WhatIdo() {
  return (
    <div className='WhatSection' id='WhatIDo'>
       <div className="WhatTxt">
          <h1>What I Do?</h1>
       </div>
       <div className="inWhat">
          <Grid container spacing={5}>
            <Grid item xs={4}>
                <div className="What">
                    <PiCopySimple style={{ fontSize: '2.5rem', marginBottom: '10px'}} />
                    <h4>Building Interative Webpages</h4>
                    <p>Creating an engaging user interface by breaking down the application into reusable and manageable components results in a smooth and responsive user experience.</p>
                </div>
            </Grid>
            <Grid item xs={4}>
                <div className="What">
                    <ImMagicWand style={{ fontSize: '2.5rem', marginBottom: '10px'}} />
                    <h4>Web Designing</h4>
                    <p> I blend creativity with technical skills to create visually captivating and user-centric interfaces. By employing modern design principles and leveraging the latest tools and technologies.</p>
                </div>
            </Grid>
            <Grid item xs={4}>
                <div className="What">
                    <AiOutlineEdit style={{ fontSize: '2.5rem', marginBottom: '10px'}} />
                    <h4>Blog & Article Writting</h4>
                    <p>  I combine creativity with words to craft engaging and informative content. With a focus on research and clear communication, I aim to deliver engaging narratives that resonate with readers.</p>
                </div>
            </Grid>
          </Grid>
       </div>
    </div>
  )
}
