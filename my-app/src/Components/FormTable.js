import { Component } from "react";

class FormTable extends Component {
  render() {
    const { formList } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {formList.map((item, index) => (
            <tr key={`${item.emil}-${index}`}>
              <td>{index + 1}</td>
              <td>{item.fname}</td>
              <td>{item.lname}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default FormTable;
