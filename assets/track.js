// Google Ads conversion tracking for khlawncaresc.com.
// Counts phone-number taps, "Text us" taps and estimate-form requests.
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "AW-18496325629");

(function () {
  var CALL_CLICK = "AW-18496325629/g6iUCPn5jacdEP2P3vNE";
  var ESTIMATE = "AW-18496325629/Gg3SCPb5jacdEP2P3vNE";

  function report(sendTo, callback) {
    gtag("event", "conversion", {
      send_to: sendTo,
      value: 1.0,
      currency: "USD",
      transport_type: "beacon",
      event_callback: callback,
    });
  }

  // tel: and sms: links open another app, so the beacon is sent without delaying the tap.
  document.addEventListener(
    "click",
    function (event) {
      var link =
        event.target.closest &&
        event.target.closest('a[href^="tel:"], a[href^="sms:"]');
      if (!link) return;
      report(
        link.getAttribute("href").indexOf("tel:") === 0 ? CALL_CLICK : ESTIMATE,
      );
    },
    true,
  );

  // The estimate form opens a prefilled text message; record the request first,
  // then open it (falls back after 800ms if the tag is blocked or slow).
  window.khReportEstimate = function (url) {
    var opened = false;
    function open() {
      if (!opened) {
        opened = true;
        window.location.href = url;
      }
    }
    report(ESTIMATE, open);
    setTimeout(open, 800);
  };
})();
