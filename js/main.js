$(document).ready(function () {
    

    $(".pushable").click(function (e) { 

        var cityname = $("#cityinput").val();

        if(cityname.length < 2)
            return;

       $.ajax({
        type: "Get",
        url: `http://api.openweathermap.org/geo/1.0/direct?q=${cityname}&limit=1&appid=`,
        success: function (response) {

            console.log(response);

            $.ajax({
                type: "Get",
                url: `https://api.openweathermap.org/data/2.5/weather?lat=${response[0].lat}&lon=${response[0].lon}&appid=85ca85955f079dc2a70fc7fefcabdf89`,
                success: function (response) {

                    console.log(response);

                    $("body").html(

                        `
                        <div data-v-3e6e9f12="">
                            <h2 data-v-3e6e9f12="" class="citynamedisplay orange-text">${response.name}</h2>
                        </div>
                        
                        
                        <table>

                            <thead>

                                <th>id</th>
                                <th>main</th>
                                <th>description</th>
                                <th>temp</th>
                                <th>feels like</th>


                            </thead>

                            <tbody>

                                <tr>

                                    <td>${response.weather[0].id}</td>
                                    <td>${response.weather[0].main}</td>
                                    <td>${response.weather[0].description}</td>
                                    <td>${response.main.temp}</td>
                                    <td>${response.main.feels_like}</td>

                                </tr>

                            </tbody>


                        </table>
                        `
                    
                    );
                    
                }

            });
            
        }
        
        });
        
    });
    
});
