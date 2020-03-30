import React, { Fragment, useEffect,  useContext } from 'react';
import { Link } from 'react-router-dom';

import GithubContext from '../../context/github/githubContext';


//useEffect sirve para correr una funcion a la vez
const User = ({match}) => {

    const githubContext = useContext(GithubContext);
    const { getUser, loading, user } = githubContext; 

    useEffect(() =>{
        getUser(match.params.login);
    },[])

    const { 
        name, 
        avatar_url, 
        location, 
        bio, 
        blog, 
        html_url, 
        followers, 
        following,
        hireable,
        public_repos
    } = user;

    if(loading){
        return <h2>Loading...</h2>
    }else{
        return (
            <Fragment>
                <Link to="/" className="btn btn-primary" style={{'margin-top': '25px', 'margin-bottom': '25px'}}>
                    Back to Search
                </Link>
            <div style={{'margin-top': '10px'}} className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img className="img-fluid" src={avatar_url} alt=""/>
                    </div>
                    <div className="col-md-6">
                         <h2>Hireable
                            {hireable ? 
                            (<i className="fas fa-check text-success"/>) 
                            : 
                            (<i className="fas fa-times text-danger"/>)}
                        </h2>
                        <h2>{name}</h2>
                        <p>Location: {location}</p>
                        <p>Bio: {bio}</p>
                        {blog && <p>Website: {blog}</p>} 
                        <a className="btn btn-dark btn-lg" href={html_url}>Go to Github Profile</a>
                        <div>
                            <h2 className=""><span class="badge badge-primary">Followers: {followers}</span></h2>
                            <h2><span class="badge badge-success">Following: {following}</span></h2>
                            <h2><span class="badge badge-danger">Public Repos: {public_repos}</span></h2>
                        </div>
        
                    </div>
                </div>
            </div>
            </Fragment>
        )
    }
}

export default User;
