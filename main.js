var prediction = "test";

Webcam.set({
    width : 350,
    height:300,
    image_format:"png",
    png_quality:90
});
camera = document.getElementById("camera");
Webcam.attach("#camera");
function takeSnapshot(){
Webcam.snap(function(data_URI){
document.getElementById("result").innerHTML = "<img id = 'captured_image' src = '"+data_URI+"'>";
});}
console.log("ml5 version:", ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/BSkmL6YCa/model.json",modelLoaded);
function modelLoaded(){
    console.log("model loaded.");
}
function speak()
{
var synth = window.speechSynthesis;
speakData = "the first prediction is"+prediction1;

var utterThis = new SpeechSynthesisUtterance(speakData);
synth.speak(utterThis);

}
function check(){
    speak();
}