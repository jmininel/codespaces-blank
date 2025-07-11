import { useQuery } from "@tanstack/react-query"
import type { GetRoomsResponse } from "./create-room-response"

export function useRooms() {
    return useQuery({
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
  
            const result: GetRoomsResponse = await response.json()
            return result
        }
    })
}