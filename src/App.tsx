import './App.css'
import { Navbar } from './components/navbar'
import { Sidebar } from './components/sidebar'
import Header from './components/header'
import {Clients, CommunityManage} from './components/clients'
function App() {

  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <Header/>
      <Clients/>
      <CommunityManage/>
    </div>
  )
}

export default App
