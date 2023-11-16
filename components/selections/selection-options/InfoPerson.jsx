'use client'

export function InfoPerson({ infoPerson }) {
    return (
      <>
        <li key={infoPerson.id}>
          <h1>
              {infoPerson.firstName}
          </h1>
          <h1>
              {infoPerson.lastName}
          </h1>
        </li>
      </>
    )
  }