export default ({ children }) => (
  <div>
    <style jsx global>{`
      * {
        margin: 0;
        box-sizing: border-box;
      }
      body {
        background-image: url('/static/plateGradient.png');
        font-family: 'Fira Sans', sans-serif;
      }
    `}</style>
    {children}
  </div>
)
