import React from 'react';
import useSseConsumer from './lib';

const App = () => {
  const consumeEvent = (e: Event) => {
    console.log(e);
  };

  const testEventConsumer = useSseConsumer('', {}, consumeEvent);

  console.log(testEventConsumer);

  return <div>React SSE Consumer...</div>;
};

export default App;
