import { Typography } from "@mui/material"
import { Box } from "@mui/system"

type HeaderProps = {
  title: string,
  subtitle: string
}
export const Header = ({title , subtitle}: HeaderProps) => {
  return(
    <Box mb="30px">
      <Typography variant="h5" fontWeight={"bold"} sx={{mb:"5px"}}>
        {title}
      </Typography>
      <Typography color="primary">
        {subtitle}
      </Typography>
    </Box>
  )
}