import React, {useEffect, useState} from "react";
import BootstrapTable from "react-bootstrap-table-next";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css'
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import filterFactory, {textFilter} from "react-bootstrap-table2-filter";
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css'
import ToolkitProvider from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min'


function UchastkaFilter() {
    const [userList, setUserList] = useState([]);
  const MyExportCSV = (props) => {
        const handleClick = () => {
            props.onExport();
        };
        return (
            <div>
                <button className="btn btn-success" onClick={handleClick}>Export to CSV</button>
            </div>
        )
    }

    const columns = [
        {dataField: 'id', text: 'Id', sort: true},
        {dataField: 'name', sort: true, filter: textFilter(), text: 'Name'}
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
        fetch(('http://localhost:4041/api/uchastka'))
            .then(response => response.json())
            .then(result => setUserList(result))
            .catch(error => console.log(error));
    }, [])


    return <div>

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
}

export default UchastkaFilter;