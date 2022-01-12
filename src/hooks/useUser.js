import { useState } from 'react';

function useUser() {
    const [user, setUserState] = useState();

    const setUser = (json) => {
        if (!json) setUserState(null);
        else {
            const { username, roles } = json;
            setUserState({
                username: username,
                roles: roles.split(","),
            });
        }
    }
    return [user, setUser];
}

export default useUser;