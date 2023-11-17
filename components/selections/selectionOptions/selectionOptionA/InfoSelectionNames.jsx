import { InfoSectionName } from '@/components/selections/only-single-text-and-link-fields/InfoSectionName'

export function InfoSelectionNames() {

    return (

        <> 
            <div className='row h-25'>
                <div className='col-sm-6 d-flex flex-column'>
                    <InfoSectionName
                        href={"/selectionFamilyAndFriends/SelectionOptionA"}>
                        1a: Name first person
                    </InfoSectionName>
                    <InfoSectionName
                        href={"/selectionFamilyAndFriends/SelectionOptionA"}>
                        1b: Adress first person
                    </InfoSectionName>
                    <InfoSectionName
                        href={"/selectionFamilyAndFriends/SelectionOptionA"}>
                        1c: Other info first person
                    </InfoSectionName>
                </div>
                <div className='col-sm-6 d-flex flex-column'>
                    <InfoSectionName
                        href={"/selectionFamilyAndFriends/SelectionOptionA"}>
                        2a: Name first person
                    </InfoSectionName>
                    <InfoSectionName
                        href={"/selectionFamilyAndFriends/SelectionOptionA"}>
                        2b: Adress first person
                    </InfoSectionName>
                    <InfoSectionName
                        href={"/selectionFamilyAndFriends/SelectionOptionA"}>
                        2c: Other info first person
                    </InfoSectionName>
                </div>
            </div>
            <div className='row h-25'>
                <div className='col-sm-6 d-flex flex-column'>
                    <InfoSectionName
                        href={"/selectionFamilyAndFriends/SelectionOptionA"}>
                        3a: Name first person
                    </InfoSectionName>
                    <InfoSectionName
                        href={"/selectionFamilyAndFriends/SelectionOptionA"}>
                        3b: Adress first person
                    </InfoSectionName>
                    <InfoSectionName
                        href={"/selectionFamilyAndFriends/SelectionOptionA"}>
                        3c: Other info first person
                    </InfoSectionName>
                </div>
                <div className='col-sm-6 d-flex flex-column'>
                    <InfoSectionName
                        href={"/selectionFamilyAndFriends/SelectionOptionA"}>
                        4a: Name first person
                    </InfoSectionName>
                    <InfoSectionName
                        href={"/selectionFamilyAndFriends/SelectionOptionA"}>
                        4b: Adress first person
                    </InfoSectionName>
                    <InfoSectionName
                        href={"/selectionFamilyAndFriends/SelectionOptionA"}>
                        4c: Other info first person
                    </InfoSectionName>
                </div>
            </div>
        </>
    )
}