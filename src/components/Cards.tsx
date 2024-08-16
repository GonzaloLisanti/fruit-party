import { useState, useEffect } from "react";
import { getFruits } from "../utils/GetFruits";
import confetti from "canvas-confetti";
import { useTranslation } from "react-i18next";
interface CardsProps {
  start: boolean;
  scoreRef: React.MutableRefObject<number>; // Recibe scoreRef como prop
}

const Cards: React.FC<CardsProps> = ({ start, scoreRef }) => {
  const [size, setSize] = useState(3);
  const [clicks, setClicks] = useState(0);
  const [fruits, setFruits] = useState(getFruits(size));
  const [flipped, setFlipped] = useState<boolean[]>(
    Array(getFruits(size).length).fill(false)
  );
  const [selected, setSelected] = useState<number[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    setFruits(getFruits(size));
    setFlipped(Array(getFruits(size).length).fill(false));
    setSelected([]);
  }, [size]);

  const handleClick = (index: number) => {
    if (!start) return;

    setClicks(clicks + 1);
    if (flipped[index] || selected.length === 2) return;

    const newSelected = [...selected, index];
    setSelected(newSelected);
    setFlipped((prevFlipped) => {
      const newFlipped = [...prevFlipped];
      newFlipped[index] = true;
      return newFlipped;
    });

    if (newSelected.length === 2) {
      const [firstIndex, secondIndex] = newSelected;
      if (fruits[firstIndex] === fruits[secondIndex]) {
        setSelected([]);
      } else {
        setTimeout(() => {
          setFlipped((prevFlipped) => {
            const newFlipped = [...prevFlipped];
            newFlipped[firstIndex] = false;
            newFlipped[secondIndex] = false;
            return newFlipped;
          });
          setSelected([]);
        }, 500);
      }
    }
  };

  useEffect(() => {
    if (flipped.every((isFlipped) => isFlipped)) {
      calculateScore();
      setTimeout(() => {
        setSize(size + 2);
      }, 500);
      confetti({
        particleCount: 300,
        startVelocity: 30,
        spread: 300,
        gravity: 1.5,
        origin: { y: 0 },
        scalar: 1.5,
        zIndex: 100,
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flipped]);

  const calculateScore = () => {
    const passLevel = size * 10;
    let total = scoreRef.current;
    const cards = size * 2;
    if (clicks === cards) {
      total = total + cards * 2 + passLevel;
    } else if (clicks > cards && clicks < cards + 5) {
      total = total + cards + passLevel;
    } else if (clicks > cards + 5 && clicks < cards + 10) {
      total = total + cards / 2 + passLevel;
    } else {
      total = total + Math.round(cards / 3) + passLevel;
    }
    setClicks(0);
    scoreRef.current = total; // Actualiza el scoreRef actual
  };

  return (
    <>
      <p className="h4 mb-4">{t('Cards.score')} {scoreRef.current}</p>
      <div className="d-flex flex-wrap justify-content-center align-items-center">
        {fruits.map((item, index) => (
          <button
            key={index}
            className="p-2 card bg-primary"
            style={{ width: "6rem", margin: "5px" }}
            onClick={() => handleClick(index)}
            disabled={!start}
          >
            <div>
              <img
                src={flipped[index] ? item : "/Question.jpeg"}
                alt=""
                className="card-img-top"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </button>
        ))}
      </div>
    </>
  );
};

export default Cards;
