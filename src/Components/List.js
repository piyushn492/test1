

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function List() {

    let [list, setList] = useState([])
    const navigate = useNavigate();
    const handleClick = () => navigate('/');
    const dispatch = useDispatch()
    const favList = useSelector(state => {
        console.log(state)
        return state
    })

    useEffect(() => {
        if (favList.length === 0) {
            fetch("https://jsonplaceholder.typicode.com/albums/1/photos?_page=1&_limit=10")
                .then(response => response.json())
                .then(data => {
                    console.log("data", data)
                    const mappedData = data.map(d => {
                        return {
                            albumId: d.albumId,
                            id: d.id,
                            title: d.title,
                            url: d.url,
                            thumbnailUrl: d.thumbnailUrl,
                            fav: false
                        }
                    })
                    dispatch({ type: "initial", payload: mappedData })
                    setList(mappedData) // add fav boolean
                })
        } else {
            setList(favList)
        }
    }, [])

    const onhandleClick = (row) => {
        if (row.fav) {
            const newState = list.map(d => {
                if (d.id === row.id) {
                    return {
                        albumId: d.albumId,
                        id: d.id,
                        title: d.title,
                        url: d.url,
                        thumbnailUrl: d.thumbnailUrl,
                        fav: false
                    }
                } else {
                    return d
                }
            })
            setList(newState)
            dispatch({ type: "initial", payload: newState })
        } else {
            const newState = list.map(d => {
                if (d.id === row.id) {
                    return {
                        albumId: d.albumId,
                        id: d.id,
                        title: d.title,
                        url: d.url,
                        thumbnailUrl: d.thumbnailUrl,
                        fav: true
                    }
                } else {
                    return d
                }
            })
            setList(newState)
            dispatch({ type: "initial", payload: newState })
        }
        // row.fav ? dispatch({type: "remove", payload: row}) : dispatch({type: "add", payload: row})
    }

    return (
        <div>
            <br></br>
            <br></br>
            <button type="button" onClick={handleClick}>View Dashboard</button>
            <br></br>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Image</th>
                    <th>Fav</th>
                </tr>
                {list.map(row => {
                    return (
                        <tr>
                            <td>{row.id}</td>
                            <td>{row.title}</td>
                            <td>
                                <img
                                    src={row.url}
                                    width={60}
                                    alt='tes' />
                            </td>
                            <td><button type="button" onClick={() => onhandleClick(row)}>{!row.fav ? "add to fav" : "remove from fav"}</button></td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );
}
export default List; 