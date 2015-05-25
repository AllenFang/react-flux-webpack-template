function json(response) {
  return response.json();
}

var host = "http://localhost:3000";

export default {
  getAllTodos(success, error){
    let f = fetch(host+"/");
    f.then(json)
      .then(success)
      .catch(error);
  },

  addTodo(todoName, success, error){
    let f = fetch(host+"/", {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      method: 'post',
      body: JSON.stringify({
        name: todoName
      })
    });
    f.then(json)
      .then(success)
      .catch(error);
  }

};
