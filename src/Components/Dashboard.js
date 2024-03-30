import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Dashboard() {

  const navigate = useNavigate();
  const handleClick = () => navigate('/list');
  const favList = useSelector(state => {
    console.log(state)
    return state.filter(d => d.fav)
  })

  const tablehtml = (<table>
    <tr>
      <th>ID</th>
      <th>Title</th>
      <th>Image</th>
    </tr>
    {favList.map(row => {
      return (
        <tr>
          <td>{row.id}</td>
          <td>{row.title}</td>
          <td>
            <img
              src={row.url}
              width={60}
              alt='tes' />
          </td>
        </tr>
      )
    })}
  </table>)

  return (
    <div>
      <h1> This is the Dashboard page </h1>
      <button type="button" onClick={handleClick}>View List</button>
      {favList.length > 0 ? tablehtml : ""}

    </div>
  );
}
export default Dashboard; 