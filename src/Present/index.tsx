import reactLogo from '../assets/react.svg';
import './present.css';

export type ITheme = 'light' | 'dark';
export type ISize = 'big' | 'small';

interface Props {
  theme: ITheme, // 'dark' or '' for light theme by default
  size:ISize
}


const Present = (props:Props = { theme:'light', size:'small' }) => {
  return (
    <div className={props.theme}>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p className={props.size}>Vite + React</p>
    </div>
  );
};

export default Present;
