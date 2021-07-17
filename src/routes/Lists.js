import React, { useEffect, useState, useMemo } from "react";
import { dbService } from "../fbase";
import { useTable } from "react-table";

import CssBaseline from "@material-ui/core/CssBaseline";
import MaUTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useData = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        dbService.collection("Lists").onSnapshot((snapshot) => {
            const item = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setItems(item);
        });
        return () => {
            setItems("");
        };
    }, []);

    return items;
};

const Lists = () => {
    const items = useData();
    const data = useMemo(
        () =>
            items.map((item) => ({
                user: item.user,
                teamName: item.teamName,
                department: item.department,
                kind: item.kind,
                locationOfUse: item.locationOfUse,
                Manufacturer: item.Manufacturer,
                yearOfManufacture: item.yearOfManufacture,
                ModelName: item.ModelName,
                Code: item.Code,
            })),
        [items]
    );
    const columns = useMemo(
        () => [
            {
                accessor: "kind",
                Header: "구분",
            },
            {
                accessor: "department",
                Header: "부서명",
            },
            {
                accessor: "teamName",
                Header: "팀명",
            },
            {
                accessor: "user",
                Header: "사용자",
            },
            {
                accessor: "locationOfUse",
                Header: "사용위치",
            },
            {
                accessor: "Manufacturer",
                Header: "제조사",
            },
            {
                accessor: "yearOfManufacture",
                Header: "제조년월",
            },
            {
                accessor: "ModelName",
                Header: "모델명",
            },
            {
                accessor: "Code",
                Header: "코드명",
            },
        ],
        []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({
            columns,
            data,
        });

    return (
        <div>
            <CssBaseline />
            <MaUTable {...getTableProps()}>
                <TableHead>
                    {headerGroups.map((headerGroup) => (
                        <TableRow {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <TableCell {...column.getHeaderProps()}>
                                    {" "}
                                    {column.render("Header")}{" "}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableHead>
                <TableBody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row);
                        return (
                            <TableRow {...row.getRowProps()}>
                                {row.cells.map((cell) => (
                                    <TableCell {...cell.getCellProps()}>
                                        {" "}
                                        {cell.render("Cell")}{" "}
                                    </TableCell>
                                ))}
                            </TableRow>
                        );
                    })}
                </TableBody>
            </MaUTable>
        </div>
    );
};

export default Lists;
