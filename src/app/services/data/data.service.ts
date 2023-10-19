import axios, { AxiosResponse } from "axios";

async function fetchDiscourseData() {
  const url = "https://meta.discourse.org/latest.json";

  try {
    const response: AxiosResponse = await axios.get(url);
    console.log("Fetched Discourse data successfully!");
    console.log(response.data); // Print the fetched data
  } catch (error) {
    console.error("Error fetching Discourse data:", error);
  }
}

// Call the function to fetch the data
fetchDiscourseData();
