import React, { useState, useEffect } from "react";
import {
    DataGrid, GridToolbarContainer,
    GridToolbarExport
} from "@material-ui/data-grid";
import { dbService } from "../fbase";

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
    {
        field: "id",
        headerName: "id",
        hide: "ture",
        headerAlign: "center",
        flex: 1,
    },
    {
        field: "ipaddr",
        headerName: "아이피주소",
        editable: false,
        headerAlign: "center",
        flex: 1,
    },
    {
        field: "locationOfUse",
        headerName: "사용 위치",
        editable: false,
        headerAlign: "center",
        flex: 1,
    },
    {
        field: "user",
        headerName: "사용자명",
        // type: 'number',
        editable: false,
        flex: 1,
        headerAlign: "center",
    },
];

function CustomToolbar() {
    return (
        <GridToolbarContainer csvOptions={{ allColumns: true, utf8WithBom: true }} >
            <GridToolbarExport />
        </GridToolbarContainer>
    );
}

export default function Data() {
    const rows = useData();
    const [pageSize, setPageSize] = useState(10);
    const handlePageSizeChange = (params) => {
        setPageSize(params.pageSize);
    };
    return (
        <div
            style={{
                width: "100%",
            }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={pageSize}
                onPageSizeChange={handlePageSizeChange}
                rowsPerPageOptions={[10, 20, 30, 40, 50]}
                pagination
                autoHeight
                getCellClassName={(params) => {
                    params.colDef.align = "center"
                }}
                components={{
                    Toolbar: CustomToolbar,
                }}
            />
        </div>
    );
}
