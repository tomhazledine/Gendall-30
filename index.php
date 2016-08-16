<?php include('head.php'); ?>

<div class="mainWrapper">

    <div class="waveTypeWrapper clearfix">
        <div class="radioGroup">
            <input type="radio" class="filterCheckbox" value="1" id="waveSelector_sine" name="waveSelector" checked/>
            <label for="waveSelector_sine" class="symLabel">
                <h4 class="visuallyhidden">Sine</h4>
                <svg class="selectedIcon">
                    <use xlink:href="#wave_sine" />
                </svg>
            </label>
        </div>
        <div class="radioGroup">
            <input type="radio" class="filterCheckbox" value="2" id="waveSelector_square" name="waveSelector" checked/>
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
            <input type="radio" class="filterCheckbox" value="4" id="waveSelector_sawtooth" name="waveSelector" checked/>
            <label for="waveSelector_sawtooth" class="symLabel">
                <h4 class="visuallyhidden">Sawtooth</h4>
                <svg class="selectedIcon">
                    <use xlink:href="#wave_sawtooth" />
                </svg>
            </label>
        </div>
    </div>

    <div class="controlPad">
        <div id="controlPadMarker" class="controlPadMarker"></div>
    </div>

    <div class="clearfix visualOutputWrapper">
        <div id="volumeDisplay" class="volumeDisplay"></div>
        <div id="frequencyDisplay" class="frequencyDisplay"></div>
    </div>
</div>

<?php include('foot.php'); ?>