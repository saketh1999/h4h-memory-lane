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
import Image from "next/image";

const LoginPage = () => {
  const [email, setEmaiL] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    router.push("/home");
  };

  return (
    <div className="absolute inset-0 min-h-screen w-full bg-gradient-to-br from-blue-50 to-white">
      <Container maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            mt: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 4,
            borderRadius: 2,
            backgroundColor: 'white',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
          }}
        >
          <Image
            src="/MemoryLaneLogo.svg"
            alt="Memory Lane Logo"
            width={200}
            height={54}
            priority
          />
          <Avatar sx={{ m: 2, bgcolor: "#A895BA" }}>
            <LockOutlined />
          </Avatar>
          <Typography variant="h5" sx={{ mb: 3, color: '#A895BA', fontWeight: 'medium' }}>
            Welcome
          </Typography>
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
              sx={{ 
                mt: 3, 
                mb: 2,
                py: 1.5,
                borderRadius: 2,
                textTransform: 'none',
                fontSize: '1.1rem',
                backgroundColor: '#A895BA',
                '&:hover': {
                  backgroundColor: '#9784A9', // slightly darker shade for hover
                }
              }}
              onClick={handleLogin}
            >
              Login
            </Button>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs>
              <Link href="/forgot-password" className="text-primary hover:text-primary-dark">
                Forgot Password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" className="text-primary hover:text-primary-dark">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};
export default LoginPage;
