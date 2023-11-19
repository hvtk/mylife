import { NextResponse } from "next/server"
export async function SelectionOptionA1aRead() {
    
        const [err, setErr] = useState(false);

        const getData = async (e) => {
            e.preventDefault();

            const response = await fetch("/api/selections/familyandfriends/selectionoptiona/infosection1a/read", {
                cache: "no-store",
            });

            try {
                if (response) {
                    return new NextResponse("Data from Family And Friends selectionOptionA infoSection1a is fetched from database!", {
                        status: 201,
                    });
                }

                return res.json();

            } catch (err) {
                return new NextResponse("Failed to fetch data", {
                    status: 500,
                });
            }
        }

        const data = await getData();
        
    return (
        <>
            {data.map((item) => (
                <div className='row w-95' key={item.id}>  
                    <div className='row mb-3'>
                        <div className='col-sm-4'>
                                {data.firstName}
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <div className='col-sm-4'>
                            {data.secondName}
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <div className='col-sm-4'>
                                {data.infix}
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <div className='col-sm-4'>
                            {data.lastName}
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}