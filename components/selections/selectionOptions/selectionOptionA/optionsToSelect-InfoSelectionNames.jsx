'use client'

import { useState } from 'react'

import { ToggleButton } from '@mui/material'
import { ToggleButtonGroup } from '@mui/material'

import { DropdownInfoSectionName } from '@/components/dropdown/selections/DropdownInfoSectionName'

export function OptionsToSelectAndInfoSelectionNames() {

        const [option, setOption] = useState('optionA')

        const handleChange = (e, newOption) => {
            if (newOption !== null) {
                setOption(newOption)
            }
        }

    return (

        <> 
            <div className='row h-50'>
                <div className='col-sm-6'>
                    <ToggleButtonGroup
                        orientation="vertical"
                        value={option}
                        exclusive // Selecting one option deselects any other
                        onChange={handleChange}
                        aria-label="Selection from options"
                        >
                        <ToggleButton value="optionA"
                                        aria-label="selected option A: Those who raised you"
                                   
                                    
                                
                                        href={"/selectionFamilyAndFriends/selectionOptionA/infoSectionA1/infoSectionA1a/create"}
                                        >
                                        A: Those who raised you
                                    
                        </ToggleButton>
                        <ToggleButton value="optionB"
                                        aria-label="selected option B: Brothers and Sisters"
                                    
                                   
                                        href={"/selectionFamilyAndFriends/selectionOptionB/infoSectionB1/infoSectionB1a/create"}
                                        >
                                        B: Brothers and Sisters
                                    
                        </ToggleButton>
                        <ToggleButton value="optionC"
                                     aria-label="selected option C: Uncles and Aunts"
                                    
                                    
                                        href={"/selectionFamilyAndFriends/selectionOptionC/infoSection1a/create"}
                                        >
                                        C: Uncles and Aunts
                                    
                        </ToggleButton>
                        <ToggleButton value="optionD"
                                    aria-label="selected option D: Grandpa's and Grandma's"
                                    
                                    
                                        href={"/selectionFamilyAndFriends/selectionOptionD/infoSection1a/create"}
                                        >
                                        D: Grandpa's and Grandma's
                                      
                        </ToggleButton>
                        <ToggleButton value="optionE"
                                aria-label="selected option E: Friends"
                                
                                    
                                        href={"/selectionFamilyAndFriends/selectionOptionE/infoSection1a/create"}
                                        >
                                        E: Friends
                                    
                        </ToggleButton>
                        <ToggleButton value="optionF"
                        aria-label="selected option F: Create an option yourself"
                        
                                    
                                        href={"/selectionFamilyAndFriends/selectionOptionF/infoSection1a/create"}
                                        >
                                        F: Create an option yourself
                                     
                        </ToggleButton>
                    </ToggleButtonGroup>    
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