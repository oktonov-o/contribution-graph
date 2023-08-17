import './styles.css'

function Contribution({ contribution }) {
  let level = 1;
  if (contribution.contribution >= 1){
    level = 2;
  }
  if (contribution.contribution >= 10){
    level = 3;
  }
  if (contribution.contribution >= 20){
    level = 4;
  }
  if (contribution.contribution >= 30){
    level = 5;
  }

  return (
    <>
      <div className={`cell cell-color-level-${level}`}></div>
    </>
  )
}

export default Contribution