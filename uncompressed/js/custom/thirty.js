    // determine if Web Audio API is available
    // (`contextClass` will return `false` if
    // the API is not supported).
    var contextClass = (window.AudioContext || window.webkitAudioContext);
    var context = new contextClass();

    // VCO #1
    // Create an oscillator using the API:
    var vco1 = context.createOscillator();
    // Set the waveform for our new VCO:
    vco1.type = 'triangle';//vco1wav;// OPTIONS: sine, square, sawtooth, triangle
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

    // DISTORTION
    var distortion = context.createWaveShaper();
    // distortion.curve = makeDistortionCurve(0);
    // distortion.oversample = '4x';

    // DELAY
    var delay = context.createDelay();
    delay.delayTime.value = 0;
    var delay_feedback = context.createGain();
    delay_feedback.gain.value = 0.2;
    var delay_filter = context.createBiquadFilter();
    delay_filter.frequency.value = 2000;

    // CONNECTIONS
    // Here we link all our nodes
    // together. The final setting
    // of `context.destination`
    // pipes the resulting sounds
    // to our audio output, so we
    // can hear it.
    vco1.connect(vco1vol);
    vco1vol.connect(vca);

    // No effects:
    vca.connect(master);

    vca.connect(delay);
    delay.connect(delay_feedback);
    delay_feedback.connect(delay_filter);
    delay_filter.connect(delay);
    
    // With effects:
    // vca.connect(distortion);
    // distortion.connect(delay);
    delay.connect(master);
    
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
  vca.gain.value = 0;
});

controlPad.on('mousemove mousedown',function(e){
  // if (noteOn) {
    var rawVolInput = e.pageY - offset.top;
    var rawPitchInput = e.pageX - offset.left;
    volumeInput = parseNoteValue(rawVolInput);
    pitchInput = parsePitchValue(rawPitchInput);

    vca.gain.value = volumeInput;
    vco1.frequency.value = pitchInput;
    // vca.gain.value = 1;

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

// Event Handlers for range inputs
var rangeSelector = $('.rangeSlider');
rangeSelector.each(function(i){
    updateRange($(this));
});
rangeSelector.on('input',function(){
    updateRange($(this));
});

// Update range input display, and
// pass the value and method to the
// changeValue() function.
function updateRange(target){
    var rawValue = target.val();
    var rangeName = target.attr('name');
    // console.log(rawValue);
    // console.log(rangeName);
    var parent = target.parent();
    var playhead = parent.find('.pseudoRangePlayhead');
    var progress = parent.find('.pseudoRangeIndicator');
    playhead.css('left',rawValue + '%');
    progress.css('width',rawValue + '%');
    changeValue(rawValue,rangeName);
}

// Parse the method to be changed,
// and then pass the value to the
// relevant function.
function changeValue(value,type){
    switch (type) {
        case 'distortion':
            setDistortion(value);
            break;
        case 'volume':
            setVolume(value);
            break;
        case 'delay_duration':
            setDelay(value);
            break;
        case 'delay_feedback':
            setDelayFeedback(value);
            break;
    }
}

// Update the value of the distortion curve
function setDistortion(value){
    distortion.curve = makeDistortionCurve(value);
}

// Set the delay duration
function setDelay(value){
    delay.delayTime.value = value / 100;
}

// Set the delay feeback value
function setDelayFeedback(value){
    delay_feedback.gain.value = value / 100;
}

// Update the master volume
function setVolume(value){
    console.log(value / 100);
    master.gain.value = value / 100;
}


function makeDistortionCurve(amount) {
  var k = typeof amount === 'number' ? amount : 50,
    n_samples = 44100,
    curve = new Float32Array(n_samples),
    deg = Math.PI / 180,
    i = 0,
    x;
  for ( ; i < n_samples; ++i ) {
    x = i * 2 / n_samples - 1;
    curve[i] = ( 3 + k ) * x * 20 * deg / ( Math.PI + k * Math.abs(x) );
  }
  return curve;
};