import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { dbService } from '../fbase';
import { makeStyles } from "@material-ui/core/styles";


const useData = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        dbService
            .collection("IpLists")
            .get()
            .then((res) => {
                const item = res.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setItems([...item]);
            });

    }, []);

    return items;
};

const columns = [
    { field: 'id', headerName: 'id', width: 90, hide: "ture", headerAlign: 'center', },
    {
        field: 'ipaddr',
        headerName: '아이피주소',
        width: 200,
        editable: false,
        headerAlign: 'center',
    },
    {
        field: 'locationOfUse',
        headerName: '사용 위치',
        width: 200,
        editable: false, headerAlign: 'center',
    },
    {
        field: 'user',
        headerName: '사용자명',
        // type: 'number',
        width: 150,
        editable: false,
        headerAlign: 'center',
    },

];






export default function Data() {
    const rows = useData();
    const [pageSize, setPageSize] = useState(10);
    const handlePageSizeChange = (params) => {
        setPageSize(params.pageSize);
    };
    return (
        <div style={{
            width: "100%"
        }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={pageSize}
                onPageSizeChange={handlePageSizeChange}
                rowsPerPageOptions={[10, 20, 30, 40, 50]}
                pagination
                autoHeight

            />
        </div >
    );
}