import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
const axios = require('axios');
function Movie(props: any) {
    const [param, setParam] = useState(props.param);
    const [data, setData] = useState(props.data);
    const [name, setName] = useState('');

    console.log('name is :', name)
    useEffect(() => {
        setData(props.data)
        setParam(props.param)
    }, [props])
    useEffect(() => {
        if (data[param]?.name !== undefined || data[param]?.name !== null)
        // let newName = [...data[param]?.name].toString().split('');
            setName(data[param]?.name.toString().split(''))
    }, [param])
    // const [param, setParam] = useState(props.param);
    // const [name, setName] = useState(props.data.name);
    // const [length, setLength] = useState((props.data.name).length)
    //random the number of missing letters
    // var min = 3;
    // var max = 6;
    // var rand = Math.floor(min + (Math.random() * (max - min)));

    // var min1 = 0;
    // var max1 = length - 1;
    // for (let i = 0;i < rand;i++) {
    //set the location of the missing letter
    // let asstrics = Math.floor(min1 + (Math.random() * (max1 - min1)));

    // }
    return (
        <div >
            <Card>
                <Card.Body>{data[param]?.name} {param}</Card.Body>
            </Card>


        </div>
    );
}

export default Movie;