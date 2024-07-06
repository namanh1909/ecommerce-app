export type ResponseApi<T = {}> = {
    status: number,
    data: T;
    Message: string;
  };