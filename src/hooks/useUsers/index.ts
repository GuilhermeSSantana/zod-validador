import { useState, useEffect } from "react";
import { z } from 'zod';

const UserSchema = z.object({
    id: z.number(),
    name: z.string().max(100),
});

const UsersSchema = z.array(UserSchema);

type UsersSchema = z.infer<typeof UsersSchema>;

export const useUsers = () => {
    const [users, setUsers] = useState<UsersSchema>([]);

    const [error, setError] = useState<string>("");


    useEffect(() => {
        fetch('users.json')
            .then((response) => response.json())
            .then((json) => {
                const resultado = UsersSchema.safeParse(json);

                if (resultado.success) {
                    setUsers(resultado.data);
                } else {
                    console.error(resultado.error);
                    setError(resultado.error.message);
                }

            });
    }, []);

    return { users, error };
}