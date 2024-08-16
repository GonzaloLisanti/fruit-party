import { useEffect, useRef, useState } from "react";
import Countdown, { CountdownApi } from "react-countdown";
import { useTranslation } from "react-i18next";
interface TimerProps {
  start: boolean;
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
  setSave: React.Dispatch<React.SetStateAction<boolean>>;
}

const Timer: React.FC<TimerProps> = ({ start, setStart, setSave }) => {
  const timerRef = useRef<CountdownApi | null>(null);
  const [finished, setFinished] = useState(false);
  const { t } = useTranslation();

  const handleFinish = () => {
    setFinished(true);
    setStart(false); // Detiene el juego cuando el tiempo se acaba
    setSave(true);
  };

  useEffect(() => {
    if (start && timerRef.current) {
      setFinished(false);
      timerRef.current.start();
    }
  }, [start]);

  return (
    <div>
      <h3>
        <Countdown
          date={Date.now() + 59000} // Temporizador de 60 segundos
          renderer={(props) => (
            <span>{!finished && !start ? 60 : props.seconds + 1} </span>
          )}
          onComplete={handleFinish}
          autoStart={false}
          ref={(ref) => {
            if (ref) {
              timerRef.current = ref.getApi();
            }
          }}
        />
        {t("Timer.seconds")}
      </h3>
    </div>
  );
};

export default Timer;
