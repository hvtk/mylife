'use client'

import { DropdownInfoSectionName } from '@/components/dropdown/selections/DropdownInfoSectionName'

import { useState } from 'react'

// const signInUser = async (e) => {
//     e.preventDefault();

//     const email = e.target[0].value;
//     const password = e.target[1].value;

//     const response = await signIn("credentials", {
//         email: email,
//         password: password,
//         redirect: false,
//     });

//     if (!response?.error) {
//         router.push("/homepage");
//         router.refresh();
//     }
// };

// const [active, setActive] = useState(false);
//     const handleClick = () => {
//         setActive(!active);
//     };

//     return(
//         <>
//             <div className='d-flex align-items-center justify-content-start ms-3 fs-5'>
//                 <Link href={href}
//                     >
//                         <button className={ active ? "btn btn-bg-secondary text-white" : "btn btn-outline-primary text-black"}
//                                 type="button"
//                                 onClick={handleClick}
//                              >
//                                 {children}
//                         </button>
//                 </Link>
//             </div>
//         </>
//     )
// }

export function OptionsToSelectAndInfoSelectionNames() {

    const [active, setActive] = useState(false);
    const fillActiveButton = () => {
        setActive(!active);
    };

    // const fillButtonSelect1 = (e) => {
    //         e.preventDefault();



    return (

        <> 
            <div className='row h-50'>
                <div className='col-sm-6 d-flex flex-column'>
                   <div className='btn-group-vertical'
                        role="group"
                        aria-label="Info selection toggle button group"
                        >
                            <a  href="/selectionFamilyAndFriends/selectionOptionA/infoSectionA1/infoSectionA1a/create"
                                rel="The info selection page to create" 
                                type="button"
                                className='btn-check' 
                                name="btn-select"
                                id="btn-select-1"
                                autoComplete="off"
                                checked
                                // aria-current="page"
                                // onClick={fillActiveButton}
                                >      
                                {/* <label className={ active ? "btn btn-outline-primary text-white active" : "btn btn-outline-primary text-white"}
                                       htmlFor='btn-select-1' 
                                    > */}
                                        A: Those who raised you 
                                {/* </label> */}
                            </a>
                            <a  href="/selectionFamilyAndFriends/selectionOptionB/infoSectionB1/infoSectionB1a/create"
                                rel="The info selection page to create" 
                                type="button"
                                className='btn-check' 
                                name="btn-select"
                                id="btn-select-2"
                                autoComplete="off"
                                >      
                                {/* <label className="btn btn-outline-primary text-white active"
                                       htmlFor='btnselect-2' 
                                    > */}
                                        B: Brothers and Sisters 
                                {/* </label> */}
                            </a>
                            <a  href="/selectionFamilyAndFriends/selectionOptionC/infoSectionC1/infoSectionC1a/create"
                                rel="The info selection page to create" 
                                type="button"
                                className='btn-check-active' 
                                name="btn-select"
                                id="btn-select-3"
                                autoComplete="off"
                                >      
                                <label className="btn btn-outline-primary text-white active"
                                       htmlFor='btn-select-3' 
                                    >
                                        C: Uncles and Aunts 
                                </label>
                            </a>
                            <a  href="/selectionFamilyAndFriends/selectionOptionD/infoSectionD1/infoSectionD1a/create"
                                rel="The info selection page to create" 
                                type="button"
                                className='btn-check-active' 
                                name="btn-select"
                                id="btn-select-4"
                                autoComplete="off"
                                >      
                                <label className="btn btn-outline-primary text-white active"
                                       htmlFor='btn-select-4' 
                                    >
                                        D: Grandpa's and Grandma's 
                                </label>
                            </a>
                            <a  href="/selectionFamilyAndFriends/selectionOptionE/infoSectionE1/infoSectionE1a/create"
                                rel="The info selection page to create" 
                                type="button"
                                className='btn-check-active' 
                                name="btn-select"
                                id="btn-select-5"
                                autoComplete="off"
                                >      
                                <label className="btn btn-outline-primary text-white active"
                                       htmlFor='btn-select-5' 
                                    >
                                        E: Friends
                                </label>
                            </a>
                            <a  href="/selectionFamilyAndFriends/selectionOptionF/infoSectionF1/infoSectionF1a/create"
                                rel="The info selection page to create" 
                                type="button"
                                className='btn-check-active' 
                                name="btn-select"
                                id="btn-select-6"
                                autoComplete="off"
                                >      
                                <label className="btn btn-outline-primary text-white active"
                                       htmlFor='btn-select-6' 
                                    >
                                        F: Create an option yourself 
                                </label>
                            </a>
                            
                      
                       
                           
                            
                               
                            
                        
                    </div>
                </div>
                <div className='col-sm-6 d-flex flex-column' >
                    <div className='dropdown-center ms-4'>
                        <button className='btn btn-outline-primary dropdown-toggle text-dark'
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                >
                            First Person
                        </button>
                        <ul className='dropdown-menu'>
                            <li>
                                <DropdownInfoSectionName
                                    href={"/selectionFamilyAndFriends/selectionOptionA/infoSectionA1/infoSectionA1a/create"}
                                    >
                                    1a: Name first person
                                </DropdownInfoSectionName>
                            </li>
                            <li>
                                <DropdownInfoSectionName
                                    href={"/selectionFamilyAndFriends/selectionOptionA/infoSectionA1/infoSectionA1b/create"}>
                                    1b: Address first person
                                </DropdownInfoSectionName>
                            </li>
                            <li>
                                <DropdownInfoSectionName
                                    href={"/selectionFamilyAndFriends/selectionOptionA/infoSectionA1/infoSectionA1c/create"}>
                                    1c: Other info first person
                                </DropdownInfoSectionName>
                            </li>
                        </ul>
                    </div>
                    <div className='dropdown-center ms-4'>
                        <button className='btn btn-outline-primary dropdown-toggle text-dark'
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                >
                            Second Person
                        </button>
                        <ul className='dropdown-menu'>
                            <li>
                                <DropdownInfoSectionName
                                    href={"/selectionFamilyAndFriends/selectionOptionA/infoSectionA2/infoSectionA2a/create"}>
                                    2a: Name second person
                                </DropdownInfoSectionName>
                            </li>
                            <li>
                                <DropdownInfoSectionName
                                    href={"/selectionFamilyAndFriends/selectionOptionA/infoSectionA2/infoSectionA2b/create"}>
                                    2b: Address second person
                                </DropdownInfoSectionName>
                            </li>
                            <li>
                                <DropdownInfoSectionName
                                    href={"/selectionFamilyAndFriends/selectionOptionA/infoSectionA2/infoSectionA2c/create"}>
                                    2c: Other info second person
                                </DropdownInfoSectionName>
                            </li>
                        </ul>
                    </div>
                    <div className='dropdown-center ms-4'>
                        <button className='btn btn-outline-primary dropdown-toggle text-dark'
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                >
                            Third Person
                        </button>
                        <ul className='dropdown-menu'>
                            <li>
                                <DropdownInfoSectionName
                                    href={"/selectionFamilyAndFriends/selectionOptionA/infoSectionA3/infoSectionA3a/create"}>
                                    3a: Name third person
                                </DropdownInfoSectionName>
                            </li>
                            <li>
                                <DropdownInfoSectionName
                                    href={"/selectionFamilyAndFriends/selectionOptionA/infoSectionA3/infoSectionA3b/create"}>
                                    3b: Address third person
                                </DropdownInfoSectionName>
                            </li>
                            <li>
                                <DropdownInfoSectionName
                                    href={"/selectionFamilyAndFriends/selectionOptionA/infoSectionA3/infoSectionA3c/create"}>
                                    3c: Other info third person
                                </DropdownInfoSectionName>
                            </li>
                        </ul>
                    </div>
                    <div className='dropdown-center ms-4'>
                        <button className='btn btn-outline-primary dropdown-toggle text-dark'
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                >
                            Fourth Person
                        </button>
                        <ul className='dropdown-menu'>
                            <li>
                                <DropdownInfoSectionName
                                    href={"/selectionFamilyAndFriends/selectionOptionA/infoSectionA4/infoSectionA4a/create"}>
                                    4a: Name fourth person
                                </DropdownInfoSectionName>
                            </li>
                            <li>
                                <DropdownInfoSectionName
                                    href={"/selectionFamilyAndFriends/selectionOptionA/infoSectionA4/infoSectionA4b/create"}>
                                    4b: Address fourth person
                                </DropdownInfoSectionName>
                            </li>
                            <li>
                                <DropdownInfoSectionName
                                    href={"/selectionFamilyAndFriends/selectionOptionA/infoSectionA4/infoSectionA4c/create"}>
                                    4c: Other info fourth person
                                </DropdownInfoSectionName>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </> 
    )
}



{/* <div className='col-sm-6 d-flex flex-column'>
                   <InfoSelectionOptionPage
                        href={"/selectionFamilyAndFriends/selectionOptionB/infoSectionB1/infoSectionB1a/create"}>
                        B: Brothers and Sisters
                   </InfoSelectionOptionPage> 
                </div> */}
 {/* //                 href={"/selectionFamilyAndFriends/selectionOptionE/infoSection1a/create"}>
        //                 E: Friends
        //           
        //         </div>
        //     </div>
        //     <div className='row h-8'>
        //         <div className='col-sm-6 d-flex flex-column'>
        //            <InfoSelectionOptionPage
                        href={"/selectionFamilyAndFriends/selectionOptionF/infoSection1a/create"}>
                        F: Create an option yourself
                   </InfoSelectionOptionPage> 
                </div>
            </div>
        </> */}
{/* <div className='col-sm-6 d-flex flex-column'>
                   <InfoSelectionOptionPage
                        href={"/selectionFamilyAndFriends/selectionOptionD/infoSection1a/create"}>
                        D: Grandpa's and Grandma's
                   </InfoSelectionOptionPage> 
                </div> */}
 {/* <div className='col-sm-6 d-flex flex-column'>
                   <InfoSelectionOptionPage
                        href={"/selectionFamilyAndFriends/selectionOptionC/infoSection1a/create"}>
                        C: Uncles and Aunts
                   </InfoSelectionOptionPage> 
                </div> */}

