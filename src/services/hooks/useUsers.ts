import { useQuery } from "react-query";
import { api } from "../api";

type User = {
    id: string;
    name: string;
    email: string;
    createdAt: string;
}

type GetUsersResponse = {
    totalCount: number;
    users: User[];
}

export function useUsers(page: number){
    return useQuery(`users-page-${page}`, () => getUsers(page), {
        staleTime: 1000 * 5 // 5 segundos no estado "fresco"
    });
}


export async function getUsers(page: number): Promise<GetUsersResponse> {
    const response = await api.get("/users", {
        params: {
            page
        }
    });
    const { data, headers } = response;
    const totalCount = Number(headers['x-total-count'])
    return {
        users: data.users,
        totalCount
    }
}



