import React from 'react'
import { Card, CardContent, Typography } from '@mui/material'

const ProjectsCard = ({ project }) => (
  <Card sx={{ maxWidth: 345 }}>
    {/* <CardMedia
        component="img"
        height="140"
        image={`/images/project-${project}.jpg`} // adjust path as necessary
        alt={`Project ${project}`}
      /> */}
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
          Project {project}
      </Typography>
      <Typography variant="body2" color="text.secondary">
          Description of project {project}.
      </Typography>
    </CardContent>
  </Card>
)

export default ProjectsCard
