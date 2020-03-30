import React, { useContext, useState } from 'react'
import GithubContex from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {

    const githubContext = useContext(GithubContex);
    const alertContext = useContext(AlertContext);

    const [text, setText] = useState('');
    

    const onSubmitHandler = (e) => {
        
        e.preventDefault();

        if(text === ''){
            alertContext.setAlert('Please enter a search term', 'alert-danger');
        }else{
            githubContext.searchUsers(text);
            setText('');
        }
        
    }
    const onChangeHandler = e => setText(e.target.value);
 
        return (
            <div className="container g-mt-50" style={{"margin-top": "20px"}}>
                <form onSubmit={onSubmitHandler}>
                    <div className="form-group">
                        <input 
                        type="text" 
                        className="form-control" 
                        name='text' 
                        placeholder="Search Users" 
                        value={text} 
                        onChange={onChangeHandler}/>
                    </div>
                    <button type="submit" class="mb-1 btn btn-block btn-primary">Submit</button>
                </form>


                {githubContext.users.length > 0 && (
                    <button className="mb-1 btn btn-block btn-warning" onClick={githubContext.clearUsers}>Clear</button>
                )}
            </div>
        )
};

export default Search;