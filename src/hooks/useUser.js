import { useState } from 'react';

function useUser() {
    const [user, setUserState] = useState();

    const setUser = (json) => {
        if (!json) setUserState(null);
        else {
            const { email, roles, name, address, phone, birthYear, gender } = json;
            setUserState({
                email: email,
                roles: roles.split(","),
                name: name,
                address: address,
                phone: phone,
                birthYear: birthYear,
                gender: gender,
            });
        }
    }
    return [user, setUser];
}

export default useUser;