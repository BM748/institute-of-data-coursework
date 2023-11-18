import Avatar from '@mui/material/Avatar';
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import BrushIcon from '@mui/icons-material/Brush';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


// function Copyright(props) {
//     return (
//         <Typography variant="body2" color="text.secondary" align="center" {...props}>
//             {'Copyright'}
//             <Link color="inherit" href="htyps://mui.com/">

//             </Link>
//         </Typography>
//     );
// }

const defaultTheme = createTheme();




export default function SignUp(){
    const [pricingTier, setPricingTier] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email:data.get('email'),
            
        });
    }

    return(
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                sx={{
                    marginTop:8,
                    display: 'flex',
                    flexDirections:'column',
                    alignItems:'center',
                }}
                >
                    <Avatar sx={{m:1,bgcolor: 'scondary.main'}}>
                        <BrushIcon />
                    </Avatar>
                     <Typography component="h1" variant="h5">
                        Sign up
                     </Typography>
                     <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt:3}}>

                        <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                            autoComplete="given-name"
                            name="name"
                            required
                            fullWidth
                            id="name"
                            label="name"
                            autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                            required
                            fullWidth
                            id="userName"
                            label="user name"
                            autoComplete="free solo"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            required
                            fullWidth
                            id="emailId"
                            label="email"
                            autoComplete="email"
                            />
                            </Grid>
                        </Grid>
                        <Box component={"form"} noValidate onSubmit={handleSubmit} sx={{mt:3}}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <FormControl fullWidth>
                                        <InputLabel id="pricing-tier-list">Base Pricing Tier</InputLabel>
                                        <Select
                                            required
                                            labelId="pricing-tier-list"
                                            id="pricingTier"
                                            value={pricingTier}
                                            label="Base Pricing Tier"
                                            onChange={(e) => setPricingTier(e.target.value)}
                                            >
                                            <MenuItem value="1">1</MenuItem>
                                            <MenuItem value="2">2</MenuItem>
                                            <MenuItem value="3">3</MenuItem>
                                            <MenuItem value="4">4</MenuItem>
                                            <MenuItem value="5">5</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Box>
                        <Button
                         type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                     >
                      Sign Up
                     </Button>

                     </Box>
                     
                </Box>
            </Container>
        </ThemeProvider>
    );
  }



