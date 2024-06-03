import React from 'react'
import { Box, Typography, Grid } from '@mui/material'
import ProjectsCard from '@/components/ui/ProjectCard'
import profilePic from '../../public/profilePic.JPG'
import Image from 'next/image'
import gitHubLogo from '../../public/gitHubLogo.png'
import hashNodeImage from '../../public/hashnode.png'
import twitterImage from '../../public/Twitter_logo.png'
import linkedInImage from '../../public/LinkedIn_logo.png'
import { Album } from '@mui/icons-material'
import technologyLogo from '../../public/technologyLogo.png'
import uiUXLogo from '../../public/UI_UX.png'
import webDevelopment from '../../public/web_development.png'
import journeyLogo from '../../public/journey_logo.png'
import gpsLogo from '../../public/gps_logo.png'
import educationLogo from '../../public/education.png'
import childrenLogo from '../../public/children_logo.png'
import deloitteLogo from '../../public/deloitte.png'
import calheersLogo from '../../public/calheers.png'
import calheersAnimation from '../../public/final_calheers.png'
import cambriaLogo from '../../public/cambria_logo.png'
import abcLogo from '../../public/abc_logo.png'
import cwdsLogo from '../../public/cwds_logo.png'
import childCare from '../../public/child_care.png'
import rivierLogo from '../../public/river_logo.png'
import schoolAnimation from '../../public/school_animation.png'
import randstadLogo from '../../public/randstad_logo.png'
import googleMaps from '../../public/google_maps.png'
import workingInCafe from '../../public/working_in_cafe.png'
import jNTULogo from '../../public/jntu.png'
import engineeringLogo from '../../public/engineering.png'
// import finalABCDemo from '../../public/final_abc.mp4'

const HomePage = () => (
  <>
    <Box
      sx={{
        minHeight: '735px',
        background: 'linear-gradient(to left, primary.main 51%, secondary.main 58%)',
        // backgroundColor: 'primary.main',
        display: 'flex',
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          display: 'flex',
          alignItems: 'center',
          margin: '0px 0px 5rem 0px',
        }}
      >
        <Grid
          item
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '5rem',
            padding: '0px !important',
          }}
          xs={12}
          sm={6}
          md={6}
          lg={4}
        >
          {/* <Hidden smDown>
            <div>
              <NameTitle variant="h3">Sunil Biradar</NameTitle>
              <NameTitle variant="h6">
                  Designer/Developer/Lead/Agile expert
              </NameTitle>
            </div>
          </Hidden>
          <Hidden mdUp>
            <div>
              <NameTitle variant="h4">Sunil Biradar</NameTitle>
              <NameTitle variant="subtitle1">
                  Designer/Developer/Lead/Agile expert
              </NameTitle>
            </div>
          </Hidden> */}
        </Grid>
        <Grid
          item
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '5rem',
            padding: '0px !important',
          }}
          xs={12}
          sm={6}
          md={6}
          lg={4}
        >
          <Box
            sx={{
              border: '2px solid',
              // border-color: ${props => props.theme.border'}',
              padding: '17px',
              width: '287px',
              height: '365px',
              img: {
                height: '380px',
                width: '295px',
                // @media (max-width: 700px) {
                //   height: 291px;
                //   width: 209px;
                // }
              },
              // @media (max-width: 700px) {
              //   width: '204px',
              //   height: '302px',
              // }
            }}
          >
            <Image alt="profilePic" src={profilePic} />
          </Box>
        </Grid>
        <Grid
          item
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '5rem',
            padding: '0px !important',
          }}
          xs={12}
          sm={12}
          md={12}
          lg={4}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/*-------- Brief Introduction --------*/}
            {/* <Hidden smDown>
              <ShortDescription variant="h6">
                  HEY! Welcome to my portfolio. I am a technology enthusiast.
                  People who know me think I am Good at sharing information,
                  Work with patience, Flexible, Self-driven, Forward-thinking,
                  Approachable, Polite, Innovative, Good listener.
              </ShortDescription>
            </Hidden> */}
            {/* <Hidden mdUp>
              <ShortDescription variant="subtitle2">
                  HEY! Welcome to my portfolio. I am a technology enthusiast.
                  People who know me think I am Good at sharing information,
                  Work with patience, Flexible, Self-driven, Forward-thinking,
                  Approachable, Polite, Innovative, Good listener.
              </ShortDescription>
            </Hidden> */}
            {/* ------- Social Media links ------- */}
            <Box
              component={'span'}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '320px',
                img: {
                  width: '30px',
                  height: '30px',
                },
              }}
            >
              <a href="https://github.com/sunilb0575">
                <Image src={gitHubLogo} alt="gitHubLogo" />
              </a>
              <a href="https://twitter.com/sunil_brdr">
                <Image src={twitterImage} alt="twitterImage" />
              </a>
              <a href="https://blogposts.sunil-brdr.me/">
                <Image src={hashNodeImage} alt="hashNodeImage" />
              </a>
              <a href="https://www.linkedin.com/in/sunil-biradar-bab55b145/">
                <Image src={linkedInImage} alt="linkedInImage" />
              </a>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>

    {/* TimeLapse  */}
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        flexDirection: 'column',
      }}
    >
      <Typography
        sx={{
          marginTop: '20px',
          fontWeight: '600',
          color: 'light',
          fontFamily: 'Inconsolata Consolas, monospace',
        }}
        variant="h6"
        color="secondary"
      >
        Let&apos;s go back in time
      </Typography>
      <Album
        sx={{
          marginBottom: '35px',
        }}
        fontSize="large"
      />
      <Box
        sx={{
          borderLeft: 'primary',
          height: '96px',
          margin: '-35px 0px -35px 0px',
          zIndex: '0',
          position: 'initial',
        }}
      />

      {/* Project 2020 - Deloitte */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Image alt='technologyLogo' src={technologyLogo} />
      </Box>
      <Box
        sx={{
          borderLeft: 'primary',
          height: '96px',
          margin: '-35px 0px -35px 0px',
          zIndex: '0',
          position: 'initial',
        }}
      />
      <ProjectsCard
        logo={deloitteLogo}
        logo2={calheersLogo}
        logo1Width={234}
        logo2Width={75}
        logo2Height={32}
        yearRoleProject="2020 June (On Project) - Deloitte - Frontend Technical Lead"
        clientName="Client - CalHeers (California Healthcare Eligibility, Enrollment, and Retention System)"
        projectIntro={[
          'As a frontend technical lead on the Agile/design team, my role is to ensure the design is feasible in terms of implementation, accessibility, responsiveness, and current application architecture.',
          'I also help the development team in building reusable React components and styling new screens when needed. I work closely with the business requirements to make sure the proposed design aligns well with the requirements.',
          "Some of the critical technologies/frameworks used are ReactJS, Styled-Components, StoryBookJS, Microsoft's Fluent-UI.",
        ]}
        projectDemo={calheersAnimation}
        projectDemoImage={true}
        background="#FBAE22"
        gradient="#fb8b22"
      />
      <Box
        sx={{
          borderLeft: 'primary',
          height: '96px',
          margin: '-35px 0px -35px 0px',
          zIndex: '0',
          position: 'initial',
        }}
      />

      {/* Project 2019 - ABC */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Image alt='uiUXLogo' src={uiUXLogo} />
      </Box>
      <Box
        sx={{
          borderLeft: 'primary',
          height: '96px',
          margin: '-35px 0px -35px 0px',
          zIndex: '0',
          position: 'initial',
        }}
      />
      <ProjectsCard
        logo={cambriaLogo}
        logo2={abcLogo}
        logo1Width={234}
        logo2Width={84}
        logo2Height={63}
        yearRoleProject="2019 July to 2020 June - Cambria Solutions - Frontend developer and Designer"
        clientName="Client - California Department of Alcoholic and Beverage Control"
        projectIntro={[
          'As a frontend developer in an Agile team, I helped the project transform a legacy paper-based process into a web-based, user-friendly React application.',
          'I got the opportunity to work on some of the great features like searching, filtering, sorting the list fetched from the API. I was involved in implementing user privilege logic to behave differently based on different user roles.',
          'I also worked on adding various other features to the application to perform CRUD operations by using both Forms and excel documents.',
          'I was involved in handling huge business logic and recursive functions by keeping performance in mind. Some of the critical technologies/frameworks used are GraphQL, ReactJS, Styled-Components, Material-UI, CASL library, AWS Lambda, AWS Cognito, Circle-CI, JEST, Enzyme.',
        ]}
        // projectDemo={finalABCDemo}
        background="#102be7"
        gradient="#102be7ad"
        isdarkbackground="true"
      />
      <Box
        sx={{
          borderLeft: 'primary',
          height: '96px',
          margin: '-35px 0px -35px 0px',
          zIndex: '0',
          position: 'initial',
        }}
      />

      {/* Project 2017 - CWDS */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Image alt='webDevelopment' src={webDevelopment} />
      </Box>
      <Box
        sx={{
          borderLeft: 'primary',
          height: '96px',
          margin: '-35px 0px -35px 0px',
          zIndex: '0',
          position: 'initial',
        }}
      />
      <ProjectsCard
        logo={cambriaLogo}
        logo2={cwdsLogo}
        logo1Width={234}
        logo2Width={130}
        logo2Height={83}
        yearRoleProject="2017 November to 2019 July - Cambria Solutions - Frontend developer"
        clientName="Client - Child Welfare Digital Service"
        projectIntro={[
          'As a frontend developer, I helped convert legacy windows based application to a web-based React application. This application was an enterprise application with different modules and use-cases; hence it required communication with multiple teams involving frontend/back-end teams, security teams, and DevOps.',
          'During this project, features I worked on are Authentication, Pagination, Managing user roles, Profile view, and maintaining CI/CD operations.',
          'Some of the critical technologies/frameworks used are ReactJS, SCSS, AWS Cognito, Elastic Search, Bootstrap, JEST, Enzyme.',
        ]}
        projectDemo={childCare}
        projectDemoImage={true}
        background="#323A45"
        gradient="#00000099"
        isdarkbackground="true"
      />
      <Box
        sx={{
          borderLeft: 'primary',
          height: '96px',
          margin: '-35px 0px -35px 0px',
          zIndex: '0',
          position: 'initial',
        }}
      />

      {/* Masters 2015 - Rivier */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Image alt='journeyLogo' src={journeyLogo} />
      </Box>
      <Box
        sx={{
          borderLeft: 'primary',
          height: '96px',
          margin: '-35px 0px -35px 0px',
          zIndex: '0',
          position: 'initial',
        }}
      />
      <ProjectsCard
        logo={rivierLogo}
        logo1Width={171}
        logo1Height={65}
        yearRoleProject="2015 August - Rivier University - Master"
        clientName="Course - Computer Science"
        projectIntro={[
          "As an international student and with Computer Science course at Rivier University I gained good knowledge in both subject and culture. With all the real-time projects and examples, this course helped me understand various fundamentals related to industry and it's the entire process.",
          'Some of the concepts like how real-time applications build, tested, maintained, dealing with large teams in different time-zones, how organizations function by dealing with business security. Some of the subjects that I completed are Web development, Algorithms, Database management System.',
        ]}
        projectDemo={schoolAnimation}
        projectDemoImage={true}
        background="#29A745"
        gradient="#21fc518c"
        isdarkbackground="true"
      />
      <Box
        sx={{
          borderLeft: 'primary',
          height: '96px',
          margin: '-35px 0px -35px 0px',
          zIndex: '0',
          position: 'initial',
        }}
      />

      {/* 2015 - Randstad */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Image alt='gpsLogo' src={gpsLogo} />
      </Box>
      <Box
        sx={{
          borderLeft: 'primary',
          height: '96px',
          margin: '-35px 0px -35px 0px',
          zIndex: '0',
          position: 'initial',
        }}
      />
      <ProjectsCard
        logo={randstadLogo}
        logo2={googleMaps}
        yearRoleProject="2014 July to 2015 June  - Randstad India PVT - System Engineer"
        logo1Width={110}
        logo1Height={79}
        logo2Width={157}
        logo2Height={91}
        clientName="Client - Google GPS"
        projectIntro={[
          'As a system Engineer on the Google Maps project, I experienced one of the internal tools specifically developed for the GIS process.',
          'This project also helped me understand evaluating business requirements, prioritizing, and working closely with the deployment team.',
        ]}
        projectDemo={workingInCafe}
        projectDemoImage={true}
        background="#1072e7"
        gradient="#3049fcb8"
        isdarkbackground="true"
      />
      <Box
        sx={{
          borderLeft: 'primary',
          height: '96px',
          margin: '-35px 0px -35px 0px',
          zIndex: '0',
          position: 'initial',
        }}
      />

      {/* 2013 -  JNTU*/}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Image alt='educationLogo' src={educationLogo} />
      </Box>
      <Box
        sx={{
          borderLeft: 'primary',
          height: '96px',
          margin: '-35px 0px -35px 0px',
          zIndex: '0',
          position: 'initial',
        }}
      />
      <ProjectsCard
        logo={jNTULogo}
        yearRoleProject="2009 to 2013 - Jawaharlal Nehru Technological University, Hyderabad - Under Graduation"
        logo1Width={140}
        logo1Height={79}
        clientName="Course - Computer Science Engineering"
        projectIntro={[
          'I completed some of the required technical courses like C language, JAVA, DBMS, Javascript, and web development during my Under graduation in Computer Science.',
        ]}
        projectDemo={engineeringLogo}
        projectDemoImage={true}
        background="#d32f2f"
        gradient="#f09233"
        isdarkbackground="true"
      />
      <Box
        sx={{
          borderLeft: 'primary',
          height: '96px',
          margin: '-35px 0px -35px 0px',
          zIndex: '0',
          position: 'initial',
        }}
      />
      <Image alt='childrenLogo' src={childrenLogo} />
    </Box>
  </>
)

export default HomePage
