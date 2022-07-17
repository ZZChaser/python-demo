self.onmessage = function (a, b) {
  a.data && (a = a.data);
  var c = a.dat,
    d = a.par,
    e = [],
    f = [],
    g = [],
    h = a.df,
    i = a.t_id,
    j = a.t_cnt,
    k = a.m,
    l = k[d],
    m = a.sel,
    n,
    o,
    p,
    q,
    r = function (a, c, d) {
      (d = d ? d.concat() : []), c && d.unshift(c);
      var e = a.id.toString(),
        f,
        i,
        j,
        l,
        m = {
          id: e,
          text: a.text || "",
          icon: a.icon !== b ? a.icon : !0,
          parent: c,
          parents: d,
          children: a.children || [],
          children_d: a.children_d || [],
          data: a.data,
          state: {},
          li_attr: { id: !1 },
          a_attr: { href: "#" },
          original: !1,
        };
      for (f in h) h.hasOwnProperty(f) && (m.state[f] = h[f]);
      if (
        (a &&
          a.data &&
          a.data.jstree &&
          a.data.jstree.icon &&
          (m.icon = a.data.jstree.icon),
        (m.icon === b || null === m.icon || "" === m.icon) && (m.icon = !0),
        a && a.data && ((m.data = a.data), a.data.jstree))
      )
        for (f in a.data.jstree)
          a.data.jstree.hasOwnProperty(f) && (m.state[f] = a.data.jstree[f]);
      if (a && "object" == typeof a.state)
        for (f in a.state)
          a.state.hasOwnProperty(f) && (m.state[f] = a.state[f]);
      if (a && "object" == typeof a.li_attr)
        for (f in a.li_attr)
          a.li_attr.hasOwnProperty(f) && (m.li_attr[f] = a.li_attr[f]);
      if (
        (m.li_attr.id || (m.li_attr.id = e), a && "object" == typeof a.a_attr)
      )
        for (f in a.a_attr)
          a.a_attr.hasOwnProperty(f) && (m.a_attr[f] = a.a_attr[f]);
      for (
        a &&
          a.children &&
          a.children === !0 &&
          ((m.state.loaded = !1), (m.children = []), (m.children_d = [])),
          k[m.id] = m,
          f = 0,
          i = m.children.length;
        i > f;
        f++
      )
        (j = r(k[m.children[f]], m.id, d)),
          (l = k[j]),
          m.children_d.push(j),
          l.children_d.length &&
            (m.children_d = m.children_d.concat(l.children_d));
      return (
        delete a.data,
        delete a.children,
        (k[m.id].original = a),
        m.state.selected && g.push(m.id),
        m.id
      );
    },
    s = function (a, c, d) {
      (d = d ? d.concat() : []), c && d.unshift(c);
      var e = !1,
        f,
        l,
        m,
        n,
        o;
      do e = "j" + i + "_" + ++j;
      while (k[e]);
      o = {
        id: !1,
        text: "string" == typeof a ? a : "",
        icon: "object" == typeof a && a.icon !== b ? a.icon : !0,
        parent: c,
        parents: d,
        children: [],
        children_d: [],
        data: null,
        state: {},
        li_attr: { id: !1 },
        a_attr: { href: "#" },
        original: !1,
      };
      for (f in h) h.hasOwnProperty(f) && (o.state[f] = h[f]);
      if (
        (a && a.id && (o.id = a.id.toString()),
        a && a.text && (o.text = a.text),
        a &&
          a.data &&
          a.data.jstree &&
          a.data.jstree.icon &&
          (o.icon = a.data.jstree.icon),
        (o.icon === b || null === o.icon || "" === o.icon) && (o.icon = !0),
        a && a.data && ((o.data = a.data), a.data.jstree))
      )
        for (f in a.data.jstree)
          a.data.jstree.hasOwnProperty(f) && (o.state[f] = a.data.jstree[f]);
      if (a && "object" == typeof a.state)
        for (f in a.state)
          a.state.hasOwnProperty(f) && (o.state[f] = a.state[f]);
      if (a && "object" == typeof a.li_attr)
        for (f in a.li_attr)
          a.li_attr.hasOwnProperty(f) && (o.li_attr[f] = a.li_attr[f]);
      if (
        (o.li_attr.id && !o.id && (o.id = o.li_attr.id.toString()),
        o.id || (o.id = e),
        o.li_attr.id || (o.li_attr.id = o.id),
        a && "object" == typeof a.a_attr)
      )
        for (f in a.a_attr)
          a.a_attr.hasOwnProperty(f) && (o.a_attr[f] = a.a_attr[f]);
      if (a && a.children && a.children.length) {
        for (f = 0, l = a.children.length; l > f; f++)
          (m = s(a.children[f], o.id, d)),
            (n = k[m]),
            o.children.push(m),
            n.children_d.length &&
              (o.children_d = o.children_d.concat(n.children_d));
        o.children_d = o.children_d.concat(o.children);
      }
      return (
        a &&
          a.children &&
          a.children === !0 &&
          ((o.state.loaded = !1), (o.children = []), (o.children_d = [])),
        delete a.data,
        delete a.children,
        (o.original = a),
        (k[o.id] = o),
        o.state.selected && g.push(o.id),
        o.id
      );
    };
  if (c.length && c[0].id !== b && c[0].parent !== b) {
    for (o = 0, p = c.length; p > o; o++)
      c[o].children || (c[o].children = []),
        c[o].state || (c[o].state = {}),
        (k[c[o].id.toString()] = c[o]);
    for (o = 0, p = c.length; p > o; o++)
      k[c[o].parent.toString()]
        ? (k[c[o].parent.toString()].children.push(c[o].id.toString()),
          l.children_d.push(c[o].id.toString()))
        : ((this._data.core.last_error = {
            error: "parse",
            plugin: "core",
            id: "core_07",
            reason: "Node with invalid parent",
            data: JSON.stringify({
              id: c[o].id.toString(),
              parent: c[o].parent.toString(),
            }),
          }),
          this.settings.core.error.call(this, this._data.core.last_error));
    for (o = 0, p = l.children.length; p > o; o++)
      (n = r(k[l.children[o]], d, l.parents.concat())),
        f.push(n),
        k[n].children_d.length && (f = f.concat(k[n].children_d));
    for (o = 0, p = l.parents.length; p > o; o++)
      k[l.parents[o]].children_d = k[l.parents[o]].children_d.concat(f);
    q = { cnt: j, mod: k, sel: m, par: d, dpc: f, add: g };
  } else {
    for (o = 0, p = c.length; p > o; o++)
      (n = s(c[o], d, l.parents.concat())),
        n &&
          (e.push(n),
          f.push(n),
          k[n].children_d.length && (f = f.concat(k[n].children_d)));
    for (
      l.children = e, l.children_d = f, o = 0, p = l.parents.length;
      p > o;
      o++
    )
      k[l.parents[o]].children_d = k[l.parents[o]].children_d.concat(f);
    q = { cnt: j, mod: k, sel: m, par: d, dpc: f, add: g };
  }
  return "undefined" != typeof window && "undefined" != typeof window.document
    ? q
    : void postMessage(q);
};
