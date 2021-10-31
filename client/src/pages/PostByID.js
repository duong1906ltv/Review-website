import React from 'react'
import { useParams } from 'react-router'

function PostByID() {
    let {id} = useParams()
    return (
        <div>
            {id}
        </div>
    )
}

export default PostByID
