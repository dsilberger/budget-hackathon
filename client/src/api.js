import axios from "axios";

const api = {
  fetchAllCategories: () => {
    const config = { url: "/categories" };
    return axios(config).then(({ data: categoryList }) => categoryList);
  },
  fetchAllExpenses: () => {
    const config = { url: "/expenses" };
    return axios(config).then(({ data: expenseList }) => expenseList);
  },
  handleUserSubmit: ({ name, familySize, income }) => {
    const config = {
      method: "POST",
      url: "/user",
      data: {
        name: name,
        familySize: familySize,
        income: income
      }
    };
    return axios(config).then(({ data }) => data);
  },
  handleUserUpdate: userObj => {
    const config = {
      method: "PUT",
      url: "/user",
      data: userObj
    };

    return axios(config).then(({ data }) => data);
  },
  postExpense: ({ date, amount, categoryId, description, accountName }) => {
    const config = {
      method: "POST",
      url: "/expenses",
      data: {
        date,
        description,
        categoryId,
        accountName,
        amount100: amount * 100
      }
    };
    return axios(config).then(({ data }) => data);
  },
  fetchUserProfile: () => {
    const config = {
      method: "GET",
      url: "/user"
    };

    return axios(config).then(({ data }) => data);
  }
};

export default api;
