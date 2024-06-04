import './App.css'
import SliderDesign from './components/Slider';
import {
  FigmaLogoIcon,
  FramerLogoIcon,
  SketchLogoIcon,
  TwitterLogoIcon,
  GitHubLogoIcon,
  VercelLogoIcon,
  NotionLogoIcon,
  DiscordLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

const icons = [
  { key:"figma", icon: <FigmaLogoIcon /> },
  { key:"twitter", icon: <TwitterLogoIcon /> },
  { key:"github", icon: <GitHubLogoIcon /> },
  { key:"instagram", icon: <InstagramLogoIcon /> },
  { key:"linkedin", icon: <LinkedInLogoIcon /> },
  { key:"discord", icon: <DiscordLogoIcon /> },
  { key:"sketch", icon: <SketchLogoIcon /> },
  { key:"notion", icon: <NotionLogoIcon /> },
  { key:"vercel", icon: <VercelLogoIcon /> },
  { key:"framer", icon: <FramerLogoIcon /> },
];


function App() {


  return (
    <>
    <div className='bg-black'>
      <SliderDesign icons={icons} styles={{"width": "50%"}} />
    </div>
    </>
  );
}

export default App
