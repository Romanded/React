import './styles/App.css';
import React, {useMemo, useState, useEffect, lazy, Suspense} from "react";
import PostButton from "./components/UI/PostButton/PostButton";
import PostForm from "./components/postForm/PostForm";
import cl from '../src/components/postForm/PostForm.module.css'
import {useFieldsCount, useFieldsCountArr} from "./hooks/useFieldsCount";
import {useSortedList} from "./hooks/useFields";
import Select from "./components/UI/select/Select";
import Fields from "./components/fields/Fields";
import List from "./components/list/List"

function App() {
    const [value, setValue] = useState('')
    const [sortList, setSortList] = useSortedList(value)
    const [start, setStart] = useState(0)
    const [limit, setLimit] = useState(5)
    const [listState, setListState] = useState([...sortList].splice(start, limit));
    const [visibleState, setVisibleState] = useState(cl.hidden)
    const fieldsCount = useFieldsCount(sortList.length, limit)
    const fieldsCountArr = useFieldsCountArr(fieldsCount)


    useEffect(() => {
        setListState([...sortList].splice(start, limit))
    }, [start, sortList, value])

    console.log(fieldsCountArr, fieldsCount)

  return (
    <div className="App">
        <Fields fieldsCountArr={fieldsCountArr} limit={limit} setStart={setStart}/>
        <Select setValue={setValue}/>
        <PostForm visible={visibleState} setVisibleState={setVisibleState} sortList={sortList} setSortList={setSortList} next={sortList.length ? sortList[sortList.length - 1].id + 1 : 1}/>
        <List list={listState} sortList={sortList} setSortList={setSortList} fieldsCountArr={fieldsCountArr}/>
        <PostButton setVisibleState={setVisibleState}/>
    </div>
  );
}

export default App;
