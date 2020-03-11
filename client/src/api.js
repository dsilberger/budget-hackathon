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
  handleUserSubmit: data => {
    return axios.post("/user", data);
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
  }
};

export default api;
