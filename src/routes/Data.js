import React, { useState, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { dbService } from "../fbase";
import { CSVLink } from "react-csv";
import Button from "@material-ui/core/Button";

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
    ];
    return (
        <Button>
            <CSVLink
                data={rows}
                headers={headers}
                filename="ipaddr.csv"
                target="_blank">
                CSV 다운로드
            </CSVLink>
        </Button>
    );
};

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
            <ExcelDownload rows={rows} columns={columns} />
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
