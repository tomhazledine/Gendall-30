<?php include('head.php'); ?>

<div class="mainWrapper">

    <div class="waveTypeWrapper clearfix">
        <h4>Wave Type</h4>
        <div class="clearfix">
            <div class="radioGroup">
                <input type="radio" class="filterCheckbox" value="1" id="waveSelector_sine" name="waveSelector"/>
                <label for="waveSelector_sine" class="symLabel">
                    <h4 class="visuallyhidden">Sine</h4>
                    <svg class="selectedIcon">
                        <use xlink:href="#wave_sine" />
                    </svg>
                </label>
            </div>
            <div class="radioGroup">
                <input type="radio" class="filterCheckbox" value="2" id="waveSelector_square" name="waveSelector"/>
                <label for="waveSelector_square" class="symLabel">
                    <h4 class="visuallyhidden">Square</h4>
                    <svg class="selectedIcon">
                        <use xlink:href="#wave_square" />
                    </svg>
                </label>
            </div>
            <div class="radioGroup">
                <input type="radio" class="filterCheckbox" value="3" id="waveSelector_triangle" name="waveSelector" checked/>
                <label for="waveSelector_triangle" class="symLabel">
                    <h4 class="visuallyhidden">Triangle</h4>
                    <svg class="selectedIcon">
                        <use xlink:href="#wave_triangle" />
                    </svg>
                </label>
            </div>
            <div class="radioGroup">
                <input type="radio" class="filterCheckbox" value="4" id="waveSelector_sawtooth" name="waveSelector"/>
                <label for="waveSelector_sawtooth" class="symLabel">
                    <h4 class="visuallyhidden">Sawtooth</h4>
                    <svg class="selectedIcon">
                        <use xlink:href="#wave_sawtooth" />
                    </svg>
                </label>
            </div>
        </div>
    </div>

    <div class="flangeWrapper rangeOuter">
        <h4>Max Volume</h4>
        <div class="rangeWrapper">
            <div class="pseudoRangeBackground"></div>
            <div class="pseudoRangeIndicator"></div>
            <div class="pseudoRangePlayhead"></div>
            <input type="range" min="0" max="100" id="volume" name="volume" class="rangeSlider" value="50">
        </div>
    </div>

    <!-- <div class="distortionWrapper rangeOuter">
        <h4>Distortion</h4>
        <div class="rangeWrapper">
            <div class="pseudoRangeBackground"></div>
            <div class="pseudoRangeIndicator"></div>
            <div class="pseudoRangePlayhead"></div>
            <input type="range" min="0" max="100" id="distortion" name="distortion" class="rangeSlider" value="0">
        </div>
    </div> -->

    <div class="rangeOuter">
        <h4>Delay: Duration</h4>
        <div class="rangeWrapper">
            <div class="pseudoRangeBackground"></div>
            <div class="pseudoRangeIndicator"></div>
            <div class="pseudoRangePlayhead"></div>
            <input type="range" min="0" max="100" id="delay_duration" name="delay_duration" class="rangeSlider" value="0">
        </div>
    </div>
    <div class="rangeOuter">
        <h4>Delay: Feedback</h4>
        <div class="rangeWrapper">
            <div class="pseudoRangeBackground"></div>
            <div class="pseudoRangeIndicator"></div>
            <div class="pseudoRangePlayhead"></div>
            <input type="range" min="0" max="100" id="delay_feedback" name="delay_feedback" class="rangeSlider" value="20">
        </div>
    </div>

    <!-- <div class="flangeWrapper rangeOuter">
        <h4>Flange</h4>
        <div class="rangeWrapper">
            <div class="pseudoRangeBackground"></div>
            <div class="pseudoRangeIndicator"></div>
            <div class="pseudoRangePlayhead"></div>
            <input type="range" min="0" max="100" id="flangeSelector" name="flangeSelector" class="rangeSlider" value="0">
        </div>
    </div> -->

    <div class="controlPad">
        <div id="controlPadMarker" class="controlPadMarker"></div>
    </div>

    <div class="clearfix visualOutputWrapper">
        <div id="volumeDisplay" class="volumeDisplay"></div>
        <div id="frequencyDisplay" class="frequencyDisplay"></div>
    </div>
</div>

<?php include('foot.php'); ?>