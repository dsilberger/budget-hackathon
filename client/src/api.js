import axios from "axios";

const api = {
  fetchAllCategories: () => {
    const config = { url: "/categories" };
    return axios(config).then(({ data: categoryList }) => categoryList);
  },
  fetchAllExpenses: () => {
    const config = { url: "/expenses" };
    return axios(config).then(({ data: expenseList }) => expenseList);
  }
};

export default api;
