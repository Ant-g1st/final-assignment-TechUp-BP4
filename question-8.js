// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
const getReponse = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    try {
      const response = await fetch(url);
    //   console.log(response)
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const result = await response.json();
    //   console.log(result);
      return result
    } catch (error) {
      console.error(error.message);
    }
}
const res = await getReponse()
// console.log(res,'res')
let newUsers = res.map((user) => user.name)
console.log(newUsers)
// console.log(response)