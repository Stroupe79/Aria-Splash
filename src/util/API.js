import axios from "axios";

var i = 0;
var rows = 20;
const saveMe = []


export default {


    // Saves a lead to the database
  saveLead: function(leadData) {
    console.log(leadData.data);
    const data = leadData.data.items
    // data.forEach(function(data){
      // })
      for (i = 0; i < data.length; i++){
      saveMe.push(data[i].volumeInfo)
      console.log(saveMe)
    }
    axios.post("/api/leads/", saveMe)
}


};
