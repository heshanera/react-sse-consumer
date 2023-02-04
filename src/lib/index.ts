import { useEffect, useState } from 'react';
import { EventHandlers, EventListeners } from './types';

const useSseConsumer = (
  eventSourceUrl: string,
  options: object,
  eventHandlers: EventHandlers,
  eventListeners?: EventListeners,
) => {
  const [evtSource, setEvtSource] = useState<EventSource | null>(null);

  useEffect(() => {
    // Initialize event source
    const evtSourceObj: EventSource = new EventSource(eventSourceUrl, options);

    // Add event handlers
    evtSourceObj.onerror = eventHandlers.onerror ?? null;
    evtSourceObj.onmessage = eventHandlers.onmessage ?? null;
    evtSourceObj.onopen = eventHandlers.onopen ?? null;

    // Add named event listeners
    if (eventListeners !== undefined) {
      Object.keys(eventListeners).forEach((eventListener) => {
        const type = String(eventListener);
        evtSourceObj.addEventListener(type, eventListeners[eventListener]);
      });
    }

    setEvtSource(evtSourceObj);

    // close event source
    return () => {
      evtSourceObj.close();
    };
  }, [eventSourceUrl]);

  return evtSource;
};

export default useSseConsumer;
