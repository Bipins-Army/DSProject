var app = new Vue({
  el: '#details',
  data: {
    detial: [{

    }],
    newDetail:[]
  },


  methods: {
    createDetial( ){
      //make a line for getting the // ID
      fetch('api/person/mem_detail.php',{
      method:'POST',
      body: JSON.stringify(this.detail),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }}
    )
    .then( response => response.json() )
    .then( json => {
      console.log("Returned from post:", json);
      this.newDetail = json;
    });
    console.log("Creating (POSTING)...!");
    console.log(this.detail);
  },
  detailData() {
    return {

    }
  }
  }

  },
  )
