import { Typography } from "@mui/material";
import { ReactNode } from "react";

export interface IClampedTypography{
    children:ReactNode;
    sx?:object;
    clampAt:number;
    className?:string;
  }
  
  export const ClampedTypography = ({children,sx,clampAt,className} : IClampedTypography)=>{
    return (
      <Typography
      className={className}
      sx={{
        ...sx,
        textOverflow:'ellipsis',
        overflow:"hidden",
        display: "-webkit-box",
        WebkitLineClamp:clampAt,
        WebkitBoxOrient: 'vertical',
      }}
      >
        {children}
      </Typography>
    )
  }

export default ClampedTypography;