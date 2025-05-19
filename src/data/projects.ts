export interface Project {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: 'electronics' | 'games' | 'robotics' | 'science';
  image: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id: 'flappy-astronaut',
    title: 'Flappy Astronaut Game',
    description: 'Create a space-themed version of the classic Flappy Bird game using the Sense HAT on your Raspberry Pi. Guide your astronaut through obstacles using the joystick!',
    difficulty: 'beginner',
    category: 'games',
    image: '/images/flappy-astronaut.jpg',
    githubUrl: 'https://github.com/pikids/flappy-astronaut'
  },
  {
    id: 'led-traffic-lights',
    title: 'LED Traffic Lights',
    description: 'Build a set of working traffic lights using LEDs and learn about electronics, GPIO pins, and programming sequences.',
    difficulty: 'beginner',
    category: 'electronics',
    image: '/images/traffic-lights.jpg',
    githubUrl: 'https://github.com/pikids/led-traffic-lights'
  },
  {
    id: 'weather-station',
    title: 'Mini Weather Station',
    description: 'Create your own weather monitoring station that measures temperature, humidity, and atmospheric pressure, and logs the data over time.',
    difficulty: 'intermediate',
    category: 'science',
    image: '/images/weather-station.jpg',
    githubUrl: 'https://github.com/pikids/weather-station'
  },
  {
    id: 'pixel-pet',
    title: 'Digital Pixel Pet',
    description: 'Create a virtual pet that lives on your Raspberry Pi and responds to your actions! Feed it, play with it, and watch it grow.',
    difficulty: 'beginner',
    category: 'games',
    image: '/images/pixel-pet.jpg',
    githubUrl: 'https://github.com/pikids/pixel-pet'
  },
  {
    id: 'robot-buggy',
    title: 'Robot Buggy',
    description: 'Build your own robot buggy that can move around and navigate obstacles using motors and sensors!',
    difficulty: 'advanced',
    category: 'robotics',
    image: '/images/robot-buggy.jpg',
    githubUrl: 'https://github.com/pikids/robot-buggy'
  },
  {
    id: 'magic-mirror',
    title: 'Smart Magic Mirror',
    description: 'Create a mirror that displays the time, weather, and other useful information while you get ready!',
    difficulty: 'advanced',
    category: 'electronics',
    image: '/images/magic-mirror.jpg',
    githubUrl: 'https://github.com/pikids/magic-mirror'
  },
  {
    id: 'laser-tripwire',
    title: 'Laser Tripwire Alarm',
    description: 'Create a fun security system using a laser pointer and light sensor that triggers an alarm when the beam is broken!',
    difficulty: 'intermediate',
    category: 'electronics',
    image: '/images/laser-tripwire.jpg',
    githubUrl: 'https://github.com/pikids/laser-tripwire'
  },
  {
    id: 'photo-booth',
    title: 'DIY Photo Booth',
    description: 'Build your own photo booth that takes pictures when a button is pressed and adds fun filters!',
    difficulty: 'intermediate',
    category: 'electronics',
    image: '/images/photo-booth.jpg',
    githubUrl: 'https://github.com/pikids/photo-booth'
  },
  {
    id: 'minecraft-coding',
    title: 'Minecraft Pi Coding Adventures',
    description: 'Learn to code by controlling and creating in the Minecraft world using Python!',
    difficulty: 'beginner',
    category: 'games',
    image: '/images/minecraft-pi.jpg',
    githubUrl: 'https://github.com/pikids/minecraft-coding'
  },
  {
    id: 'plant-monitor',
    title: 'Smart Plant Monitor',
    description: 'Create a system that monitors your plant\'s soil moisture and reminds you when it needs watering!',
    difficulty: 'intermediate',
    category: 'science',
    image: '/images/plant-monitor.jpg',
    githubUrl: 'https://github.com/pikids/plant-monitor'
  }
];
