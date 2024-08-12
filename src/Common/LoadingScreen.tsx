import { Box, CircularProgress } from '@mui/material'

const LoadingScreen = () => {
  return (
    <Box
          sx={{
            width:"100vw",
            height:"70vh",
            display:"flex",
            justifyContent:'center',
            alignItems:"center",

          }}
          >
            <CircularProgress sx={{fontSize:"5rem", width:"5rem", height:"5rem"}} color="secondary" />
          </Box>
  )
}

export default LoadingScreen
