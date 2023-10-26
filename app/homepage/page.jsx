'use client'

import useSWR from 'swr'

import Link from 'next/link'
import { MylifeImageAndCaption } from '@/components/self-contained-items/MyLifeImageAndCaption'
import { SelectionOptionsView } from '@/components/selections/SelectionOptionsView'
import { SidebarBase } from '@/components/sidebar/SidebarBase'
import { HeaderBase } from '@/components/header/HeaderBase'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

// async function getData() {
//   const res = await fetch("http://localhost:3000/api/user", {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error ("Failed to fetch data");
//   }

//   return res.json();
// }


const Homepage = () => {

  const session = useSession();

  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then(res => res.json());
  const { data, error, isLoading} = useSWR(`/api/user?username=${session?.data?.user.name}`, fetcher);

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/auth/signIn");
  }

  if (session.status === "authenticated") {
  
    return (

      <>
        <div className='container min-vw-100 bg-body'>
          <div className='row'>
            <div className='col-sm-1 bg-secondary min-vh-100 d-flex flex-column justify-content-center'>
              <SidebarBase/>
            </div>
            <div className='col-sm-11 bg-success min-vh-100'>
              <div className='row'>
                <div className='col-sm-4 min-vh-100 d-flex flex-column justify-content-center'>
                  <MylifeImageAndCaption />
                </div>
                <div className='col-sm-8'>
                  <div className='row h-4'>
                    <div className='d-flex align-items-center justify-content-end '>
                      <div className='fs-5 me-4'>
                        Homepage
                      </div>  
                      {data.map((user) => (
                        <Link href={user.id} key={user.id}>
                        <div className='fs-5 me-4'>
                            Hi... You are not signedIn!
                        </div>
                      
                      
                        <div className='fs-5 me-4'>
                            {user.name}
                        </div>
                      </Link>
                      ))}
                      <HeaderBase/>
                    </div>
                  </div>
                  <SelectionOptionsView />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Homepage
