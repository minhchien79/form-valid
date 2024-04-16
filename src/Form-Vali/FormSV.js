import React, { Component } from "react";
import { connect } from "react-redux";
import { actSubmitUser } from "../store/action";

class FormSV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maSV: "",
      hoTen: "",
      soDienThoai: "",
      email: "",
      errors: {},
    };
  }

  handleOnchange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  validateForm = (values) => {
    let errors = {};
    if (!values.maSV) {
      errors.maSV = "Mã SV không được để trống";
    }
    if (!values.hoTen) {
      errors.hoTen = "Họ tên không được để trống";
    }
    if (!values.soDienThoai) {
      errors.soDienThoai = "Số điện thoại không được để trống";
    } else if (!/^[0-9]+$/.test(values.soDienThoai)) {
      errors.soDienThoai = "Số điện thoại không hợp lệ";
    }
    if (!values.email) {
      errors.email = "Email không được để trống";
    } else if (
      !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(values.email)
    ) {
      errors.email = "Email không hợp lệ";
    }
    return errors;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const errors = this.validateForm(this.state);
    if (Object.keys(errors).length === 0) {
      this.props.submitUser(this.state);
      // Reset form state
      this.setState({
        maSV: "",
        hoTen: "",
        soDienThoai: "",
        email: "",
        errors: {} 
      });
    } else {
      this.setState({ errors }); 
    }
  };
  
  componentDidUpdate(prevProps) {
    const { editUser } = this.props;
    if (editUser !== prevProps.editUser) {
      if (editUser) {
        this.setState({
          maSV: editUser.maSV,
          hoTen: editUser.hoTen,
          soDienThoai: editUser.soDienThoai,
          email: editUser.email,
        });
      } else {
        this.setState({
          maSV: "",
          hoTen: "",
          soDienThoai: "",
          email: "",
        });
      }
    }
  }

  render() {
    return (
      <div className="card text-left">
        <div className="card-header bg-dark text-white">
          <h3>Thông tin sinh viên</h3>
        </div>
        <div className="card-body">
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="form-group col-6">
                <span>Mã SV</span>
                <input
                  className="form-control"
                  name="maSV"
                  value={this.state.maSV}
                  onChange={this.handleOnchange}
                />
                <p className="text-danger">{this.state.errors.maSV}</p>
              </div>
              <div className="form-group col-6">
                <span>Họ Tên</span>
                <input
                  type="text"
                  className="form-control"
                  name="hoTen"
                  value={this.state.hoTen}
                  onChange={this.handleOnchange}
                />
                <p className="text-danger">{this.state.errors.hoTen}</p>
              </div>
            </div>
            <div className="row">
              <div className="form-group col-6">
                <span>Số Điện Thoại</span>
                <input
                  type="text"
                  className="form-control"
                  name="soDienThoai"
                  value={this.state.soDienThoai}
                  onChange={this.handleOnchange}
                />
                <p className="text-danger">{this.state.errors.soDienThoai}</p>
              </div>
              <div className="form-group col-6">
                <span>Email</span>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleOnchange}
                />
                <p className="text-danger">{this.state.errors.email}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-right">
                <button type="submit" className="btn btn-success">
                  {this.props.editUser ? "Cập nhật" : "Thêm sinh viên"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    editUser: state.userReducer.editUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitUser: (user) => {
      dispatch(actSubmitUser(user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormSV);
