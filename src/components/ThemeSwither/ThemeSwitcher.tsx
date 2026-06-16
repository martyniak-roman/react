import useThemeContext from '../../hooks/useThemeContext.tsx'

const ThemeSwitcher = () => {
  const {theme, setTheme} = useThemeContext()

  const handleClick = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(nextTheme);
  }

  return (
    <>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-2 rounded" onClick={handleClick}>Switch theme</button>
    </>
  )
}

export default ThemeSwitcher