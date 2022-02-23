import React, { useState } from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { RatingStyling, Upvote, Downvote } from './style'

const Rating = (props: any) => {
  const [ rating, setRating ] = useState(props.rating);
  const [ isUpvoted, setIsUpvoted ] = useState(false);
  const [ isDownvoted, setIsDownvoted ] = useState(false);

  const handleUpvote = () => {
    if (!isUpvoted) {
      setRating(rating + 1);
      setIsUpvoted(true);
      setIsDownvoted(false);
    } else {
      setRating(rating);
    }
  }

  const handleDownvote = () => {
    if (!isDownvoted) {
      setRating(rating - 1);
      setIsDownvoted(true);
      setIsUpvoted(false);
    } else {
      setRating(rating);
    }
  }

  return (
    <RatingStyling>
      <Upvote onClick={handleUpvote}>
        <KeyboardArrowUpIcon/>
      </Upvote>
      <span>{rating}</span>
      <Downvote onClick={handleDownvote}>
        <KeyboardArrowDownIcon />
      </Downvote>
    </RatingStyling>
  )
}

export default Rating