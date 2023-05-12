

export default function StaticMethods() {
  return (
    <div className="content-container">
      <h1>Static Methods</h1>
      <table>
        <thead>
          <tr>
            <th>Method</th>
            <th>Return Type</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>add(A, B)</td>
            <td>Matrix</td>
          </tr>
          <tr>
            <td>subtract(A, B)</td>
            <td>Matrix</td>
          </tr>
          <tr>
            <td>scalarMultiply(A, scalar)</td>
            <td>Matrix</td>
          </tr>
          <tr>
            <td>scalarDivide(A, scalar)</td>
            <td>Matrix</td>
          </tr>
          <tr>
            <td>multiply(A, B)</td>
            <td>Matrix</td>
          </tr>
          <tr>
            <td>crossMultiply(A, B)</td>
            <td>Matrix</td>
          </tr>
          <tr>
            <td>rref(A)</td>
            <td>Matrix</td>
          </tr>
          <tr>
            <td>log(A)</td>
            <td>void</td>
          </tr>
        </tbody>
      </table>
      <div className="block">
        <h2>Matrix.add(A, B)</h2>
        <p>adds each element of the matrix A to the corresponding element of matrix B. It then returns a new matrix containing the sums obtained. (Matrix A and B must have the same dimensions)</p>
      </div>
      <div className="block">
        <h2>Matrix.subract(A, B)</h2>
        <p>subracts each element of matrix B from the corresponding element of matrix A. It then returns a new matrix containing the differences obtained. (Matrix A and B must have the same dimensions)</p>
      </div>
      <div className="block">
        <h2>Matrix.scalarMultiply(A, scalar)</h2>
        <p>multiplies each element of the matrix A by the scalar. It then returns a new matrix containing the products.</p>
      </div>
      <div className="block">
        <h2>Matrix.scalarDivide(A, scalar)</h2>
        <p>divides each element of the matrix A by the scalar. It then returns a new matrix containing the quotients.</p>
      </div>
      <div className="block">
        <h2>Matrix.multiply(A, B)</h2>
        <p>returns the dot product of A and B.</p>
      </div>
      <div className="block">
        <h2>Matrix.crossMultiply(A, B)</h2>
        <p>A and B must be of shape [1, 3], a.k.a. a 3d vector. It returns the cross product of the two vectors.</p>
      </div>
      <div className="block">
        <h2>Matrix.rref(A)</h2>
        <p>returns the Reduce Row Echelon Form of the matrix A. (Matrix A must be an augmented matrix)</p>
      </div>
      <div className="block">
        <h2>Matrix.log(A)</h2>
        <p>A neat logger for everything involving this library. It logs matrices in a colored hipstery way.</p>
      </div>
    </div>
  )
}