import { useUsers } from './hooks/useUsers'

function App() {
  const { users, error } = useUsers()

  if (error) {
    return <div>

      <h1>Users List</h1>
      <h3> Opa, desculpe algo inesperado aconteceu</h3>
      {error}
    </div>
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
