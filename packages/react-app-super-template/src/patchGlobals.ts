import { Buffer } from 'buffer';
import EventsEventEmitter from 'events';
import process from 'process';

if (ENV?.PROD) {
  (globalThis as any).Buffer = Buffer;
  globalThis.process = process;
  globalThis.EventEmitter = EventsEventEmitter;
}

declare global {
  var EventEmitter: typeof EventsEventEmitter;
}
