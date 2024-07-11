import { Floater } from "./components/Floater"
import { Header } from "./components/Header"

function App() {

  return (
    <>
      <div className="min-h-[100svh] bg-[url('/bg.png')]">
        <div className="max-w-6xl mx-auto">
          <Header/>
        </div>
      </div>
      <Floater/>
    </>
  )
}

export default App
