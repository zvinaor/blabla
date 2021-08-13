import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Movie from './Movie';
const axios = require('axios');
function List() {

    // var minPage = 1;
    // var maxPage = 100;
    // var page = Math.floor(minPage + (Math.random() * (maxPage - minPage)));

    // var minItem = 0;
    // var maxItem = 19;
    // var pageItem = Math.floor(minItem + (Math.random() * (maxItem - minItem)));
    const [param, setParam] = useState(0);
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const key = '79940bb3aaa8ec9b2b6fe293bd540bb9';
    const url = `https://api.themoviedb.org/3/tv/top_rated?api_key=${key}&language=en-US&page=${page}`;

// useEffect(()=> {
//     let newData = [...data]

//     setData(newData[param])
// }, [param])
    useEffect(() => {
        axios.get(url)
            .then((response: any) => {
                // handle success
                setData(response.data.results);
            })
            .catch(function (error: any) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }, [])
                                                                                           
    return (
        <div >
            <Movie data={data} param={param}/>
            <Button onClick={() => setParam(param+1)} variant="primary" >
                Back
            </Button>
            <Button onClick={() => setParam(param+1)} variant="primary"> Next</Button>
        </div>
    );
}

export default List;