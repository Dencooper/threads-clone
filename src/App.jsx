import { Button, Container } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import UserPage from "./pages/UserPage"
import PostPage from "./pages/PostPage"
import Header from "./components/Header"
import UserHeader from "./components/UserHeader"

function App() {

  return (
    <Container maxW="620px">
      <Header />
      <UserHeader />
      <Routes>
        <Route path="/:username" element={<UserPage />} />
        <Route path="/:username/post/:pid" element={<PostPage />} />
      </Routes>
    </Container>
  )
}

export default App
