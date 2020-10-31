personReport = new Vue({
  el: '#stationreport',
  data: {
    station: [{
      firstName:'',
      lastName: '',
      stationNumber: '',
      radioNumber: '',
      email: ''
    }],
  },


  methods: {
    fetchUser() {
      fetch('api/report/station.php')
      .then(response => response.json())
      .then(json => {
        this.station=json;
        console.log(this.station);
      });
    },
    created() {
      this.fetchUser();
    },
}
},
)
