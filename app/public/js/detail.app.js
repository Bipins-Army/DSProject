detailS = new Vue({
  el: '#details',
  data: {
    MemDetail: [{
      PersonalID: '',
      firstName: '',
      lastName: '',
      certificationName: '',
      certifyingAgency: '',
      standardExpiry: ''
    }]
  },
  methods: {
    fetchDetail() {
      fetch('api/person/mem_detail.php')
        .then(response => response.json())
        .then(json => {
          this.MemDetail = json;
          console.log(this.MemDetail);
        });
    }
  },
  computed: {
    groupedDetails() {
      var person = {};
      this.MemDetail.forEach((item) => {
        if (person[item.memberName] == undefined) {
          person[item.memberName] = [];
          person[item.memberName].push(item.certificationName)
        } else {
          person[item.memberName].push(item.certificationName);
        }
      });
      return person;
    }
  },
  created() {
    this.fetchDetail();
  }
});
