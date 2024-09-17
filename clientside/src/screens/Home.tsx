import React, { useEffect, useRef, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Paginator } from 'primereact/paginator';
import { OverlayPanel } from 'primereact/overlaypanel';
import 'primereact/resources/themes/saga-blue/theme.css';  // or any other theme
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './Home.css';
import { Button } from 'primereact/button';
import { FaAngleDown } from "react-icons/fa6";

// Define types for the data
interface Product {
    title: string;
    place_of_origin: string;
    artist_display: string;
    inscriptions: string;
    date_start: string;
    date_end: string;
}
const Home: React.FC = () => {
    const [data, setData] = useState<Product[]>([]);
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
    const [currentpage, setCurrentpage] = useState<number>(1);
    const [items, setItems] = useState<number>(0);
    const op = useRef<OverlayPanel>(null);

    const onPageChange = async (event: { page: number }) => {
        setCurrentpage(event.page + 1);
        await receiveData(event.page + 1); // Update data on page change
    };

    const receiveData = async (page: number) => {
        const response = await fetch(`https://artwork-dtig.onrender.com/getdata?page=${page}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();
        if (json.success) {
            setData(json.data);
        } else {
            alert("Something went wrong");
        }
    };

    const selectRows = async (items: number) => {
        const response = await fetch(`https://artwork-dtig.onrender.com/getitems?page=${currentpage}&items=${items}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();
        if (json.success) {
            setSelectedProducts(prev => {
                const newItems = json.data; // New items to add
                return [...prev, ...newItems]; // Combine with previous items
            });
        } else {
            alert("Something went wrong");
        }
    }

    useEffect(() => {
        receiveData(1);
    }, []);

    const headerTemplate = () => {
        return (
            <>
                <FaAngleDown className='inline' onClick={(e) => op.current?.toggle(e)} />
                <OverlayPanel ref={op}>
                    <input
                        type="number"
                        className='bg-slate-200 w-24'
                        min={0}
                        onChange={(e) => setItems(Number(e.target.value))}
                        value={items}
                        aria-describedby="helpId"
                        placeholder=""
                    />
                    <button
                        className="bg-blue-400 px-2 text-white py-[1.2px] rounded-sm"
                        onClick={(e) => {
                            selectRows(items);
                            op.current?.toggle(e);
                        }}
                    >
                        Select
                    </button>
                </OverlayPanel>
                <h1 className='inline ms-2'>Title</h1>
            </>
        );
    };

    return (
        <>
            <DataTable
                value={data}
                selectionMode="checkbox"
                selection={selectedProducts}
                onSelectionChange={(e) => {
                    setSelectedProducts(e.value as Product[]);
                }}
                dataKey="title"
                tableStyle={{ minWidth: '50rem' }}
                className='w-[80%] mx-auto px-4 py-4 mt-10 bg-slate-500'
                rowClassName='bg-slate-300'
            >
                <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
                <Column field="title" header={headerTemplate()} />
                <Column field="place_of_origin" header="Origin" />
                <Column field="artist_display" header="Artist Display" />
                <Column field="inscriptions" header="Inscriptions" />
                <Column field="date_start" header="Start" />
                <Column field="date_end" header="End" />
            </DataTable>

            <Paginator
                first={0}
                rows={6}
                totalRecords={30} // Ensure this reflects the actual total number of records
                onPageChange={onPageChange}
            />
        </>
    )
}

export default Home