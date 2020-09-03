const data = [
    [
        {'type' :'a', 'rate': 5}
    ],
    [
        {'type' :'a', 'rate': 7},
        {'type' :'b', 'rate': 2},
        {'type' :'c', 'rate': 4}
    ],
    [
        {'type' :'b', 'rate': 1},
        {'type' :'c', 'rate': 4}
    ],
    [
        {'type' :'a', 'rate': 8},
        {'type' :'c', 'rate': 4}
    ]
]

const option = data.reduce((acc, item) => {
    acc.concat(item.option)
}, [])
console.log(option)