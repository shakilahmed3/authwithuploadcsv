import React, { useState, ChangeEvent } from "react";
import * as XLSX from "xlsx";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/react";

interface IData {
    key: number;
    name: string;
    email: string;
    mobile: string;
    nid: string;
    dob: string;
}

export default function Excellsheet() {
    const [items, setItems] = useState<IData[]>([]);

    const readExcel = (file: File) => {
        const promise = new Promise<IData[]>((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsArrayBuffer(file);
            fileReader.onload = (e: ProgressEvent<FileReader>) => {
                const bufferArray = e.target?.result as ArrayBuffer;
                const wb = XLSX.read(bufferArray, {
                    type: "buffer"
                });
                const wsname = wb.SheetNames[0];
                const ws = wb.Sheets[wsname];
                const data = XLSX.utils.sheet_to_json<IData>(ws);

                // Add a unique key to each item
                const dataWithKey = data.map((item, index) => ({ ...item, key: index }));

                resolve(dataWithKey);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        });

        promise.then((d) => {
            setItems(d);
            console.log(d);
        });
    };


    const columns = [
        {
            key: "Name",
            label: "NAME",
        },
        {
            key: "Email",
            label: "Email",
        },
        {
            key: "Mobile",
            label: "Mobile",
        },
        {
            key: "NID",
            label: "NID",
        },
        {
            key: "DOB",
            label: "DOB",
        },
    ];

    return (
        <div>
            <h1 className="mb-10 mt-3 font-bold text-center">Upload Excellsheet</h1>
            <div className="text-center">
                <input
                    type="file"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        const file = e.target.files && e.target.files[0];
                        if (file) {
                            readExcel(file);
                        }
                    }}
                />
            </div>
            <br />
            <br />
            <br />
            <Table aria-label="Dynamic Excel Table">
                <TableHeader columns={columns}>
                    {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
                </TableHeader>
                <TableBody items={items}>
                    {(item) => (
                        <TableRow key={item.key}>
                            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}
