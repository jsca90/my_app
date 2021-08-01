import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { dbService } from "../fbase";

const useData = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        dbService.collection("Lists").onSnapshot((snapshot) => {
            const item = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setItems([...item]);
        });
        return () => {
            setItems("");
        };
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
        field: "kind",
        headerName: "구분",
        editable: false,
        headerAlign: "center",
        flex: 1,
    },
    {
        field: "Code",
        headerName: "코드번호",
        editable: false,
        headerAlign: "center",
        flex: 1,
    },
    {
        field: "department",
        headerName: "부서명",
        editable: false,
        flex: 1,
        headerAlign: "center",
    },
    {
        field: "locationOfUse",
        headerName: "사용위치",
        editable: false,
        flex: 1,
        headerAlign: "center",
    },
    {
        field: "yearOfManufacture",
        headerName: "제조년월",
        editable: false,
        flex: 1,
        headerAlign: "center",
    },
    {
        field: "Manufacturer",
        headerName: "제조사",
        editable: false,
        flex: 1,
        headerAlign: "center",
    },
    {
        field: "ModelName",
        headerName: "모델명",
        editable: false,
        flex: 1,
        headerAlign: "center",
    },
    {
        field: "user",
        headerName: "사용자",
        editable: false,
        flex: 1,
        headerAlign: "center",
    },
];

export default function AllData() {
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
                    params.colDef.align = "center";
                }}
            />
        </div>
    );
}
