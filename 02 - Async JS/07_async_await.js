
// async
const getUSData = async () => {
    const response = await fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population');

    // error case
    if (response.status !== 200) {
        throw new Error('cannot fetch the data');
    }

    const json = await response.json()
    return json;
}

// run
getUSData()
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })