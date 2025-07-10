import { useParams, Navigate } from 'react-router-dom'

type RoomParams = {
     roomId: string
}

export function Room () {
   const params = useParams<RoomParams>()

   if (!params.roomId) {
    return <Navigate replace to="/"/>
   }

    return <div>room details {JSON.stringify(params)}</div>
} 