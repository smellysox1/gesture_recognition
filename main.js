var prediction = "";

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
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/LyVvEtUfT/https://teachablemachine.withgoogle.com/models/LyVvEtUfT/model.json",modelLoaded);
function modelLoaded(){
    console.log("model loaded.");
}
function speak()
{
var synth = window.speechSynthesis;
speakData = "the prediction is"+prediction;

var utterThis = new SpeechSynthesisUtterance(speakData);
synth.speak(utterThis);

}
function check(){
    img = document.getElementById("captured_image");
    classifier.classify(img, gotResult);
    
}
function gotResult(error, results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    document.getElementById("result_gesture_name").innerHTML = results[0].label;
 
    prediction = results[0].label;
  
    speak();
    if (results[0].label == "perfect"){
        document.getElementById("result_gesture_pic").innerHTML = "&#128076;";
            }
            if (results[0].label == "peace"){
                document.getElementById("result_gesture_pic").innerHTML = "&#9996;";
                    } 
            if (results[0].label == "thumbs up"){
                        document.getElementById("result_gesture_pic").innerHTML = "&#128077;";
            }
        }}
            