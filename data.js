var APP_DATA = {
  "scenes": [
    {
      "id": "0-fachada",
      "name": "fachada",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.07430442065946607,
        "pitch": -0.8343250833960596,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": 0.013169657874538387,
          "pitch": -0.07862585754448759,
          "rotation": 0,
          "target": "1-escaleras-exteriores"
        },
        {
          "yaw": 0.6979582477388497,
          "pitch": -0.07634522771660812,
          "rotation": 5.497787143782138,
          "target": "11-portn-cocheras-descubiertas"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-escaleras-exteriores",
      "name": "escaleras exteriores",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.26892318066444076,
        "pitch": 0.017739530814122162,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -0.07527840154038756,
          "pitch": -0.1237493238441374,
          "rotation": 0,
          "target": "2-hall-de-acceso"
        },
        {
          "yaw": -2.9228355599472664,
          "pitch": 0.17288207088267527,
          "rotation": 0,
          "target": "0-fachada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-hall-de-acceso",
      "name": "hall de acceso",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.02764998568955157,
        "pitch": 0.059590507444864826,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -0.3021529573936643,
          "pitch": 0.05638596493237813,
          "rotation": 0,
          "target": "3-ascensor--cocheras-descubiertas"
        },
        {
          "yaw": 3.064035193090038,
          "pitch": 0.15326383625659545,
          "rotation": 0,
          "target": "1-escaleras-exteriores"
        },
        {
          "yaw": 1.591614877553952,
          "pitch": 0.09042173799715059,
          "rotation": 0,
          "target": "11-portn-cocheras-descubiertas"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-ascensor--cocheras-descubiertas",
      "name": "ascensor / cocheras descubiertas",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7525181200764752,
          "pitch": 0.03631943156418771,
          "rotation": 0,
          "target": "4-palier"
        },
        {
          "yaw": -0.23700487816142513,
          "pitch": 0.01145277996937999,
          "rotation": 0,
          "target": "12-ingreso-al-edificio-por-cochera"
        },
        {
          "yaw": 2.624609095146604,
          "pitch": 0.11390796838823647,
          "rotation": 0,
          "target": "1-escaleras-exteriores"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-palier",
      "name": "palier",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.6455657201296674,
        "pitch": -0.008329833871943748,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": 1.0754303951133615,
          "pitch": 0.09380567991733102,
          "rotation": 10.210176124166829,
          "target": "3-ascensor--cocheras-descubiertas"
        },
        {
          "yaw": -1.8266947453817437,
          "pitch": -0.07252354160322838,
          "rotation": 0,
          "target": "5-ingreso-al-dpto"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-ingreso-al-dpto",
      "name": "Ingreso al dpto",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.0080166904375432,
        "pitch": 0.08145702924852927,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": 0.04073565248201483,
          "pitch": 0.11712075520644838,
          "rotation": 0,
          "target": "7-living-comedor"
        },
        {
          "yaw": 1.551055044661302,
          "pitch": 0.04009034395248534,
          "rotation": 0.7853981633974483,
          "target": "6-cocina"
        },
        {
          "yaw": 0.5691738319509838,
          "pitch": 0.077536041482416,
          "rotation": 0,
          "target": "8-balcn-con-parrilla"
        },
        {
          "yaw": -1.9547395434590946,
          "pitch": 0.005527507160021372,
          "rotation": 0,
          "target": "4-palier"
        },
        {
          "yaw": -0.2622129601068579,
          "pitch": 0.045383614426953045,
          "rotation": 0,
          "target": "14-acceso-a-bao--cuarto"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-cocina",
      "name": "cocina",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.16562818411783553,
        "pitch": -0.48403743474226424,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -2.9182267162615023,
          "pitch": 0.10454294393818486,
          "rotation": 0,
          "target": "7-living-comedor"
        },
        {
          "yaw": 2.1179063782645366,
          "pitch": 0.029666724279806544,
          "rotation": 0,
          "target": "4-palier"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-living-comedor",
      "name": "living comedor",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0208948034253087,
          "pitch": 0.038011598768100896,
          "rotation": 0,
          "target": "6-cocina"
        },
        {
          "yaw": -2.206334480074105,
          "pitch": 0.09807101666782003,
          "rotation": 0,
          "target": "5-ingreso-al-dpto"
        },
        {
          "yaw": 1.741646752782957,
          "pitch": 0.18937129479722614,
          "rotation": 0,
          "target": "8-balcn-con-parrilla"
        },
        {
          "yaw": 0.013889772786978227,
          "pitch": 0.17983867333663817,
          "rotation": 0,
          "target": "14-acceso-a-bao--cuarto"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-balcn-con-parrilla",
      "name": "balcón con parrilla",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.2689231806644301,
        "pitch": 0.010136874750923397,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": 2.900233036366071,
          "pitch": 0.15366668351103918,
          "rotation": 0,
          "target": "7-living-comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-habitacin",
      "name": "habitación",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.11985948946442626,
        "pitch": -0.032195433792317374,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -2.283696899045113,
          "pitch": 0.1400797179422888,
          "rotation": 5.497787143782138,
          "target": "14-acceso-a-bao--cuarto"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-bao",
      "name": "baño",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.7366121763396167,
          "pitch": 0.11309708913399419,
          "rotation": 0.7853981633974483,
          "target": "14-acceso-a-bao--cuarto"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-portn-cocheras-descubiertas",
      "name": "portón cocheras descubiertas",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.9991119493559228,
        "pitch": -0.045615936379174826,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -0.45583477675379136,
          "pitch": -0.06610895316083543,
          "rotation": 0,
          "target": "13-cocheras-descubiertas"
        },
        {
          "yaw": -2.9582027343271555,
          "pitch": 0.10236843844097265,
          "rotation": 0.7853981633974483,
          "target": "0-fachada"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-ingreso-al-edificio-por-cochera",
      "name": "Ingreso al edificio (por cochera)",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.02512700972850368,
        "pitch": 0.21268063506945367,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -3.0477297429295707,
          "pitch": 0.17098917149551518,
          "rotation": 0,
          "target": "3-ascensor--cocheras-descubiertas"
        },
        {
          "yaw": 1.6772646387878538,
          "pitch": 0.0589573897794331,
          "rotation": 1.5707963267948966,
          "target": "11-portn-cocheras-descubiertas"
        },
        {
          "yaw": 0.25743059784771205,
          "pitch": 0.06466896442977799,
          "rotation": 0,
          "target": "13-cocheras-descubiertas"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-cocheras-descubiertas",
      "name": "Cocheras descubiertas",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.06913965493007268,
        "pitch": 0.07803504537976558,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": 2.5844248537016714,
          "pitch": 0.06247375900526819,
          "rotation": 0,
          "target": "11-portn-cocheras-descubiertas"
        },
        {
          "yaw": -2.737916238057119,
          "pitch": 0.04393458952765705,
          "rotation": 0,
          "target": "12-ingreso-al-edificio-por-cochera"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-acceso-a-bao--cuarto",
      "name": "acceso a baño / cuarto",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.8317028170217853,
        "pitch": 0.11657405963567058,
        "fov": 1.2752188746020257
      },
      "linkHotspots": [
        {
          "yaw": -3.0588632969844696,
          "pitch": 0.200462978352423,
          "rotation": 0,
          "target": "7-living-comedor"
        },
        {
          "yaw": 2.627975650027837,
          "pitch": 0.10648153165784358,
          "rotation": 0,
          "target": "8-balcn-con-parrilla"
        },
        {
          "yaw": -0.6763728306297399,
          "pitch": -0.04513595821635796,
          "rotation": 0,
          "target": "10-bao"
        },
        {
          "yaw": -0.5547866213852934,
          "pitch": 0.19674242480222226,
          "rotation": 1.5707963267948966,
          "target": "9-habitacin"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Fiorenza Tercer piso frente- 2 ambientes",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
