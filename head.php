<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimal-ui">
    <title>Data Vis: Audio</title>

    <link href='http://fonts.googleapis.com/css?family=Lato:900,400' rel='stylesheet' type='text/css'>

    <link rel="stylesheet" href="/assets/css/main.css">
</head>

<body>
    <div class="svgSpriteWrapper hidden">
        <?php $rawSVG = file_get_contents("assets/icons/symbol/svg/sprite.symbol.svg"); ?>
        <?= $rawSVG;//preg_replace( '/fill=("|\')(#)?([a-fA-F0-9]*)("|\')/i', '', $rawSVG ); ?>
    </div>