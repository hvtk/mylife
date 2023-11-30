'use client'

import { DropdownInfoSectionName } from '@/components/dropdown/selections/DropdownInfoSectionName'
import { InfoSelectionOptionPage } from '@/components/selections/only-single-text-and-link-fields/InfoSelectionOptionPage'
import { useState } from 'react'

export function OptionsToSelectAndInfoSelectionNames() {

    const [active1, setActive1] = useState(false);
    const handleClick1 = () => {
        setActive1(!active1);
    };

    const [active2, setActive2] = useState(false);
    const handleClick2 = () => {
        setActive2(!active2);
    };

    const [active3, setActive3] = useState(false);
    const handleClick3 = () => {
        setActive3(!active3);
    };

    const [active4, setActive4] = useState(false);
    const handleClick4 = () => {
        setActive4(!active4);
    };

    return (

        <> 
            <div className='row h-8'>
                <div className='col-sm-6 d-flex flex-column'>
                   <InfoSelectionOptionPage
                        href={"/selectionFamilyAndFriends/selectionOptionA/infoSectionA1/infoSectionA1a/create"}>
                        A: Those who raised you
                   </InfoSelectionOptionPage> 
                </div>
                <div className='col-sm-6 d-flex flex-column' >
                    <div className='dropdown-center ms-4'>
                        <button className={active1 ? 'btn btn-primary dropdown-toggle' : 'btn btn-secondary dropdown-toggle'}
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="true"
                                aria-current="false" 
                                onClick={handleClick1}
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
                </div>
            </div>
            <div className='row h-8'>
                <div className='col-sm-6 d-flex flex-column'>
                   <InfoSelectionOptionPage
                        href={"/selectionFamilyAndFriends/selectionOptionB/infoSection1a/create"}>
                        B: Brothers and Sisters
                   </InfoSelectionOptionPage> 
                </div>
                <div className='col-sm-6 d-flex flex-column'>
                    <div className='dropdown-center ms-4'>
                        <button className={active2 ? 'btn btn-primary dropdown-toggle' : 'btn btn-secondary dropdown-toggle'}
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                onClick={handleClick2}
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
                </div>
            </div>
            <div className='row h-8'>
                <div className='col-sm-6 d-flex flex-column'>
                   <InfoSelectionOptionPage
                        href={"/selectionFamilyAndFriends/selectionOptionC/infoSection1a/create"}>
                        C: Uncles and Aunts
                   </InfoSelectionOptionPage> 
                </div>
                <div className='col-sm-6 d-flex flex-column'>
                    <div className='dropdown-center ms-4'>
                        <button className={active3 ? 'btn btn-primary dropdown-toggle' : 'btn btn-secondary dropdown-toggle'}
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                onClick={handleClick3}
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
                </div>
            </div>
            <div className='row h-8'>
                <div className='col-sm-6 d-flex flex-column'>
                   <InfoSelectionOptionPage
                        href={"/selectionFamilyAndFriends/selectionOptionD/infoSection1a/create"}>
                        D: Grandpa's and Grandma's
                   </InfoSelectionOptionPage> 
                </div>
                <div className='col-sm-6 d-flex flex-column'>
                    <div className='dropdown-center ms-4'>
                        <button className={active4 ? 'btn btn-primary dropdown-toggle' : 'btn btn-secondary dropdown-toggle'}
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                onClick={handleClick4}
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
            <div className='row h-8'>
                <div className='col-sm-6 d-flex flex-column'>
                   <InfoSelectionOptionPage
                        href={"/selectionFamilyAndFriends/selectionOptionE/infoSection1a/create"}>
                        E: Friends
                   </InfoSelectionOptionPage> 
                </div>
            </div>
            <div className='row h-8'>
                <div className='col-sm-6 d-flex flex-column'>
                   <InfoSelectionOptionPage
                        href={"/selectionFamilyAndFriends/selectionOptionF/infoSection1a/create"}>
                        F: Create an option yourself
                   </InfoSelectionOptionPage> 
                </div>
            </div>
        </>
    )
}