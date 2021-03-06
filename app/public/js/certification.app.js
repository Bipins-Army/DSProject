var app = new Vue({
  el: '#certificationPage',
  data: {
    certification: [{
      CertificationID:'',
      certifyingAgency: '',
      certificationName: '',
      standardExpiry: ''
    }],
    newCertification: {
      CertificationID:'',
      certifyingAgency: '',
      certificationName: '',
      standardExpiry: ''
    },
        certID:{},
  },
  created() {
    this.fetchUser();
  },

  methods: {
    fetchUser() {
      fetch('api/Certification/index.php')
      .then(response => response.json())
      .then(json => {
        this.certification=json;
        console.log(this.certification);
      });
    },
    createCertification( ){
      //make a line for getting the // ID
      fetch('api/Certification/create_cert.php',{
      method:'POST',
      body: JSON.stringify(this.newCertification),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }}
    )
    .then( response => response.json() )
    .then( json => {
      console.log("Returned from post:", json);
      this.certification=json;
      this.newCertification = this.newCertificationData();
    });
    console.log("Creating (POSTING)...!");
    console.log(this.newCertification);
  },
  deleteCert(){
  console.log(this.certID)
  fetch('api/Certification/delete_cert.php', {
      method: 'POST',
      body: JSON.stringify(this.certID),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })

      console.log("Creating (POSTing)...!");
      console.log(this.certID);
    },
  newCertificationData() {
    return {
      CertificationID:"",
      certifyingAgency: "",
      certificationName: "",
      standardExpiry: ""
    }
  }
}

},
)
