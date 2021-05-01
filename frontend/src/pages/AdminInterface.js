import React, { Fragment } from 'react';

class AdminInterface extends React.Component {
    render() {
        return (
            <>
<table>
      <tr className="top-heading">
        <th>SELECT PAGE</th>
        <th colspan="3" className="top-heading">MANAGE</th>
      </tr>

      <tr>
        <td className="heading">HOME</td>
        <td><a href="Add.html">ADD</a></td>
        <td><a href="Edit.html">EDIT</a></td>
        <td><a href="Delete.html">DELETE</a></td>
      </tr>

      <tr>
        <td>ABOUT</td>
        <td><a href="Add.html">ADD</a></td>
        <td><a href="Edit.html">EDIT</a></td>
        <td><a href="Delete.html">DELETE</a></td>
      </tr>

      <tr>
        <td>NICOLE'S CV</td>
        <td><a href="Add.html">ADD</a></td>
        <td><a href="Edit.html">EDIT</a></td>
        <td><a href="Delete.html">DELETE</a></td>
      </tr>

      <tr>
        <td>PORTFOLIO</td>
        <td><a href="Add.html">ADD</a></td>
        <td><a href="Edit.html">EDIT</a></td>
        <td><a href="Delete.html">DELETE</a></td>
      </tr>

      <tr>
        <td>CONTACT</td>
        <td><a href="Add.html">ADD</a></td>
        <td><a href="Edit.html">EDIT</a></td>
        <td><a href="Delete.html">DELETE</a></td>
      </tr>

    </table>

</>
        )
    }
}

export default AdminInterface;