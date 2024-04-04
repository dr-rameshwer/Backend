// Function to simulate fetching data from an API (returns a Promise)
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { id: 1, name: "Example Data" };
      resolve(data); // Simulating successful data retrieval
      // reject('Error: Unable to fetch data'); // Simulating error
    }, 2000); // Simulating delay of 2 seconds
  });
}

// Async function to fetch and process data
async function processData() {
  try {
    console.log("Fetching data...");
    const data = await fetchData(); // Await the Promise to resolve
    console.log("Data fetched successfully:", data);
    // Process the fetched data
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    // Handle errors if the Promise is rejected
    throw new Error("Unable to fetch data");
  }
}

// Call the async function
(async () => {
  try {
    const result = await processData(); // Await the async function to complete
    console.log("Process completed:", result);
  } catch (error) {
    console.error("Error processing data:", error);
  }
})();
