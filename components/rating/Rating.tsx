import React, { useState } from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { RatingStyling, Upvote, Downvote } from './style'

const Rating = (props: any) => {
  const [rating, setRating] = useState(props.rating);
  const [isUpvoted, setIsUpvoted] = useState(false);
  const [isDownvoted, setIsDownvoted] = useState(false);
  const [ratingMin, setRatingMin] = useState(props.rating - 1);
  const [ratingMax, setRatingMax] = useState(props.rating + 1);

  const handleUpvote = async () => {
    if(rating !== ratingMax) {
      setRating(rating + 1);

      console.log(ratingMax);

      await fetch('http://localhost:3000/api/updateRating', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'itemId': props.itemId,
          'vote_count': rating + 1,
        })
      })
    }
  }

  const handleDownvote = async () => {
    if(rating !== ratingMin) {
      setRating(rating - 1);

      console.log(ratingMax);

      await fetch('http://localhost:3000/api/updateRating', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'itemId': props.itemId,
          'vote_count': rating - 1,
        })
      })
    }
  }

  /*
  const handleUpvote = async () => {
    if (!isUpvoted) {
      setRating(rating + 1);
      setIsUpvoted(true);
      setIsDownvoted(false);

      console.log(rating);

      await fetch('http://localhost:3000/api/updateRating', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'itemId': props.itemId,
          'vote_count': rating + 1,
        })
      })
    } else {
      setRating(rating);
    }
  }
  */

  /*
  const handleDownvote = async () => {
    if (!isDownvoted) {
      setRating(rating - 1);
      setIsDownvoted(true);
      setIsUpvoted(false);

      console.log(rating);

      await fetch('http://localhost:3000/api/updateRating', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'itemId': props.id,
          'vote_count': rating - 1,
        })
      })
    } else {
      setRating(rating);
    }
  }
  */

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