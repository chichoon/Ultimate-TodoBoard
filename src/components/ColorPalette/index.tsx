import styles from './colorPalette.module.scss';

const PALETTE_COLORS = ['#EB9694', '#FAD0C3', '#FEF3BD', '#C1E1C5', '#BCDADC', '#C4DEF6', '#BED3F3', '#D4C4FB'];

interface IProps {
  onColorSet: (color: string) => void;
}

const ColorPalette = ({ onColorSet }: IProps) => {
  return (
    <div className={styles.paletteWrapper}>
      <ul>
        {PALETTE_COLORS.map((color) => (
          <li key={`colors-${color}`} className={styles.colorChip}>
            <button type='button' style={{ backgroundColor: color }} onClick={() => onColorSet(color)}>
              {' '}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ColorPalette;
