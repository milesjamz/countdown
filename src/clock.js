import React from 'react';
import { render } from '@testing-library/react';

class Clock extends React.Component {

    state ={
        date: ''
    }

componentDidMount() {
    const rightNow = new Date()
    this.setState({ date: rightNow.toString() })
}

render() {

const _MS_PER_DAY = 1000 * 60 * 60 * 24;
function dateDiffInDays(a, b) {
  let derp = new Date(a)
  let deDoo = new Date(b)
  const utc1 = Date.UTC(derp.getFullYear(), derp.getMonth(), derp.getDate());
  const utc2 = Date.UTC(deDoo.getFullYear(), deDoo.getMonth(), deDoo.getDate());
  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}
    const annivers = new Date('08/24/2020').toLocaleString()

    return (
        <div className='clockContainer'>
            <input type='date' /><br/>
this is the clock - my only friend, a clock. Counting down from 'event name here'<br />
It is currently {this.state.date}. There's only {dateDiffInDays(this.state.date, annivers)}&nbsp;days until Me and Jessy's first anniversary - get crackin, 'Rillo!!
        </div>
        )
    }
}

export default Clock