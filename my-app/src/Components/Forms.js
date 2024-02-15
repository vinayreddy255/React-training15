import { Component } from "react";
import FormTable from "./FormTable";
import "./Forms.style.css";
class Forms extends Component {
  constructor() {
    super();
    this.state = {
      form: { fname: "", lname: "", email: "", phone: "" },
      formList: [],
    };
  }

  formHandler = (event) => {
    const { name, value } = event.target;
    this.setState({
      ...this.state,
      form: { ...this.state.form, [name]: value },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { form } = this.state;
    if (form.fname.length <= 0 || form.email.length <= 0) {
      alert("please fill all mandtory fileds...");
      return;
    } else {
      const newFormData = { ...this.state };
      newFormData.formList.push(this.state.form);
      newFormData.form = { fname: "", lname: "", email: "", phone: "" };
      this.setState(newFormData);
    }
  };
  render() {
    return (
      <div>
        <h1>Form Handling</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              First Name <span className="mand">*</span>
            </label>
            <span>
              <input
                type="text"
                name="fname"
                onChange={this.formHandler}
                value={this.state.form.fname}
              />
            </span>
          </div>
          <div>
            <label>Last Name</label>
            <span>
              <input
                type="text"
                name="lname"
                onChange={this.formHandler}
                value={this.state.form.lname}
              />
            </span>
          </div>
          <div>
            <label>
              Email <span className="mand">*</span>
            </label>
            <span>
              <input
                type="text"
                name="email"
                onChange={this.formHandler}
                value={this.state.form.email}
              />
            </span>
          </div>
          <div>
            <label>Phone:</label>
            <span>
              <input
                type="number"
                name="phone"
                onChange={this.formHandler}
                value={this.state.form.phone}
              />
            </span>
          </div>
          <div>
            <input type="submit" value={"submit"} />
          </div>
        </form>
        {this.state.formList.length > 0 && (
          <FormTable formList={this.state.formList} />
        )}
      </div>
    );
  }
}
export default Forms;
