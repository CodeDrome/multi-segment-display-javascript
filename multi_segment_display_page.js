
let APP = {MSD: null};

window.onload = function()
{
    APP.MSD = new MultiSegmentDisplay("SVGMSD");

    SetEventHandlers();
};


function SetEventHandlers()
{
    document.getElementById("udNumberOfCharacters").onchange = function(){APP.MSD.NumberOfCharacters  = parseInt(document.getElementById("udNumberOfCharacters").value);};

    document.getElementById("txtText").onchange = function(){APP.MSD.Text = document.getElementById("txtText").value;};

    document.getElementById("colBackgroundColor").onchange = function(){APP.MSD.BackgroundColor = document.getElementById("colBackgroundColor").value;};
    document.getElementById("colLitSegmentColor").onchange = function(){APP.MSD.LitSegmentColor = document.getElementById("colLitSegmentColor").value;};
    document.getElementById("colUnlitSegmentColor").onchange = function(){APP.MSD.UnlitSegmentColor = document.getElementById("colUnlitSegmentColor").value;};

    let color_radios = document.getElementsByName("rdoColorScheme");
    for(let i = 0; i < color_radios.length; color_radios[i].onchange = function(Sender){SetColorScheme(this);}, i++);
}


function SetColorScheme(Sender)
{
    switch (Sender.value)
    {
        case "LCD":
            APP.MSD.ColorScheme = APP.MSD.ColorSchemes.LCD;
            break;
        case "Green":
            APP.MSD.ColorScheme = APP.MSD.ColorSchemes.Green;
            break;
        case "Orange":
            APP.MSD.ColorScheme = APP.MSD.ColorSchemes.Orange;
            break;
        case "Blue":
            APP.MSD.ColorScheme = APP.MSD.ColorSchemes.Blue;
            break;
        case "Sky":
            APP.MSD.ColorScheme = APP.MSD.ColorSchemes.Sky;
            break;
        case "Red":
            APP.MSD.ColorScheme = APP.MSD.ColorSchemes.Red;
            break;
        default:
            break;
    }

    document.getElementById("colBackgroundColor").value = APP.MSD.BackgroundColor;
    document.getElementById("colLitSegmentColor").value = APP.MSD.LitSegmentColor;
    document.getElementById("colUnlitSegmentColor").value = APP.MSD.UnlitSegmentColor;
}
