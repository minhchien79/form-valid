import React, { Component } from "react";
import { connect } from "react-redux";
import UserItem from "./UserItem";

class TableSV extends Component {
  renderListUsers = () => {
    const { users, keyword } = this.props;
    const usersFilter = keyword
      ? users.filter(
          (user) =>
            user.hoTen.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
        )
      : users;

    return usersFilter?.map((user) => {
      return <UserItem key={user.maSV} user={user} />;
    });
  };

  render() {
    return (
      <table className="table">
        <thead>
          <tr className="bg-dark text-white">
            <th>Mã SV</th>
            <th>Họ Tên</th>
            <th>Số Điện Thoại</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{this.renderListUsers()}</tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.userReducer.listUsers,
    keyword: state.userReducer.keyword,
  };
};

export default connect(mapStateToProps)(TableSV);
