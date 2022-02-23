import React, { useState } from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { RatingStyling, Upvote, Downvote } from './style'

const Rating = (props: any) => {
  const [ rating, setRating ] = useState(props.rating);

  return (
    <RatingStyling>
      <Upvote onClick={() => setRating(rating + 1)}>
        <KeyboardArrowUpIcon/>
      </Upvote>
      <span>{rating}</span>
      <Downvote onClick={() => rating > 0 ? setRating(rating - 1) : ''}>
        <KeyboardArrowDownIcon />
      </Downvote>
    </RatingStyling>
  )
}

export default Rating