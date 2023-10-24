$(document).ready(function(){
  $("#searchFarmId").show(1000)
  $("#desplegable_navbar").text("Best Tower")
});


const validateIdForm = () => {
  let idFarm = $("#idFarm").val()

  if (idFarm === "") {
    Swal.fire(
      'Alert',
      'You must enter id Farm',
      'info'
    )
  }else{
    handleGetInfoTower()
  }
}


const handleGetInfoTower = () => {
  $("#cargando").show()
  $("#mensajeEspera").show(1000)
  $("#botonCargando").prop("disabled", true);
  $("#idFarm").prop("disabled", true);
  $("#reportFarm").hide(1000)

  var datos = {
    idFarm: $("#idFarm").val().trim()
 };
 
 $.ajax({
     url: "/getTowerData",
     type: "POST",
     dataType: "json",
     contentType: "application/json",
     data: JSON.stringify(datos), // covert object in json
     success: function (data) {
      $("#cargando").hide(1000)
      $("#mensajeEspera").hide(1000)
      $("#botonCargando").prop("disabled", false);
      $("#idFarm").prop("disabled", false);
      

      if(data === 301){
        $("#reportFarm").hide(1000)
        Swal.fire(
          'Alert',
          'The entered farm id does not exist',
          'info'
        )
      }else{
        let idFarm = $("#idFarm").val()
        $("#titleFarm").text("Farm ID: "+idFarm)
        $("#reportFarm").show(1000)
        let jsonData = JSON.parse(data)
        let rssi = jsonData["rssi"]
        let towersId = jsonData["towerId"]
        let highestRssi = findHighestRssi(rssi)

        //Highest Tower
        $("#towerIdHighest").text(towersId[highestRssi["position"]])
        $("#averageRssiTower").text(rssi[highestRssi["position"]])
        loadTable(jsonData)
      }

     
     },
     error: function (xhr, status, error) {
      $("#cargando").hide(1000)
      $("#mensajeEspera").hide(1000)
      $("#botonCargando").prop("disabled", false);
      $("#idFarm").prop("disabled", false);

      $("#reportFarm").hide(1000)
      Swal.fire(
        'Error',
        'Something happened: '+error,
        'error'
      )
       console.log(error)
     },
     
 });

}

function findHighestRssi(jsonData) {
  let position = null;
  let highestNumber = null;

  for (let key in jsonData) {
    const numero = jsonData[key];
    if (highestNumber === null || numero > highestNumber) {
      highestNumber = numero;
      position = key;
    }
  }

  return { "position": parseInt(position), "highestNumber" : highestNumber};
}

const loadTable = (jsonData) => {
  let data = []
  let total = 0;
  for (let key in jsonData["rssi"]) {
    let celda = parseInt(key)+1;
    data.push({"celda" : celda,  "towerId": jsonData["towerId"][key], "averageRssi": jsonData["rssi"][key]})
    total = key
  }

  $("#totalRow").text(parseInt(total)+1)

  var table = $('#details').find('tbody');

  // clean table before of enter data
  table.empty();

  $.each(data, function (index, item) {
    var row = $('<tr>');
    $.each(item, function (key, value) {
      row.append($('<td>').text(value));
    });
    table.append(row);
  });
}
