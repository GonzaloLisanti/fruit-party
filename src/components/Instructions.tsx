import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Instructions: React.FC = () => {
  const { t } = useTranslation();
  const scoringConditions: string[] = t('Instructions.scoring_conditions', { returnObjects: true }) as string[];

  return (
    <div className="d-flex justify-content-center mb-3">
      <OverlayTrigger
        trigger="click"
        rootClose
        placement="bottom"
        overlay={
          <Tooltip id="game-instructions-tooltip">
            <p>{t('Instructions.tooltip_game_instructions')}</p>
            <p>{t('Instructions.tooltip_game_progress')}</p>
            <p>{t('Instructions.tooltip_game_save')}</p>
          </Tooltip>
        }
      >
        <button className="btn btn-info me-2">{t('Instructions.how_to_play')}</button>
      </OverlayTrigger>
      
      <OverlayTrigger
        trigger="click"
        rootClose
        placement="bottom"
        overlay={
          <Tooltip id="scoring-tooltip">
            <p>{t('Instructions.tooltip_scoring')}</p>
            <ul style={{ 
              columnCount: 1, 
              columnGap: '20px',
              paddingLeft: '20px',
              listStyleType: 'disc'
            }}>
              {scoringConditions.map((condition, index) => (
                <li key={index} style={{ breakInside: 'avoid' }}>{condition}</li>
              ))}
            </ul>
          </Tooltip>
        }
      >
        <button className="btn btn-info">{t('Instructions.scoring_system')}</button>
      </OverlayTrigger>
    </div>
  );
};

export default Instructions;
