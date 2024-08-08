import React, { useState } from 'react'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import { Box, Rating, Typography } from '@mui/material';
import { ProductRating } from '../../Interfaces/ProductRating';

interface IRatingStarts{
  productRating:ProductRating;
  sx?:object;
}

const RatingStars = ({productRating,sx}:IRatingStarts) => {
  return (
    <Box 
    sx={{
        display:"flex",
        gap:1,
        alignItems:"center",
       
    }}
    >

    <Rating
        name="read-only"
        value={productRating.rate}
        precision={0.5}
        sx={{
          ...sx
        }}
        readOnly 
      />
      <Typography
      sx={{
        color:"GrayText",
        ...sx
      }}
      >
        ({productRating.count})
      </Typography>
    </Box>
  )
}

export default RatingStars
