import React from 'react'
import PropTypes from 'prop-types'

import './Hello.scss'
import Box from './Box'

const { useEffect, useState, Fragment } = React

const colors = {
    Sea: '#a2ccb6',
    Sand: '#fceeb5',
    Peach: '#ee786e',
}
const texts = {
    s: '14px',
    m: '18px',
    l: '24px',
}

const Hello = ({ name }) => {
    const [color, setColor] = useState(colors.Sea)
    const [text, setText] = useState(texts.s)

    useEffect(() => {
        const h2 = document.querySelector('h2')
        h2.style.color = color
        // document.body.style.background = color
    }, [color])

    useEffect(() => {
        const h2 = document.querySelector('h2')
        h2.style.fontSize = text
    }, [text])

    return (
        <Fragment>
            <h1>Box</h1>
            <Box hoge='xxx' />

            <hr />

            <h1>Hello {name}!</h1>
            <h2>Title Design</h2>
            <select value={color} onChange={(e) => setColor(e.target.value)}>
                {Object.entries(colors).map(([name, value]) => (
                    <option key={`color--${name}`} value={value}>
                        {name}
                    </option>
                ))}
            </select>

            <select value={text} onChange={(e) => setText(e.target.value)}>
                {Object.entries(texts).map(([name, value]) => (
                    <option key={`text--${name}`} value={value}>
                        {name}
                    </option>
                ))}
            </select>

            <h1>{color}</h1>
            <h2>{text}</h2>
        </Fragment>
    )
}
export default Hello

Hello.propTypes = {
    name: PropTypes.string,
}
