/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const H = globalThis, K = H.ShadowRoot && (H.ShadyCSS === void 0 || H.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Z = Symbol(), rt = /* @__PURE__ */ new WeakMap();
let ft = class {
  constructor(t, e, s) {
    if (this._$cssResult$ = !0, s !== Z) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (K && t === void 0) {
      const s = e !== void 0 && e.length === 1;
      s && (t = rt.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), s && rt.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const G = (r) => new ft(typeof r == "string" ? r : r + "", void 0, Z), I = (r, ...t) => {
  const e = r.length === 1 ? r[0] : t.reduce((s, i, n) => s + ((o) => {
    if (o._$cssResult$ === !0) return o.cssText;
    if (typeof o == "number") return o;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + o + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(i) + r[n + 1], r[0]);
  return new ft(e, r, Z);
}, bt = (r, t) => {
  if (K) r.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const s = document.createElement("style"), i = H.litNonce;
    i !== void 0 && s.setAttribute("nonce", i), s.textContent = e.cssText, r.appendChild(s);
  }
}, ot = K ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const s of t.cssRules) e += s.cssText;
  return G(e);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: At, defineProperty: wt, getOwnPropertyDescriptor: xt, getOwnPropertyNames: Et, getOwnPropertySymbols: St, getPrototypeOf: Ct } = Object, g = globalThis, nt = g.trustedTypes, Pt = nt ? nt.emptyScript : "", q = g.reactiveElementPolyfillSupport, O = (r, t) => r, D = { toAttribute(r, t) {
  switch (t) {
    case Boolean:
      r = r ? Pt : null;
      break;
    case Object:
    case Array:
      r = r == null ? r : JSON.stringify(r);
  }
  return r;
}, fromAttribute(r, t) {
  let e = r;
  switch (t) {
    case Boolean:
      e = r !== null;
      break;
    case Number:
      e = r === null ? null : Number(r);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(r);
      } catch {
        e = null;
      }
  }
  return e;
} }, X = (r, t) => !At(r, t), at = { attribute: !0, type: String, converter: D, reflect: !1, useDefault: !1, hasChanged: X };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), g.litPropertyMetadata ?? (g.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let x = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = at) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const s = Symbol(), i = this.getPropertyDescriptor(t, s, e);
      i !== void 0 && wt(this.prototype, t, i);
    }
  }
  static getPropertyDescriptor(t, e, s) {
    const { get: i, set: n } = xt(this.prototype, t) ?? { get() {
      return this[e];
    }, set(o) {
      this[e] = o;
    } };
    return { get: i, set(o) {
      const h = i == null ? void 0 : i.call(this);
      n == null || n.call(this, o), this.requestUpdate(t, h, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? at;
  }
  static _$Ei() {
    if (this.hasOwnProperty(O("elementProperties"))) return;
    const t = Ct(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(O("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(O("properties"))) {
      const e = this.properties, s = [...Et(e), ...St(e)];
      for (const i of s) this.createProperty(i, e[i]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [s, i] of e) this.elementProperties.set(s, i);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, s] of this.elementProperties) {
      const i = this._$Eu(e, s);
      i !== void 0 && this._$Eh.set(i, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const s = new Set(t.flat(1 / 0).reverse());
      for (const i of s) e.unshift(ot(i));
    } else t !== void 0 && e.push(ot(t));
    return e;
  }
  static _$Eu(t, e) {
    const s = e.attribute;
    return s === !1 ? void 0 : typeof s == "string" ? s : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((e) => e(this));
  }
  addController(t) {
    var e;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((e = t.hostConnected) == null || e.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$EO) == null || e.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const s of e.keys()) this.hasOwnProperty(s) && (t.set(s, this[s]), delete this[s]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return bt(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((e) => {
      var s;
      return (s = e.hostConnected) == null ? void 0 : s.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var s;
      return (s = e.hostDisconnected) == null ? void 0 : s.call(e);
    });
  }
  attributeChangedCallback(t, e, s) {
    this._$AK(t, s);
  }
  _$ET(t, e) {
    var n;
    const s = this.constructor.elementProperties.get(t), i = this.constructor._$Eu(t, s);
    if (i !== void 0 && s.reflect === !0) {
      const o = (((n = s.converter) == null ? void 0 : n.toAttribute) !== void 0 ? s.converter : D).toAttribute(e, s.type);
      this._$Em = t, o == null ? this.removeAttribute(i) : this.setAttribute(i, o), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var n, o;
    const s = this.constructor, i = s._$Eh.get(t);
    if (i !== void 0 && this._$Em !== i) {
      const h = s.getPropertyOptions(i), a = typeof h.converter == "function" ? { fromAttribute: h.converter } : ((n = h.converter) == null ? void 0 : n.fromAttribute) !== void 0 ? h.converter : D;
      this._$Em = i, this[i] = a.fromAttribute(e, h.type) ?? ((o = this._$Ej) == null ? void 0 : o.get(i)) ?? null, this._$Em = null;
    }
  }
  requestUpdate(t, e, s) {
    var i;
    if (t !== void 0) {
      const n = this.constructor, o = this[t];
      if (s ?? (s = n.getPropertyOptions(t)), !((s.hasChanged ?? X)(o, e) || s.useDefault && s.reflect && o === ((i = this._$Ej) == null ? void 0 : i.get(t)) && !this.hasAttribute(n._$Eu(t, s)))) return;
      this.C(t, e, s);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: s, reflect: i, wrapped: n }, o) {
    s && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, o ?? e ?? this[t]), n !== !0 || o !== void 0) || (this._$AL.has(t) || (this.hasUpdated || s || (e = void 0), this._$AL.set(t, e)), i === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var s;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [n, o] of this._$Ep) this[n] = o;
        this._$Ep = void 0;
      }
      const i = this.constructor.elementProperties;
      if (i.size > 0) for (const [n, o] of i) {
        const { wrapped: h } = o, a = this[n];
        h !== !0 || this._$AL.has(n) || a === void 0 || this.C(n, void 0, o, a);
      }
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (s = this._$EO) == null || s.forEach((i) => {
        var n;
        return (n = i.hostUpdate) == null ? void 0 : n.call(i);
      }), this.update(e)) : this._$EM();
    } catch (i) {
      throw t = !1, this._$EM(), i;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((s) => {
      var i;
      return (i = s.hostUpdated) == null ? void 0 : i.call(s);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((e) => this._$ET(e, this[e]))), this._$EM();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
x.elementStyles = [], x.shadowRootOptions = { mode: "open" }, x[O("elementProperties")] = /* @__PURE__ */ new Map(), x[O("finalized")] = /* @__PURE__ */ new Map(), q == null || q({ ReactiveElement: x }), (g.reactiveElementVersions ?? (g.reactiveElementVersions = [])).push("2.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const k = globalThis, z = k.trustedTypes, ht = z ? z.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, gt = "$lit$", f = `lit$${Math.random().toFixed(9).slice(2)}$`, vt = "?" + f, Ot = `<${vt}>`, A = document, U = () => A.createComment(""), N = (r) => r === null || typeof r != "object" && typeof r != "function", Y = Array.isArray, kt = (r) => Y(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", V = `[ 	
\f\r]`, P = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, lt = /-->/g, ct = />/g, _ = RegExp(`>|${V}(?:([^\\s"'>=/]+)(${V}*=${V}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), pt = /'/g, dt = /"/g, _t = /^(?:script|style|textarea|title)$/i, Ut = (r) => (t, ...e) => ({ _$litType$: r, strings: t, values: e }), E = Ut(1), w = Symbol.for("lit-noChange"), p = Symbol.for("lit-nothing"), ut = /* @__PURE__ */ new WeakMap(), m = A.createTreeWalker(A, 129);
function mt(r, t) {
  if (!Y(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return ht !== void 0 ? ht.createHTML(t) : t;
}
const Nt = (r, t) => {
  const e = r.length - 1, s = [];
  let i, n = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = P;
  for (let h = 0; h < e; h++) {
    const a = r[h];
    let c, d, l = -1, u = 0;
    for (; u < a.length && (o.lastIndex = u, d = o.exec(a), d !== null); ) u = o.lastIndex, o === P ? d[1] === "!--" ? o = lt : d[1] !== void 0 ? o = ct : d[2] !== void 0 ? (_t.test(d[2]) && (i = RegExp("</" + d[2], "g")), o = _) : d[3] !== void 0 && (o = _) : o === _ ? d[0] === ">" ? (o = i ?? P, l = -1) : d[1] === void 0 ? l = -2 : (l = o.lastIndex - d[2].length, c = d[1], o = d[3] === void 0 ? _ : d[3] === '"' ? dt : pt) : o === dt || o === pt ? o = _ : o === lt || o === ct ? o = P : (o = _, i = void 0);
    const $ = o === _ && r[h + 1].startsWith("/>") ? " " : "";
    n += o === P ? a + Ot : l >= 0 ? (s.push(c), a.slice(0, l) + gt + a.slice(l) + f + $) : a + f + (l === -2 ? h : $);
  }
  return [mt(r, n + (r[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), s];
};
class T {
  constructor({ strings: t, _$litType$: e }, s) {
    let i;
    this.parts = [];
    let n = 0, o = 0;
    const h = t.length - 1, a = this.parts, [c, d] = Nt(t, e);
    if (this.el = T.createElement(c, s), m.currentNode = this.el.content, e === 2 || e === 3) {
      const l = this.el.content.firstChild;
      l.replaceWith(...l.childNodes);
    }
    for (; (i = m.nextNode()) !== null && a.length < h; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) for (const l of i.getAttributeNames()) if (l.endsWith(gt)) {
          const u = d[o++], $ = i.getAttribute(l).split(f), M = /([.?@])?(.*)/.exec(u);
          a.push({ type: 1, index: n, name: M[2], strings: $, ctor: M[1] === "." ? Rt : M[1] === "?" ? Mt : M[1] === "@" ? Ht : L }), i.removeAttribute(l);
        } else l.startsWith(f) && (a.push({ type: 6, index: n }), i.removeAttribute(l));
        if (_t.test(i.tagName)) {
          const l = i.textContent.split(f), u = l.length - 1;
          if (u > 0) {
            i.textContent = z ? z.emptyScript : "";
            for (let $ = 0; $ < u; $++) i.append(l[$], U()), m.nextNode(), a.push({ type: 2, index: ++n });
            i.append(l[u], U());
          }
        }
      } else if (i.nodeType === 8) if (i.data === vt) a.push({ type: 2, index: n });
      else {
        let l = -1;
        for (; (l = i.data.indexOf(f, l + 1)) !== -1; ) a.push({ type: 7, index: n }), l += f.length - 1;
      }
      n++;
    }
  }
  static createElement(t, e) {
    const s = A.createElement("template");
    return s.innerHTML = t, s;
  }
}
function S(r, t, e = r, s) {
  var o, h;
  if (t === w) return t;
  let i = s !== void 0 ? (o = e._$Co) == null ? void 0 : o[s] : e._$Cl;
  const n = N(t) ? void 0 : t._$litDirective$;
  return (i == null ? void 0 : i.constructor) !== n && ((h = i == null ? void 0 : i._$AO) == null || h.call(i, !1), n === void 0 ? i = void 0 : (i = new n(r), i._$AT(r, e, s)), s !== void 0 ? (e._$Co ?? (e._$Co = []))[s] = i : e._$Cl = i), i !== void 0 && (t = S(r, i._$AS(r, t.values), i, s)), t;
}
class Tt {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: e }, parts: s } = this._$AD, i = ((t == null ? void 0 : t.creationScope) ?? A).importNode(e, !0);
    m.currentNode = i;
    let n = m.nextNode(), o = 0, h = 0, a = s[0];
    for (; a !== void 0; ) {
      if (o === a.index) {
        let c;
        a.type === 2 ? c = new R(n, n.nextSibling, this, t) : a.type === 1 ? c = new a.ctor(n, a.name, a.strings, this, t) : a.type === 6 && (c = new Dt(n, this, t)), this._$AV.push(c), a = s[++h];
      }
      o !== (a == null ? void 0 : a.index) && (n = m.nextNode(), o++);
    }
    return m.currentNode = A, i;
  }
  p(t) {
    let e = 0;
    for (const s of this._$AV) s !== void 0 && (s.strings !== void 0 ? (s._$AI(t, s, e), e += s.strings.length - 2) : s._$AI(t[e])), e++;
  }
}
class R {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, s, i) {
    this.type = 2, this._$AH = p, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = s, this.options = i, this._$Cv = (i == null ? void 0 : i.isConnected) ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = S(this, t, e), N(t) ? t === p || t == null || t === "" ? (this._$AH !== p && this._$AR(), this._$AH = p) : t !== this._$AH && t !== w && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : kt(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== p && N(this._$AH) ? this._$AA.nextSibling.data = t : this.T(A.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var n;
    const { values: e, _$litType$: s } = t, i = typeof s == "number" ? this._$AC(t) : (s.el === void 0 && (s.el = T.createElement(mt(s.h, s.h[0]), this.options)), s);
    if (((n = this._$AH) == null ? void 0 : n._$AD) === i) this._$AH.p(e);
    else {
      const o = new Tt(i, this), h = o.u(this.options);
      o.p(e), this.T(h), this._$AH = o;
    }
  }
  _$AC(t) {
    let e = ut.get(t.strings);
    return e === void 0 && ut.set(t.strings, e = new T(t)), e;
  }
  k(t) {
    Y(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let s, i = 0;
    for (const n of t) i === e.length ? e.push(s = new R(this.O(U()), this.O(U()), this, this.options)) : s = e[i], s._$AI(n), i++;
    i < e.length && (this._$AR(s && s._$AB.nextSibling, i), e.length = i);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var s;
    for ((s = this._$AP) == null ? void 0 : s.call(this, !1, !0, e); t && t !== this._$AB; ) {
      const i = t.nextSibling;
      t.remove(), t = i;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class L {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, s, i, n) {
    this.type = 1, this._$AH = p, this._$AN = void 0, this.element = t, this.name = e, this._$AM = i, this.options = n, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = p;
  }
  _$AI(t, e = this, s, i) {
    const n = this.strings;
    let o = !1;
    if (n === void 0) t = S(this, t, e, 0), o = !N(t) || t !== this._$AH && t !== w, o && (this._$AH = t);
    else {
      const h = t;
      let a, c;
      for (t = n[0], a = 0; a < n.length - 1; a++) c = S(this, h[s + a], e, a), c === w && (c = this._$AH[a]), o || (o = !N(c) || c !== this._$AH[a]), c === p ? t = p : t !== p && (t += (c ?? "") + n[a + 1]), this._$AH[a] = c;
    }
    o && !i && this.j(t);
  }
  j(t) {
    t === p ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class Rt extends L {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === p ? void 0 : t;
  }
}
class Mt extends L {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== p);
  }
}
class Ht extends L {
  constructor(t, e, s, i, n) {
    super(t, e, s, i, n), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = S(this, t, e, 0) ?? p) === w) return;
    const s = this._$AH, i = t === p && s !== p || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, n = t !== p && (s === p || i);
    i && this.element.removeEventListener(this.name, this, s), n && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class Dt {
  constructor(t, e, s) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    S(this, t);
  }
}
const W = k.litHtmlPolyfillSupport;
W == null || W(T, R), (k.litHtmlVersions ?? (k.litHtmlVersions = [])).push("3.3.0");
const zt = (r, t, e) => {
  const s = (e == null ? void 0 : e.renderBefore) ?? t;
  let i = s._$litPart$;
  if (i === void 0) {
    const n = (e == null ? void 0 : e.renderBefore) ?? null;
    s._$litPart$ = i = new R(t.insertBefore(U(), n), n, void 0, e ?? {});
  }
  return i._$AI(r), i;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const y = globalThis;
let b = class extends x {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var e;
    const t = super.createRenderRoot();
    return (e = this.renderOptions).renderBefore ?? (e.renderBefore = t.firstChild), t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = zt(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this._$Do) == null || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this._$Do) == null || t.setConnected(!1);
  }
  render() {
    return w;
  }
};
var $t;
b._$litElement$ = !0, b.finalized = !0, ($t = y.litElementHydrateSupport) == null || $t.call(y, { LitElement: b });
const J = y.litElementPolyfillSupport;
J == null || J({ LitElement: b });
(y.litElementVersions ?? (y.litElementVersions = [])).push("4.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const tt = (r) => (t, e) => {
  e !== void 0 ? e.addInitializer(() => {
    customElements.define(r, t);
  }) : customElements.define(r, t);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const jt = { attribute: !0, type: String, converter: D, reflect: !1, hasChanged: X }, It = (r = jt, t, e) => {
  const { kind: s, metadata: i } = e;
  let n = globalThis.litPropertyMetadata.get(i);
  if (n === void 0 && globalThis.litPropertyMetadata.set(i, n = /* @__PURE__ */ new Map()), s === "setter" && ((r = Object.create(r)).wrapped = !0), n.set(e.name, r), s === "accessor") {
    const { name: o } = e;
    return { set(h) {
      const a = t.get.call(this);
      t.set.call(this, h), this.requestUpdate(o, a, r);
    }, init(h) {
      return h !== void 0 && this.C(o, void 0, r, h), h;
    } };
  }
  if (s === "setter") {
    const { name: o } = e;
    return function(h) {
      const a = this[o];
      t.call(this, h), this.requestUpdate(o, a, r);
    };
  }
  throw Error("Unsupported decorator location: " + s);
};
function B(r) {
  return (t, e) => typeof e == "object" ? It(r, t, e) : ((s, i, n) => {
    const o = i.hasOwnProperty(n);
    return i.constructor.createProperty(n, s), o ? Object.getOwnPropertyDescriptor(i, n) : void 0;
  })(r, t, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function et(r) {
  return B({ ...r, state: !0, attribute: !1 });
}
const st = I`
  :host {
    all: initial;
    font-family: sans-serif;
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-family: "Apple SD Gothic Neo", NotoSansCJKkr, Roboto, Montserrat, sans-serif;
  }

  button {
    all: unset;
    cursor: pointer;
    font: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`, Lt = ":host .review-list{padding:0 15px}:host .review-card{border-bottom:1px solid #eee;padding:20px 0;margin-bottom:12px}:host .review-header{display:flex;align-items:center;gap:12px;margin-bottom:6px}:host .review-avatar{width:40px;height:40px;min-width:40px;min-height:40px;max-width:40px;max-height:40px;border-radius:50%;background:#eee;display:flex;align-items:center;justify-content:center;overflow:hidden}:host .review-avatar img{width:100%;height:100%;object-fit:cover;display:block}:host .review-user{font-weight:700;margin-right:8px}:host .review-score{color:#ffb400;font-size:18px;margin-right:8px}:host .review-score-num{color:#333;font-size:14px;margin-left:2px}:host .review-date{color:#bbb;font-size:12px;margin-left:auto}:host .review-option{font-size:13px;color:#888;margin-bottom:4px}:host .review-features{margin-bottom:6px;font-size:13px;color:#009688}:host .review-feature{margin-right:10px}:host .feature-label{font-weight:500;margin-right:2px}:host .feature-value{color:#333}:host .review-content{margin-bottom:8px;word-break:break-all;white-space:pre-line;font-size:15px}:host .review-actions{display:flex;gap:10px;margin-top:8px}:host .review-actions button{border:1px solid #ddd;background:#fafafa;border-radius:4px;padding:4px 10px;cursor:pointer;font-size:13px}:host .review-report{color:#888;background:none;border:none;cursor:pointer;padding:0 6px}:host .review-empty{background:#eee;width:100%;height:200px;padding:0;display:flex;align-items:center;justify-content:center;color:#888;font-size:16px}";
function it(r) {
  return r.includes("?") ? "&" : "?";
}
function Bt(r, t) {
  return t ? `${it(r)}rs=${t}x0` : "";
}
function qt(r, t) {
  return t ? `${it(r)}sharpen=0x${t}` : "";
}
function Vt(r, t, e, s) {
  const i = it(r);
  return s === "webp" && t ? `${i}qt=${e}&sf=webp` : s && s !== "webp" ? `${i}qt=${e}&sf=${s}` : `${i}qt=${e}`;
}
function Wt({ src: r, fallbackSrc: t, imgWidth: e, imgSaveFormat: s = "webp", sigma: i }, n = !0) {
  let h = r;
  return h ? (e && (h += Bt(h, e)), h += Vt(h, n, 85, s), s === "webp" && (h += qt(h, i)), h) : t || "";
}
function Jt(r, t = !0) {
  const { src: e, alt: s, fallbackSrc: i, imgWidth: n, style: o = "", className: h = "", ...a } = r, c = Wt(r, t);
  return E`<img
    src="${c}"
    alt="${s}"
    style="width:100%;height:100%;object-fit:cover;${o}"
    class="${h}"
    loading="lazy"
    ...=${a}
  />`;
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Qt = { CHILD: 2 }, Ft = (r) => (...t) => ({ _$litDirective$: r, values: t });
class Kt {
  constructor(t) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, e, s) {
    this._$Ct = t, this._$AM = e, this._$Ci = s;
  }
  _$AS(t, e) {
    return this.update(t, e);
  }
  update(t, e) {
    return this.render(...e);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class Q extends Kt {
  constructor(t) {
    if (super(t), this.it = p, t.type !== Qt.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(t) {
    if (t === p || t == null) return this._t = void 0, this.it = t;
    if (t === w) return t;
    if (typeof t != "string") throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (t === this.it) return this._t;
    this.it = t;
    const e = [t];
    return e.raw = e, this._t = { _$litType$: this.constructor.resultType, strings: e, values: [] };
  }
}
Q.directiveName = "unsafeHTML", Q.resultType = 1;
const Zt = Ft(Q), Gt = ":host{display:block}:host .filter{width:100%;padding:20px 15px}:host .filter button{position:relative;display:block;width:100%;box-sizing:border-box;display:flex;align-items:center;justify-content:center;height:50px;border-radius:4px;font-size:15px;line-height:18px;letter-spacing:0;border:1px solid #000}";
var Xt = Object.getOwnPropertyDescriptor, Yt = (r, t, e, s) => {
  for (var i = s > 1 ? void 0 : s ? Xt(t, e) : t, n = r.length - 1, o; n >= 0; n--)
    (o = r[n]) && (i = o(i) || i);
  return i;
};
let F = class extends b {
  render() {
    return E`
      <div class="filter">
        <button @click=${this._onClick}>필터</button>
      </div>
    `;
  }
  _onClick() {
    this.dispatchEvent(
      new CustomEvent("filter-click", {
        bubbles: !0,
        composed: !1
      })
    );
  }
};
F.styles = [
  st,
  I`
      ${G(Gt)}
    `
];
F = Yt([
  tt("option-filter-button")
], F);
var te = Object.defineProperty, ee = Object.getOwnPropertyDescriptor, C = (r, t, e, s) => {
  for (var i = s > 1 ? void 0 : s ? ee(t, e) : t, n = r.length - 1, o; n >= 0; n--)
    (o = r[n]) && (i = (s ? o(t, e, i) : o(i)) || i);
  return s && i && te(t, e, i), i;
};
let v = class extends b {
  constructor() {
    super(), this.goodsNo = "", this.isVisible = "on", this.reviews = [], this.pageSize = 5, this.pageNumber = 0, this.handleFilterClick = (r) => {
      console.log("filter!"), this.pageNumber++, this.fetchReviewData();
    };
  }
  fetchReviewData() {
    fetch(`https://mapi-dev.oliveyoung.co.kr/review/api/v1/reviews/${this.goodsNo}/public?pageNumber=${this.pageNumber}&pageSize=${this.pageSize}`).then((r) => r.json()).then((r) => {
      r && Array.isArray(r.data) ? (this.reviews = (r.data || []).map((t) => ({
        reviewId: t.reviewId,
        score: typeof t.score == "number" ? t.score : 0,
        createdDateTime: t.createdDateTime ? t.createdDateTime.split(" ")[0] : "",
        content: t.content || "",
        avatar: Array.isArray(t.photoReviews) && t.photoReviews.length > 0 ? `https://image.oliveyoung.co.kr/uploads/review/${t.photoReviews[0].imagePath}` : void 0,
        likes: 0
      })), this.requestUpdate()) : console.error("error:", r);
    }).catch((r) => {
      console.error("error:", r);
    });
  }
  connectedCallback() {
    super.connectedCallback(), this.fetchReviewData();
  }
  handleClick() {
    this.pageNumber++, this.fetchReviewData();
  }
  handleLikeClick(r) {
    const t = [...this.reviews];
    t[r] = {
      ...t[r],
      likes: (t[r].likes || 0) + 1
    }, this.reviews = t, this.requestUpdate();
  }
  firstUpdated() {
    this.addEventListener("filter-click", this.handleFilterClick);
  }
  updated(r) {
    var t;
    (t = super.updated) == null || t.call(this, r), r.has("goodsNo") && (console.log("update: goodsNo"), this.fetchReviewData()), r.has("isVisible") && this.requestUpdate();
  }
  render() {
    return this.isVisible === "off" ? null : E`
      <slot></slot>
      <div style="padding: 0 15px;">상품 번호 : ${this.goodsNo}</div>
      <div class="review-list">
        ${this.reviews.length === 0 ? E`<div class="review-empty">리뷰 없음</div>` : this.reviews.map(
      (r, t) => E`
                <div class="review-card">
                  <div class="review-header">
                    <span class="review-avatar">
                      ${r.avatar ? Jt({
        src: "https://image.oliveyoung.co.kr/uploads/images/mbrProfile/2025/06/05/1749085529195.png?RS=0x0&QT=60&SF=webp",
        alt: "리뷰 사진",
        fallbackSrc: "/placeholder.png"
      }) : ""}
                    </span>
                    ${Zt(
        `<script type="application/ld+json">${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Review",
          reviewBody: r.content,
          reviewRating: { "@type": "Rating", ratingValue: r.score },
          author: { "@type": "Person", name: "익명" },
          datePublished: r.createdDateTime || void 0
        })}<\/script>`
      )}
                    <span class="review-score">
                      ${(() => {
        const e = Math.round(r.score / 10 * 5 * 2) / 2, s = Math.floor(e), i = e % 1 >= 0.5;
        return `${"★".repeat(s)}${i ? "☆" : ""}${"☆".repeat(5 - s - (i ? 1 : 0))}`;
      })()}
                      <span class="review-score-num">${r.score}</span>
                    </span>
                    <span class="review-date">${r.createdDateTime}</span>
                  </div>
                  <div class="review-content">${r.content}</div>
                  <div class="review-actions">
                    <button @click=${() => this.handleLikeClick(t)}>이 리뷰가 도움이 돼요! <span>${r.likes}</span></button>
                    <button class="review-report">신고하기</button>
                  </div>
                </div>
              `
    )}
      </div>
    `;
  }
};
v.styles = [
  st,
  I`
      ${G(Lt)}
    `
];
C([
  B({ type: String })
], v.prototype, "goodsNo", 2);
C([
  B({ type: String })
], v.prototype, "isVisible", 2);
C([
  et()
], v.prototype, "reviews", 2);
C([
  et()
], v.prototype, "pageSize", 2);
C([
  et()
], v.prototype, "pageNumber", 2);
v = C([
  tt("review-in-catalog")
], v);
var se = Object.defineProperty, ie = Object.getOwnPropertyDescriptor, yt = (r, t, e, s) => {
  for (var i = s > 1 ? void 0 : s ? ie(t, e) : t, n = r.length - 1, o; n >= 0; n--)
    (o = r[n]) && (i = (s ? o(t, e, i) : o(i)) || i);
  return s && i && se(t, e, i), i;
};
let j = class extends b {
  constructor() {
    super(...arguments), this._onBlackBoxClick = () => {
      this.dispatchEvent(
        new CustomEvent("blackbox-click", {
          bubbles: !0,
          composed: !0
          // shadow root 바깥까지 이벤트가 전달됨
        })
      );
    };
  }
  render() {
    return E`
      <div class="black-box" @click=${this._onBlackBoxClick}>
        외부 연동 커스텀 이벤트 ${this.testObj ? JSON.stringify(this.testObj, null, 2) : ""}
      </div>
    `;
  }
};
j.styles = [
  st,
  I`
      .black-box {
        background: #111111;
        color: #fff;
        text-align: center;
        padding: 15px 0;
      }
    `
];
yt([
  B({ type: Object })
], j.prototype, "testObj", 2);
j = yt([
  tt("black-box-item")
], j);
export {
  j as BlackBoxItem,
  v as ReviewInCatalog
};
