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
        field: "ipaddr",
        headerName: "아이피주소",
        headerAlign: "center",
        flex: 1,
        editable: true,
    },
    {
        field: "locationOfUse",
        headerName: "사용 위치",
        headerAlign: "center",
        flex: 1,
        editable: true,
    },
    {
        field: "user",
        headerName: "사용자명",
        flex: 1,
        headerAlign: "center",
        editable: true,
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

export default function IpData() {
    const rows = useData();
    const [pageSize, setPageSize] = useState(15);
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
                rowsPerPageOptions={[15, 30, 45, 60, 75, 100]}
                pagination
                autoHeight
                getCellClassName={(params) => {
                    params.colDef.align = "center";
                }}
            // isCellEditable={(params) => console.log(params.row.id)}

            />
        </div>
    );
}
