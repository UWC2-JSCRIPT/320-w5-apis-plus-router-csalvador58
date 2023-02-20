import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Character() {
    const location = useLocation();
    console.log(location)
    return (
        <div>Character</div>
    )
}