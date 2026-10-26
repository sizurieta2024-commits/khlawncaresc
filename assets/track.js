// Google Ads and Meta Pixel conversion tracking for khlawncaresc.com.
// Counts phone-number taps, "Text us" taps and estimate-form requests.
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "AW-18496325629");

// Meta Pixel base code (K&H Lawn Care Website Pixel).
!(function (f, b, e, v, n, t, s) {
  if (f.fbq) return;
  n = f.fbq = function () {
    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
  };
  if (!f._fbq) f._fbq = n;
  n.push = n;
  n.loaded = !0;
  n.version = "2.0";
  n.queue = [];
  t = b.createElement(e);
  t.async = !0;
  t.src = v;
  s = b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t, s);
})(
  window,
  document,
  "script",
  "https://connect.facebook.net/en_US/fbevents.js",
);
fbq("init", "2580736425683116");
fbq("track", "PageView");

(function () {
  var CALL_CLICK = "AW-18496325629/g6iUCPn5jacdEP2P3vNE";
  var ESTIMATE = "AW-18496325629/Gg3SCPb5jacdEP2P3vNE";

  function report(sendTo, callback) {
    fbq("track", sendTo === CALL_CLICK ? "Contact" : "Lead");
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
