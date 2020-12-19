import React from 'react'
import { Typography } from 'antd'
import LandingLayout from '@layouts/LandingLayout'
import ReactPlayer from 'react-player'
import { css } from '@emotion/react'

const Videos = () => {
  return (
    <LandingLayout>
      <div className='flex flex-col items-center'>
        <Typography.Title className='text-primary-color'>
          Your Videos
        </Typography.Title>
        <div css={one}>
          <div css={abcd}>
            <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
          </div>
          <div css={abcd}>
            <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
          </div>
          <div css={abcd}>
            <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
          </div>
          <div css={abcd}>
            <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
          </div>
          <div css={abcd}>
            <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
          </div>
          <div css={abcd}>
            <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
          </div>
        </div>
      </div>
    </LandingLayout>
  )
}

export default Videos

let one = css`
  display: grid;
  grid-template-columns: 6fr 6fr;
  grid-gap:20px;
`
let abcd = css`
6
`
