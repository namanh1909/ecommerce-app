import { instance } from '@/core/services/instance';
import { userSchema } from '@/types/schemas/user';

export default async (id: number) => {
	const response = await instance.get(`users/${id}`).json();
	return userSchema.parse(response);
};
