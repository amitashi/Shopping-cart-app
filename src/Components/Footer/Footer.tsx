import { Box, IconButton, Typography } from "@mui/material"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import XIcon from '@mui/icons-material/X';

const SocialMediaList = [
  {
    id:1, 
    name:"Facebook",
    icon:FacebookOutlinedIcon,
  },
  {
    id:2, 
    name:"Instagram",
    icon:InstagramIcon,
  },
  {
    id:3, 
    name:"Youtube",
    icon:YouTubeIcon,
  },
  {
    id:4, 
    name:"Twitter",
    icon:TwitterIcon,
  },
  {
    id:5, 
    name:"Google",
    icon:GoogleIcon,
  },
  {
    id:6, 
    name:"Xbox",
    icon:XIcon,
  },
]

const Footer = () => {
  return (
    <Box
      sx={{
        width:"100%",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        pt:2,
        background:"rgba(2,0,36,1)",
        gap:2,
        overflow:"hidden",
        zIndex:99
      }}
    >
      <Box sx={{
        display:"flex",
        gap:2
      }}>
        {SocialMediaList.map(item=>(
          <IconButton key={item.id} title={item.name}>
            <item.icon sx={{
            color:"white"
            }}/>
          </IconButton>
        ))}
      </Box>
      <Box
      sx={{
        padding:1,
        background:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(23,23,62,1) 35%, rgba(37,39,71,1) 100%)",
        width:"100%",
        display:"flex",
        justifyContent:"center",
      }}
      >
        <Typography
        sx={{
          color:"white",
          fontSize:"1.25rem",
          textTransform:"capitalize",
          margin:"auto"
        }}
        >
          Copyright ©️ 2024 | Shopping cart App
        </Typography>
      </Box>
    </Box>
  )
}

export default Footer
