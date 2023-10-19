import axios, { AxiosResponse } from "axios";

async function fetchDiscourseData() {
  //   const url = "https://meta.discourse.org/latest.json";
  const url = "http://localhost:4200/latest.json";

  try {
    const response: AxiosResponse = await axios.get(url);
    console.log("Fetched Discourse data successfully!");
    console.log(response.data); // Print the fetched data
    return response;
  } catch (error) {
    console.error("Error fetching Discourse data:", error);
  }
}
export const useFetchDiscourseData = () => {
  const response = fetchDiscourseData();
  return response;
};
// Call the function to fetch the data
