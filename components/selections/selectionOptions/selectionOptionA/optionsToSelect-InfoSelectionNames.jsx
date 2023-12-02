import { DropdownInfoSectionName } from '@/components/dropdown/selections/DropdownInfoSectionName'

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

export function OptionsToSelectAndInfoSelectionNames() {

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
                                >  
                                <input type="radio"
                                        className='btn-check' 
                                        name="btnradio"
                                        id="btnradio1"
                                        autocomplete="off"
                                        
                                    />
                                <label className="btn btn-bg-secondary text-white"
                                       htmlFor='btnradio1' 
                                    >
                                        A: Those who raised you 
                                </label>
                            </a>
                          
                       
                       
                            <a  href="/selectionFamilyAndFriends/selectionOptionB/infoSectionB1/infoSectionB1a/create"
                                rel="The info selection page to create" 
                                > 
                            
                                <input type="radio"
                                       className='btn-check' 
                                       name="btnradio"
                                       id="btnradio2"
                                       autocomplete="off"
                                       
                                    />
                                <label className="btn btn-bg-secondary text-white"
                                        htmlFor='btnradio2' 
                                    >
                                        A: Those who raised you 
                                </label>
                            </a>
                            
                      
                       
                           
                            
                                <input type="radio"
                                       className='btn-check' 
                                       name="btnradio"
                                       id="btnradio3"
                                       autocomplete="off"
                                       
                                    />
                                <label className="btn btn-bg-secondary text-white"
                                        htmlFor='btnradio3' 
                                    >
                                        A: Those who raised you 
                                </label>
                         
                       
                       
                           
                                
                                <input type="radio"
                                       className='btn-check' 
                                       name="btnradio"
                                       id="btnradio4"
                                       autocomplete="off"
                                       
                                    />
                                <label className="btn btn-bg-secondary text-white"
                                        htmlFor='btnradio4' 
                                    >
                                        A: Those who raised you 
                                </label>
                            
                       
                        
                          
                            
                                <input type="radio"
                                       className='btn-check' 
                                       name="btnradio"
                                       id="btnradio5"
                                       autocomplete="off"
                                       
                                    />
                                <label className="btn btn-bg-secondary text-white"
                                        htmlFor='btnradio5' 
                                    >
                                        A: Those who raised you 
                                </label>
                         
                        
                       
                           
                                <input type="radio"
                                        className='btn-check' 
                                        name="btnradio"
                                        id="btnradio6"
                                        autocomplete="off"
                                        
                                    />
                                <label className="btn btn-bg-secondary text-white"
                                        htmlFor='btnradio6' 
                                    >
                                        A: Those who raised you 
                                </label>
                            
                        
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

