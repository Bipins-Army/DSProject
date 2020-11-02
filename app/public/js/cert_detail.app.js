detailS = new Vue({
  el: '#details2',
  data: {
    cerDetail: [{
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
          this.cerDetail = json;
          console.log(this.cerDetail);
        });
    }
  },
  computed: {
    groupedDetails() {
      var person = {};
      this.cerDetail.forEach((item) => {
        if (person[item.certificationName] == undefined) {
          person[item.certificationName] = [];
          person[item.certificationName].push(item.memberName)
        } else {
          person[item.certificationName].push(item.memberName);
        }
      });
      return person;
    }
  },
  created() {
    this.fetchDetail();
  }
});
