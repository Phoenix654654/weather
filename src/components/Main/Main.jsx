import React from 'react'
import MainFooter from './MainFooter/MainFooter'
import MainHeader from './MainHeader/MainHeader'

function Main({ current, fiveDays, date, setDate, isLight }) {
  return (
    <section style={{paddingBottom: '100px'}}>
      <div className="container">
        <MainHeader isLight={isLight} current={current} />
        <MainFooter isLight={isLight} fiveDays={fiveDays} date={date} setDate={setDate} current={current}/>
      </div>
    </section>
  )
}

export default Main