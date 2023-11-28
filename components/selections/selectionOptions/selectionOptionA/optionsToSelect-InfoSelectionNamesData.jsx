import { InfoSectionName } from '@/components/selections/only-single-text-and-link-fields/InfoSectionName'
import { InfoSelectionOptionPage } from '@/components/selections/only-single-text-and-link-fields/InfoSelectionOptionPage'

export function OptionsToSelectAndInfoSelectionNamesData() {

    return (

        <> 
            <div className='row h-8'>
                <div className='col-sm-6 d-flex flex-column'>
                   <InfoSelectionOptionPage
                        href={"/selectionFamilyAndFriends/selectionOptionA/infoSectionA1/infoSectionA1a/create"}>
                        A: Those who raised you
                   </InfoSelectionOptionPage> 
                </div>
                <div className='col-sm-6 d-flex flex-column'>
                    <div className='dropdown-center d-flex align-items-center justify-content-start ms-4'>
                        <button className='btn btn-secondary dropdown-toggle'
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                >
                            First Person
                        </button>
                        <ul className='dropdown-menu'>
                            <li>
                                <InfoSectionName
                                    href={"/selectionFamilyAndFriends/selectionOptionA/infoSectionA1/infoSectionA1a/read"}>
                                    1a: Name first person
                                </InfoSectionName>
                            </li>
                            <li>
                                <InfoSectionName
                                    href={"/selectionFamilyAndFriends/selectionOptionA/infoSectionA1/infoSectionA1b/read"}>
                                    1b: Address first person
                                </InfoSectionName>
                            </li>
                            <li>
                                <InfoSectionName
                                    href={"/selectionFamilyAndFriends/selectionOptionA/infoSectionA1/infoSectionA1c/read"}>
                                    1c: Other info first person
                                </InfoSectionName>
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
                    <div className='dropdown-center d-flex align-items-center justify-content-start ms-4'>
                        <button className='btn btn-secondary dropdown-toggle'
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                >
                            Second Person
                        </button>
                        <ul className='dropdown-menu'>
                            <li>
                                <InfoSectionName
                                    href={"/selectionFamilyAndFriends/selectionOptionA/infoSectionA2/infoSectionA2a/create"}>
                                    2a: Name second person
                                </InfoSectionName>
                            </li>
                            <li>
                                <InfoSectionName
                                    href={"/selectionFamilyAndFriends/selectionOptionA/infoSectionA2/infoSectionA2b/create"}>
                                    2b: Address second person
                                </InfoSectionName>
                            </li>
                            <li>
                                <InfoSectionName
                                    href={"/selectionFamilyAndFriends/selectionOptionA/infoSectionA2/infoSectionA2c/create"}>
                                    2c: Other info second person
                                </InfoSectionName>
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
                    <div className='dropdown-center d-flex align-items-center justify-content-start ms-4'>
                        <button className='btn btn-secondary dropdown-toggle'
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                >
                            Third Person
                        </button>
                        <ul className='dropdown-menu'>
                            <li>
                                <InfoSectionName
                                    href={"/selectionFamilyAndFriends/selectionOptionA/infoSectionA3/infoSectionA3a/create"}>
                                    3a: Name third person
                                </InfoSectionName>
                            </li>
                            <li>
                                <InfoSectionName
                                    href={"/selectionFamilyAndFriends/selectionOptionA/infoSectionA3/infoSectionA3b/create"}>
                                    3b: Address third person
                                </InfoSectionName>
                            </li>
                            <li>
                                <InfoSectionName
                                    href={"/selectionFamilyAndFriends/selectionOptionA/infoSectionA3/infoSectionA3c/create"}>
                                    3c: Other info third person
                                </InfoSectionName>
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
                    <div className='dropdown-center d-flex align-items-center justify-content-start ms-4'>
                        <button className='btn btn-secondary dropdown-toggle'
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                >
                            Fourth Person
                        </button>
                        <ul className='dropdown-menu'>
                            <li>
                                <InfoSectionName
                                    href={"/selectionFamilyAndFriends/selectionOptionA/infoSectionA4/infoSectionA4a/create"}>
                                    4a: Name fourth person
                                </InfoSectionName>
                            </li>
                            <li>
                                <InfoSectionName
                                    href={"/selectionFamilyAndFriends/selectionOptionA/infoSectionA4/infoSectionA4b/create"}>
                                    4b: Address fourth person
                                </InfoSectionName>
                            </li>
                            <li>
                                <InfoSectionName
                                    href={"/selectionFamilyAndFriends/selectionOptionA/infoSectionA4/infoSectionA4c/create"}>
                                    4c: Other info fourth person
                                </InfoSectionName>
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