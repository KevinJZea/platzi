import {
  Children,
  type FC,
  isValidElement,
  type PropsWithChildren,
  type ReactElement,
  useState,
} from 'react';
import classes from './CompoundComponents.module.css';

interface TabsProps extends PropsWithChildren {}

const Tabs: FC<TabsProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  const TabElements = Children.toArray(children).filter(
    (child): child is ReactElement => isValidElement(child)
  );

  return (
    <div className={classes.Tabs}>
      <ul>
        {TabElements.map((child, index) => (
          <li
            key={index}
            className={`${index === activeIndex ? classes.TabActive : ''}`}
            onClick={() => handleTabClick(index)}
          >
            {child.props.label}
          </li>
        ))}
      </ul>

      <p className={classes.TabContent}>{TabElements[activeIndex]}</p>
    </div>
  );
};

export default Tabs;
