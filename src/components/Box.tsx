import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import '../assets/css/flexbox-template.scss'
import classNames from 'classnames'

const box_classes = classNames('bx')
// const boxN = classNames('box')

const Box = ({ hoge, huga }) => {
    // useEffect(() => {
    //     const bx = document.querySelector('.section > .bx')
    //     console.log(window.getComputedStyle(bx))
    // }, [boxStyleState])

    return (
        <div>
            <div className='contents'>
                <div className='box-val'></div>

                {/* section */}
                <section className='section'>
                    {/* in section */}
                    {/* <div className='copy-value' data-clipboard-text=' '>
                        @include flex<span>&#40;</span>
                        <span>{hoge} </span>
                        <span>&#41;</span>
                    </div> */}
                    {/* <code className='code'></code>
                    <code className='code'></code>
                    <code className='code option'></code> */}
                    <div
                        className={[box_classes, 'box' + huga].join(' ').trim()}
                    >
                        <button className='mod btn btn-primary' type='button'>
                            1
                        </button>
                        <button className='mod btn btn-secondary' type='button'>
                            2
                        </button>
                        <button className='mod btn btn-info' type='button'>
                            3
                        </button>
                        <button className='mod btn btn-info' type='button'>
                            4
                        </button>
                        <button className='mod btn btn-info' type='button'>
                            5
                        </button>
                        <button className='mod btn btn-info' type='button'>
                            6
                        </button>
                        <button className='mod btn btn-info' type='button'>
                            7
                        </button>
                    </div>
                </section>

                {/* section */}
                {/* <section className='section'>
                    <div className='copy-value' data-clipboard-text='center'>
                        @include flex<span>&#40;</span>
                        <span>center</span>
                        <span>&#41;</span>
                    </div>
                    <code className='code'></code>
                    <code className='code'></code>
                    <code className='code option'></code>
                    <div className='bx `${boxName}`'>
                        <button className='mod btn btn-primary' type='button'>
                            1
                        </button>
                        <button className='mod btn btn-secondary' type='button'>
                            2
                        </button>
                        <button className='mod btn btn-info' type='button'>
                            3
                        </button>
                    </div>
                </section> */}
            </div>
        </div>
    )
}

export default Box

Box.propTypes = {
    hoge: PropTypes.string,
    huga: PropTypes.string,
}
