import React, { useState, useEffect } from 'react';

import Nav from "./Nav";
import Search from "./Search";
import Repositories from "./Repositories";

import { getRepositories } from "../../services/api";

import "./style.css";

const userId = '6596855afa1c86f83bbf6c37';

const MainPage = () => { 
    const [repositories, setRepositories] = useState([]);

    const loadData = async (query = '') => {
        const response = await getRepositories(userId);

        console.log(response.data);

        setRepositories(response.data);
    }

    useEffect(() => {
        (async () => await loadData())();
    }, []);

    const handleLogout = () => {
        console.log('logout');
    }

    const handleSearch = (query) => {
        console.log('query', query);
    }

    const handleDeleteRepo = (repository) => {
        console.log('delete repo', repository);
    }

    const handleNewRepo = (url) => {
        console.log('new repo', url);
    }

    return (
        <div id="main">
            <Nav onLogout={handleLogout}/>
            <Search onSearch={handleSearch}/>
            <Repositories 
                repositories={repositories} 
                onDeleteRepo={handleDeleteRepo}
                onNewRepo={handleNewRepo} />
            
        </div>
    )
};

export default MainPage;