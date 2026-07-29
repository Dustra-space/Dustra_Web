import Contact from './components/Contact'
import Hero from './components/Hero'
import Mission from './components/Mission'
import Nav from './components/Nav'
import Problem from './components/Problem'
import Resources from './components/Resources'
import Roadmap from './components/Roadmap'
import Solution from './components/Solution'
import Status from './components/Status'
import Team from './components/Team'
import Timeline from './components/Timeline'
import Vision from './components/Vision'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Mission />
        <Vision />
        <Status />
        <Timeline />
        <Roadmap />
        <Resources />
        <Team />
      </main>
      <Contact />
    </>
  )
}
