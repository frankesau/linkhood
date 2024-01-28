import {db} from "./db.ts";
import {type Tables} from "../types/database.ts";
import type {User} from "../types/user.ts";

type UserDataType = Tables<'users'>[]
const USER_HANDLE = import.meta.env.USER_HANDLE

export const getUsers = async (): Promise<User> => {
    const {data} = await db.from('users').select().eq('handle', USER_HANDLE)
    const user: UserDataType = data ?? []

    const parsedUser = user?.map((user) => ({
        id: user.id,
        handle: user.handle,
        name: user.name,
        avatarUrl: user.avatar_url,
        role: user.role,
    }))

    return parsedUser[0]
}