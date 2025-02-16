
"use client"
import { LockOutlined } from "@mui/icons-material";
import {
  Container,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import { useState } from "react";
import  Link  from "next/link";
import { useRouter } from "next/navigation"

const LoginPage = () => {
  const [email, setEmaiL] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    router.push("/home");
  };

  return (
    <div className = "absolute inset-0 min-h-screen w-full bg-background">
      <Container maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            mt: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary.light" }}>
            <LockOutlined />
          </Avatar>
          <Typography variant="h5">Login</Typography>
          <Box sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmaiL(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleLogin}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/forgot-password">Forgot Password?</Link>
              </Grid>
              <Grid item>
                <Link href="/register">Don't have an account? Sign Up</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
    
  );
};
export default LoginPage;
