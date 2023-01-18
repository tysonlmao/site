import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import '../lib/css/global.css';
import Nav from '../components/navigation.js'

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        {children}</body>
    </html>
  )
}
