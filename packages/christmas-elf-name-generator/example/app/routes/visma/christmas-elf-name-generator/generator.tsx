import { Link } from '@remix-run/react';
import christmasElfNameGenerator from '@visma/christmas-elf-name-generator';
import React, { useRef, useState } from 'react';
import RubberBand from 'react-reveal/RubberBand';

export { meta } from '.';

export default function Generator() {
  const [elfName, setElfName] = useState<string>();

  return elfName ? (
    <Result elfName={elfName} />
  ) : (
    <Form onSubmit={(name) => setElfName(christmasElfNameGenerator(name))} />
  );
}

type FormProps = {
  onSubmit: (name: string) => void;
};

function Form({ onSubmit }: FormProps) {
  let answerRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    onSubmit(answerRef.current?.value!);
  }

  return (
    <form onSubmit={handleSubmit}>
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

type ResultProps = {
  elfName: string;
};

function Result({ elfName }: ResultProps) {
  return (
    <p>
      Ta-da! Your christmas elf name is...
      <RubberBand>
        <div className="elf-name">{elfName}</div>
      </RubberBand>
      <sub>
        ...sure... <Link to="./..">back to frontpage?</Link>
      </sub>
    </p>
  );
}
