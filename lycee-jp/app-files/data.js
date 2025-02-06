var APP_DATA = {
  "scenes": [
    {
      "id": "0-tude_bat_d",
      "name": "Étude_bat_D",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.8445875902042133,
        "pitch": 0.20379687929641932,
        "fov": 1.2788523090305497
      },
      "linkHotspots": [
        {
          "yaw": 0.31420265014198456,
          "pitch": -0.025115242689984996,
          "rotation": 0,
          "target": "1-bat_a"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -3.0670273601352243,
          "pitch": 0.11914981172995276,
          "title": "Salle d'étude<br>",
          "text": "Salle d’étude : l’endroit où on apprend surtout à faire semblant de travailler.<br>"
        }
      ]
    },
    {
      "id": "1-bat_a",
      "name": "Bat_A",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7896264300535476,
          "pitch": 0.0684697773975742,
          "rotation": 0,
          "target": "2-bat_e"
        },
        {
          "yaw": -2.330647996986233,
          "pitch": -0.057320320800949176,
          "rotation": 0,
          "target": "0-tude_bat_d"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-bat_e",
      "name": "Bat_E",
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
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6227095479145213,
          "pitch": 0.06307334338062809,
          "rotation": 0,
          "target": "1-bat_a"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.6853976544360307,
          "pitch": 0.16800334826091756,
          "title": "Bâtiment E <br>",
          "text": "Vous vous trouvez actuellement dans le bâtiment Administratif.<br>"
        }
      ]
    }
  ],
  "name": "Lycee JP",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
