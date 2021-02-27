export function Footer() {
  return (
    <footer className="flex items-center justify-center w-full h-24 border-t bg-green-600">
      <a
        aria-labelledby="secret"
        href="https://burgie-game.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span id="secret" className="sr-only">Secret link to Burgie Game!!!!</span>
        powered by <span className="font-bold">Tyler productions</span>
      </a>
    </footer>
  )
}
