const getProductsFromAPI = async () => {
    const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

    console.log(fetchPromise);

    fetchPromise.then((response) => {
        console.log(`Received response: ${response.status}`);
    });

    console.log("Started request…");
}

getProductsFromAPI()