import {useMemo, useState} from "react";

export const useFieldsCount = (tasksCount, limit) => {
    const [fieldsCount, setFieldsCount] = useState(Math.ceil(tasksCount / limit))

    useMemo(() => {
        setFieldsCount(Math.ceil(tasksCount / limit))
    }, [tasksCount, limit])
    return fieldsCount
}

export const useFieldsCountArr = (fieldsCount) => {
    const [fieldsCountArr, setFieldsCountArr] = useState(Array(fieldsCount).fill(1))

    useMemo(() => {
        setFieldsCountArr(Array(fieldsCount).fill(1))
    }, [fieldsCount])
    return fieldsCountArr
}