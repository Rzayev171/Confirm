class User {
    constructor(ad, soyad, password) {
      this.ad = ad;
      this.soyad = soyad;
      this.password = password;
    }
  
    getFullName() {
      return this.ad + " " + this.soyad;
    }
  
    displayFullNameInHTML() {
      var fullName = this.getFullName().toUpperCase();
      document.getElementById("User").innerHTML = fullName; 
    }
  }
  
 function LightMode() {
 document.body.style.backgroundColor="white"
 document.body.style.color="black"
 }

 function DarkMode() {
    document.body.style.backgroundColor="black"
    document.body.style.color="white"
    }

