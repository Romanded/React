import {useEffect, useMemo, useState} from "react";

export const useSortedList = (value) => {
    const [allTasks, setAllTasks] = useState( [
        {id: 1, task: 'Task Task Task Task Task', postDate: '2021-23-09', term: '2021-23-09', done: false},
        {id: 2, task: 'aask Task Task Task Task', postDate: '2022-23-09', term: '2021-23-09', done: false},
        {id: 3, task: 'Task Task Task Task Task', postDate: '2021-21-09', term: '2021-23-09', done: false},
        {id: 4, task: 'bask Task Task Task Task', postDate: '2021-23-10', term: '2021-23-09', done: false},
        {id: 5, task: 'Task Task Task Task Task', postDate: '2021-24-08', term: '2021-23-09', done: false},
        {id: 6, task: 'Task Task Task Task Task', postDate: '2020-23-09', term: '2021-23-09', done: false},
        {id: 7, task: 'Task Task Task Task Task', postDate: '2021-23-09', term: '2021-23-09', done: false},
        {id: 3, task: 'Task Task Task Task Task', postDate: '2021-23-09', term: '2021-23-09', done: false},
        {id: 4, task: 'Task Task Task Task Task', postDate: '2021-23-09', term: '2021-23-09', done: false},
        {id: 5, task: 'Task Task Task Task Task', postDate: '2021-23-09', term: '2021-23-09', done: false},
        {id: 1, task: 'Task Task Task Task Task', postDate: '2021-23-09', term: '2021-23-09', done: false},
        {id: 2, task: 'Task Task Task Task Task', postDate: '2021-23-09', term: '2021-23-09', done: false},
        {id: 3, task: 'Task Task Task Task Task', postDate: '2021-23-09', term: '2021-23-09', done: false},
        {id: 4, task: 'Task Task Task Task Task', postDate: '2021-23-09', term: '2021-23-09', done: false},
        {id: 5, task: 'Task Task Task Task Task', postDate: '2021-23-09', term: '2021-23-09', done: false},
    ])
    useMemo(() => {
        console.log(value)
        if (value === 'alphabet') {
            setAllTasks([...allTasks].sort((a, b) => a.task.localeCompare(b.task)))
        } else if (value === 'term') {
            setAllTasks([...allTasks].sort((a, b) => new Date(a.term) - new Date(b.term)))
        } else if (value === 'Date') {
            setAllTasks([...allTasks].sort((a, b) => a.id - b.id))
        }
        console.log(value)
    }, [value])

    return [allTasks, setAllTasks]
}
