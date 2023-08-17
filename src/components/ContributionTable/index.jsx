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
      for (let d = 0; d < 357; d++){
        let day = startDay.add(1, 'days').format('YYYY-MM-DD')
        arr.push({date: day, contribution: data[day] || 0})
      }
      setContributions(arr)
    })
  }, [])

  return (
    <>
      <div className='table'>
        {contributions.map(contribution => (
          <Contribution contribution={contribution}/>
        ))}
      </div>
    </>
  )
}

export default ContributionTable