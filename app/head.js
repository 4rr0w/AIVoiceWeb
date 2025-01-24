const Head = () => (
  <>
    <title>The Lexington</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/metadroid-fav.png" />
    <script
      type="module"
      dangerouslySetInnerHTML={{
        __html: `
          import DMChat from "https://d1sggbuco55n6o.cloudfront.net/demo-index.js";
          DMChat.start();
        `,
      }}
    ></script>
  </>
);

export default Head;
