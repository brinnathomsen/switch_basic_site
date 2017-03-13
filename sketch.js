<script type="text/javascript">
var SwitchPosition = 60;
var SwitchPosition = "120";
function setbackground() {
window.setTimeout( "setbackground()", 5000); // 5000 milliseconds delay

var index = Math.round(Math.random() * 9);

var ColorValue = "FFFFFF"; // default color - white (index = 0)


if(index == 1)
ColorValue = "F3D7A5"; //peach
if(index == 2)
ColorValue = "D6DBF1"; //light violet
if(index == 3)
ColorValue = "DAC4F1"; //lavender
if(index == 4)
ColorValue = "DAC4F1"; //coral
if(index == 5)
ColorValue = "FE8F72"; //light coral
if(index == 6)
ColorValue = "FAC8CC"; //pink
if(index == 7)
ColorValue = "FFFF99"; //lt yellow
if(index == 8)
ColorValue = "FCAD01"; //orange
if(index == 9)
ColorValue = "CCCCCC"; //lt grey

if (SwitchPosition == "120" ) {
SwitchPosition = "60";
} else {
SwitchPosition = "120";
}

document.getElementsByTagName("body")[0].style.backgroundColor = "#" + ColorValue;
document.getElementsByClassName("switch-circle")[0].style.backgroundColor = "#" + ColorValue;
document.getElementsByClassName("switch-circle")[0].style.left = SwitchPosition + "px";
}

</script>
