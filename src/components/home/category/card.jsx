import React from 'react'
import { Paper } from '@material-ui/core'



export default function Card({title}) {
    return (
        <div className="card">
            <Paper elevation={9} className="paper">{title}</Paper>
        </div>
    )
}
