import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Route, Routes } from "react-router";
import { ThemeProvider } from "./context/ThemeContext";

//Pages
import LandingPage from "./pages/home/LandingPage";
import HowToUsePage from "./pages/howToUse/HowToUsePage";
import AboutPage from "./pages/about/AboutPage";
import ContactPage from "./pages/contact/ContactPage";
import SignInPage from "./pages/signin/SignInPage";
import SignUpPage from "./pages/signup/SignUpPage";
import Homepage from "./pages/homepage/Homepage";
import AppLayout from "./components/AppLayout";
import SettingsPage from "./pages/protected/settings/SettingsPage";
import PostSwapPage from "./pages/protected/post/PostSwapPage";
import MySwapsPage from "./pages/protected/mySwaps/MySwapsPage";
import AvailableSwapsPage from "./pages/protected/available/AvailableSwapsPage";
import UploadRoasterPage from "./pages/protected/uploadRoaster/UploadRoasterPage";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="how-to-use" element={<HowToUsePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="signin" element={<SignInPage />} />
            <Route path="signup" element={<SignUpPage />} />
            <Route element={<AppLayout />}>
              <Route path="home" element={<Homepage />} />
              <Route path="upload-roaster" element={<UploadRoasterPage />} />
              <Route path="available-swaps" element={<AvailableSwapsPage />} />
              <Route path="my-swaps" element={<MySwapsPage />} />
              <Route path="post-swap" element={<PostSwapPage />} />
              <Route path="settings" element={<SettingsPage />} />
            </Route>
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </ThemeProvider>
      </QueryClientProvider>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </BrowserRouter>
  );
}

export default App;
