window.didomiVersion = 2; var godo = {};
godo.ads = [];


gg.breakpoint.setBreakpoints({ xs: 0, md: 1024 }, true);

var adsCfg = {
  unitname: "/55964524/md_w/uncomo/p", keys: {},
  sequential: ["roba", "mega"]
};
adsCfg.keys["environment"] = "pro"; adsCfg.keys["trackingId"] = gg.util.getTrackingId();

adsCfg.prebid = {
  timeout: 2000, bidders: {
    appnexus: { md: {}, sm: {}, xs: "sm" },
    criteo: { md: {}, sm: {}, xs: "sm" },
    rubicon: { slots: { md: [], sm: [], xs: [] } }
  }
};

godo.ads.push(function (x) {
  x.configure(null, adsCfg);
  x.configure("disabledSlots", new Map([["md", []], ["xs", []]
  ])); x.init();
});


godo.ads.push(function (x) {
  x.displayOnScroll({
    threshold: 450, delay: 100,
    selector: "[data-ad-lazy=true]"
  });
});
