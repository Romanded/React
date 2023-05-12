import React, {useRef, useState} from 'react';
import cl from './PostForm.module.css'

const PostForm = ({visible, setVisibleState, sortList, setSortList, next}) => {

    const [taskState, setTaskState] = useState('')
    const [dateState, setDateState] = useState('')
    const modalEl = useRef(null)

    const addItem = (newItem) => {
        setSortList([...sortList, newItem])
    }

    const hide = () => {
        setVisibleState(cl.hidden)
    }

    return (
        <div ref={modalEl} className={cl.modal + ' ' + visible} onClick={(e) => {
            if (e.target === modalEl.current) {
                hide()
            }
        }}>
            <div className={cl.container}>
                <input type='text' onInput={(e) => {
                    setTaskState(e.target.value)
                }}/>
                <input type='date' onInput={(e) => {
                    setDateState(e.target.value)
                }}/>
                <button onClick={(e) => {
                    e.preventDefault();
                    addItem({
                        id: next,
                        task: taskState,
                        postDate: new Date().toLocaleDateString(),
                        term: dateState,
                        done: false
                    })
                }}>Ok</button>
            </div>
        </div>
    );
};

export default PostForm;