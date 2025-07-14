import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { CreateRoomResponse } from "./types/create-room-response";
import type { CreateRoomRequest } from "./types/create-room-request";



export function useCreateRoom() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async (data: CreateRoomRequest) => {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms`, {
                method: 'POST',
                mode: 'cors',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            })

            const result: CreateRoomResponse = await response.json()

             return result
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-rooms'] })
    },
  })
}