import { Typography, Chip, Divider } from "@mui/material";

export default function AppVersion(){
    
    return(
        <div>
            <Divider />
            <Typography variant="overline" style={{margin:"10px"}}>
                {process.env.REACT_APP_VERSION||"could not find version"}
            </Typography>
        </div>
    );
}