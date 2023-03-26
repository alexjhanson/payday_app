import { useState, useEffect } from "react";

export default function useGetUser() {

    const [user, setUser] = useState({});

    useEffect(() => {

        fetch('/api/user')
        .then(user => setUser(user))

    }, []);

    return user;

}