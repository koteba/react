import { SecondaryButton } from '../../components/index'
import './GammingLibraryCard.css'



function GammingLibraryCard(props) {
  return (
    <div className='gamming-library-card'>
      <ul>
        <li><img src={props.image} alt=""/> </li>
        <li><h4>{props.title}</h4><span>{props.category}</span>  </li>
        <li><h4>Date Added</h4><span>{props.date_added}</span>  </li>
        <li><h4>Hours Played</h4><span>{props.hours_played}</span>  </li>
        <li><h4>Currently</h4><span>{props.download}</span>  </li>


        <SecondaryButton className='button secondary-btn'>Download</SecondaryButton>
        {/* <div className='main-button'>
        <a href="/#">Download</a>
    </div> */}
      </ul>






    </div>
  )
}

export default GammingLibraryCard