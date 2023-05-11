import NotificationCard from './components/NotificationCard'
import MessageCard from './components/MessageCard'
import BackQuote from './components/BackQuote'
import FileInputButton from './components/FileInputButton'
import Modes from './components/Modes'
import GradentText from './components/GradientText'

const App = () => {
  return(
    <div className='space-y-5'> 
      <NotificationCard/>
      <MessageCard />
      <BackQuote />
      <FileInputButton />
      <Modes />
      <GradentText />
    </div>
  )
}

export default App;
