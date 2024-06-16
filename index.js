var svgContainer = document.getElementById("cta");
var animItem = bodymovin.loadAnimation({
    wrapper: svgContainer,
    animType: "svg",
    loop: true,
    path: "images\\cta.json",
});

var svgContainer2 = document.getElementById("online");
var animItem2 = bodymovin.loadAnimation({
    wrapper: svgContainer2,
    animType: "svg",
    loop: true,
    path: "images\\online.json",
});

/*var svgContainer3 = document.getElementById("w-secno");
var animItem3 = bodymovin.loadAnimation({
    wrapper: svgContainer3,
    animType: "svg",
    loop: false,
    path: "images\\work-starter.json",
});*/

var svgContainer4 = document.getElementById("s-secno");
var animItem4 = bodymovin.loadAnimation({
    wrapper: svgContainer4,
    animType: "svg",
    loop: false,
    path: "images\\service-starter.json",
});

var svgContainer5 = document.getElementById("type");
var animItem5 = bodymovin.loadAnimation({
    wrapper: svgContainer5,
    animType: "svg",
    loop: true,
    path: "images\\typing.json",
});

var svgContainer6 = document.getElementById("anim");
var animItem6 = bodymovin.loadAnimation({
    wrapper: svgContainer6,
    animType: "svg",
    loop: false,
    path: "images\\anim.json",
});

particlesJS("particles-js",
    {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 1500
                }
            },
            "color": {
                "value": "#070F2B"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#070F2B"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.42536431666010227,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 100,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 80,
                "color": "#070F2B",
                "opacity": 0.23990403838464622,
                "width": 0
            },
            "move": {
                "enable": true,
                "speed": 3,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 9294.998030720753
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "repulse"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 150,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": false
    }
);




particlesJS("wparticles-js", {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#dcdcdc"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 1,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0,
                "sync": false
            }
        },
        "size": {
            "value": 2,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 4,
                "size_min": 0.3,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 600
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 250,
                "size": 0,
                "duration": 2,
                "opacity": 0,
                "speed": 3
            },
            "repulse": {
                "distance": 400,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});
