var APP_DATA = {
  "scenes": [
    {
      "id": "0-recepcion",
      "name": "RECEPCION",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.3039194972885877,
          "pitch": 0.19652944800954586,
          "rotation": 0,
          "target": "1-zona-de-trabajo"
        },
        {
          "yaw": -2.757075316327045,
          "pitch": 0.4471183560659444,
          "rotation": 0,
          "target": "4-sala-de-reuniones"
        },
        {
          "yaw": -2.6343247922289645,
          "pitch": 0.3966213835693573,
          "rotation": 0,
          "target": "5-sala-de-firma"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.8607392733482726,
          "pitch": 0.41969117500684305,
          "title": "ESCALERA",
          "text": ""
        },
        {
          "yaw": -2.2855257275219447,
          "pitch": 0.4783036075357785,
          "title": "TOILETTE",
          "text": ""
        }
      ]
    },
    {
      "id": "1-zona-de-trabajo",
      "name": "ZONA DE TRABAJO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.862776882397263,
          "pitch": 0.4229478716539248,
          "rotation": 0,
          "target": "2-oficina-1"
        },
        {
          "yaw": -1.2464618195343764,
          "pitch": 0.3857969857909822,
          "rotation": 0,
          "target": "3-oficina-2-y-3"
        },
        {
          "yaw": 1.852417254754486,
          "pitch": 0.4212074393414831,
          "rotation": 0,
          "target": "0-recepcion"
        },
        {
          "yaw": 0.6355626083830082,
          "pitch": 0.2903660813026949,
          "rotation": 0,
          "target": "4-sala-de-reuniones"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.2530745249183255,
          "pitch": 0.27870766117729673,
          "title": "COCINA - PASO - BAÑO",
          "text": ""
        },
        {
          "yaw": -0.2991421601760891,
          "pitch": 0.1093728962400391,
          "title": "ARCHIVO",
          "text": ""
        }
      ]
    },
    {
      "id": "2-oficina-1",
      "name": "OFICINA 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.279217701583822,
          "pitch": 0.49657616758147327,
          "rotation": 0,
          "target": "3-oficina-2-y-3"
        },
        {
          "yaw": -2.9487906181890047,
          "pitch": 0.19228733324123937,
          "rotation": 0,
          "target": "1-zona-de-trabajo"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.02193179729545136,
          "pitch": 0.2355427030485302,
          "title": "OFICINA 1",
          "text": ""
        }
      ]
    },
    {
      "id": "3-oficina-2-y-3",
      "name": "OFICINA 2 Y 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.139961102496523,
          "pitch": 0.05437550395925683,
          "rotation": 0,
          "target": "0-recepcion"
        },
        {
          "yaw": 2.8410539578489438,
          "pitch": 0.225236554081647,
          "rotation": 0,
          "target": "1-zona-de-trabajo"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.8120496099798977,
          "pitch": 0.22817876703875584,
          "title": "OFICINA 2",
          "text": ""
        },
        {
          "yaw": 0.2871733612687688,
          "pitch": 0.2482016950690067,
          "title": "OFICINA 3",
          "text": ""
        },
        {
          "yaw": -2.4477561371918917,
          "pitch": 0.13404446044794227,
          "title": "COCINA",
          "text": ""
        }
      ]
    },
    {
      "id": "4-sala-de-reuniones",
      "name": "SALA DE REUNIONES",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.41710731638371534,
          "pitch": 0.08718692244314674,
          "rotation": 0,
          "target": "0-recepcion"
        },
        {
          "yaw": -0.4417651513719889,
          "pitch": 0.26105826562046985,
          "rotation": 0,
          "target": "5-sala-de-firma"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-sala-de-firma",
      "name": "SALA DE FIRMA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.1121347450215513,
          "pitch": 0.38331334187185995,
          "rotation": 0,
          "target": "4-sala-de-reuniones"
        },
        {
          "yaw": 1.7707053194382087,
          "pitch": 0.2604933093693944,
          "rotation": 0,
          "target": "0-recepcion"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.9482761601188123,
          "pitch": 0.3366167579584136,
          "title": "BAÑO",
          "text": ""
        }
      ]
    }
  ],
  "name": "SALTA II - OFICINAS KOHON",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
