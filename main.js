Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
})
camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML= '<img id="captured_image" src="'+data_uri+'"/>'

    });

}
function check() 
{
    img=document.getElementById('captured_image');
    classifier.classify(img, gotResult);

}

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/GCrWgbSMl/model.json',modelLoaded)

function modelLoaded() {
    console.log('Model Loaded!');
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data_1="The first prediction is"+ prediction_1
  
    var utterthis= new SpeechSynthesisUtterance(speal_data_1)
synth.speak(utterThis);
}
function gotResult(error, results) {
    if(error){
        console.error(error);
    } else 
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
       
        prediction_1 = results[0].label;
      
speak();
if(results[0].label == "Ok") {
    document.getElementById("update_emoji").innerHTML = "&#128522;"

    
}
if (results[0].label=="Peace"){
    document.getElementById("update_emoji").innerHTML = "&#9996;"


}
if (results[0].label=="Rad"){
    document.getElementById("update_emoji").innerHTML = "&#129304;"

    }}
    


