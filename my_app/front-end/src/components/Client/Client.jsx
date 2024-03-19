import './Client.css'
import DataTable from 'react-data-table-component'
import { IoSearchSharp } from "react-icons/io5";
import { GrDocumentUpdate } from "react-icons/gr";
import { MdOutlineMonetizationOn } from "react-icons/md";
const Client = () => {
    const columns = [
        {
            name: 'Code',
            selector: row => row.code
        },
        {
            name: 'Name',
            selector: row => row.name
        },
        {
            name: 'Email',
            selector: row => row.email
        },
        {
            name: 'Num',
            selector: row => row.num
        }
    ];
    const data = [
        {
            id: 1,
            code: 111,
            name: 'imen',
            email: 'imen@gmail.com',
            num: '12334445'
        },
        {
            id: 1,
            code: 111,
            name: 'imen',
            email: "imen@gmail.com",
            num: '12334445'
        },
    ]
    return (
        <>
            <div className="inline-block">
                <h1 className="text-[--light-color] text-3xl m-4">Client</h1>
                <div className='Search'>
                    <input
                        type="text"
                        placeholder='Search...'
                        className='' />
                    <a href="#" className=''>
                        <IoSearchSharp className='text-blue-500' />
                    </a>
                </div>

                <button className='text-xs  py-1 px-2 border-none ml-1 rounded-md bg-[--card-color] my-3 ml-80  hover:bg-[--light-color]'>
                    <a href="/AddClient" className='font-semibold'>Ajouter +</a>
                </button>

                <table className="table ml-5 bg-[--card-color]">
                    <thead>
                        <tr>
                            <th scope="col" className='border border-solid border-light-color'>id</th>
                            <th scope="col" className='border border-solid border-light-color'>Code</th>
                            <th scope="col" className='border border-solid border-light-color'>Nom</th>
                            <th scope="col" className='border border-solid border-light-color'>Email</th>
                            <th scope="col" className='border border-solid border-light-color'>Address</th>
                            <th scope="col" className='border border-solid border-light-color'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <th scope="row">1</th>
                            <td>0000</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>
                                <button className='border-none ml-1 px-1 py-1'><a href="#"><GrDocumentUpdate /></a></button>
                                <button className='border-none ml-1 px-1 py-1'><a href="#"><MdOutlineMonetizationOn /></a></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>



            {/* <div className='table'>
                <DataTable className='main-table'
                    columns={columns}
                    data={data}
                >
                </DataTable>
            </div> */}
        </>
    )
}

export default Client