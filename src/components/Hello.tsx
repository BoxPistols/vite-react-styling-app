import React, { useEffect, useState, Fragment } from 'react'
import PropTypes from 'prop-types'
import Box from './Box'
import './Hello.scss'

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
    const [boxState, setBoxState] = useState('2')

    const [color, setColor] = useState(colors.Sea)
    const [text, setText] = useState(texts.s)

    // const [boxStyleState, setBoxStyleState] = useState('')

    useEffect(() => {
        const h2 = document.querySelector('h2')
        h2.style.color = color
        // document.body.style.background = color
    }, [color])

    useEffect(() => {
        const h2 = document.querySelector('h2')
        h2.style.fontSize = text
    }, [text])

    useEffect(() => {
        const res = document.querySelector('.res')
        let para = document.querySelector('.box' + boxState)
        let compStyles = window.getComputedStyle(para)
        res.textContent =
            compStyles.getPropertyValue('justify-content') +
            ', ' +
            compStyles.getPropertyValue('align-items') +
            ', ' +
            compStyles.getPropertyValue('flex-direction') +
            ', ' +
            compStyles.getPropertyValue('flex-wrap')
    }, [boxState])

    return (
        <Fragment>
            <h1>Box</h1>
            <div className='res'></div>
            <input
                value={boxState}
                type='number'
                onChange={(e) => setBoxState(e.target.value)}
            />
            <Box hoge='xxx' huga={boxState} />
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
