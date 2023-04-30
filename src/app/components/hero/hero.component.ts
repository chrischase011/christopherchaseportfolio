import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import Typed from 'typed.js';
import { MoveDirection, ClickMode, HoverMode, OutMode, Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  @ViewChild('titleElement', { static: true }) titleElementRef!: ElementRef;


  titleText: any

  constructor() {

    this.titleText = [
      "I'm a Software Developer",
      "I'm a Web Developer",
      "I'm a Programmer",
      "I love programming!!!",
      "I'll make a quality software for your business."
    ]

  }

  ngAfterViewInit() {
    console.log(this.titleElementRef.nativeElement.textContent)

    // let titleText = this.titleElementRef.nativeElement

    // const intervalId = setInterval(() => {
    //   const randomNum: number = Math.floor(Math.random() * 3)
    //   titleText.textContent = this.titleText[randomNum]
    // }, 600);

    const typed = new Typed('#titleElement1', {
      strings: this.titleText,
      typeSpeed: 30,
      cursorChar: '',
      shuffle: true,
      loop: true
    });

    const typed2 = new Typed('#titleElement2', {
      strings: this.titleText,
      typeSpeed: 30,
      cursorChar: '',
      shuffle: true,
      loop: true
    });

  }
  ngOnInit(): void {
   
  }

  id = "tsparticles";

    /* Starting from 1.19.0 you can use a remote url (AJAX request) to a JSON with the configuration */
    particlesUrl = "http://foo.bar/particles.json";

    /* or the classic JavaScript object */
    particlesOptions = {
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: ClickMode.push,
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 150,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#ffffff",
            },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            collisions: {
                enable: true,
            },
            move: {
                direction: MoveDirection.none,
                enable: true,
                outModes: {
                    default: OutMode.bounce,
                },
                random: false,
                speed: 3,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 80,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: true,
    };

    particlesLoaded(container: Container): void {
        console.log(container);
    }

    async particlesInit(engine: Engine): Promise<void> {
        console.log(engine);

        // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }

}
