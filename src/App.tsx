import React, { useState } from 'react';
import useSseConsumer, { EventHandlers, EventListeners } from './lib';

const eventHandlers: EventHandlers = {
  onerror: (event: Event) => {
    console.error('Error Occurred', event);
  },
  onopen: (event: Event) => {
    console.log('Connection Opened', event);
  },
  onmessage: (messageEvent: MessageEvent) => {
    console.log('Message received', messageEvent);
  },
};

const App = () => {
  const [data, setData] = useState(null);

  const resourceUrl = 'http://localhost:5000/notify';
  const options: object = {};

  const eventListeners: EventListeners = {
    message: (messageEvent: MessageEvent) => {
      console.log('Received "message" event:', messageEvent);
      setData(messageEvent?.data);
    },
    ping: (messageEvent: MessageEvent) => {
      console.log('Received "ping" event:', messageEvent);
      setData(messageEvent?.data);
    },
  };

  const testEventConsumer: EventSource | null = useSseConsumer(resourceUrl, options, eventHandlers, eventListeners);

  const handleClose = () => {
    testEventConsumer?.close();
  };

  return (
    <div>
      <div>React SSE Consumer...</div>
      <div>Data: {data}</div>
      <button type="button" onClick={handleClose}>
        Close
      </button>
    </div>
  );
};

export default App;
