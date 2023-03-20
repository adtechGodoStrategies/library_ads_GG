(function() {
  console.log('cargando libreria GG')
  var s = document.createElement('script');
  s.setAttribute('src', 'https://rsc.lavanguardia.com/js/godo-basex-v1000584.js');
  s.setAttribute('async', '');
  s.onload = function() {
      gg.breakpoint.setBreakpoints({
          xs: 0,
          md: 1024
      }, true);
      var adsCfg = {
          unitname: "/55964524/md_w/urbantecno/p",
          keys: {
              "cat": "homepage"
          },
          sequential: ["roba", "mega"]
      };
      adsCfg.keys["environment"] = "pro";
      adsCfg.keys["trackingId"] = gg.util.getTrackingId();
      adsCfg.prebid = {
          timeout: 2000,
          bidders: {
              appnexus: {
                  md: {},
                  sm: {},
                  xs: "sm"
              },
              criteo: {
                  md: {},
                  sm: {},
                  xs: "sm"
              },
              rubicon: {
                  slots: {
                      md: [],
                      sm: [],
                      xs: []
                  }
              }
          }
      };
      godo.ads.push(function(x) {
          x.configure(null, adsCfg);
          x.configure("disabledSlots", new Map([["md", []], ["xs", []]]));
          x.init();
      });
      godo.ads.push(function(x) {
          x.displayOnScroll({
              threshold: 450,
              delay: 100,
              selector: "[data-ad-lazy=true]"
          });
      });
      var s2 = document.createElement('script');
      s2.setAttribute('src', 'https://static.lavanguardia.com/godo-adsx-v13.js');
      s2.setAttribute('async', '');
      document.head.appendChild(s2);
      var s3 = document.createElement('script');
      s3.setAttribute('src', 'https://cdn.insurads.com/bootstrap/5RZFWTDB.js');
      s3.setAttribute('async', '');
      document.head.appendChild(s3);
  }
  ;
  document.head.appendChild(s);
}
)();