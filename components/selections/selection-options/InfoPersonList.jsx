import { InfoPerson } from "@/components/selections/selection-options/InfoPerson"

export function InfoPersonList({ InfoPerson }) {
    return (
      <div>
        {
            InfoPerson.map(InfoPerson => (
                <InfoPerson key={InfoPerson.id} InfoPerson={InfoPerson}/>
            ))
        }
      </div>
    )
  }