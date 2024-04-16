import React, { Component } from "react";
import { connect } from "react-redux";
import { actDeleteUser, actEditUser } from "../store/action"

class UserItem extends Component {
  render() {
    const { user } = this.props;
    return (
                <tr>
                  <td>{user.maSV}</td>
                  <td>{user.hoTen}</td>
                  <td>{user.soDienThoai}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      onClick={() => this.props.deleteUser(user.maSV)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => this.props.editUser(user)}
                      className="btn btn-info mx-3"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
  }
}

// mapDispatchToProps: gửi action lên reducer
const mapDispatchToProps = (dispatch) => {
  return {
    // key: value
    deleteUser: (id) => {
      dispatch(actDeleteUser(id));
    },
    editUser: (user) => {
      dispatch(actEditUser(user));
    },
  };
};

export default connect(null, mapDispatchToProps)(UserItem);