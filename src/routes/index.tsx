// import { Title } from "solid-start";
// import Counter from "~/components/Counter";
// export default function Home() {
//   return (
//     <main>
//       <Title>Hello World</Title>
//       <h1>Hello world!</h1>
//       <Counter />
//       <p>
//         Visit{" "}
//         <a href="https://start.solidjs.com" target="_blank">
//           start.solidjs.com
//         </a>{" "}
//         to learn how to build SolidStart apps.
//       </p>
//     </main>
//   );
// }
import React from 'react';
import ReactDOM from 'react-dom';
import '../root.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, World!</h1>
        <p>This is a simple React app with TypeScript.</p>
      </header>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
