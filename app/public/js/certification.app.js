var app = new Vue({
  el: '#certificationPage',
  data: {
    certification: [{
      certifyingAgency: "",
      certificationName: "",
      standardExpiry: "",
    }],
    newCertification: {
      certifyingAgency: "",
      certificationName: "",
      standardExpiry: "",
    },
  },

  methods: {
    fetchCertification() {
      fetch('api/Certification/')
      .then(response => response.json())
      .then(json => {
        this.certification=json;
        console.log(this.certification);
      });
    },
    createCertification(){
      //make a line for getting the // ID
      fetch('api/Certification/create_cert.php',{
      method:'POST',
      body: JSON.stringify(this.newCertification),
      headers: {
        "CONTENT_TYPE": "application/json; charset=utf-8"
      }}
    )
    .then( response => response.json())
    .then( json => {
      console.log("Returned from post:", json);
      this.certification.push(json[0]);
      this.newCertification = this.newCertificationData();
    });
    console.log("Creating (POSTING)...!");
    console.log(this.newCertification);
  },
  newCertificationData() {
    return {
      certifyingAgency: "",
      certificationName: "",
      standardExpiry: "",
    }
  }
},
created() {
  this.fetchCertification();
}
}
);
