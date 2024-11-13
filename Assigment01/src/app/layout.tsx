import Navbar from "./components/navbar";
import abcImage from "./images/abc.jpg"; // Import the image
import './globals.css'; // Global CSS import

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          backgroundImage: `url(${abcImage.src})`, // Use the imported image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh',
        }}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
