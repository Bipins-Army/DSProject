memRepApp = new Vue ({
  el: '#mem_rep',
  data: {
    MemList: [{
      firstName: '',
      lastName: '',
      stationNumber: '',
      radioNumber: '',
      email: ''
    }]
  },
  methods: {
    fetchMember(){
      fetch('api/report/station.php')
        .then(response => response.json())
        .then(json => {
          this.MemList = json;
          console.log(this.MemList);
        });
    },
  },
  created() {
    this.fetchMember();
}
});
