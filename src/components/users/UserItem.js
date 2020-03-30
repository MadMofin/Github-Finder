import React from 'react'
import {Link} from 'react-router-dom'

export const UserItem = ({user: {login, avatar_url, html_url}}) => {
    return (
        <div className="col">
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={avatar_url} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{login}</h5>
                <Link to={`/user/${login}`} className="btn btn-primary">Go to profile</Link>
            </div>
        </div>
        </div>
    )
}

export default UserItem;
