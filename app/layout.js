import '../styles/globals.css';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </head>
    <body>{children}</body>
    <script type="module" async>
    import DMChat from "https://d1sggbuco55n6o.cloudfront.net/index.js";
    DMChat.start()
  </script>
  </html>
);

export default RootLayout;
