import { Component, OnInit } from '@angular/core';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit{
    public tableData1: TableData;
    public tableData2: TableData;
    ngOnInit(){
        this.tableData1 = {
            headerRow: [ 'ID', 'Name', 'Department', 'Proccessed oredrs', 'Income'],
            dataRows: [
                ['1', 'Hoang Duy', 'CR/APA2', '565', '$36,738'],
                ['2', ' John Koecher', 'CR/AEV1', '435', '$23,789'],
                ['3', 'Mohammed ElSeify', 'CR/AP3', '367', '$56,142'],
                ['4', 'Liza Belova', 'CR/APA3', '323', '$38,735'],
                ['5', 'Laura Goldman', 'CR/APA1', '311', '$63,542'],
                ['6', 'Sven Dose', 'CR/AEV3', '298', '$78,615']
            ]
        };
      
    }
}
