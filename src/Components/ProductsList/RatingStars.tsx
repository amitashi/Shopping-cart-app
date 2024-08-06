import React, { useState } from 'react'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import { Box, Rating, Typography } from '@mui/material';
import { ProductRating } from '../../Interfaces/ProductRating';

interface IRatingStarts{
  productRating:ProductRating
}

const RatingStars = ({productRating}:IRatingStarts) => {
  return (
    <Box 
    sx={{
        display:"flex",
        gap:1,
        alignItems:"center"
    }}
    >

    <Rating
        name="read-only"
        value={productRating.rate}
        precision={0.5}
        readOnly 
      />
      <Typography
      sx={{
        color:"GrayText"
      }}
      >
        ({productRating.count})
      </Typography>
    </Box>
  )
}

export default RatingStars
