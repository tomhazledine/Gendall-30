    // determine if Web Audio API is available
    // (`contextClass` will return `false` if
    // the API is not supported).
    var contextClass = (window.AudioContext || window.webkitAudioContext);
    var context = new contextClass();

    // VCO #1
    // Create an oscillator using the API:
    var vco1 = context.createOscillator();
    // Set the waveform for our new VCO:
    vco1.type = 'sine';//vco1wav;// OPTIONS: sine, square, sawtooth, triangle
    // Set the starting frequency for the VCO
    vco1.frequency.value = 440.00;// 440.00Hz = "A", the standard note all orchestras tune to.
    // Get the VCO running
    vco1.start(0);

    // VCA
    // This is a gain (volume) node that
    // will control the volume of the note.
    var vca = context.createGain();
    vca.gain.value = 0;

    // VCO#1 VOLUME
    // Gain node for VCO#1
    var vco1vol = context.createGain();
    vco1vol.gain.value = 1;

    // MASTER VCA
    // This is our overall volume control
    // When we trigger a note, the normal
    // VCA goes from 0 to full. Having a
    // master volume control allows us to
    // set the global volume without
    // affecting the notes' on/off function.
    var master = context.createGain();
    master.gain.value = 0.5;

    // CONNECTIONS
    // Here we link all our nodes
    // together. The final setting
    // of `context.destination`
    // pipes the resulting sounds
    // to our audio output, so we
    // can hear it.
    vco1.connect(vco1vol);
    vco1vol.connect(vca);
    vca.connect(master);
    master.connect(context.destination);

    /**
     * ---------------
     * AUDIO ANALYSIS
     *
     * Send our audio
     * output and the
     * context to our
     * analysis tools. 
     * ---------------
     */
    audioAnalysis(context,master);


// /**
//  * GENDALL MAGICPAD
//  */

// var ocillators = [1,2,3,4];// array of oscillators to trigger

// function noteOn(pitch,volume){
//     for (var i = 0; i < oscilators.length; i++) {
//         var newPitch = calculatePitchOffset(pitch,octave,tone);
//         setOscillator(i,newPitch,volume);
//     }
// }

// function noteOff(){
//     for (var i = 0; i < oscilators.length; i++) {
//         oscillator[i].volume = 0;
//     }
// }

// function setOscillator(i,newPitch,volume){
//     oscillator[i].volume = volume;
//     oscillator[i].pitch = newPitch;
// }

// // parse numbers for 8ves and tones into actual multiplier for Hz
// function calculatePitchOffset(pitch,multiple){
//     var newMultiple = '';
//     switch (multiple) {
//         case '':
//             newMultiple = '';
//             break;
//     }
//     return pitch * newMultiple;
// }

var controlPad = $('.controlPad');
var controlPadMarker = document.getElementById('controlPadMarker');

var volumeInput = 0;
var pitchInput = 0;
var noteOn = false;

var offset = controlPad.offset();


/**
     * ------------------
     * CONTROL PAD EVENTS
     * ------------------
     */
controlPad.on('mousein',function(e){
  // noteOn = true;
  // newSynth.noteStart(400);
});

controlPad.on('mouseout',function(e){
  // noteOn = false;
  master.gain.value = 0;
});

controlPad.on('mousemove mousedown',function(e){
  // if (noteOn) {
    var rawVolInput = e.pageY - offset.top;
    var rawPitchInput = e.pageX - offset.left;
    volumeInput = parseNoteValue(rawVolInput);
    pitchInput = parsePitchValue(rawPitchInput);

    master.gain.value = volumeInput;
    vco1.frequency.value = pitchInput;
    vca.gain.value = 1;

    controlPadMarker.style.top = rawVolInput + 'px';
    controlPadMarker.style.left = rawPitchInput + 'px';

    // console.log('Volume = ' + volumeInput);
    // console.log('Pitch = ' + pitchInput);
  // }
});

// Parse note value.
// -----------------
// Make sure we're using a value
// between 0.00 and 1.00 for volume.
function parseNoteValue(input){
  var output = input / 300;
  return (1 - output).toFixed(2);
}

// Parse pitch value.
// ------------------
// Make sure we're using a value
// between 200.00 and 800.00 for pitch.
function parsePitchValue(input){
  var output = input * 2;
  output = output + 200;
  return output.toFixed(2);
}


// Get Wave-Type Selection
var waveSelector = $('input[name="waveSelector"]');
waveSelector.on('change',function(){
    var rawWave = $(this).val();
    var waveType = parseWave(rawWave);
    setWave(waveType);
});

// Turn wave-type int into string
function parseWave(int){
    // Make sure the input is a string
    string = int.toString();
    var waveType = false;
    switch (string) {
        case '1':
            waveType = 'sine';
            break;
        case '2':
            waveType = 'square';
            break;
        case '3':
            waveType = 'triangle';
            break;
        case '4':
            waveType = 'sawtooth';
            break;
    }
    return waveType;
}

// Set the wave type of an oscillator
function setWave(waveType){
    vco1.type = waveType;
}