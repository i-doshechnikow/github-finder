import { useEffect, useState } from "react"
import Spinner from "../layout/Spinner";

function UserResult() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = async () => {
        const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
            headers: {
                Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
            }
        })

        const answer = await res.json();
        setUsers(answer);
        setLoading(false);
    }

    if (loading) return <Spinner />

    return (
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
            {users.map(user => {
                return <h1>{user.login}</h1>
            })}
        </div>
    )
}

export default UserResult