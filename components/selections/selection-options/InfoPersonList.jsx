
import InfoPerson from '@/components/selections/selection-options/InfoPerson'

export function InfoPersonList({ infoPersons}) {

    return (
      <ul>
        {
            infoPersons.map(infoPerson => (
                <InfoPerson key={infoPerson.id} infoPerson={infoPerson}/>
            ))
        }
      </ul>
    )
  }