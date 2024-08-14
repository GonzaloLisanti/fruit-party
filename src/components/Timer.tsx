import { useEffect, useRef } from "react";
import Countdown, { CountdownApi } from "react-countdown";

interface TimerProps {
  start: boolean;
  setStart: React.Dispatch<React.SetStateAction<boolean>>;
  setSave: React.Dispatch<React.SetStateAction<boolean>>;
}

const Timer: React.FC<TimerProps> = ({ start, setStart, setSave }) => {
  const timerRef = useRef<CountdownApi | null>(null);

  const handleFinish = () => {
    setStart(false); // Detiene el juego cuando el tiempo se acaba
    setSave(true);
  };

  useEffect(() => {
    if (start && timerRef.current) {
      timerRef.current.start();
    }
  }, [start]);

  return (
    <div>
      <h3>
        <Countdown
          date={Date.now() + 59000} // Temporizador de 60 segundos
          renderer={(props) => <span>{!start ? 60 : props.seconds} </span>}
          onComplete={handleFinish}
          autoStart={false}
          ref={(ref) => {
            if (ref) {
              timerRef.current = ref.getApi();
            }
          }}
        />
        Sec
      </h3>
    </div>
  );
};

export default Timer;
