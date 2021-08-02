import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { CSVLink } from "react-csv";
import { dbService } from "../fbase";
import Button from "@material-ui/core/Button";

const useData = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        dbService
            .collection("Lists")
            .orderBy("user", "asc")
            .onSnapshot((snapshot) => {
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

const ExcelDownload = ({ rows, columns }) => {
    const headers = [
        { label: columns[1].headerName, key: columns[1].field },
        { label: columns[2].headerName, key: columns[2].field },
        { label: columns[3].headerName, key: columns[3].field },
        { label: columns[4].headerName, key: columns[4].field },
        { label: columns[5].headerName, key: columns[5].field },
        { label: columns[6].headerName, key: columns[6].field },
        { label: columns[7].headerName, key: columns[7].field },
        { label: columns[8].headerName, key: columns[8].field },
    ];
    return (
        <Button>
            <CSVLink
                data={rows}
                headers={headers}
                filename="pcinfo.csv"
                target="_blank">
                CSV 다운로드
            </CSVLink>
        </Button>
    );
};

export default function AllData() {
    const rows = useData();
    const [pageSize, setPageSize] = useState(15);
    const handlePageSizeChange = (params) => {
        console.log(params);
        setPageSize(params.pageSize);
    };
    return (
        <div
            style={{
                width: "100%",
            }}>
            <ExcelDownload rows={rows} columns={columns} />

            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={pageSize}
                onPageSizeChange={handlePageSizeChange}
                rowsPerPageOptions={[15, 30, 45, 60, 75, 100]}
                pagination
                autoHeight
                getCellClassName={(params) => {
                    params.colDef.align = "center";
                }}
            />
        </div>
    );
}
