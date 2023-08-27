import './GammingLibrary.css'

import {GammingLibraryCard, SectionHeader, SectionWrapper} from '../../components/index'
import GammingLibraryData from '../../Data/GammingLibrary'


const GammingLibrary = () => {

    const cards = GammingLibraryData.map(card =>{
        return      <GammingLibraryCard key={card.id} image={card.image} title={card.title} category={card.category}  date_added={card.date_added} hours_played={card.hours_played} download={card.download} />
      
      })
      


  return (
    <>
    <SectionWrapper>
    <SectionHeader>Gamming Library</SectionHeader>
       <div className='gamming-library-cards'>
        {/* <GammingLibraryCard/> */}




 {cards} 
 
 
     
 
     </div>
     </SectionWrapper>
     
     </>
  )
}

export default GammingLibrary