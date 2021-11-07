import "./styles.css";

let data = [];

const del = async (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), ms);
  });
};

const getdata = async (page_number) => {
  const domain = "https://api.unsplash.com/search/photos?query=%22delhi%22&";
  const params = {
    client_id: "gSrLecwsxjIBupazM67YjPmmYdXFidHfbmxlJ2Xu9IQ",
    per_page: 30,
    page: page_number
  };
  const querystring = new URLSearchParams(params).toString();
  const url = domain + querystring;

  const response = await axios.get(url);
  return response;
};

(async () => {
  try {
    for (let i = 1; i <= 1; i++) {
      const response = await getdata(i);
      const resarray = await response.data.results.map(
        (item) => item.urls.full
      );

      for (const item of resarray) {
        await del(1000);
        let image = document.querySelector("img");
        image.src = item;
        data.push(item);
      }
    }
  } catch (err) {
    console.log(err);
  }
})();
