import { InfoSectionName } from '@/components/selections/only-single-text-and-link-fields/InfoSectionName'

export function InfoSelectionNames() {

    return (

        <> 
            <div className='row h-25'>
                <div className='col-sm-6 d-flex flex-column'>
                    <InfoSectionName
                        href={"/selectionFamilyAndFriends/selectionOptionA/infoSection1a"}>
                        1a: Name first person
                    </InfoSectionName>
                    <InfoSectionName
                        href={"/selectionFamilyAndFriends/selectionOptionA/infoSection1b"}>
                        1b: Adress first person
                    </InfoSectionName>
                    <InfoSectionName
                        href={"/selectionFamilyAndFriends/selectionOptionA/infoSection1c"}>
                        1c: Other info first person
                    </InfoSectionName>
                </div>
                <div className='col-sm-6 d-flex flex-column'>
                    <InfoSectionName
                        href={"/selectionFamilyAndFriends/selectionOptionA/infoSection2a"}>
                        2a: Name first person
                    </InfoSectionName>
                    <InfoSectionName
                        href={"/selectionFamilyAndFriends/selectionOptionA/infoSection2b"}>
                        2b: Adress first person
                    </InfoSectionName>
                    <InfoSectionName
                        href={"/selectionFamilyAndFriends/selectionOptionA/infoSection2c"}>
                        2c: Other info first person
                    </InfoSectionName>
                </div>
            </div>
            <div className='row h-25'>
                <div className='col-sm-6 d-flex flex-column'>
                    <InfoSectionName
                        href={"/selectionFamilyAndFriends/selectionOptionA/infoSection3a"}>
                        3a: Name first person
                    </InfoSectionName>
                    <InfoSectionName
                        href={"/selectionFamilyAndFriends/selectionOptionA/infoSection3b"}>
                        3b: Adress first person
                    </InfoSectionName>
                    <InfoSectionName
                        href={"/selectionFamilyAndFriends/selectionOptionA/infoSection3c"}>
                        3c: Other info first person
                    </InfoSectionName>
                </div>
                <div className='col-sm-6 d-flex flex-column'>
                    <InfoSectionName
                        href={"/selectionFamilyAndFriends/selectionOptionA/infoSection4a"}>
                        4a: Name first person
                    </InfoSectionName>
                    <InfoSectionName
                        href={"/selectionFamilyAndFriends/selectionOptionA/infoSection4b"}>
                        4b: Adress first person
                    </InfoSectionName>
                    <InfoSectionName
                        href={"/selectionFamilyAndFriends/selectionOptionA/infoSection4c"}>
                        4c: Other info first person
                    </InfoSectionName>
                </div>
            </div>
        </>
    )
}