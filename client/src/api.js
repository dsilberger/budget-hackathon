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
  },
  Analytics: {
    getSummary: () => {
      const config = {
        method: "GET",
        url: "/analytics/summary"
      };

      const mock = {
        "2019-01": {
          expByCat: [
            { category: "Gym", amount: 15000 },
            { category: "Restaurants", amount: 35000 },
            { category: "Shopping", amount: 22500 },
            { category: "Groceries", amount: 30000 },
            { category: "Other", amount: 78733 }
          ],
          totalExp: 359000,
          income: 460000,
          delta: 101000
        },
        "2019-02": {
          expByCat: [
            { category: "Gym", amount: 15000 },
            { category: "Restaurants", amount: 35000 },
            { category: "Shopping", amount: 22500 },
            { category: "Groceries", amount: 30000 },
            { category: "Other", amount: 78733 }
          ],
          totalExp: 359000,
          income: 460000,
          delta: -9500
        }
      };

      return axios(config)
        .then(({ data }) => data)
        .catch(err => mock);
    }
  }
};

export default api;
