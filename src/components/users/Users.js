import React, { useContext } from 'react'
import UserItem from './UserItem';
import GithubContext from '../../context/github/githubContext';

const Users = () =>{

    const githubContext = useContext(GithubContext);
    const { loading, users } = githubContext;

    if(loading){
        return <h3>Loading...</h3>
    }else{
        return (
            <div className="container">
                <div className="row">
                    
                        {users.map(user=>(
                        <UserItem key={user.id} user={user}/>
                        ))}
                        
                </div> 
            </div>
        )
    }
};

export default  Users;