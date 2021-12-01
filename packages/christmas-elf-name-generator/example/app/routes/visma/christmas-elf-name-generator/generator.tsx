import generator from '@visma/christmas-elf-name-generator';
import React, { useRef, useState } from 'react';
import { Link } from 'remix';

export function meta() {
  return { title: 'Elf Name Generator' };
}

export default function ActionsDemo() {
  let answerRef = useRef<HTMLInputElement>(null);
  const [result, setResult] = useState();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setResult(generator(answerRef.current?.value));
  }

  return result ? (
    <p>
      Ta-da! Your christmas elf name is...
      <br />
      <span style={{ fontSize: '2em' }}>{result}</span>
      <br />
      <sub>
        ...sure... <Link to="./..">back to frontpage?</Link>
      </sub>
    </p>
  ) : (
    <form className="remix__form" onSubmit={handleSubmit}>
      <h3>Find out your Christmas Elf Name here!</h3>
      <label>
        <div>Enter your name:</div>
        <input ref={answerRef} name="answer" type="text" required />
      </label>
      <div>
        <button>Go!</button>
      </div>
    </form>
  );
}
