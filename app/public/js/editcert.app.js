editcertapp = new Vue ({
  el: '#editcert',
  data: {
    editcert: []
  },
  methods: {
    editCert(evt){
      fetch('api/Certification/update_cert.php', {
          method: 'POST',
          body: JSON.stringify(this.editcert),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
    },

    editCertData() {
      this.editcert={
        CertificationID: '',
        certifyingAgency:'',
        certificationName:'',
        standardExpiry:''
      }
    }

  },
  created() {
    this.editCertData();
}
});
