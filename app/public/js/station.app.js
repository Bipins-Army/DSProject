var app = new Vue({
  el: '#stationreport',
  data: {
    station: [{
      radioNumber: '',
      stationNumber: ''
    }],
  },
  created() {
    this.fetchUser();
  },

  methods: {
    createStation( ){
      //make a line for getting the // ID
      fetch('api/report/station.php',{
      method:'POST',
      body: JSON.stringify(this.station),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }}
    )
    .then( response => response.json() )
    .then( json => {
      console.log("Returned from post:", json);
      this.station = this.stationData();
    });
    console.log("Creating (POSTING)...!");
    console.log(this.station);
  },
  stationData() {
    return {
      radioNumber: '',
      stationNumber: ''
    }
  }
  }

  },
  )
