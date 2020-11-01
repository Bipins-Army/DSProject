var app = new Vue({
  el: '#report2',
  data: {
    mcert: [{
      PersonalID: '',
      expirationDate:'',
      certifyingAgency:'',
      certificationName: ''
    }],
  },
  created() {
    this.fetchUser();
  },

  methods: {
    fetchUser() {
      fetch('api/report/report2.php')
      .then(response => response.json())
      .then(json => {
        this.mcert=json;
        console.log(this.mcert);
      });
    },

}
},
)
