<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="CONTENT-TYPE" name="viewport" content="width=device-width, initial-scale=1.0 charset=UTF-8">
  <style>
    *, html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
.frame {
  background-image: url("assets/img/bg.jpg");
  height: 150vh;
  background-image: cover;
  
}
header {
  background: #CFE9F7;
  color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}
.gambar {
  height: 170px;
}
.brand {
  font-family: Arial, Helvetica, sans-serif;
  color: #010038;
  padding: 3px;
  padding-top: 1px;
  margin-right: 100px;
}
.logo {
  margin-right: auto;
  cursor: pointer;
  transition: all .5s ease 0s;
  max-height: 30px;
}
.logo:hover {
  color: #FF6A3D;
  transform: rotate(2deg);
}
.btn {
  border: none;
  padding: 6px 12px;
  font-size: 10px;
  background: #00909E;
  border-radius: 10px;
  transition: all .5s ease 0s;
}
.btn:hover {
  background: #eaeaea;
  color: darkorange;
  transform: rotate(5deg);
}
li {
  margin: 0 15px;
}
a {
  color: #010038;
  text-decoration: none;
  padding: 5px;
  transition: all .5s ease 0s;
  font: 1.2rem "Fira Sans", sans-serif;
}
a:hover {
  cursor: pointer;
  color: coral;
}
nav ul {
  display: flex;
  padding: 5px;
}
footer {
  background: #CFE9F7;
  color: #010038;
  padding: 15px;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
}
.ft {
  bottom: 0;
  position: fixed;
}
.page1 {
  height: 50vh;
}
li a {
  display: inline-block;
}
li a:hover {
  transform: rotate(5deg);
}

.lg {
  max-height: 80px;
  max-width: auto;
  padding: 5px;
}
.lg1 {
  max-height: 50px;
  max-width: auto;
  padding: 5px;
  margin-right: 5px;
}


@media screen and (max-width: 500px) {
  .card{
    flex-direction: column;
  }
  .container1 {
    flex-direction: column;
    width: 100%;
    padding: 0;
  }
  .card-item {
    width: 100%;
  }
  .container {
    width: 100%;
    padding: 0;
  }
}


* { box-sizing: border-box; }

body { font-family: Arial, sans-serif; margin: 0; }

.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

.slide {
  display: none;
}

img {
  vertical-align: middle;
}

/* Fading animation */
.fade {
  animation-name: fade;
  animation-duration: 1.5s;
}

@keyframes fade {
  from { opacity: .4 } 
  to { opacity: 1 }
}

/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: #717171;
}

/* On smaller screens */
@media only screen and (max-width: 300px) {
  .prev, .next, .text { font-size: 11px; }
}


.link-box {
    width: 200px;
    height: 50px;
    margin-left: 80px;
  text-align: center;
    margin-top: 50px;
    background-color: #00909E;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s, box-shadow 0.3s;
}

.link-box a {
    color: white;
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
}

.link-box:hover {
    background-color: #45a049;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}


.container {
    text-align: center;
    background-color: #fff;
    padding: 5px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    position: sticky;
    top: 0;
}


#timer {
    font-size: 25px;
    margin-right: 30px;
    color: #333;
}
.pomo {
  font-size: 15px;
  padding: 5px;
}
.buttons button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 5px 10px;
    margin: 2px 0px;
    font-size: 10px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.buttons button:hover {
    background-color: #45a049;
}
.timer-section {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
}
.isi {
  padding: 10px;
  font-size: 20px;
}
p {
  text-indent: 25px;
}
.qt1 {
  padding: 15px;
  text-align: center;
}
.gap {
  background: #CFE9F7;
}
.gambar_h {
  width: 280px;
}
______




  </style>
  <title>Belajar Maju</title>
</head>
<body>
  <header>
    <img src="assets/img/logo.png" alt="logo" class="lg1">
    <h1 class="brand">Belajar<br/>Maju</h1>
    <button class="btn"><a href="https://www.instagram.com/satria.prasetio?igsh=MWV4eTY0ejR5YWl2OA==">contact</a></button>
  </header>
     <div class="slideshow-container">
        <div class="slide fade">
            <img src="assets/img/ss1.png" alt="Slide 1" style="width:100%">
        </div>
        <div class="slide fade">
            <img src="assets/img/ss2.png" alt="Slide 2" style="width:100%">
        </div>
        <div class="slide fade">
            <img src="assets/img/ss3.png" alt="Slide 3" style="width:100%">
        </div>
        <!-- Next and previous buttons -->
        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
    </div>
    <br>
    <!-- The dots/circles -->
    <div style="text-align:center">
        <span class="dot" onclick="currentSlide(1)"></span>
        <span class="dot" onclick="currentSlide(2)"></span>
        <span class="dot" onclick="currentSlide(3)"></span>
    </div>
    <script src="main.js"></script>
  <div class="page1">
    <div class="link-box">
        <a href="#">KONSULTASI PERKULIAHAN</a>
    </div>
    <div class="link-box">
        <a href="#">TES MINAT BAKAT</a>
    </div>
    <div class="link-box">
        <a href="UTBK.html">ROAD TO UTBK 2025</a>
    </div>
  </div>
  <br/>
     <footer class="intro1">©BELAJAR MAJU 2024</footer>
</body>
</html>

