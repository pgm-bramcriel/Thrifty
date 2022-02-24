import React, { useState } from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { RatingStyling, Upvote, Downvote } from './style'
import { apiUrl } from '../../utils';

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

      await fetch(`${apiUrl}/api/updateRating`, {
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

      await fetch(`${apiUrl}/api/updateRating`, {
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