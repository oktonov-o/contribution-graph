import { useEffect, useState } from 'react'
import moment from 'moment'
import './styles.css'
import Contribution from '../Contribution'

function ContributionTable() {
  const [contributions, setContributions] = useState([])
  const [months, setMonths] = useState([])

  useEffect(() => {
    fetch('https://dpg.gg/test/calendar.json')
    .then(res => {
      return res.json();
    })
    .then(data => {
      const startDay = moment().startOf('week').subtract(50, 'weeks')
      const arr = []
      const monthsArr = []

      for (let r=1; r<=7; r++){
        let currentDay = moment(startDay).add(r, 'days');
        for (let c=0; c<51; c++){
          let day = currentDay.add(7, 'days').format('YYYY-MM-DD');
          arr.push({date: currentDay, value: data[day] || 0});
        }
      }

      for (let m=0; m<12; m++){
        let currentMonth = moment(startDay).add(m, 'months');
        monthsArr.push(currentMonth.format('MMMM'))
      }
      setContributions(arr)
      setMonths(monthsArr)
    })
  }, [])

  return (
    <>
      <div className='table'>
        <div className='months'>
          {months.map(month => (
            <h5>{month}</h5>
          ))}
        </div>
        <div className='chart'>
          {contributions.map((contribution, index) => (
            <Contribution key={index} contribution={contribution}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default ContributionTable