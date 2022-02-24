import React, { useState } from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { RatingStyling, Upvote, Downvote } from './style'

const Rating = (props: any) => {
  const [rating, setRating] = useState(props.rating);
  const [isUpvoted, setIsUpvoted] = useState(false);
  const [isDownvoted, setIsDownvoted] = useState(false);

  const handleUpvote = () => {
    if (!isUpvoted) {
      setRating(rating + 1);
      setIsUpvoted(true);
      setIsDownvoted(false);

      fetch('http://localhost:3000/api/updateRating', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'itemId': props.itemId,
          'vote_count': rating,
        })
      })
    } else {
      setRating(rating);

      fetch('http://localhost:3000/api/updateRating', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'itemId': props.itemId,
          'vote_count': rating,
        })
      })
    }
  }

  const handleDownvote = () => {
    if (!isDownvoted) {
      setRating(rating - 1);
      setIsDownvoted(true);
      setIsUpvoted(false);

      fetch('http://localhost:3000/api/updateRating', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'itemId': props.id,
          'vote_count': rating,
        })
      })
    } else {
      setRating(rating);

      fetch('http://localhost:3000/api/updateRating', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'itemId': props.id,
          'vote_count': rating,
        })
      })
    }
  }

  return (
    <RatingStyling>
      <Upvote onClick={handleUpvote}>
        <KeyboardArrowUpIcon />
      </Upvote>
      <span>{rating}</span>
      <Downvote onClick={handleDownvote}>
        <KeyboardArrowDownIcon />
      </Downvote>
    </RatingStyling>
  )
}

export default Rating