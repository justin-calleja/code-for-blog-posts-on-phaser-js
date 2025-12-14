export type EventMap = {
  [event: string | symbol]: any[];
};

export interface TypedEventEmitter<TEvents extends EventMap> {
  emit<K extends keyof TEvents>(event: K, ...args: TEvents[K]): boolean;
  on<K extends keyof TEvents>(
    event: K,
    fn: (...args: TEvents[K]) => void,
    context?: any
  ): this;
  off<K extends keyof TEvents>(
    event: K,
    fn?: (...args: TEvents[K]) => void,
    context?: any,
    once?: boolean
  ): this;
  once<K extends keyof TEvents>(
    event: K,
    fn: (...args: TEvents[K]) => void,
    context?: any
  ): this;
}
