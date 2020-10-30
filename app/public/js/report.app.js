var app = new Vue({
  el: '#report',
  data: {
    mem_cert: [{
      firstName:'',
      lastName: '',
      certificationName: ''
    }],
  },
  created() {
    this.fetchUser();
  },

  methods: {
    fetchUser() {
      fetch('api/report/index.php')
      .then(response => response.json())
      .then(json => {
        this.mem_cert=json;
        console.log(this.mem_cert);
      });
    },

}
},
)
