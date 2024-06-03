'use client'

import React from 'react'
import gitHubLogo from '/public/gitHubLogo.png'
import hashnode from '/public/hashnode.png'
import Twitter_logo from '/public/Twitter_logo.png'
import LinkedIn_logo from '/public/LinkedIn_logo.png'
import {
  ClickAwayListener,
  Grow,
  IconButton,
  MenuItem,
  MenuList,
  Popper,
  Toolbar,
  AppBar,
  Box,
  Paper,
} from '@mui/material'

import Image from 'next/image'
import { Menu } from '@mui/icons-material'
import Link from 'next/link'


const Header = () => {
  const anchorRef = React.useRef(null)

  return (
    <AppBar
      color="secondary"
      sx={{
        backgroundColor: 'unset',
        backdropFilter: 'blur(10px)',
        // opacity: ${props => props.headeropacity};
        transition: 'opacity 0.1s ease',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            minWidth: '500px',
            height: '10px',
            'img': {
              height: '35px',
              width: '35px',
            },
          }}
        >
          {/* ------- Social Media links ------- */}
          <Link href="https://github.com/sunilb0575">
            <Image
              alt='gitHubLogo' 
              src={gitHubLogo} />
          </Link>
          <Link href="https://twitter.com/sunil_brdr">
            <Image
              alt='Twitter_logo' 
              src={Twitter_logo} />
          </Link>
          <Link href="https://blogposts.sunil-brdr.me/">
            <Image
              alt='hashnode' 
              
              
              src={hashnode} />
          </Link>
          <Link href="https://www.linkedin.com/in/sunil-biradar-bab55b145/">
            <Image
              alt='LinkedIn_logo' 
              
              
              src={LinkedIn_logo} />
          </Link>
        </Box>

        <IconButton
          sx={{
            height: '30px',
            width: '30px',
          }}
          ref={anchorRef}
          edge="start"
          aria-label="menu"
          //   onClick={() => setShowMenu(true)}
        >
          <Menu />
        </IconButton>
        <Popper
          // open={showMenu}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={() => setShowMenu(false)}>
                  <MenuList autoFocusItem={showMenu} id="menu-list-grow">
                    <MenuItem onClick={() => setShowMenu(false)}>
                      <Link href="https://github.com/sunilb0575">
                        <Image
                          alt='githubImage'
                          width={'31px'}
                          height={'31px'}
                          src={gitHubLogo}
                        />
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={() => setShowMenu(false)}>
                      <Link href="https://twitter.com/sunil_brdr">
                        <Image
                          alt='twitterImage'
                          width={'31px'}
                          height={'31px'}
                          src={Twitter_logo}
                        />
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={() => setShowMenu(false)}>
                      <Link href="https://blogposts.sunil-brdr.me/">
                        <Image
                          alt='hashNodeImage'
                          width={'31px'}
                          height={'31px'}
                          src={hashnode}
                        />
                      </Link>
                    </MenuItem>
                    <MenuItem onClick={() => setShowMenu(false)}>
                      <Link href="https://www.linkedin.com/in/sunil-biradar-bab55b145/">
                        <Image
                          alt='linkedInImage'
                          width={'31px'}
                          height={'31px'}
                          src={LinkedIn_logo}
                        />
                      </Link>
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Toolbar>
    </AppBar>
  )
}

export default Header
