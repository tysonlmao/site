import './global.css';
import Nav from "./navigation.js"

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <Nav/>
        {children}</body>
    </html>
  )
}
