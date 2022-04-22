import React from 'react';
import { Form } from './Components/Form';



const App: React.FC = () => {
  return (
    <div className="container">
    <article className="counter">
      <h1 className="counter__heading heading-main">
        Perfect Body App
      </h1>
      <Form></Form>
    </article>
  </div>
  );
};




export default App;
