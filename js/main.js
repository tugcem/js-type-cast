$(function(){
  // $(".dropdown-menu li a").keypress(function (e) {
  //   var key = e.which;
  //   if (key == 13) {
  //       $(".dropdown-menu li a").click();
  //       return false;
  //   }
  // });
  $(".dropdown-menu li a").click(function(){
    $(".btn:first-child").html($(this).text() + ' <span class="caret"></span>');
    $(".btn:first-child").val($(this).text());
    $("#warning").text('');

    var value     = $("#value").val();
    var type      = $(".btn:first-child").val();

    try {
        eval('(' + value + ')');
    } catch (e) {
      $("#warning").text('Valid JavaScript expressions are given below. Try one of them.');
      $("#result").text('');
      $("#rules").text('');
    }
    var evalValue = eval('(' + value + ')');
    var result    = window[type](evalValue);
    var rules     = "";

    switch(type) {
      case "Number":
        rules = " <span class='hack' style='font-size: 20px;'>JavaScript</span> is very flexible about the types of values it requires. If <span class='hack' style='font-size: 20px;'>JavaScript</span> wants a number, it will try to convert the value you give it to a number (or to <span class='hack' style='font-size: 20px;'>NaN</span> if it cannot perform a meaningful conversion). Strings and arrays that can be parsed as numbers convert to those numbers. Leading and trailing spaces are allowed, but any leading or trailing non-space characters that are not part of a numeric literal cause the string-to-number and array-to-number conversions to produce <span class='hack' style='font-size: 20px;'>NaN</span>. Functions are also converts to NaN. Some numeric conversions may seem surprising: <span class='hack' style='font-size: 20px;'>true</span> converts to <span class='hack' style='font-size: 20px;'>1</span>, and <span class='hack' style='font-size: 20px;'>false</span>  and the empty string(“”) convert to <span class='hack' style='font-size: 20px;'>0</span>. Also undefined converts to <span class='hack' style='font-size: 20px;'>NaN</span> but <span class='hack' style='font-size: 20px;'>null</span> which is an objects empty value, converts to <span class='hack' style='font-size: 20px;'>0</span>.";
        break;
      case "String":
        result = "“" + result + "”";
        rules = " <span class='hack' style='font-size: 20px;'>JavaScript</span> is very flexible about the types of values it requires. Any value other than <span class='hack' style='font-size: 20px;'>null</span> or <span class='hack' style='font-size: 20px;'>undefined</span> in primitive types has a <span class='hack' style='font-size: 20px;'>toString()</span>method and the result of this method is usually the same as that returned by the <span class='hack' style='font-size: 20px;'>String()</span> function. The <span class='hack' style='font-size: 20px;'>toString()</span> method of the Array class, for example, converts each array element to a string and joins the resulting strings together with commas in between. The <span class='hack' style='font-size: 20px;'>toString()</span> method of the Function class returns an implementation-defined representation of a function. In practice, implementations usually convert user-defined functions to strings of <span class='hack' style='font-size: 20px;'>JavaScript</span> source code. The Date class defines a <span class='hack' style='font-size: 20px;'>toString()</span> method that returns a human-readable (and <span class='hack' style='font-size: 20px;'>JavaScript</span>-parsable) date and time string. The RegExp class defines a <span class='hack' style='font-size: 20px;'>toString()</span> method that converts RegExp objects to a string that looks like a RegExp literal. To convert an object to a string, If you call the <span class='hack' style='font-size: 20px;'>toString()</span> method on this custom object which has not <span class='hack' style='font-size: 20px;'>toString()</span> method, it returns the default value inherited from <span class='hack' style='font-size: 20px;'>Object</span>.";
        break;
      case "Boolean":
        rules = " <span class='hack' style='font-size: 20px;'>JavaScript</span> is very flexible about the types of values it requires. When <span class='hack' style='font-size: 20px;'>JavaScript</span> expects a boolean value, you may supply a value of any type, and <span class='hack' style='font-size: 20px;'>JavaScript</span> will convert it as needed. Some values (“truthy” values) convert to <span class='hack' style='font-size: 20px;'>true</span> and others (“falsy” values) convert to false. The following values convert to, and therefore work like, false: <span class='hack' style='font-size: 20px;'>undefined</span>, <span class='hack' style='font-size: 20px;'>null</span>, <span class='hack' style='font-size: 20px;'>0</span>, <span class='hack' style='font-size: 20px;'>-0</span>, <span class='hack' style='font-size: 20px;'>NaN</span>, and the empty string(“”). All other values, including all objects (also arrays and functions) convert to, and work like, <span class='hack' style='font-size: 20px;'>true</span>. <span class='hack' style='font-size: 20px;'>false</span>, and the six values that convert to it, are sometimes called falsy values, and all other values are called truthy.";
        break;
    }

    $("#result").text(result);
    $("#rules").html(rules);
    $("html, body").animate({ scrollTop: $("#last-section").outerHeight() }, 1000);
  });
});

