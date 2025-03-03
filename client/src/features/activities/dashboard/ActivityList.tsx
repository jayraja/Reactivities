import { Box } from '@mui/material'
import ActivityCard from './ActivityCard'

type Props = {
    acitvities: Activity[]
    selectActivity: (id: string) => void;
    deleteActivity: (id: string) => void;
}

export default function ActivityList({acitvities, selectActivity, deleteActivity}: Props) {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', gap: 3}}>
        {acitvities.map(activity => (
            <ActivityCard key={activity.id} activity={activity} selectActivity={selectActivity} deleteActivity={deleteActivity}  />
        ))}
    </Box>
  )
}