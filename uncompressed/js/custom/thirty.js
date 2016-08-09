/**
 * GENDALL MAGICPAD
 */

var ocillators = [1,2,3,4];// array of oscillators to trigger

function noteOn(pitch,volume){
    for (var i = 0; i < oscilators.length; i++) {
        var newPitch = calculatePitchOffset(pitch,octave,tone);
        setOscillator(i,newPitch,volume);
    }
}

function noteOff(){
    for (var i = 0; i < oscilators.length; i++) {
        oscillator[i].volume = 0;
    }
}

function setOscillator(i,newPitch,volume){
    oscillator[i].volume = volume;
    oscillator[i].pitch = newPitch;
}

// parse numbers for 8ves and tones into actual multiplier for Hz
function calculatePitchOffset(pitch,multiple){
    var newMultiple = '';
    switch (multiple) {
        case '':
            newMultiple = '';
            break;
    }
    return pitch * newMultiple;
}