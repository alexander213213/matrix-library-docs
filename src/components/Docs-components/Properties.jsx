

export default function Properties() {
  return (
    <div className="content-container">
      <h1>Properties</h1>
      <table>
        <thead>
          <tr>
            <th>Property</th>
            <th>Data Type/Structure</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>shape</td>
            <td>arr[rows, columns]</td>
          </tr>
          <tr>
            <td>isSquare</td>
            <td>bool</td>
          </tr>
          <tr>
            <td>__array</td>
            <td>arr[x, y, ...]</td>
          </tr>
          <tr>
            <td>value</td>
            <td>2d arr[[x, ...], [y, ...]]</td>
          </tr>
          <tr>
            <td>length</td>
            <td>int</td>
          </tr>
          <tr>
            <td>determinant</td>
            <td>float</td>
          </tr>
          <tr>
            <td>inverse</td>
            <td>Matrix</td>
          </tr>
        </tbody>
      </table>
      <div className="block">
        <h2>Matrix.prototype.shape</h2>
        <p>returns the shape of the matrix as an array in the form of [rows, columns].</p>
      </div>
      <div className="block">
        <h2>Matrix.prototype.isSquare</h2>
        <p>returns true if the matrix has the same number of rows and columns and returns false if not.</p>
      </div>
      <div className="block">
        <h2>Matrix.prototype.__array</h2>
        <p>returns the matrix as a 1 dimentional array from left to right and up to down.</p>
      </div>
      <div className="block">
        <h2>Matrix.prototype.value</h2>
        <p>returns the matrix as a 2d array. This is how matrices are normally represented in programming.</p>
      </div>
      <div className="block">
        <h2>Matrix.prototype.length</h2>
        <p>returns the number of elements inside the matrix.</p>
      </div>
      <div className="block">
        <h2>Matrix.prototype.determinant</h2>
        <p>returns the determinant of the matrix.</p>
      </div>
      <div className="block">
        <h2>Matrix.prototype.inverse</h2>
        <p>returns a matrix that is an inverse of the original.</p>
      </div>
    </div>
  )
}