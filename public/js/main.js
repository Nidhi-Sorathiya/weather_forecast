const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");
const deg = document.getElementById("deg");
const city = document.getElementById("city_name");
const status = document.getElementById("temp_status");
const hide = document.querySelector(".middle_layer");

const getInfo = async (event) => {
  event.preventDefault();

  let cityVal = cityName.value;

  if (cityVal == "") {
    city.innerText = "Please Write The Name Before Search";
    hide.classList.add("data_hide");
  } else {
    try {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=619fa5c13a9de630c706b06fbe2a6026`;

      const response = await fetch(url);
      const data = await response.json();
      const arrdata = [data];
      deg.innerText = arrdata[0].main.temp;
      city.innerText = `${arrdata[0].name}, ${arrdata[0].sys.country}`;
      const tempStatus = arrdata[0].weather[0].main;

      if (tempStatus == "Clear") {
        status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
      } else if (tempStatus == "Clouds") {
        status.innerHTML =
          "<i class='fas fa-cloud' style='color: #a4b0be;'></i>";
      } else if (tempStatus == "Rain") {
        status.innerHTML =
          "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
      } else {
        status.innerHTML =
          "<i class='fas fa-cloud' style='color: #a4b0be;'></i>";
      }

      hide.classList.remove("data_hide");
    } catch {
      city.innerText = "plz enter the city name properly";
      hide.classList.add("data_hide");
    }
  }
};

submitBtn.addEventListener("click", getInfo);
