type Payload = {
  [key: string | number]: any;
};

export type Action = {
  type: string;
  payload: Payload;
};
