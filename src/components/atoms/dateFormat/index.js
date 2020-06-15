import React from 'react'
import dayjs from 'dayjs'

function DateFormat({date, format}) {
    return (
        <>
            {dayjs(date).format(format)}   
        </>
    )
}

export default DateFormat
