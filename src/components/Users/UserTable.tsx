import { IUser } from '../../interfaces/IUser';
import { Link } from 'react-router-dom';

const UserTable = ({ data }: { data: IUser[] | undefined }) => {
  return (
    <table className="table table-hover text-nowrap">
      <thead>
        <tr>
          <th>No</th>
          <th>Fullname</th>
          <th>Company</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data?.map((item, index: number) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.company.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>
                {item.address.street}, {item.address.city}
              </td>
              <td>
                <Link to={`/user/detail/${item.id}`}>
                  <button className="btn btn-success mr-2">Detail</button>
                </Link>
              </td>
            </tr>
          ))}
        {/* <tr>
          <td>219</td>
          <td>Alexander Pierce</td>
          <td>11-7-2014</td>
          <td>
            <span className="tag tag-warning">Pending</span>
          </td>
          <td>
            Bacon ipsum dolor sit amet salami venison chicken flank fatback
            doner.
          </td>
        </tr>
        <tr>
          <td>657</td>
          <td>Bob Doe</td>
          <td>11-7-2014</td>
          <td>
            <span className="tag tag-primary">Approved</span>
          </td>
          <td>
            Bacon ipsum dolor sit amet salami venison chicken flank fatback
            doner.
          </td>
        </tr>
        <tr>
          <td>175</td>
          <td>Mike Doe</td>
          <td>11-7-2014</td>
          <td>
            <span className="tag tag-danger">Denied</span>
          </td>
          <td>
            Bacon ipsum dolor sit amet salami venison chicken flank fatback
            doner.
          </td>
        </tr> */}
      </tbody>
    </table>
  );
};

export default UserTable;
