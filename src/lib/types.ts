export type EventHandler = (event: Event) => void;

export type MessageEventHandler = (event: MessageEvent) => void;

interface Handlers {
  [key: string]: EventHandler | MessageEventHandler | undefined;
}

export interface EventHandlers extends Handlers {
  /**
   * Fired when a connection to an event source failed to open.
   */
  onerror?: EventHandler;
  /**
   * Fired when a connection to an event source has opened.
   */
  onopen?: EventHandler;
  /**
   * Fired when data is received from an event source.
   */
  onmessage?: MessageEventHandler;
}

export interface EventListeners extends Handlers {
  /**
   * Capture events without an event field as well as events that have the specific type
   */
  message: MessageEventHandler;
  /**
   * Capture events with specific event type
   */
  [key: string]: MessageEventHandler;
}
