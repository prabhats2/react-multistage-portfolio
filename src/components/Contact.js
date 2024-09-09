import React from 'react'
import { Grid, TextField, Button } from '@mui/material'

export default function Contact() {
  return (
    <div className='ContactSection' id='ContactSection'>
       <Grid container >
          <Grid item xs={10}>
             <div className="heading">
                <h1>Contact Me</h1>
                <div className="Form">
                   <Grid container spacing={10}>
                      <Grid item xs={6}>
                        <TextField id="outlined-basic" label="Name" variant="standard" size='small' style={{ width: '500px'}} />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField id="outlined-basic" label="Phone" variant="standard" size='small' style={{ width: '500px'}} />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField id="outlined-basic" label="Email" variant="standard" size='small' style={{ width: '500px'}} />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField id="outlined-basic" label="Subject" variant="standard" size='small' style={{ width: '500px'}} />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField id="outlined-basic" multiline rows={5} label="Message" variant="standard" size='small' style={{ width: '1080px'}} />
                      </Grid>
                      <Grid item xs={12}>
                         <Button style={{ border: '1px solid'}}>Submit</Button>
                      </Grid>
                   </Grid>
                </div>
             </div>
          </Grid>
       </Grid>
    </div>
  )
}
