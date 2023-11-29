import _ from "lodash";
const Pagination = ({totalRecords, pageSize = 10}) => {
    const pages = Math.ceil(totalRecords / pageSize);
  return (
    <nav>
        <ul className="pagination pagination-lg">
            <li className="page-item"><a className="page-link">قبلی</a></li>
            <li className="page-item"><a className="page-link">بعدی</a></li>
        </ul>
    </nav>
  )
}

export default Pagination
