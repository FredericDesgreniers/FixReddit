function save_options() {
  var redirectCompact = document.getElementById('redirectCompact').checked;
  var redirectMobile= document.getElementById('redirectMobile').checked;
  chrome.storage.sync.set({
    redirectCompact: redirectCompact,
    redirectMobile:redirectMobile
  }, function() {
    var status = document.getElementById('status');
    status.textContent = 'Options have been saved!';
    setTimeout(function() {
      status.textContent = '';
    }, 2000);
  });
}

function restore_options() {
  chrome.storage.sync.get({
    redirectCompact: true,
    redirectMobile: true
  }, function(items) {
    document.getElementById('redirectCompact').checked = items.redirectCompact;
    document.getElementById('redirectMobile').checked = items.redirectMobile;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);