import * as React from "react";

export default function Home() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen((prevState) => !prevState);
  return (
    <>
      <div className="max-w-xl mx-auto w-full">
      <h1 className="text-2xl">Hello, this is Tyler’s app</h1>
      <button type="button" onClick={toggle} className="text-3xl border-2 rounded-md px-4 py-2 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-800 hover:text-white border-green-600 transition duration-500 ease-in-out">
        tutorial
      </button>
      {isOpen && <p>click on the scratch links to play my games!</p>}
      <p className="text-3xl">links</p>
      <a href="https://scratch.mit.edu/projects/415182772/">https://scratch.mit.edu/projects/415182772/</a>
      </div>
    </>
  );
}