import React, {useEffect, useState} from "react";
import BootstrapTable from "react-bootstrap-table-next";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css'
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import filterFactory, {textFilter} from "react-bootstrap-table2-filter";
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css'
import ToolkitProvider, {CSVExport} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min'

function EmplNarFilter() {
    const [userList, setUserList] = useState([]);

    const {ExportCSVButton} = CSVExport;

    const MyExportCSV = (props) => {
        const handleClick = () => {
            props.onExport();
        };
        return (
            <div>
                <ExportCSVButton className="btn btn-success" onClick={handleClick}>Export to CSV</ExportCSVButton>
            </div>
        )
    }

    const columns = [
        {dataField: 'lastname', sort: true, filter: textFilter(), text: 'lastname',  align: 'center', headerAlign: 'center',headerStyle: { width: '130px'},style:{wordBreak: 'break-all'} },
        {dataField: 'firstname', sort: true, filter: textFilter(), text: 'firstname',  align: 'center', headerAlign: 'center',headerStyle: { width: '130px'},style:{wordBreak: 'break-all'} },
        {dataField: 'uchastka', sort: true, filter: textFilter(), text: 'uchastka',  align: 'center', headerAlign: 'center',headerStyle: { width: '130px'},style:{wordBreak: 'break-all'} },
        {dataField: 'pravila', sort: true, filter: textFilter(), text: 'pravila',  align: 'center', headerAlign: 'center',headerStyle: { width: '130px'},style:{wordBreak: 'break-all'} },
        {dataField: 'narushenie', sort: true, filter: textFilter(), text: 'narushenie',  align: 'center', headerAlign: 'center',headerStyle: { width: '130px'},style:{wordBreak: 'break-all'} },
        {dataField: 'predlojenie', sort: true, filter: textFilter(), text: 'predlojenie',  align: 'center', headerAlign: 'center',headerStyle: { width: '130px' },style:{wordBreak: 'break-all'} },
        {dataField: 'imgurl', sort: true, filter: textFilter(), text: 'imgurl',  align: 'center', headerAlign: 'center',headerStyle: { width: '150px'},style:{wordBreak: 'break-all'} },
    ]

    const pagination = paginationFactory({
        page: 1,
        sizePerPage: 5,
        lastPageText: '>>',
        firstPageText: '<<',
        nextPageText: '>',
        prePageText: '<',
        showTotal: true,
        alwaysShowAllBtns: true,
        onPageChange: function (page, sizePerPage) {
            console.log('page', page);
            console.log('SizePerPageList', sizePerPage)
        },
        onSizePerPageChange: function (page, sizePerPage) {
            console.log('page', page);
            console.log('sizePerPageList', sizePerPage)
        }
    });

    useEffect(() => {
        fetch(('http://10.45.180.16:4041/api'))
            .then(response => response.json())
            .then(result => setUserList(result))
            .catch(error => console.log(error));
    }, [])

    return (
        <div >


                    <ToolkitProvider
                        bootstrap4
                        keyField='id'
                        data={userList}
                        columns={columns}
                        exportCSV

                    >
                        {
                            props => (
                                <React.Fragment>
                                    <MyExportCSV{...props.csvProps}/>
                                    <BootstrapTable
                                        // bootstrap4
                                        // keyField='id'
                                        // data={userList}
                                        // columns={columns}
                                        pagination={pagination}
                                        filter={filterFactory()}
                                        {...props.baseProps}


                                    />


                                </React.Fragment>

                            )
                        }
                    </ToolkitProvider>
    </div>
    )
}

export default EmplNarFilter;