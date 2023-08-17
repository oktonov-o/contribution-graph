import { useEffect, useState } from 'react'
import moment from 'moment'
import './styles.css'
import Contribution from '../Contribution'

function ContributionTable() {
  const [contributions, setContributions] = useState([])
  useEffect(() => {
    fetch('https://dpg.gg/test/calendar.json')
    .then(res => {
      return res.json();
    })
    .then(data => {
      const startDay = moment().startOf('week').subtract(50, 'weeks')
      const arr = []

      for (let r=1; r<=7; r++){
        let currentDay = moment(startDay).add(r, 'days');
        for (let c=0; c<51; c++){
          let day = currentDay.add(7, 'days').format('YYYY-MM-DD')
          arr.push({date: day, value: data[day] || 0})
        }
      }
      setContributions(arr)
    })
  }, [])

  return (
    <>
      <div className='table'>

        <div className='chart'>
          {contributions.map(contribution => (
            <Contribution contribution={contribution}/>
          ))}
        </div>
      </div>
    </>
  )
}

export default ContributionTable