# react-sse-consumer
React hook for consuming Server Sent Events (SSE). This is a wrapper built around the [EventSource](https://developer.mozilla.org/en-US/docs/Web/API/EventSource) API. Handle `EventSource` events and consume named events sent from the server.

[![React](https://img.shields.io/badge/React-v18.2.0-%2361DBFB)](https://github.com/heshanera/react-sse-consumer) &nbsp;
[![NPM](https://img.shields.io/badge/NPM-v8.19.2-%23CC3534)](https://github.com/heshanera/react-sse-consumer)&nbsp;
[![Node](https://img.shields.io/badge/Node-v18.11.0-%233C873A)](https://github.com/heshanera/react-sse-consumer)&nbsp;
[![License: MIT](https://img.shields.io/badge/License-MIT-blue)](https://github.com/heshanera/react-sse-consumer/blob/master/LICENSE)&nbsp;

- NPM: [react-sse-consumer](https://www.npmjs.com/package/react-sse-consumer)

## Usage
```bash
npm i react-sse-consumer
```

### Consuming events
```js
import useSseConsumer from 'react-sse-consumer';

const resourceUrl = 'path/to/resource';
const options = {};
const eventHandlers = {
  onerror: (event) => { /* handle error */ },
  onopen: (event) => { /* handle connection open */ },
  onmessage: (messageEvent) => { /* handle consumed events */ },
};

const eventConsumer = useSseConsumer(resourceUrl, options, eventHandlers);
```

### Consuming named events
```js
import useSseConsumer from 'react-sse-consumer';

const resourceUrl = 'path/to/resource';
const options = {};
const eventHandlers = {
  onerror: (event) => { /* handle error */ },
  onopen: (event) => { /* handle connection open */ },
  onmessage: (messageEvent) => { /* handle consumed events */ },
};
const eventListeners = {
  message: (messageEvent) => { /* handle named event 'message' */ },
  ping: (messageEvent) => { /* handle named event 'ping' */ },
  ...
};

const eventConsumer = useSseConsumer(resourceUrl, options, eventHandlers, eventListeners);
```

### Typescript
```ts
import useSseConsumer, { EventHandlers, EventListeners } from 'react-sse-consumer';

const resourceUrl = 'path/to/resource';
const options: object = {};
const eventHandlers: EventHandlers = {
  onerror: (event: Event) => { /* handle error */ },
  onopen: (event: Event) => { /* handle connection open */ },
  onmessage: (messageEvent: MessageEvent) => { /* handle consumed events */ },
};
const eventListeners: EventListeners = {
  message: (messageEvent: MessageEvent) => { /* handle named event 'message' */ },
  ping: (messageEvent: MessageEvent) => { /* handle named event 'ping' */ },
};

const eventConsumer: EventSource | null = useSseConsumer(
  resourceUrl,
  options,
  eventHandlers,
  eventListeners,
);
```

<br/>

## Consumer Props

| Prop             | Type       | Description                                                                                                                                                                                             |
| :--------------- | :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| EventHandlers        | `object`   | Handlers for the EventSource events <br /> <code>onerror</code>, <code>onopen</code>, <code>onmessage</code>                                                         |
| EventListeners           | `object`  | Listeners for consuming named events <br /> <code>message</code>, <code>...</code>  |

