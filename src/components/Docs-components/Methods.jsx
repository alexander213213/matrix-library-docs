

export default function Methods() {
  return (
    <div className="content-container">
      <h1>Methods</h1>
      <table>
        <thead>
          <tr>
            <th>Method</th>
            <th>Return Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>getRow(index)</td>
            <td>arr</td>
          </tr>
          <tr>
            <td>getColumn(index)</td>
            <td>arr</td>
          </tr>
          <tr>
            <td>reshape([rows, columns])</td>
            <td>void</td>
          </tr>
          <tr>
            <td>insertRow(index, arr)</td>
            <td>Matrix</td>
          </tr>
          <tr>
            <td>insertColumn(index, arr)</td>
            <td>Matrix</td>
          </tr>
          <tr>
            <td>replaceRow(index, arr)</td>
            <td>Matrix</td>
          </tr>
          <tr>
            <td>replaceColumn(index, arr)</td>
            <td>Matrix</td>
          </tr>
        </tbody>
      </table>
      <div className="block">
        <h2>Matrix.prototype.getRow(index)</h2>
        <p>returns an array that contains the elements of the row that have the index that you passed.</p>
      </div>
      <div className="block">
        <h2>Matrix.prototype.getColumn(index)</h2>
        <p>same as getRow but for columns.</p>
      </div>
      <div className="block">
        <h2>Matrix.prototype.reshape([rows, columns])</h2>
        <p>changes the shape of the matrix to the new dimensions that you passed in.</p>
      </div>
      <div className="block">
        <h2>Matrix.prototype.insertRow(index, arr)</h2>
        <p>returns a new matrix that have the passed array in the position of the index that you passed in.This shifts every row after the index down. (The length of the array you pass must fit the shape of the matrix).</p>
      </div>
      <div className="block">
        <h2>Matrix.prototype.insertColumn(index, arr)</h2>
        <p>same as insertRow but for columns.</p>
      </div>
      <div className="block">
        <h2>Matrix.prototype.replaceRow(index, arr)</h2>
        <p>returns a new matrix with the passed array replacing the old row at the index.</p>
      </div>
      <div className="block">
        <h2>Matrix.prototype.replaceColumn(index, arr)</h2>
        <p>same as replaceRow but for columns.</p>
      </div>
    </div>
  )
}