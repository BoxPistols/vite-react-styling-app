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
    const [boxState, setBoxState] = useState('1')

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
        const res: Element | null = document.querySelector('.res')
        let para: Element | null = document.querySelector('.box' + boxState)
        if (para !== null && res !== null) {
            let compStyles = window.getComputedStyle(para)

            let resVal = (_v: string) => {
                return compStyles.getPropertyValue(_v)
            }

            res.textContent =
                resVal('justify-content').replace(/norma/g, 'null') +
                ', ' +
                resVal('align-items').replace(/norma/g, 'null') +
                ', ' +
                resVal('flex-direction').replace('row', 'null') +
                ', ' +
                resVal('flex-wrap').replace('nowrap', 'null')
            // let result = res.textContent.includes('normal')
            // if (res.textContent.includes('normal')) {
            // return resVal(res.textContent.replace('normal', 'monkey'))
            // }
            // if (res.textContent.includes('normal')) {
            //     console.log('あ')
            //     res.textContent = 'hoge'
            // } else {
            //     console.log('の')
            // }
        }
    }, [boxState])

    return (
        <Fragment>
            <h1>Box</h1>
            <h2>Result FlexBox</h2>
            Box Number{' '}
            <input
                value={boxState}
                min='1'
                max='28'
                type='number'
                onChange={(e) => setBoxState(e.target.value)}
            />
            <div className=''>
                <span className=''>@include(</span>
                {/* <br /> */}
                <b className='res'></b>)
            </div>
            <Box hoge={boxState} huga={boxState} />
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
