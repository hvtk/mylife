import InfoPerson from '@/components/selections/selection-options/InfoPerson'

async function getData() {
  const res = await fetch("http://localhost:3000/api/selections/familyandfriends/create-infoperson");

  if(!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return res.json();
}


export async function InfoPersonList() {

    const infoPersons = await getData();
    console.log(infoPersons);
    
    return (
      <div>
        {
            infoPersons.map(infoPerson => (
                <InfoPerson key={infoPerson.id} infoPerson={infoPerson}/>
            ))
        }
      </div>
    )
  }