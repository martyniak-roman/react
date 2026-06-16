import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import useThemeContext from './hooks/useThemeContext'

function App() {
  const { theme } = useThemeContext()
  return (
    <div className={`
        ${theme} 
        min-h-screen 
        transition-colors duration-300 
        bg-slate-50 text-slate-900 
        dark:bg-zinc-950 dark:text-zinc-50
      `} >
      <Header />
      <Main theme={theme} />
    </div>
  )
}

export default App