import { ConsumeEvent } from './types';

const useSseConsumer = (eventSourceUrl: string, options: object, consumeEvent: ConsumeEvent) => {
  const evtSource = new EventSource(eventSourceUrl, options);
  evtSource.onmessage = consumeEvent;

  return evtSource;
};

export default useSseConsumer;
