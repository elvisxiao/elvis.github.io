(self.webpackChunk = self.webpackChunk || []).push([
    [179],
    {
        6794: function () {
            0;
        },
        9381: function (e) {
            e.exports = {timeline: 'timeline__RLvHV'};
        },
        7184: function (e) {
            e.exports = {lineTop: 'lineTop__SNt_h'};
        },
        8301: function (e) {
            e.exports = {container: 'container__ipAJE'};
        },
        9216: function (e) {
            e.exports = {searchForm: 'searchForm__ResYC'};
        },
        2900: function (e) {
            e.exports = {timeline: 'timeline__PtwdO'};
        },
        5409: function (e) {
            e.exports = {};
        },
        581: function (e, t, n) {
            'use strict';
            n(4063);
            var a = n(7940),
                l = n(4631),
                r = n(5409),
                s = n.n(r),
                c = n(6400),
                i = n(4061),
                u = n(5913),
                m = n(5816),
                o = n(8127),
                d = n(9216),
                E = n.n(d);
            const {Option: p} = c.Z;
            var h = (e) => {
                    const {handleSubmit: t} = e;
                    return a.createElement(
                        i.Z,
                        {
                            initialValues: {remember: !0},
                            autoComplete: 'off',
                            layout: 'inline',
                            size: 'small',
                            onFinish: (e) => {
                                console.log('Received values of form: ', e),
                                    t(e);
                            },
                            className: E().searchForm,
                        },
                        a.createElement(
                            i.Z.Item,
                            {
                                label: '品牌',
                                name: 'brand',
                                rules: [{required: !0, message: '品牌必选'}],
                            },
                            a.createElement(
                                c.Z,
                                {
                                    defaultValue: '',
                                    style: {width: 80},
                                    onChange: () => {},
                                },
                                a.createElement(p, {value: ''}, '请选择'),
                                a.createElement(p, {value: 'jack'}, 'Jack'),
                                a.createElement(p, {value: 'lucy'}, 'Lucy'),
                                a.createElement(
                                    p,
                                    {value: 'Yiminghe'},
                                    'yiminghe',
                                ),
                            ),
                        ),
                        a.createElement(
                            i.Z.Item,
                            {
                                label: '分析仓库',
                                name: 'password',
                                rules: [{required: !0, message: '仓库必选'}],
                            },
                            a.createElement(
                                c.Z,
                                {
                                    defaultValue: '',
                                    style: {width: 100},
                                    onChange: () => {},
                                },
                                a.createElement(p, {value: ''}, '请选择'),
                                a.createElement(p, {value: 'jack'}, 'Jack'),
                                a.createElement(p, {value: 'lucy'}, 'Lucy'),
                                a.createElement(
                                    p,
                                    {value: 'Yiminghe'},
                                    'yiminghe',
                                ),
                            ),
                        ),
                        a.createElement(
                            i.Z.Item,
                            {label: '销售区域', name: 'password'},
                            a.createElement(
                                c.Z,
                                {
                                    defaultValue: '',
                                    style: {width: 100},
                                    onChange: () => {},
                                },
                                a.createElement(p, {value: ''}, '请选择'),
                                a.createElement(p, {value: 'jack'}, 'Jack'),
                                a.createElement(p, {value: 'lucy'}, 'Lucy'),
                                a.createElement(
                                    p,
                                    {value: 'Yiminghe'},
                                    'yiminghe',
                                ),
                            ),
                        ),
                        a.createElement(
                            i.Z.Item,
                            {label: '店铺', name: 'password'},
                            a.createElement(
                                c.Z,
                                {
                                    defaultValue: '',
                                    style: {width: 100},
                                    onChange: () => {},
                                },
                                a.createElement(p, {value: ''}, '请选择'),
                                a.createElement(p, {value: 'jack'}, 'Jack'),
                                a.createElement(p, {value: 'lucy'}, 'Lucy'),
                                a.createElement(
                                    p,
                                    {value: 'Yiminghe'},
                                    'yiminghe',
                                ),
                            ),
                        ),
                        a.createElement(
                            i.Z.Item,
                            {
                                label: '型号',
                                name: '型号',
                                valuePropName: 'checked',
                            },
                            a.createElement(u.Z, {
                                type: 'text',
                                style: {width: 100},
                            }),
                        ),
                        a.createElement(
                            i.Z.Item,
                            {
                                label: '周数',
                                name: '型号',
                                valuePropName: 'checked',
                            },
                            a.createElement(u.Z, {
                                type: 'number',
                                style: {width: 60},
                            }),
                        ),
                        a.createElement(
                            i.Z.Item,
                            null,
                            a.createElement(
                                m.Z,
                                {type: 'primary', htmlType: 'submit'},
                                '查询',
                            ),
                            a.createElement(
                                m.Z,
                                {type: 'default', style: {margin: '0 16px'}},
                                '保存',
                            ),
                            a.createElement('label', null, '未结订单：'),
                            a.createElement(o.Z, {
                                checkedChildren: '开启',
                                unCheckedChildren: '关闭',
                                defaultChecked: !0,
                            }),
                        ),
                    );
                },
                k = n(8965),
                g = n(8785),
                y = n(8301),
                v = n.n(y),
                w = (e) => {
                    const {defaultValue: t = 0, onChange: n} = e,
                        [l, r] = (0, a.useState)(t),
                        s = (e) => {
                            const t = l + e;
                            t >= 0 && t < 2 && (r(t), n && n(t));
                        };
                    return a.createElement(
                        'div',
                        {className: v().container},
                        a.createElement(k.Z, {onClick: () => s(-1)}),
                        a.createElement(
                            'span',
                            {style: {margin: '0 8px'}},
                            l + 1,
                            '/2',
                        ),
                        a.createElement(g.Z, {onClick: () => s(1)}),
                    );
                };
            function b(e) {
                return 5 === new Date(e).getDay();
            }
            var f = n(2900),
                C = n.n(f);
            var S = (e) => {
                    const t = Date.now(),
                        {weeks: n, size: l} = e,
                        r = 7 * n,
                        s = (e) => {
                            const t = new Date(e),
                                n = t.getMonth() + 1,
                                l = t.getDate(),
                                r = t.getDay(),
                                {weekIndex: s, weekStr: c} = (function (
                                    e = new Date(),
                                ) {
                                    const t = e.getFullYear(),
                                        n = new Date(t, 0, 1),
                                        a = Math.round(
                                            (e.valueOf() - n.valueOf()) / 864e5,
                                        ),
                                        l = Math.ceil(
                                            (a + (n.getDay() + 1 - 1)) / 7,
                                        );
                                    return {
                                        year: t,
                                        weekIndex: l,
                                        weekStr: `${t}${
                                            l < 10
                                                ? '0' + l.toString()
                                                : l.toString()
                                        }`,
                                    };
                                })(new Date(e));
                            return a.createElement(
                                'label',
                                {
                                    className:
                                        'timeline-item ' +
                                        (6 === r ? 'week-begin' : ''),
                                },
                                a.createElement('span', null, n, '/', l),
                                2 === r
                                    ? a.createElement(
                                          'span',
                                          {className: 'weektag'},
                                          c,
                                      )
                                    : null,
                            );
                        };
                    return a.createElement(
                        'div',
                        {className: C().timeline, 'data-size': l},
                        (() => {
                            const e = [];
                            for (let n = 0; n < r; n++)
                                e.push(s(t + 864e5 * n));
                            return e;
                        })(),
                    );
                },
                P = 8,
                I = 3,
                N = n(7251),
                D = n(6661),
                Z = n(9381),
                x = n.n(Z);
            const _ = 864e5;
            var O = (e) => {
                    const t = new Date().toISOString().slice(0, 10),
                        n = new Date(t).getTime(),
                        {
                            weeks: l,
                            size: r,
                            stockItem: s,
                            onStockItemChange: c,
                        } = e,
                        {
                            baseCount: i,
                            basePs: u,
                            weekRatios: m = [],
                            arriveData: o = [],
                        } = s || {};
                    console.log('stock item:', s);
                    const d = 7 * l,
                        E = (e) => {
                            const {
                                    currentDay: t,
                                    currentCount: n,
                                    currentArriveData: l,
                                    currentWeekIndex: r,
                                    remainDays: i,
                                } = e,
                                o = b(t),
                                d = m[r] || 1,
                                E = new Date(t).getDay(),
                                p = l.map((e) =>
                                    a.createElement(
                                        'span',
                                        {
                                            className: 'badge',
                                            key: e.id,
                                            'data-status':
                                                e.status || 'default',
                                            'data-priority':
                                                e.isPriorityShipping,
                                            'data-qc': e.isQC,
                                        },
                                        e.isPriorityShipping
                                            ? a.createElement(N.Z, null)
                                            : null,
                                        '+',
                                        e.count,
                                        e.isQC && e.isMatched
                                            ? null
                                            : a.createElement(
                                                  'span',
                                                  {
                                                      className: 'angle',
                                                      'data-isMatched':
                                                          e.isMatched,
                                                  },
                                                  a.createElement(D.Z, null),
                                              ),
                                    ),
                                );
                            let h = 'green';
                            return (
                                i < 1
                                    ? (h = 'gray')
                                    : i <= I
                                    ? (h = 'red')
                                    : i <= P && (h = 'yellow'),
                                a.createElement(
                                    'label',
                                    {
                                        className:
                                            'timeline-item ' +
                                            (o ? 'week-begin' : ''),
                                        'data-color': h,
                                        'data-day': E,
                                    },
                                    o
                                        ? a.createElement(
                                              'span',
                                              {className: 'item-top'},
                                              a.createElement('input', {
                                                  type: 'text',
                                                  value: d,
                                                  onChange: (e) =>
                                                      ((e, t, n) => {
                                                          const a =
                                                              e.target.value;
                                                          /^[\d|.]+$/.test(a) &&
                                                              (m[n] = a),
                                                              c(s);
                                                      })(e, 0, r),
                                              }),
                                              a.createElement(
                                                  'em',
                                                  null,
                                                  Math.floor(d * u),
                                              ),
                                          )
                                        : null,
                                    a.createElement('span', {className: 'dot'}),
                                    a.createElement(
                                        'span',
                                        {className: 'count'},
                                        n,
                                    ),
                                    a.createElement(
                                        'span',
                                        {className: 'arrive-container'},
                                        p,
                                    ),
                                )
                            );
                        },
                        p = (e, t, n) => {
                            let a = 0,
                                l = t,
                                r = n,
                                s = e + _;
                            for (; l > 0; ) {
                                b(s) && r++;
                                const e = m[r] || 1;
                                (l -= Math.floor(e * u)), a++, (s += _);
                            }
                            return a;
                        };
                    return a.createElement(
                        'div',
                        {className: x().timeline, 'data-size': r},
                        (() => {
                            const e = [];
                            let t = i,
                                a = 0;
                            for (let l = 0; l < d; l++) {
                                const r = n + l * _,
                                    s = b(r);
                                0 !== l && s && a++;
                                const c = o.filter(
                                        (e) => new Date(e.date).getTime() === r,
                                    ),
                                    i = Math.floor(u * (m[a] || 1));
                                (t = 0 === l ? t : t - i),
                                    c.forEach((e) => (t += e.count));
                                const d = p(r, t, a);
                                e.push(
                                    E({
                                        currentDay: r,
                                        currentArriveData: c,
                                        currentCount: t,
                                        currentWeekIndex: a,
                                        remainDays: d,
                                    }),
                                );
                            }
                            return e;
                        })(),
                    );
                },
                M = n(7184),
                Q = n.n(M);
            const {Option: L} = c.Z;
            var T = (e) => {
                    const {
                            scrollLeft: t,
                            stockItem: n,
                            onStockItemChange: l,
                        } = e,
                        {
                            skuName: r,
                            rps: s,
                            mps: c,
                            saleEventPs: i,
                            week1: m,
                            week2: o,
                            week3: d,
                            week4: E,
                            shipped: p,
                            orderPedding: h,
                            sellable: k,
                            turnover: g,
                            baseCount: y,
                            basePs: v,
                        } = n || {};
                    return a.createElement(
                        'table',
                        {
                            className: Q().lineTop,
                            style: {transform: `translateX(${t}px)`},
                        },
                        a.createElement(
                            'thead',
                            null,
                            a.createElement(
                                'tr',
                                null,
                                a.createElement('th', null, '型系'),
                                a.createElement('th', null, 'SKU'),
                                a.createElement('th', null, 'Base PS'),
                                a.createElement('th', null, 'RPS'),
                                a.createElement('th', null, 'MPS'),
                                a.createElement('th', null, 'Sale Event PS'),
                                a.createElement('th', null, '-1'),
                                a.createElement('th', null, '-2'),
                                a.createElement('th', null, '-3'),
                                a.createElement('th', null, '-4'),
                                a.createElement('th', null, 'Shipped'),
                                a.createElement('th', null, 'Order Pending'),
                                a.createElement('th', null, 'Sellable'),
                                a.createElement('th', null, '计总Turnover'),
                                a.createElement(
                                    'th',
                                    null,
                                    a.createElement(
                                        'button',
                                        null,
                                        '查看预测曲线',
                                    ),
                                ),
                            ),
                        ),
                        a.createElement(
                            'tbody',
                            null,
                            a.createElement(
                                'tr',
                                null,
                                a.createElement('td', null, '型号'),
                                a.createElement('td', null, r),
                                a.createElement(
                                    'td',
                                    null,
                                    a.createElement(u.Z, {
                                        type: 'number',
                                        style: {width: 60},
                                        value: v,
                                        step: '1',
                                        min: '0',
                                        onChange: (e) =>
                                            l(
                                                Object.assign(
                                                    Object.assign({}, n),
                                                    {
                                                        basePs: parseInt(
                                                            e.target.value,
                                                        ),
                                                    },
                                                ),
                                            ),
                                    }),
                                ),
                                a.createElement('td', null, s),
                                a.createElement('td', null, c),
                                a.createElement('td', null, i),
                                a.createElement('td', null, m),
                                a.createElement('td', null, o),
                                a.createElement('td', null, d),
                                a.createElement('td', null, E),
                                a.createElement('td', null, p),
                                a.createElement('td', null, h),
                                a.createElement('td', null, k),
                                a.createElement('td', null, g),
                                a.createElement(
                                    'td',
                                    null,
                                    a.createElement(
                                        'button',
                                        null,
                                        '查看预测准确率',
                                    ),
                                ),
                            ),
                        ),
                    );
                },
                R = {
                    page: 1,
                    pageCount: 20,
                    searchWeeks: 10,
                    stockItems: [
                        {
                            skuName: 'sku1',
                            basePs: 50,
                            rps: 40,
                            mps: 77.7,
                            saleEventPs: 16.19,
                            week1: 50,
                            week2: 48,
                            week3: 60,
                            week4: 45,
                            shipped: 1500,
                            orderPedding: 2,
                            sellable: 1055,
                            turnover: 93.36,
                            baseCount: 1e3,
                            weekRatios: [1.1, 1.2],
                            arriveData: [
                                {
                                    id: '1',
                                    date: '2022-04-12',
                                    count: 500,
                                    status: 'air',
                                    isPriorityShipping: !0,
                                    isQC: !0,
                                },
                                {
                                    id: '2',
                                    date: '2022-04-20',
                                    count: 800,
                                    status: 'sea',
                                    isPriorityShipping: !1,
                                    isQC: !1,
                                },
                                {
                                    id: '3',
                                    date: '2022-04-21',
                                    count: 400,
                                    status: 'applying',
                                    isPriorityShipping: !0,
                                    isQC: !1,
                                },
                                {
                                    id: '4',
                                    date: '2022-04-24',
                                    count: 600,
                                    status: 'outstanding',
                                    isPriorityShipping: !1,
                                    isQC: !0,
                                },
                            ],
                        },
                        {
                            skuName: 'sku2',
                            basePs: 80,
                            rps: 40,
                            mps: 77.7,
                            saleEventPs: 16.19,
                            week1: 50,
                            week2: 48,
                            week3: 60,
                            week4: 45,
                            shipped: 1500,
                            orderPedding: 2,
                            sellable: 1055,
                            turnover: 93.36,
                            baseCount: 1e3,
                            weekRatios: [1.1, 1.2],
                            arriveData: [
                                {
                                    id: '1',
                                    date: '2022-04-12',
                                    count: 500,
                                    status: 'sea',
                                    isPriorityShipping: !0,
                                    isQC: !0,
                                },
                                {
                                    id: '2',
                                    date: '2022-04-20',
                                    count: 800,
                                    status: 'sea',
                                    isPriorityShipping: !1,
                                    isQC: !1,
                                },
                                {
                                    id: '3',
                                    date: '2022-04-21',
                                    count: 400,
                                    status: 'sea',
                                    isPriorityShipping: !0,
                                    isQC: !1,
                                },
                                {
                                    id: '4',
                                    date: '2022-04-24',
                                    count: 600,
                                    status: 'sea',
                                    isPriorityShipping: !1,
                                    isQC: !0,
                                },
                            ],
                        },
                        {
                            skuName: 'sku3',
                            basePs: 140,
                            rps: 40,
                            mps: 77.7,
                            saleEventPs: 16.19,
                            week1: 50,
                            week2: 48,
                            week3: 60,
                            week4: 45,
                            shipped: 1500,
                            orderPedding: 2,
                            sellable: 1055,
                            turnover: 93.36,
                            baseCount: 2e3,
                            weekRatios: [1.1, 1.2],
                            arriveData: [
                                {date: '2022-04-12', count: 500},
                                {date: '2022-04-20', count: 800},
                                {date: '2022-04-21', count: 400},
                                {date: '2022-04-24', count: 600},
                            ],
                        },
                    ],
                };
            l.render(
                a.createElement(() => {
                    const [e, t] = (0, a.useState)(),
                        [n, l] = (0, a.useState)(0),
                        [r, c] = (0, a.useState)('normal');
                    (0, a.useEffect)(() => {
                        let e;
                        t(R),
                            document.body.addEventListener('scroll', () => {
                                clearTimeout(e),
                                    (e = setTimeout(() => {
                                        l(document.body.scrollLeft);
                                    }, 300));
                            });
                    }, []);
                    const i = (n) => {
                        const a =
                            null == e
                                ? void 0
                                : e.stockItems.findIndex(
                                      (e) => e.skuName === n.skuName,
                                  );
                        null == e || e.stockItems.splice(a, 1, n);
                        const l = Object.assign({}, e);
                        t(l);
                    };
                    return a.createElement(
                        'div',
                        {className: s().container},
                        a.createElement(h, {
                            handleSubmit: (e) => {
                                t(R);
                            },
                        }),
                        (() => {
                            const {searchWeeks: t, stockItems: l = []} =
                                e || {};
                            if (!e || !t || !l.length) return null;
                            console.log('render lines');
                            const s = l.map((e) =>
                                a.createElement(
                                    a.Fragment,
                                    null,
                                    a.createElement(T, {
                                        key: e.skuName + '_table',
                                        stockItem: e,
                                        scrollLeft: n,
                                        onStockItemChange: i,
                                    }),
                                    a.createElement(O, {
                                        key: e.skuName + '_line',
                                        weeks: t,
                                        stockItem: e,
                                        size: r,
                                        onStockItemChange: i,
                                    }),
                                ),
                            );
                            return a.createElement(
                                a.Fragment,
                                null,
                                a.createElement(w, {
                                    onChange: (e) =>
                                        c(0 === e ? 'normal' : 'lg'),
                                }),
                                a.createElement(S, {weeks: t, size: r}),
                                s,
                            );
                        })(),
                    );
                }, null),
                document.getElementById('root'),
            );
        },
    },
    function (e) {
        var t = function (t) {
            return e((e.s = t));
        };
        e.O(0, [736], function () {
            return t(581), t(6794);
        });
        e.O();
    },
]);
