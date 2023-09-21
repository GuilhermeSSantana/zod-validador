import { useUsers } from './hooks/useUsers'

function App() {
  const { users, error } = useUsers()





  if (error) {

    return (
      <div>
        <h1>Users List</h1>
        <ul>
          {error.map((err, index) => (
            <li key={index}>
              <span>{err.message}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }


  return (
    <div>
      <h1>Users List</h1>

      <ul>
        {users.map(user => (
          <li key={user.id}>
            <span>
              {user.name}
            </span>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default App
