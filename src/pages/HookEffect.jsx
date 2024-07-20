import React, { useState, useEffect } from 'react'; // Importar React y los hooks useState y useEffect

function HookEffect() {
  // Definir los estados locales
  const [users, setUsers] = useState([]); // Estado para almacenar la lista de usuarios
  const [error, setError] = useState(null); // Estado para almacenar los errores

  // useEffect se ejecuta después de que el componente se monte
  useEffect(() => {
    // Función asíncrona para obtener la lista de usuarios
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users'); // Hacer una solicitud GET a la URL especificada
        
        if (!response.ok) { // Si la respuesta no es exitosa
          throw new Error(error); // Lanzar un error
        }

        const dataUsers = await response.json(); // Convertir la respuesta en un objeto JavaScript
        setUsers(dataUsers); // Actualizar el estado users con los datos obtenidos
      } catch (error) { // Si ocurre un error durante la solicitud
        setError('Error: no se puede obtener la lista de usuarios'); // Actualizar el estado error con un mensaje
      }
    };

    fetchUsers(); // Llamar a la función fetchUsers

  }, []); // El segundo argumento vacío [] asegura que el efecto solo se ejecute una vez, después del montaje del componente

  return (
    <div className="App">
      <p className='font-bold'>Lista de Usuarios</p>
      {error && <p className='text-red-500'>{error}</p>} {/* Mostrar el mensaje de error si existe */}
      <ul>
        {users.map(user => ( // Mapear cada usuario en la lista de usuarios
          <li key={user.id}>{user.name}</li> // Mostrar el nombre del usuario en una lista, usando su id como clave
        ))}
      </ul>
    </div>
  );
}

export default HookEffect;