import React, { useState, useEffect } from 'react';
import axiosPages from '../../axiosPages';
import './Page.css';

const Page = props => {
    const [page, setPage] = useState({
        title: '',
        content: '',
    });

    const [axiosPageData, setAxiosPageData] = useState({
        axiosTitleInfo: 'home',
    });

    const [newPageData, setPageData] = useState({
        title: '',
        content: '',
    });

    const axiosPageDataChanged = event => {
        const value = event.target.value;
        const axiosPageDataCopy = {
            axiosTitleInfo: value,
        }
        setAxiosPageData(axiosPageDataCopy);
    };

    const pageDataChanged = event => {
        const value = event.target.value;
        const name = event.target.name;
        setPageData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const editPages = async event => {
        event.preventDefault();
        await axiosPages.put(axiosPageData.axiosTitleInfo + '.json', newPageData);
        props.history.replace('/' + axiosPageData.axiosTitleInfo);
    }


    useEffect(() => {
        const fetchData = async () => {
            if (props.match.path !== '/admin') {
                const response = await axiosPages.get(props.match.path + '.json');
                const pageCopy = {
                    title: response.data.title,
                    content: response.data.content,
                };
                setPage(pageCopy);
            }
        }
        fetchData();
    }, [props.match.path]);

    if (props.match.path !== '/admin') {
        return (
            <div className='container'>
                <div className='main-content'>
                    <h1>
                        {page.title}
                    </h1>
                    <p>{page.content}</p>
                </div>
            </div>
        );
    } else {
        return (
            <div className='container'>
                <form onSubmit={editPages}>
                    <div className='select-page-box'>
                        <h1>Select Pages</h1>
                        <select onChange={axiosPageDataChanged}>
                            <option>home</option>
                            <option>about</option>
                            <option>contacts</option>
                            <option>divisions</option>
                        </select>
                    </div>
                    <input required className='title-input' placeholder='Title' name='title' onChange={pageDataChanged} />
                    <textarea className='content-textarea' placeholder='Content' name='content' onChange={pageDataChanged} />
                    <button type='submit'>Save</button>
                </form>
            </div>
        )

    }

};

export default Page;