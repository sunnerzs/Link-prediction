var dataAll = [
    [
        [
            [25, 98.6700],
            [50, 98.4600],
            [75, 98.6200],
            [100, 98.7100],
            [125, 98.6900],
            [150, 98.6900],
            [175, 98.5900],
            [200, 98.5400],
            [225, 98.4500],
            [250, 98.6700],
        ],
        [
            [25, 93.3600],
            [50, 86.9200],
            [75, 81.6800],
            [100, 77.2700],
            [125, 75.1300],
            [150, 73.2100],
            [175, 73.5000],
            [200, 72.9600],
            [225, 71.7300],
            [250, 71.9700],
        ],
        [
            [25, 94.3500],
            [50, 91.7300],
            [75, 91.1100],
            [100, 90.5400],
            [125, 90.4500],
            [150, 89.3900],
            [175, 89.5400],
            [200, 89.9800],
            [225, 89.7300],
            [250, 89.6500],
        ],
        [
            [25, 95.5500],
            [50, 90.9900],
            [75, 86.3400],
            [100, 82.7850],
            [125, 77.9700],
            [150, 77.1900],
            [175, 75.0500],
            [200, 74.7250],
            [225, 74.6400],
            [250, 74.3700],
        ],
    ],
    [
        [
            [25, 93.0700],
            [50, 95.6000],
            [75, 95.5800],
            [100, 95.0000],
            [125, 95.3600],
            [150, 95.3100],
            [175, 95.2800],
            [200, 96.0300],
            [225, 95.5800],
            [250, 94.9800],
        ],
        [
            [25, 81.2100],
            [50, 75.7700],
            [75, 75.2800],
            [100, 74.9500],
            [125, 73.2600],
            [150, 73.4600],
            [175, 74.1100],
            [200, 75.1700],
            [225, 74.3700],
            [250, 75.0900],
        ],
        [
            [25, 81.8300],
            [50, 80.4800],
            [75, 80.5700],
            [100, 81.1100],
            [125, 81.0300],
            [150, 80.8900],
            [175, 81.3900],
            [200, 82.4300],
            [225, 81.7200],
            [250, 82.3200],
        ],
        [
            [25, 83.0900],
            [50, 80.9900],
            [75, 80.0500],
            [100, 79.2700],
            [125, 78.8000],
            [150, 77.6900],
            [175, 77.3000],
            [200, 78.1400],
            [225, 77.7700],
            [250, 78.6000],
        ],
    ],
    [
        [
            [25, 98.5200],
            [50, 98.2400],
            [75, 98.4800],
            [100, 98.6150],
            [125, 98.5600],
            [150, 98.5050],
            [175, 98.3800],
            [200, 98.5650],
            [225, 98.3700],
            [250, 98.6600],
        ],
        [
            [25, 97.2000],
            [50, 95.2400],
            [75, 93.4550],
            [100, 91.8750],
            [125, 91.0450],
            [150, 90.5500],
            [175, 89.9350],
            [200, 90.0900],
            [225, 89.5000],
            [250, 89.6050],
        ],
        [
            [25, 98.0700],
            [50, 97.6200],
            [75, 97.6000],
            [100, 97.3500],
            [125, 97.2200],
            [150, 97.2200],
            [175, 97.3100],
            [200, 97.0950],
            [225, 97.0300],
            [250, 97.1650],
        ],
        [
            [25, 98.0900],
            [50, 97.4200],
            [75, 96.3050],
            [100, 95.9500],
            [125, 94.0700],
            [150, 93.7000],
            [175, 93.3000],
            [200, 92.7900],
            [225, 92.9900],
            [250, 92.6250],
        ],
    ],
    [
        [
            [25, 98.5250],
            [50, 98.2650],
            [75, 98.4550],
            [100, 98.6150],
            [125, 98.5600],
            [150, 98.5050],
            [175, 98.3600],
            [200, 98.5750],
            [225, 98.3750],
            [250, 98.6600],
        ],
        [
            [25, 97.3000],
            [50, 95.3350],
            [75, 93.4300],
            [100, 91.9000],
            [125, 91.1000],
            [150, 90.5750],
            [175, 89.9250],
            [200, 90.1350],
            [225, 89.3650],
            [250, 89.5550],
        ],
        [
            [25, 97.9600],
            [50, 97.5600],
            [75, 97.6800],
            [100, 97.2900],
            [125, 97.2300],
            [150, 97.2000],
            [175, 97.3100],
            [200, 97.0700],
            [225, 97.0400],
            [250, 97.1550],
        ],
        [
            [25, 97.8800],
            [50, 97.3700],
            [75, 96.2150],
            [100, 95.8450],
            [125, 94.1300],
            [150, 93.7100],
            [175, 93.2100],
            [200, 92.8650],
            [225, 92.9700],
            [250, 92.6200],
        ],
    ],
];

var markLineOpt = {
    animation: false,
    label: {
        /*normal: {
            formatter: 'y = 0.5 * x + 3',
            textStyle: {
                align: 'right'
            }
        }*/
    },
    lineStyle: {
        normal: {
            type: 'solid'
        }
    },
    /*tooltip: {
        formatter: 'y = 0.5 * x + 3'
    },*/
    data: [[{
        coord: [0, 3],
        symbol: 'none'
    }, {
        coord: [20, 13],
        symbol: 'none'
    }]]
};

option = {
    backgroundColor: 'white',
    toolbox: {
        // y: 'bottom',
        feature: {
            magicType: {
                type: ['stack', 'tiled']
            },
            dataView: {},
            saveAsImage: {
                pixelRatio: 2
            }
        }
    },
    title: [
        {
            text: 'Euclidean Distance',
            textStyle: {
                color: '#333',
                fontStyle: 'normal',
                fontWeight: 'bolder',
                fontFamily: 'Times New Roman',
                fontSize: 14,
            },
            left: '25%',
            bottom: '284',
            textAlign: 'center'
        },
        {
            text: 'Canberra Distance',
            textStyle: {
                color: '#333',
                fontStyle: 'normal',
                fontWeight: 'bolder',
                fontFamily: 'Times New Roman',
                fontSize: 14,
            },
            left: '73%',
            bottom: '284',
            textAlign: 'center'
        },
        {
            text: 'Cosine',
            textStyle: {
                color: '#333',
                fontStyle: 'normal',
                fontWeight: 'bolder',
                fontFamily: 'Times New Roman',
                fontSize: 14,
            },
            left: '25%',
            bottom: '-3',
            textAlign: 'center'
        },
        {
            text: 'Correlation Coefficient',
            textStyle: {
                color: '#333',
                fontStyle: 'normal',
                fontWeight: 'bolder',
                fontFamily: 'Times New Roman',
                fontSize: 14,
            },
            left: '73%',
            bottom: '-3',
            textAlign:'center'
        }
    ],
    grid: [
        {x: '7%', y: '7%', width: '38%', height: '38%'},
        {x2: '7%', y: '7%', width: '38%', height: '38%'},
        {x: '7%', y2: '7%', width: '38%', height: '38%'},
        {x2: '7%', y2: '7%', width: '38%', height: '38%'}
    ],
    tooltip: {
        formatter: 'Group {a}: ({c})'
    },
    xAxis: [
        {gridIndex: 0, min: 25, max: 250},
        {gridIndex: 1, min: 25, max: 250},
        {gridIndex: 2, min: 25, max: 250},
        {gridIndex: 3, min: 25, max: 250}
    ],
    yAxis: [
        {gridIndex: 0, min: 70, max: 100,
        name: 'AUC值（百分比）', nameLocation: 'middle', nameGap: '30'},
        {gridIndex: 1, min: 70, max: 100,
        name: 'AUC值（百分比）', nameLocation: 'middle', nameGap: '30'},
        {gridIndex: 2, min: 70, max: 100,
        name: 'AUC值（百分比）', nameLocation: 'middle', nameGap: '30'},
        {gridIndex: 3, min: 70, max: 100,
        name: 'AUC值（百分比）', nameLocation: 'middle', nameGap: '30'}
    ],
    legend: {
        top: '10',
        data:['facebook', 'email', 'astroph', 'brightkite']
    },
    series: [
        // 欧氏距离
        {
            name: 'facebook',
            type: 'line',
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: dataAll[0][0],
            markLine: markLineOpt
        },
        {
            name: 'email',
            type: 'line',
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: dataAll[0][1],
            markLine: markLineOpt
        },
        {
            name: 'astroph',
            type: 'line',
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: dataAll[0][2],
            markLine: markLineOpt
        },
        {
            name: 'brightkite',
            type: 'line',
            xAxisIndex: 0,
            yAxisIndex: 0,
            data: dataAll[0][3],
            markLine: markLineOpt
        },
        
        // 曼哈顿距离
        {
            name: 'facebook',
            type: 'line',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: dataAll[1][0],
            markLine: markLineOpt
        },
        {
            name: 'email',
            type: 'line',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: dataAll[1][1],
            markLine: markLineOpt
        },
        {
            name: 'astroph',
            type: 'line',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: dataAll[1][2],
            markLine: markLineOpt
        },
        {
            name: 'brightkite',
            type: 'line',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: dataAll[1][3],
            markLine: markLineOpt
        },
        
        // 余弦夹角
        {
            name: 'facebook',
            type: 'line',
            xAxisIndex: 2,
            yAxisIndex: 2,
            data: dataAll[1][0],
            markLine: markLineOpt
        },
        {
            name: 'email',
            type: 'line',
            xAxisIndex: 2,
            yAxisIndex: 2,
            data: dataAll[2][1],
            markLine: markLineOpt
        },
        {
            name: 'astroph',
            type: 'line',
            xAxisIndex: 2,
            yAxisIndex: 2,
            data: dataAll[2][2],
            markLine: markLineOpt
        },
        {
            name: 'brightkite',
            type: 'line',
            xAxisIndex: 2,
            yAxisIndex: 2,
            data: dataAll[2][3],
            markLine: markLineOpt
        },
        
        // 相关系数
        {
            name: 'facebook',
            type: 'line',
            xAxisIndex: 3,
            yAxisIndex: 3,
            data: dataAll[3][0],
            markLine: markLineOpt
        },
        {
            name: 'email',
            type: 'line',
            xAxisIndex: 3,
            yAxisIndex: 3,
            data: dataAll[3][1],
            markLine: markLineOpt
        },
        {
            name: 'astroph',
            type: 'line',
            xAxisIndex: 3,
            yAxisIndex: 3,
            data: dataAll[3][2],
            markLine: markLineOpt
        },
        {
            name: 'brightkite',
            type: 'line',
            xAxisIndex: 3,
            yAxisIndex: 3,
            data: dataAll[3][3],
            markLine: markLineOpt
        },
    ]
};