import { Link } from 'react-router-dom'
import { useQuery } from "@tanstack/react-query"

type GetRoomsAPIResponse = Array<{
    id: string
    name: string
}>

export function CreateRoom() {
    const { data, isLoading } = useQuery({
        queryKey: ['get-rooms'],
        queryFn: async () => {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms`, {
                mode: 'cors',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
  
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }
  
            const result: GetRoomsAPIResponse = await response.json()
            return result
        }
    })

    return (
        <>
            <div>
               {isLoading && <p>Carregando</p>}
             </div>

             <div className='flex flex-col gap-1'>
                {data?.map((room) => {
                    return (
                        <Link key={room.id} to={`/room/${room.id}`}>
                            {room.name}
                        </Link>
                    )
                })}
             </div>
        </>
    )
}