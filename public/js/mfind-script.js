!(function () {
  (y = y || {}).defaults = {
    containerId: 'mfind-widget',
    headerHtml:
      'Oszcz\u0119d\u017a nawet <span>580z\u0142</span>,<br>sprawd\u017a do 76 ofert OC/AC',
    autkaEndpoint: 'https://autka2.mfind.pl/',
    b2cUrl: 'https://www.mfind.pl/ubezpieczenie-oc-ac/kalkulator-oc-ac/',
    utmSource: '',
    utmMedium: '',
    utmTerm: '',
    utmContent: '',
    utmCampaign: '',
    mpc: '',
    brand: '',
  };
  var e = function () {
    var s = function (e) {
        var t;
        try {
          t = JSON.parse(e.responseText);
        } catch (a) {
          t = e.responseText;
        }
        return [t, e];
      },
      l = { contentType: 'application/x-www-form-urlencoded' },
      M = function (e, t, a) {
        var i = { success: function () {}, error: function () {}, always: function () {} },
          n = new (XMLHttpRequest || ActiveXObject)('MSXML2.XMLHTTP.3.0');
        n.open(e, t, !0),
          n.setRequestHeader('Content-type', l.contentType),
          (n.onreadystatechange = function () {
            var e;
            4 === n.readyState &&
              ((e = s(n)),
              200 <= n.status && n.status < 300 ? i.success.apply(i, e) : i.error.apply(i, e),
              i.always.apply(i, e));
          }),
          n.send(a);
        var r = {
          success: function (e) {
            return (i.success = e), r;
          },
          error: function (e) {
            return (i.error = e), r;
          },
          always: function (e) {
            return (i.always = e), r;
          },
        };
        return r;
      },
      c = function (e, t) {
        var a = [];
        (t && '0' !== t) || (t = new Date().getFullYear());
        for (var i = parseInt(e); i <= parseInt(t); i++) a.push(i);
        return a;
      },
      o = function (e) {
        for (var t = [], a = [], i = 0; i < e.length; i++)
          for (var n = c(e[i].begin_year, e[i].end_year), r = 0; r < n.length; r++)
            -1 === a.indexOf(n[r]) && a.push(n[r]);
        for (i = 0; i < a.length; i++) t.push({ name: a[i] });
        return t;
      };
    return {
      get: function (t, e) {
        var a = y.defaults.autkaEndpoint + 'cars',
          i = 'make_name',
          n = 'make_name',
          r = 'make_name';
        e.make && ((a += '/' + encodeURIComponent(e.make) + '/models'), (r = n = i = 'model_name')),
          e.model &&
            ((a += '/' + encodeURIComponent(e.model) + '/fuels'),
            (n = i = 'fuel_code'),
            (r = 'fuel_name')),
          e.fuel &&
            ((a += '/' + encodeURIComponent(e.fuel) + '/eng_caps'),
            (r = n = i = 'engine_capacity')),
          e.engCaps &&
            ((a += '/' + encodeURIComponent(e.engCaps.replace('.', ',')) + '/years'),
            (i = 'production_year'),
            (r = n = 'name')),
          M('GET', a)
            .success(function (e) {
              'production_year' === i && (e = o(e)), y.htmlBuilder.rewriteOptions(t, i, e, n, r);
            })
            .error(function (e) {
              console.error(e);
            });
      },
    };
  };
  (y = y || {}).api = new e();
  var i = [
      '.%cid%{}',
      '.%cid%.mfind-widget-border{background-color: white;border: 1px solid #cccccc;padding: 10px 5px 5px;border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;}',
      '.%cid%.mfind-widget-border img.punkta-logo{margin-left: 5px; width: 100px;}',
      '.%cid%.mfind-widget-border img.partner-logo{float:right; margin-right: 5px;}',
      '.%cid% .mfind-widget-container{ text-align: center; background-color: #EBEBEB; padding: 10px 0px; border-radius: 5px;-webkit-border-radius: 5px;-moz-border-radius: 5px;}',
      '.%cid% .mf-clear:before,',
      '.%cid% .mf-clear:after { display: table; content: " "; }',
      '.%cid% h3{ color: #545b4c;font-size:16px;font-family: "Lato", sans-serif;font-weight: 400;margin:0px; }',
      '.%cid% h3 .punkta-www a{color: inherit; text-decoration: none;}',
      '.%cid% .mf-header{ font-family: "Lato", sans-serif;font-weight: 700; color: #509600; font-size: 23px; margin: 20px 0px; }',
      '.%cid% .mf-header span{ color: #ff8a00; font-family: "Lato", sans-serif;font-weight: 900; }',
      '.%cid% .btn-mfind-cta,',
      '.%cid% .btn-mfind-cta{ display: inline-block; background-color: #74b52a; ',
      'color: #ffffff; text-decoration:none; text-align: center; ',
      'position: relative; padding: 8px 50px 8px 26px; border-radius: 2px;',
      'font-weight: normal; font-family: "Lato", sans-serif;font-weight: 700; font-size: 20px;}',
      '.%cid% .btn-mfind-cta:hover{ background-color: #8ec253; text-decoration:none; }',
      '.%cid% .btn-mfind-cta span.text{ position:relative; color: #ffffff; }',
      '.%cid% .btn-mfind-cta span.text:after{ position: absolute; right: -24px; top: 50%; margin-top: -6px; content: "";',
      'background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAMCAQAAADrXgSlAAAAGklEQVQIW2P4/58BAf7/pxIXiUMKE8SBMxkAb+Mr1e+Xm4YAAAAASUVORK5CYII=");',
      'background-repeat: no-repeat; background-position: 0 0; width: 6px; height: 12px;',
      '}',
      '.%cid% .widget-form-container{ margin-bottom: 20px; }',
      '.%cid% .mf-holder-container{ text-align: left; padding: 5px 0px; }',
      '.%cid% .mf-holder-container label{ color: #000000; font-family: "Lato", sans-serif;font-weight: 400; font-size: 15px; text-align: right; min-width: 140px; padding-right: 5px; }',
      '.%cid% .mf-holder-container label.label-small{ display: none;}',
      '.%cid% .mf-holder-container label.label-normal{ display: inline-block; }',
      '.%cid% .mf-holder-container select{ border: 1px solid #dadbd9; background-color: #fff; color: #000; padding:8px; border-radius: 2px; font-family: "Lato", sans-serif;font-weight: 400; cursor:pointer;}',
      '.%cid% .mf-holder-container select:disabled{ background-color: #eee; color: #545b4c; cursor: not-allowed;}',
      '.%cid% .mf-holder-container .bootstrap-select{ border: 1px solid #dadbd9; border-radius: 2px; }',
      '.%cid% .mf-holder-container .label-after{ margin-left: 5px; color: #545b4c; font-family: "Lato", sans-serif;font-weight: 400;}',
      '.%cid% .mf-holder-container .label-after sup{ vertical-align: super; font-size: smaller; }',
      '.%cid% .mf-holder-container .mf-select{ width: 55%; max-width: 140px; font-size: 14px; padding-left: 5px; padding-right: 5px;}',
      '.%cid% .mf-holder-container .bootstrap-select.mf-select{ max-width:140px; padding:0px; }',
      '.%cid% .mf-holder-container .bootstrap-select.mf-select button{ padding:5px;}',
      '.%cid% .mf-c-12{ width: 100%; }',
      '.%cid% .mf-c-l{ width: 45%; min-width: 300px; max-width:380px; display: inline-block; }',
      '.%cid% .mf-c-r{ width: 55%; min-width: 300px; max-width:380px; display: inline-block; }',
      '.%cid% .mf-c-r .mf-holder-container .mf-select{ width: 87px; margin-right:3px; }',
      '.%cid% .mf-c-r .mf-holder-container .mf-select.engine_capacity{ width: 50px; white-space: nowrap; padding-left: 0px;}',
      '.%cid% .mf-c-r .mf-holder-container .multifield-clear{ display: none; }',
      '.%cid%.horizontal, .%cid% .horizontal{ max-width: 670px; }',
      '.%cid%.horizontal .mf-c-l, .%cid% .horizontal .mf-c-l,',
      '.%cid%.horizontal .mf-c-r, .%cid% .horizontal .mf-c-r{ width: 100%; min-width: 0px; margin: 0 auto; }',
      '.%cid%.horizontal label, .%cid% .horizontal label{ width:38%; }',
      '.%cid%.sidebar, .%cid% .sidebar{ max-width: 430px; }',
      '.%cid%.sidebar h3, .%cid% .sidebar h3{ font-size: 13px; }',
      '.%cid%.sidebar .btn-mfind-cta span.oc-ac, .%cid% .sidebar .btn-mfind-cta span.oc-ac{ display:none;}',
      '.%cid%.sidebar .mf-holder-container .label-normal, .%cid% .sidebar .mf-holder-container .label-normal{ display: none;}',
      '.%cid%.sidebar .mf-holder-container .label-small, .%cid% .sidebar .mf-holder-container .label-small{ display: inline-block; min-width: 110px;}',
      '.%cid%.sidebar .oc-ac, .%cid% .sidebar .oc-ac{ display: none; }',
      '.%cid%.sidebar .mf-holder-container .label-after, .%cid% .sidebar .mf-holder-container .label-after{ display:none; }',
      '.%cid%.sidebar-small, .%cid% .sidebar-small{ max-width: 265px; }',
      '.%cid%.sidebar-small .mf-holder-container .mf-select, .%cid% .sidebar-small .mf-holder-container .mf-select{ width: 90%; max-width: 170px; }',
      '.%cid%.sidebar-small .mf-holder-container .label-small, .%cid% .sidebar-small .mf-holder-container .label-small{ display: none; }',
      '.%cid%.sidebar-small .mf-holder-container .label-normal, .%cid% .sidebar-small .mf-holder-container .label-normal{ display: block; width: 100%; text-align: center;}',
      '.%cid%.sidebar-small .mf-holder-container .label-after, .%cid% .sidebar-small .mf-holder-container .label-after{ display:inline-block; }',
      '.%cid%.sidebar-small .mf-holder-container, .%cid% .sidebar-small .mf-holder-container{ text-align: center;}',
      '.%cid%.sidebar-small .mf-c-r .mf-holder-container .mf-select{ max-width: 120px; }',
      '.%cid%.sidebar-small .mf-c-r .mf-holder-container .multifield-clear{ display: block; }',
      '.%cid%.sidebar-small .mf-c-r .mf-holder-container .mf-select.engine_capacity{ max-width: 100px; }',
      '.partner-topgear.mfind-widget-border{ padding: 10px 3px 3px;}',
      '.partner-topgear .mfind-widget-container{background: #039BD7;}',
      '.partner-topgear h3{color: #ffffff;}',
      '.partner-topgear .mf-header{color: #ffffff;}',
      '.partner-topgear .btn-mfind-cta{background-color: #ff8a00; color; #ffffff;}',
      '.partner-topgear .btn-mfind-cta:hover{background-color: #ffac4d;}',
      '.partner-topgear .mf-holder-container label, .partner-topgear .mf-holder-container .label-after{color: #ffffff;}',
      '.partner-autoswiat .mfind-widget-container{}',
      '.partner-autoswiat.mfind-widget-border .punkta-logo{padding-bottom: 12px;padding-top: 12px;}',
      '.partner-autoswiat .mf-header{color: #ef1c23;}',
      '.partner-autoswiat .btn-mfind-cta{background-color: #ef1c23; color; #ffffff;}',
      '.partner-autoswiat .btn-mfind-cta:hover{background-color: #f24046;}',
      '.partner-onet .mf-header span{color: #FCAF17;}',
      '.partner-onet .btn-mfind-cta{background-color: #FCAF17;}',
      '.partner-onet .btn-mfind-cta:hover{background-color: #FCAF17;}',
    ],
    t = function () {
      return {
        buildAndInsertCss: function (e) {
          if (!document.getElementById(e + '-style')) {
            var t = document.createElement('style');
            (t.type = 'text/css'), (t.id = e + '-style');
            var a = i.join('');
            (a = a.replace(/%cid%/g, e)),
              t.styleSheet ? (t.styleSheet.cssText = a) : (t.innerHTML = a),
              document.head.appendChild(t);
          }
        },
        destroy: function (e) {
          return (elem = document.getElementById(e + '-style')).parentNode.removeChild(elem);
        },
      };
    };
  (y = y || {}).cssBuilder = new t();
  var n,
    f,
    D = [
      {
        label: 'Marka pojazdu',
        type: 'select',
        name: 'make_name',
        placeholder: 'Marka',
        class: { container: 'make-container' },
        attrs: [{ name: 'data-live-search', value: 'true' }],
        next: 'model_name',
        changeFunc: function (e) {
          y.api.get(e, { make: this.element.value });
        },
      },
      {
        label: 'Model pojazdu',
        type: 'select',
        name: 'model_name',
        placeholder: 'Model',
        class: { container: 'model-container' },
        attrs: [{ name: 'data-live-search', value: 'true' }],
        next: 'fuel_code',
        changeFunc: function (e) {
          var t = f(e, 'make_name');
          y.api.get(e, { make: t.element.value, model: this.element.value });
        },
      },
      {
        label: 'Paliwo i pojemno\u015b\u0107',
        labelsmall: 'Paliwo i poj.',
        type: 'multi',
        name: 'fuel_code',
        fields: [
          {
            type: 'select',
            name: 'fuel_code',
            placeholder: 'Paliwo',
            next: 'engine_capacity',
            class: {},
            changeFunc: function (e) {
              var t = f(e, 'make_name'),
                a = f(e, 'model_name');
              y.api.get(e, {
                make: t.element.value,
                model: a.element.value,
                fuel: this.element.value,
              });
            },
          },
          {
            type: 'select',
            name: 'engine_capacity',
            placeholder: 'Poj.',
            next: 'production_year',
            class: { field: 'engine_capacity' },
            changeFunc: function (e) {
              var t = f(e, 'make_name'),
                a = f(e, 'model_name'),
                i = f(e, 'fuel_code');
              y.api.get(e, {
                make: t.element.value,
                model: a.element.value,
                fuel: i.element.value,
                engCaps: this.element.value,
              });
            },
          },
        ],
        labelAfter: 'cm<sup>3</sup>',
        class: { container: 'fuel-and-capacity-container' },
      },
      {
        label: 'Rok produkcji',
        type: 'select',
        name: 'production_year',
        placeholder: 'wybierz',
        class: { container: 'production-year-container' },
      },
    ];
  f = function (e, t, a) {
    var i = e.fields.filter(function (e) {
      return 'multi' !== e.type || a
        ? e.name == t
        : 0 <
            e.fields.filter(function (e) {
              return e.name == t;
            }).length;
    });
    if (i.length) {
      var n = i[0];
      if (n && 'multi' === n.type && !a)
        n = n.fields.filter(function (e) {
          return e.name == t;
        })[0];
      return n;
    }
  };
  var l = function (e, t, a) {
      a.onchange = function () {
        n.rewriteCTAUrl(e), 'function' == typeof t.changeFunc && t.changeFunc(e);
      };
    },
    C = function C(e) {
      var t = [];
      for (var a in e) 'object' == typeof e[a] && null != e[a] ? (t[a] = C(e[a])) : (t[a] = e[a]);
      return t;
    };
  (n = {
    createHolder: function (e, t) {
      var a = this,
        i = document.createElement('div');
      t['class'].container &&
        i.setAttribute('class', 'mf-holder-container ' + t['class'].container);
      var n = document.createElement('label');
      if (
        (n.setAttribute('for', t.name),
        n.setAttribute('class', 'label-normal'),
        (n.innerHTML = t.label),
        i.appendChild(n),
        t.labelsmall)
      ) {
        var r = document.createElement('label');
        r.setAttribute('for', t.name),
          r.setAttribute('class', 'label-small'),
          (r.innerHTML = t.labelsmall),
          i.appendChild(r);
      } else n.setAttribute('class', 'label-normal label-small');
      if ('multi' === t.type)
        for (var s = 0; s < t.fields.length; s++) {
          var l = t.fields[s],
            M = document.createElement('div');
          M.setAttribute('class', 'multifield-clear'),
            i.appendChild(M),
            'select' === l.type
              ? i.appendChild(a.createSelect(e, l))
              : 'text' === l.type && i.appendChild(a.createText(e, l));
        }
      else
        'select' === t.type
          ? i.appendChild(a.createSelect(e, t))
          : 'text' === t.type && i.appendChild(a.createText(e, t));
      if (t.labelAfter) {
        var c = document.createElement('span');
        c.setAttribute('class', 'label-after'), (c.innerHTML = t.labelAfter), i.appendChild(c);
      }
      return i;
    },
    createSelect: function (e, t) {
      var a = document.createElement('select');
      a.setAttribute('name', t.name);
      var i = t.name + ' mf-select';
      if ((t['class'].field && (i += ' ' + t['class'].field), a.setAttribute('class', i), t.attrs))
        for (var n = 0; n < t.attrs.length; n++) a.setAttribute(t.attrs[n].name, t.attrs[n].value);
      t.placeholder &&
        (((s = document.createElement('option')).text = t.placeholder), a.appendChild(s));
      if (t.options)
        for (var r = 0; r < options.length; r++) {
          var s;
          ((s = document.createElement('option')).value = options[r]),
            (s.text = options[r]),
            a.appendChild(s);
        }
      return (t.element = a), l(e, t, a), a;
    },
    createText: function (e, t) {
      var a = document.createElement('input');
      return (
        a.setAttribute('type', t.type),
        a.setAttribute('name', t.name),
        t['class'].field && select.setAttribute('class', 'mf-input ' + t['class'].field),
        t.placeholder && a.setAttribute('placeholder', t.placeholder),
        (t.element = a),
        l(e, t, a),
        a
      );
    },
    rewriteOptions: function (e, t, a, i, n) {
      var r = f(e, t);
      if (r) {
        var s = r.element;
        if (s) {
          for (; s && s.firstChild; ) s.removeChild(s.firstChild);
          if (r.placeholder)
            ((M = document.createElement('option')).text = r.placeholder), s.appendChild(M);
          if (a && a.length) {
            (s.disabled = !1),
              a.sort(function (e, t) {
                return e[n] < t[n] ? -1 : e[n] > t[n] ? 1 : 0;
              }),
              'production_year' === t && a.reverse();
            for (var l = 0; l < a.length; l++) {
              var M;
              ((M = document.createElement('option')).value = a[l][i]),
                (M.text = a[l][n]),
                s.appendChild(M);
            }
            1 === a.length
              ? ((s.value = a[0][i]), s.onchange())
              : e.fillAtStart[t] &&
                ((s.value = e.fillAtStart[t]), s.onchange(), delete e.fillAtStart[t]);
          } else s.disabled = !0;
          r.next && this.rewriteOptions(e, r.next);
        }
      }
    },
    buildUTMParams: function (e) {
      var t = [],
        a = 'utm';
      for (var i in (-1 !== window.location.href.indexOf('.mfind.pl') && (a = 'icm'),
      e.mpc && t.push('mpc=' + encodeURIComponent(e.mpc)),
      e.brand && t.push('brand=' + encodeURIComponent(e.brand)),
      e.utm))
        e.utm.hasOwnProperty(i) &&
          e.utm[i] &&
          t.push(a + '_' + encodeURIComponent(i) + '=' + encodeURIComponent(e.utm[i]));
      return t.join('&');
    },
    rewriteCTAUrl: function (e) {
      for (var t = y.defaults.b2cUrl, a = [], i = 0; i < e.fields.length; i++) {
        var n = e.fields[i];
        if ('multi' === n.type)
          for (var r = n.fields, s = 0; s < r.length; s++)
            r[s].element &&
              r[s].element.value != r[s].placeholder &&
              a.push(r[s].name + '=' + encodeURIComponent(r[s].element.value));
        else
          n.element &&
            n.element.value != n.placeholder &&
            a.push(n.name + '=' + encodeURIComponent(n.element.value));
      }
      a.length && (t += '?' + this.buildUTMParams(e) + '&' + a.join('&')),
        e.ctaButton.setAttribute('href', t);
    },
    buildAndInsertHtml: function (e, t, a, i) {
      var n = this,
        r = document.getElementById(e),
        s = {
          fields: C(D),
          fillAtStart: i.fillAtStart,
          utm: i.utm,
          containerId: e,
          mpc: i.mpc,
          brand: i.brand,
        },
        l = '',
        M = null;
      t && n.removeChilds(t),
        r ? n.removeChilds(r) : (r = document.createElement('div')).setAttribute('id', e),
        t.appendChild(r),
        -1 === r.className.indexOf(e) && (r.className += e),
        a && -1 === r.className.indexOf(a) && (r.className += ' ' + a);
      var c = r;
      (c.className += ' mfind-widget-border'),
        ((r = document.createElement('div')).className = 'mfind-widget-container'),
        ((o = document.createElement('img')).className = 'punkta-logo'),
        (o.src =
          'data:image/svg+xml;base64,PHN2ZyBpZD0iTG9nbyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyLjM4IDE3Ny4zNiI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiM2NWIzMDA7fS5jbHMtMntmaWxsOiMwYTJjNDg7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5Mb2dvdHlwK21maW5kLVB1bmt0YV9ub2JvcmRlcjwvdGl0bGU+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJNODIuODQsMTY3LjE1VjE2NGE4LjM3LDguMzcsMCwwLDEtMy4xMywyLjUsOS44Nyw5Ljg3LDAsMCwxLTguMy0uMDVBMTAuNjMsMTAuNjMsMCwwLDEsNjgsMTYzLjg5YTEyLjI5LDEyLjI5LDAsMCwxLTIuMjYtMy44MSwxMy4zOSwxMy4zOSwwLDAsMS0uODItNC42OCwxMi45LDEyLjksMCwwLDEsLjg1LTQuNywxMS40NSwxMS40NSwwLDAsMSwyLjMzLTMuODEsMTEsMTEsMCwwLDEsMy41LTIuNTQsMTAuMDksMTAuMDksMCwwLDEsNC4zMi0uOTQsOC44NSw4Ljg1LDAsMCwxLDMuNzkuODIsOS42OSw5LjY5LDAsMCwxLDMuMDgsMi4yOHYtMTNsNS4zMS0uOXYzNC41MVpNNzAuMTksMTU1LjRhNy41NCw3LjU0LDAsMCwwLDIsNS4zNiw2LjU2LDYuNTYsMCwwLDAsNSwyLjE2LDcuNDEsNy40MSwwLDAsMCwzLjEzLS42Niw2Ljc2LDYuNzYsMCwwLDAsMi40Ny0xLjkydi05LjkyYTcuNCw3LjQsMCwwLDAtMi40OS0xLjg2LDcuMiw3LjIsMCwwLDAtMy4xMS0uNjgsNi41NCw2LjU0LDAsMCwwLTUsMi4xNEE3LjUzLDcuNTMsMCwwLDAsNzAuMTksMTU1LjRabTQxLjMzLDExLjc1VjE2NGE4LjM3LDguMzcsMCwwLDEtMy4xMywyLjUsOS44Nyw5Ljg3LDAsMCwxLTguMy0uMDUsMTAuNjMsMTAuNjMsMCwwLDEtMy40MS0yLjU2LDEyLjI5LDEyLjI5LDAsMCwxLTIuMjYtMy44MSwxMy4zOSwxMy4zOSwwLDAsMS0uODItNC42OCwxMi45LDEyLjksMCwwLDEsLjg1LTQuNywxMS40NSwxMS40NSwwLDAsMSwyLjMzLTMuODEsMTEsMTEsMCwwLDEsMy41LTIuNTQsMTAuMDksMTAuMDksMCwwLDEsNC4zMi0uOTQsOC44NSw4Ljg1LDAsMCwxLDMuNzkuODIsOS42OSw5LjY5LDAsMCwxLDMuMDgsMi4yOFYxNDMuNmg1LjMxdjIzLjU1Wk05OC44NywxNTUuNGE3LjU0LDcuNTQsMCwwLDAsMiw1LjM2LDYuNTYsNi41NiwwLDAsMCw1LDIuMTYsNy40MSw3LjQxLDAsMCwwLDMuMTMtLjY2LDYuNzYsNi43NiwwLDAsMCwyLjQ3LTEuOTJ2LTkuOTJhNy40LDcuNCwwLDAsMC0yLjQ5LTEuODYsNy4yLDcuMiwwLDAsMC0zLjExLS42OCw2LjU0LDYuNTQsMCwwLDAtNSwyLjE0QTcuNTMsNy41MywwLDAsMCw5OC44NywxNTUuNFptMzMuOCwxMS43NUgxMjcuNWwtNi4zNS0yMy41NWg1LjA4bDQuMTQsMTYuNjQsNC44NC0xNi42NGg0LjUybDQuODQsMTYuNjksNC4wOS0xNi42OWg1bC02LjM0LDIzLjU1aC01LjEzbC00Ljc1LTE2LjU5Wm0yNS4zNCwwVjE0My42aDUuMzJ2My44NWE5LjIyLDkuMjIsMCwwLDEsMy4yMi0zLjE1LDguNDcsOC40NywwLDAsMSw0LjI1LTEuMDgsNy43NCw3Ljc0LDAsMCwxLDUuODYsMi4zOCw4LjM1LDguMzUsMCwwLDEsMi4yOCw2djE1LjUxaC01LjMxdi0xNGE1LjgyLDUuODIsMCwwLDAtMS40Mi00LjA5LDQuODQsNC44NCwwLDAsMC0zLjc2LTEuNTUsNS43NSw1Ljc1LDAsMCwwLTIuODkuNzMsNi43LDYuNywwLDAsMC0yLjIzLDIuMDl2MTYuODNabTMwLTI4LjM1YTMuMTgsMy4xOCwwLDAsMS0yLjMyLS45NCwzLjA1LDMuMDUsMCwwLDEtMS0yLjMsMy4zNywzLjM3LDAsMCwxLDMuMjktMy4yOSwzLjIyLDMuMjIsMCwwLDEsMi4zNSwxLDMuMTcsMy4xNywwLDAsMSwxLDIuMzEsMy4wOCwzLjA4LDAsMCwxLTEsMi4zQTMuMjgsMy4yOCwwLDAsMSwxODgsMTM4LjhabTIuNjgsNC44djIzLjU1aC01LjMxVjE0My42Wm0yNi44LDIwLjU0YTE1LjU0LDE1LjU0LDAsMCwxLTQuMzksMi42NCwxNCwxNCwwLDAsMS01LC44NCwxMS44NiwxMS44NiwwLDAsMS00LjcxLS45NCwxMS4zMiwxMS4zMiwwLDAsMS0zLjgtMi41OCwxMi41MSwxMi41MSwwLDAsMS0zLjQ4LTguNywxMy4xOCwxMy4xOCwwLDAsMSwuODctNC44MiwxMS44NiwxMS44NiwwLDAsMSwyLjM5LTMuODYsMTEuMjQsMTEuMjQsMCwwLDEsOC4yMS0zLjUsMTAuNzksMTAuNzksMCwwLDEsOCwzLjQzLDExLjc2LDExLjc2LDAsMCwxLDIuMzMsMy44NCwxMy42NywxMy42NywwLDAsMSwuODQsNC44NnYxLjMySDIwMS4zN2E3LjQzLDcuNDMsMCwwLDAsMi4zNyw0LjYxLDYuNyw2LjcsMCwwLDAsNC42OCwxLjgzLDguMzYsOC4zNiwwLDAsMCwzLjEyLS41OUE2LjgxLDYuODEsMCwwLDAsMjE0LDE2MC45Wm0tOS45Mi0xNi41OWE1LjQ4LDUuNDgsMCwwLDAtNCwxLjYsNy41NSw3LjU1LDAsMCwwLTIuMTIsNC4yN2gxMi4yN2E3LjcyLDcuNzIsMCwwLDAtMi4xNC00LjIzQTUuNTMsNS41MywwLDAsMCwyMDcuNTcsMTQ3LjU1Wm0xNSwyOS44MWExMS44NSwxMS44NSwwLDAsMS0xLjU1LS4xLDkuODIsOS44MiwwLDAsMS0xLjMyLS4yM3YtNC4yOGE4Ljc0LDguNzQsMCwwLDAsLjg3LjE0Yy4zLDAsLjY0LjA1LDEsLjA1YTIuODMsMi44MywwLDAsMCwyLS42MSwyLjU1LDIuNTUsMCwwLDAsLjY0LTEuOTNWMTQzLjZoNS4zMXYyN2E2LjU5LDYuNTksMCwwLDEtMS44MSw1QTcuMDYsNy4wNiwwLDAsMSwyMjIuNTIsMTc3LjM2Wm00LjI4LTM4LjU2YTMuMjIsMy4yMiwwLDAsMS0yLjMzLS45NCwzLjA4LDMuMDgsMCwwLDEtMS0yLjMsMy4zNywzLjM3LDAsMCwxLDMuMjktMy4yOSwzLjIzLDMuMjMsMCwwLDEsMi4zNSwxLDMuMTcsMy4xNywwLDAsMSwxLDIuMzEsMy4wOCwzLjA4LDAsMCwxLTEsMi4zQTMuMjgsMy4yOCwwLDAsMSwyMjYuOCwxMzguOFptMTIzLjQ5LDI4LjM3YS43Mi43MiwwLDAsMCwuNzktLjc0VjE0OC41MWMwLTYuNTYtNC4yNC03LjktMTAuNjYtNy45YTQ0LjQxLDQ0LjQxLDAsMCwwLTguOTQuODljLTMuMTEuNjktNC44MywxLjE0LTQuODMsMi45MXYyMmEuNzUuNzUsMCwwLDAsLjg0Ljc0aDcuNjRhLjc1Ljc1LDAsMCwwLC44NC0uNzR2LTE5LjZhMjYuMjgsMjYuMjgsMCwwLDEsMy4wNi0uMjRjMS43MywwLDIuNzcuNzQsMi43NywzLjI2djE2LjU4YS43Ni43NiwwLDAsMCwuODQuNzRoNy42NW0tNjMuODQsMGEuNzUuNzUsMCwwLDAsLjgzLS43NFYxNDguNTFjMC02LjU2LTQuMzQtNy45LTEwLjc2LTcuOWEyNy42NiwyNy42NiwwLDAsMC04LjkzLDEuNTgsMTIuNTcsMTIuNTcsMCwwLDAtNi42Mi0xLjU4LDQ1Ljc5LDQ1Ljc5LDAsMCwwLTkuMDguODljLTMuMTEuNjktNC44NCwxLjE0LTQuODQsMi45MXYyMmEuNzYuNzYsMCwwLDAsLjg0Ljc0aDcuNjVhLjc2Ljc2LDAsMCwwLC44NC0uNzR2LTE5LjZjLjM5LS4wNSwyLjE3LS4yNCwzLjM2LS4yNCwxLjczLDAsMi44MS43NCwyLjgxLDMuMjZ2MTYuNThhLjc2Ljc2LDAsMCwwLC44NC43NGg3LjU1YS43NS43NSwwLDAsMCwuODQtLjc0di0xOS42YTI3LjQzLDI3LjQzLDAsMCwxLDMuMTEtLjI0YzEuNzMsMCwzLjA3Ljc0LDMuMDcsMy4yNnYxNi41OGEuNzUuNzUsMCwwLDAsLjgzLjc0aDcuNjZtMTYtMzguMzJjLTUuNzEuNi03Ljg5LDIuODEtOC4xMiw4LjU4LDAsLjgtLjA1LDEuNTktLjA3LDIuMzksMCwuNDQsMCwuOTIsMCwxLjQxaDB2MGwtNC42Nyw2LjQ2aDQuNjd2MTguNzFhLjg0Ljg0LDAsMCwwLC44OS43NGg3LjY1YS43NC43NCwwLDAsMCwuNzktLjc0VjE0Ny43Mmw0LjczLTYuNDZoLTQuNzN2MGgwdi0xLjcxYzAtMy41Mi41MS00LjI5LDQuMDgtNC4zMiwyLjUzLDAsMy4xOCwwLDQsMGw0LjcyLTYuNTRjLTEuNTQsMC0xMS4wNS0uMS0xMy44Ny4yMW0xNy40LDEyLjRIMzEzbC00LjcsNi40N2gzLjA4djE4LjcxYS43NS43NSwwLDAsMCwuODQuNzRoNy42YS43Ni43NiwwLDAsMCwuODQtLjc0VjE0MmEuNzYuNzYsMCwwLDAtLjg0LS43NG02MC42OC01LjYxdi00LjJhLjc1Ljc1LDAsMCwwLS44NC0uNzRoLTcuMzlhLjc1Ljc1LDAsMCwwLS44My43NHY5LjM0YTQ5LjYxLDQ5LjYxLDAsMCwwLTkuMi4xM2MtNCwuNDQtNiwyLjktNiw2LjksMCwxLjA1LDAsMS44NSwwLDIuNSwwLC4wNiwwLC4xLDAsLjE3LDAsLjczLDAsMS4zNCwwLDEuODdWMTU2YzAsLjUyLDAsMS4xNCwwLDEuODcsMCwuMDcsMCwuMTEsMCwuMTcsMCwuNjUsMCwxLjQ1LDAsMi40OSwwLDQsMi4wNiw2LjQ2LDYsNi45MWE0OS44Miw0OS44MiwwLDAsMCw5LjMuMTIsMjUuMDgsMjUuMDgsMCwwLDAsNy0xLjM1YzEuMzItLjQzLDEuODMtLjkxLDItMmgwYzAtLjEyLDAtLjI1LDAtLjQ0czAtLjQxLDAtLjQxVjE2Mi4zYzAtLjI2LDAtMjYuNjYsMC0yNi42Nm0tOS4zMSwxMi40NXYxMy41NGMtLjQ3LjA2LS44My4xNC0xLjE5LjE3LTMuOTQuMjgtNC41NC0uMjQtNC41Ny00LjA2LDAsMCwwLS4wNiwwLS4xLDAtMS4zMywwLTIuMDgsMC0yLjU2di0xLjgzYzAtLjQ5LDAtMS4yMywwLTIuNTYsMCwwLDAtLjA3LDAtLjExLDAtMy44MS42My00LjMzLDQuNTctNC4wNS4zNiwwLC43Mi4xLDEuMTkuMTdaIi8+PGNpcmNsZSBjbGFzcz0iY2xzLTEiIGN4PSIyMS42NCIgY3k9IjE1Mi4xNCIgcj0iMjEuNjQiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0xNTcuMDksMjIuODRoMjAuNTN2NDMuOWMwLDI3LjktMjEuMiwzNC44OC0zNi4yOCwzNC44OHMtMzYuMjktNy0zNi4yOS0zNC44OFYyMi44NGgyMC41NFY2NWMwLDkuMjMsNCwxNy4zMiwxNS43NSwxNy4zMlMxNTcuMDksNzQuMjcsMTU3LjA5LDY1Wm0yMDQuNjIsMEgzMzYuNDZMMzE1LDUwLjEzaC03LjYzVjBIMjg2Ljc5Vjk5LjY3aDIwLjUzVjY4LjQ5aDcuNDVsMjEuOTQsMzEuMUgzNjJMMzMxLjU1LDU4LjkzWk00MDQsODIuMzljLTcuMTUsMC0xMS43NC00LjA4LTExLjc0LTEzLjlWNDEuMkg0MjAuMlYyMi44NEgzOTIuMjVWMEgzNzEuNzJWNzAuMjZjMCwyMS43OSwxMC4xNywzMS4zNiwyOC45NSwzMS4zNmE0NC40LDQ0LjQsMCwwLDAsMjUuMjUtOC4wN2wtNy41OS0xNi4xM1M0MTAuMyw4Mi4zOSw0MDQsODIuMzlaTTkxLjc3LDYxLjE5YzAsMjIuMzMtMTYuMzQsNDAuNDMtMzYuNSw0MC40M2EzNC4yOCwzNC4yOCwwLDAsMS0yMy4zNi05LjM3VjExNy40SDExLjM3VjIwLjc2YzE0LDAsMjAuNTQsOS4zOCwyMC41NCw5LjM4YTM0LjI5LDM0LjI5LDAsMCwxLDIzLjM2LTkuMzhDNzUuNDMsMjAuNzYsOTEuNzcsMzguODYsOTEuNzcsNjEuMTlabS0yMS4yOSwwYzAtMTEuNzEtOC44NS0yMS4yLTE5Ljc3LTIxLjJzLTE5Ljc3LDkuNDktMTkuNzcsMjEuMiw4Ljg1LDIxLjIsMTkuNzcsMjEuMlM3MC40OCw3Mi45LDcwLjQ4LDYxLjE5Wk0yMzguMzksMjAuNzZDMjIyLjE3LDIwLjc2LDIxNi40NSwzMiwyMTYuNDUsMzJhMjQuNTksMjQuNTksMCwwLDAtMjAuNTMtMTEuMjFWOTkuNjdoMjAuNTNWNTguODZjMC02LjI0LDIuNDYtMTguNjEsMTYuOTItMTguNjEsMTIuODYsMCwxNC43NywxMC41MiwxNC43NywxNi44M1Y5OS42N2gyMC41NFY0OS44M2gwQzI2OC40OCwzNi42LDI1OS43MSwyMC43NiwyMzguMzksMjAuNzZabTI3NCwwVjk5LjY3SDQ5MS44NVY5MmEzNC4zNiwzNC4zNiwwLDAsMS0yMy42NCw5LjYzYy0yMC4xNiwwLTM2LjUxLTE4LjEtMzYuNTEtNDAuNDNzMTYuMzUtNDAuNDMsMzYuNTEtNDAuNDNhMzQuMzIsMzQuMzIsMCwwLDEsMjMuNjQsOS42NFM0OTguMzUsMjAuNzYsNTEyLjM4LDIwLjc2Wk00OTIuNTQsNjEuMTljMC0xMS43MS04Ljg1LTIxLjItMTkuNzctMjEuMlM0NTMsNDkuNDgsNDUzLDYxLjE5czguODYsMjEuMiwxOS43OCwyMS4yUzQ5Mi41NCw3Mi45LDQ5Mi41NCw2MS4xOVoiLz48L3N2Zz4=');
      var o,
        d = document.createElement('a');
      if (
        (d.setAttribute('href', y.defaults.b2cUrl + '?' + this.buildUTMParams(s)),
        d.setAttribute('target', '_blank'),
        d.appendChild(o),
        c.appendChild(d),
        i.utm.source)
      )
        switch (i.utm.source.toLowerCase()) {
          case 'mi':
          case 'motointegrator':
            (c.className += ' partner-motointegrator'),
              (M =
                'data:image/jpeg;base64,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');
            break;
          case 'autofakty':
            (c.className += ' partner-autofakty'),
              (M =
                'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsICAoIBwsKCQoNDAsNERwSEQ8PESIZGhQcKSQrKigkJyctMkA3LTA9MCcnOEw5PUNFSElIKzZPVU5GVEBHSEX/2wBDAQwNDREPESESEiFFLicuRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUX/wAARCAAeAEkDASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAABQYAAwcEAf/EADMQAAEDAwMCBAQDCQAAAAAAAAECAwQABREGEiETQRQiMYEVI1GRFnGxFyQyU4KTotHh/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EABwRAAMBAAIDAAAAAAAAAAAAAAABEQITIRIiMf/aAAwDAQACEQMRAD8A0TUV0dgRmY8Mjx81wMMZGQkn1UR9AOaoTp64EDq6kuCld9iW0j7baR729K/El2ubS5UedFcDcNCIxWlwAbVHJBA45rotd5vsuKXJ1/kQndxHSNtUvj65Ca7+DS6JRivBn6XiouIvEiahLiUGLISj52TjCSEghXf2qxDGr7ggSDOiW0K5TGDPUIH0UT3/ACpQfuc1ep7Ui53B2fbmX0L6zkUspSs5HIIHpxWsVnXqkBTiauchLfi39DTbzTa3W32CS2+EfxAZ5Chj0rkRqG4OaUlrfUWLlHeb3YxkIWtJT/irHtVeu4TUi6WlhDbb8iRISrw5Vs3BIO7J7bvIP6aqlQINtWw3PiJtwuahFXHjvb04BBS7uxwQrA960lmJgYro7Jd1FBgNS3Y7UiK8VFvGQoFGCMg8jJ+9Ao025Qo1xlG5yJTrE5UFht/b0ySoJSpWADxnNeom/C79L8Q7IudzY6cWGhakp39QbjwBxjAyo54FVobuPiLhZXrO06qctU1X75jaFKA4O3sRxUSgCcz4vpxDM9+7KnsqdQ3IZcaSkYUoDKMDIxn0przSBCUqdLt8aRImT5bL3ngvrSkRdh5WshPmxxtz65p/xWNqBGfai0K/cdVsyo6VGFIUFSldUApOecD8sfWiH7MrJ/Mmf3R/qnGpTk1JRDJta6bs2n4zLEMyXZ8lXy0KcyAM+pGPYf8AKYrFbNZMWttpy4RmseVKJCOotCe3I9feu1OkVv6zdvdwkJfZQB4ZrByggcZ7YHPuc01VvW+kvoglSdEKelw5M91d0krkpMlx3CUpaCVeVKc8DJHFeytHyJkqW3GLUCChnw8dvphe4E7lKHPlO7H2p0qVjk0IIkTT95VPfvK20s3RpLXTClgpewja4k4PAOBg9qYmYsp3UzdxcYLTSoAaUFKBKV787eP1ozUqPbZQRCgPM6lucxbYDL7bKULyOSkKz+oovUqVG6D/2Q==');
            break;
          case 'autoswiat':
            (l = ' i Auto \u015awiat'),
              (i.headerHtml =
                i.headerHtml ||
                'Sprawd\u017a 76 ofert OC/AC,<br><span>kup ubezpieczenie online</span></br>i zaoszcz\u0119d\u017a nawet 517z\u0142'),
              (i.button = i.button || 'Oblicz sk\u0142adk\u0119 i kup'),
              (M =
                'data:image/png;base64,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'),
              (c.className += ' partner-autoswiat');
            break;
          case 'onet':
            (l = ' i Onet.moto'),
              (i.headerHtml =
                i.headerHtml ||
                'Sprawd\u017a 76 ofert OC/AC,<br><span>kup ubezpieczenie online</span></br>i zaoszcz\u0119d\u017a nawet 517z\u0142'),
              (i.button = i.button || 'Oblicz sk\u0142adk\u0119 i kup'),
              (M =
                'data:image/png;base64,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'),
              (c.className += ' partner-onet');
            break;
          case 'topgear':
            (l = ' i TopGear'),
              (i.headerHtml =
                i.headerHtml ||
                'Sprawd\u017a 76 ofert OC/AC,<br><span>kup ubezpieczenie online</span></br>i zaoszcz\u0119d\u017a nawet 517z\u0142'),
              (i.button = i.button || 'Oblicz sk\u0142adk\u0119 i kup'),
              (M =
                'data:image/png;base64,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'),
              (c.className += ' partner-topgear');
        }
      M &&
        (((o = document.createElement('img')).className = 'partner-logo'),
        (o.style.marginTop = '-6px'),
        (o.src = M),
        c.appendChild(o));
      c.appendChild(r);
      var u =
          '<span class="punkta-www"><a href="https://punkta.pl" target="_blank">punkta.pl</a></span>',
        A = document.createElement('h3');
      (A.innerHTML = 'Por\xf3wnywarka ubezpiecze\u0144 ' + u + l), r.appendChild(A);
      var L = document.createElement('div');
      (L.className = 'mf-header'),
        (L.innerHTML = i.headerHtml || y.defaults.headerHtml),
        r.appendChild(L);
      var w = document.createElement('div');
      w.setAttribute('class', 'widget-form-container mf-clear');
      var m = document.createElement('div');
      m.setAttribute('class', 'mf-c-l'),
        m.appendChild(n.createHolder(s, f(s, 'make_name', !0))),
        m.appendChild(n.createHolder(s, f(s, 'model_name', !0))),
        w.appendChild(m);
      var N = document.createElement('div');
      N.setAttribute('class', 'mf-c-r'),
        N.appendChild(n.createHolder(s, f(s, 'fuel_code', !0))),
        N.appendChild(n.createHolder(s, f(s, 'production_year', !0))),
        w.appendChild(N),
        r.appendChild(w);
      var j = document.createElement('a');
      if (
        (j.setAttribute('id', e + '-cta-btn'),
        j.setAttribute('class', 'btn-mfind-cta mf-clear'),
        j.setAttribute('href', y.defaults.b2cUrl + '?' + this.buildUTMParams(s)),
        j.setAttribute('target', '_blank'),
        (j.innerHTML =
          '<span class="text">' +
          (i.button || 'Oblicz sk\u0142adk\u0119<span class="oc-ac"> OC/AC</span>') +
          '</span>'),
        r.appendChild(j),
        (s.htmlElement = r),
        (s.ctaButton = j),
        0 < c.clientWidth)
      ) {
        var p = '';
        switch (!0) {
          case c.clientWidth <= 265:
            p += 'sidebar-small ';
          case c.clientWidth <= 430:
            p += 'sidebar ';
          case c.clientWidth <= 670:
            p += 'horizontal';
        }
        -1 === c.className.indexOf(p) && (c.className += ' ' + p);
      }
      return y.api.get(s, {}), s;
    },
    removeChilds: function (e) {
      for (var t; (t = e.lastChild); ) e.removeChild(t);
    },
    destroy: function (e) {
      var t = document.getElementById(e || y.defaults.containerId);
      this.removeChilds(t);
    },
  }),
    ((y = y || {}).htmlBuilder = n);
  var y = y || {},
    M = 1,
    c = function (e) {
      return y.cssBuilder.destroy(e.containerId), y.htmlBuilder.destroy(e.containerId);
    },
    o = function o(e, t, a) {
      'string' == typeof e ? (e = document.getElementById(e)) : e.nodeName || ((a = t), (t = e));
      var i = {
          source: t && t.utmSource ? t.utmSource : y.defaults.utmSource,
          medium: t && t.utmMedium ? t.utmMedium : y.defaults.utmMedium,
          term: t && t.utmTerm ? t.utmTerm : y.defaults.utmTerm,
          content: t && t.utmContent ? t.utmContent : y.defaults.utmContent,
          campaign: t && t.utmCampaign ? t.utmCampaign : y.defaults.utmCampaign,
        },
        n = t && t.containerId ? t.containerId : y.defaults.containerId + '-' + M,
        r = t && t.widgetType ? t.widgetType : y.defaults.widgetType;
      a && a.containerId && (n = a.containerId);
      var s = {};
      return (
        t && t.fillAtStart && (s = JSON.parse(t.fillAtStart)),
        i.source
          ? (y.cssBuilder.buildAndInsertCss(n),
            (e = e && e.nodeName ? e : document.body),
            (a = y.htmlBuilder.buildAndInsertHtml(n, e, r, {
              utm: i,
              headerHtml: t.headerHtml,
              partner: t.partner,
              button: t.button,
              mpc: t.mpc,
              brand: t.brand,
              fillAtStart: s,
            })),
            M++)
          : console.error('Not initialized - missing "utmSource" option'),
        {
          initialize: function (e) {
            o(e, a);
          },
          destroy: function () {
            return c(a);
          },
        }
      );
    },
    a = function () {
      for (
        var e = document.getElementsByClassName(y.defaults.containerId), t = 0;
        t < e.length;
        t++
      )
        e[t] && e[t].dataset.utmSource && o(e[t], e[t].dataset);
      var a = document.getElementById(y.defaults.containerId);
      a && a.dataset.utmSource && o(a, a.dataset);
    },
    r = function () {
      1 === M && a();
    };
  (window.mFindWidget = { findAndInit: a, initialize: o, destroy: c }),
    window.addEventListener('load', r, !1),
    setTimeout(r, 0);
})();
