var app = new Vue({
  el: '#DeleteCert',
  data: {
    certification: [{
      CertificationID:''
    }],

  },

    deleteCert(){
      //make a line for getting the // ID
      fetch('api/Certification/delete_cert.php',{
      method:'POST',
      body: JSON.stringify(this.certification),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }}
    )
    .then( response => response.json() )
    .then( json => {
      console.log("Returned from post:", json);
      this.certification = this.deleteCertificationData();
    });
    console.log("Creating (POSTING)...!");
    console.log(this.newCertification);
  },
  deleteCertificationData() {
    return {
      CertificationID:""

    }
  }
})
