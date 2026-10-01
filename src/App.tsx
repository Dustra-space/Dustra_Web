import Contact from './components/Contact'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Problem from './components/Problem'
import Roadmap from './components/Roadmap'
import Solution from './components/Solution'
import Status from './components/Status'
import Team from './components/Team'
import Vision from './components/Vision'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Status />
        <Vision />
        <Roadmap />
        <Team />
      </main>
      <Contact />
    </>
  )
}
