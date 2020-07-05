$(function() {
  var hash = window.location.hash;

  $('.tabs button.bt').attr("aria-selected", "false");
  $('.tabs button.bt').attr("tabindex", "-1");
  $('.tab-content-pane').attr("hidden", "hidden");

  var hash_tab = hash + '-tab';

  if (hash == '') {
    // use the first index if there's no hash
    $('.tabs button.bt:first').removeAttr("tabindex");
    $('.tabs button.bt:first').attr("aria-selected", "true");
    $('.tab-content-pane:first').removeAttr("hidden");
    $('.tabs button.bt:first').focus();

  } else {
    // then exexute this code below
    $(hash).removeAttr("tabindex");
    $(hash).attr("aria-selected", "true");
    $(hash_tab).removeAttr("hidden");
  }

});
