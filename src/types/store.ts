type Payload = {
  [key: string | number]: any;
};

export type Action<T extends Payload> = {
  type: string;
  payload: T;
};
