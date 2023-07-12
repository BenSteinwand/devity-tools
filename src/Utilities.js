import $ from "jquery";

export function log(value) {
    console.log(value);
    return true;
}

export function focus_cmd() {
    document.getElementById("prompt_input").focus({focusVisible: true});
}
  
export function format_link(link) {
    if( link.toLowerCase().indexOf("http") === -1){
        return "http://" + link;
    }
    return link;
}

export function abbriviate(value) {
    var count = 26;
    if(value.length > count){
        return value.substring(0, count) + "...";
    }
    return value;
}

export function currate_title(value) {
    
    if(value.length > 32){
        return value
    }
    return "";
}

export function abbreviate30Chars(value) {
    
    if(value.length > 30){
        return value.substring(0, 30) + "...";
    }
    return value;
}

export function downloadStringAsFile(text, filename) {
    const blob = new Blob([text], {type: "text/plain"});
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.download = filename;
    anchor.href = url;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    URL.revokeObjectURL(url);
}

export function MinimizeAll() {
    // Find all maximized widgets
    let maximizedWidgets = $(".max");

    // Minimize each maximized widget
    maximizedWidgets.each(function() {
        let w = $(this);

        $(w).removeClass("max");
        $(w).addClass("min");

        // Get the panel parent
        let p = $(w).parents(".p-panel");
        $(p).find(".w-container").show();
        $(w).show();

        $(p).find(".non-truncated").hide();
        $(p).find(".truncated").show();

        // manage widget max min buttons
        $(w).find(".minimize").hide();
        $(w).find(".maximize").show();

        //rss text display
        $(".rss-item").find(".rss-text").addClass("rss-min-font");
    });
}
