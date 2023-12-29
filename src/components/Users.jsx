
import { getUsers } from "./getUsers";

export const Users = () => {
    const users=getUsers();
    return (
        <>
            <h1>Ranking</h1>
            <table className="ranking">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Turns</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.nombre}</td>
                            <td>{user.turns}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
