import request from 'api/request';

export const getList = (): Promise<any> => request.get(`/specialty`);
