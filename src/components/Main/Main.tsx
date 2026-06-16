import type { ThemeContextValue } from "../../contexts/themeContext.tsx";

type MainProps = {
    theme: ThemeContextValue['theme'];
    }

const Main = ({ theme }: MainProps) => {
  return (
    <div>App theme: {theme}</div>
  )
}

export default Main