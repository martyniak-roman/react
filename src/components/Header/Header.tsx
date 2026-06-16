import Logo from "../Logo/Logo.tsx"
import Navigation from "../Navigation/Navigation.tsx"
import ThemeSwitcher from "../ThemeSwither/ThemeSwitcher.tsx"

const Header = () => {
  return (
    <div className='flex items-center justify-between'>
    <Logo />
    <Navigation />
    <ThemeSwitcher />
    </div>
  )
}

export default Header