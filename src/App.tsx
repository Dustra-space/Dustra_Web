import Concept from './components/Concept'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Progress from './components/Progress'
import Team from './components/Team'
import Why from './components/Why'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Why />
        <Concept />
        <Progress />
        <Team />
      </main>
      <Contact />
    </>
  )
}
